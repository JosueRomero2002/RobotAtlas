import { useState, useCallback, useEffect } from '@lynx-js/react'
import robotAPI from '../services/RobotAPI'
import { ClassProgressBar } from './ClassProgressBar.jsx'

export function ClassesScreen() {
  const [selectedClass, setSelectedClass] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [classProgress, setClassProgress] = useState(null)

  // Load classes from robot API
  useEffect(() => {
    'background only'
    const loadClassesFromAPI = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const connected = await robotAPI.testConnection()
        setIsConnected(connected.success)
        
        if (connected.success) {
          const result = await robotAPI.getAvailableClasses()
          if (result.success && result.data.classes) {
            setClasses(result.data.classes)
          } else {
            setError('No se pudieron cargar las clases')
          }
        } else {
          setError('No se pudo conectar con el robot')
        }
      } catch (error) {
        console.error('Failed to load classes from robot:', error)
        setError('Error al cargar las clases')
        setIsConnected(false)
      } finally {
        setLoading(false)
      }
    }
    
    loadClassesFromAPI()
    
    // Refresh classes every 30 seconds
    const interval = setInterval(loadClassesFromAPI, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleStartClass = useCallback(async (className) => {
    'background only'
    if (!isConnected) {
      console.log('Robot not connected')
      return
    }
    
    try {
      setIsPlaying(true)
      setSelectedClass(className)
      console.log(`Iniciando clase ${className}`)
      
      const result = await robotAPI.startClass(className)
      if (result.success) {
        console.log(`Clase ${className} iniciada exitosamente`)
        // The class will run its programmed movements automatically
      } else {
        console.error('Failed to start class:', result.error)
        setIsPlaying(false)
        setSelectedClass(null)
      }
    } catch (error) {
      console.error('Error starting class:', error)
      setIsPlaying(false)
      setSelectedClass(null)
    }
  }, [isConnected])

  const handleStopClass = useCallback(async () => {
    'background only'
    if (!isConnected) {
      console.log('Robot not connected')
      return
    }
    
    try {
      const result = await robotAPI.stopClass()
      if (result.success) {
        setIsPlaying(false)
        setSelectedClass(null)
        console.log('Clase detenida exitosamente')
      } else {
        console.error('Failed to stop class:', result.error)
      }
    } catch (error) {
      console.error('Error stopping class:', error)
    }
  }, [isConnected])

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'green'
      case 'available': return 'blue'
      case 'completed': return 'gray'
      default: return 'gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return '▶️'
      case 'available': return '📅'
      case 'completed': return '✅'
      default: return '⏸️'
    }
  }

  const ClassCard = ({ classItem }) => (
    <view className={`class-card ${classItem.status || 'available'}`}>
      <view className="class-header">
        <view className="class-status">
          <view className={`status-dot ${getStatusColor(classItem.status || 'available')}`} />
          <text className="class-title">{classItem.title}</text>
        </view>
        <view className="class-meta">
          <text className="class-duration">{classItem.duration || 'N/A'}</text>
          <text className="class-subject">{classItem.subject || 'N/A'}</text>
        </view>
      </view>
      
      <view className="class-content">
        <text className="class-description">{classItem.description || 'Sin descripción disponible'}</text>
        <text className="class-subject">Materia: {classItem.subject || 'N/A'}</text>
        <text className="class-path">Archivo: {classItem.name}</text>
      </view>
      
      <view className="class-actions">
        {classItem.status === 'running' ? (
          <view className="action-button stop" bindtap={handleStopClass}>
            <text className="action-text">⏹️ Detener</text>
          </view>
        ) : (
          <view className="action-button start" bindtap={() => handleStartClass(classItem.name)}>
            <text className="action-text">▶️ Iniciar</text>
          </view>
        )}
        <view className="action-button details" bindtap={() => setSelectedClass(classItem.name)}>
          <text className="action-text">📋 Detalles</text>
        </view>
      </view>
    </view>
  )

  const ClassDetails = ({ classItem }) => (
    <view className="class-details">
      <view className="details-header">
        <text className="details-title">{classItem.title}</text>
        <view className="details-meta">
          <text className="meta-item">⏱️ {classItem.duration || 'N/A'}</text>
          <text className="meta-item">📚 {classItem.subject || 'N/A'}</text>
          <text className="meta-item">📁 {classItem.name}</text>
        </view>
      </view>
      
      <view className="details-content">
        <text className="details-description">{classItem.description || 'Sin descripción disponible'}</text>
        
        <view className="class-info">
          <text className="info-title">Información de la Clase:</text>
          <text className="info-item">• Título: {classItem.title}</text>
          <text className="info-item">• Materia: {classItem.subject || 'N/A'}</text>
          <text className="info-item">• Duración: {classItem.duration || 'N/A'}</text>
          <text className="info-item">• Archivo: {classItem.name}</text>
          <text className="info-item">• Creado: {classItem.created_date || 'N/A'}</text>
        </view>
      </view>
      
      <view className="details-actions">
        <view className="action-button primary" bindtap={() => handleStartClass(classItem.name)}>
          <text className="action-text">🎓 Iniciar Clase</text>
        </view>
        <view className="action-button secondary" bindtap={() => setSelectedClass(null)}>
          <text className="action-text">← Volver</text>
        </view>
      </view>
    </view>
  )

  if (loading) {
    return (
      <view className="screen">
        <view className="loading-container">
          <text className="loading-text">Cargando clases...</text>
        </view>
      </view>
    )
  }

  if (error) {
    return (
      <view className="screen">
        <view className="error-container">
          <text className="error-text">Error: {error}</text>
          <view className="retry-button" bindtap={() => window.location.reload()}>
            <text className="retry-text">🔄 Reintentar</text>
          </view>
        </view>
      </view>
    )
  }

  return (
    <view className="screen">
      <view className="classes-content">
        <text className="classes-title">Clases Disponibles</text>
        <text className="classes-subtitle">Clases Generadas del Robot Inmoov</text>

        {!isConnected && (
          <view className="connection-warning">
            <view className="warning-icon">⚠️</view>
            <view className="warning-content">
              <text className="warning-title">Sin Conexión</text>
              <text className="warning-subtitle">No se puede conectar con el robot</text>
            </view>
          </view>
        )}

        {isPlaying && (
          <view className="active-class-banner">
            <view className="banner-icon">🎓</view>
            <view className="banner-content">
              <text className="banner-title">Clase en Progreso</text>
              <text className="banner-subtitle">El robot está ejecutando: {selectedClass}</text>
            </view>
            <view className="banner-action" bindtap={handleStopClass}>
              <text className="banner-button">⏹️ Detener</text>
            </view>
          </view>
        )}

        {/* Progress Bar Component */}
        <ClassProgressBar 
          className={selectedClass}
          isActive={isPlaying}
          onProgressUpdate={setClassProgress}
        />

        {selectedClass ? (
          <ClassDetails classItem={classes.find(c => c.name === selectedClass)} />
        ) : (
          <view className="classes-grid">
            {classes.length === 0 ? (
              <view className="no-classes">
                <text className="no-classes-text">No hay clases disponibles</text>
                <text className="no-classes-subtitle">Las clases aparecerán aquí cuando sean generadas</text>
              </view>
            ) : (
              classes.map(classItem => (
                <ClassCard key={classItem.name} classItem={classItem} />
              ))
            )}
          </view>
        )}

        <view className="classes-stats">
          <view className="stat-item">
            <text className="stat-number">{classes.length}</text>
            <text className="stat-label">Clases Totales</text>
          </view>
          <view className="stat-item">
            <text className="stat-number">{classes.filter(c => c.status === 'running').length}</text>
            <text className="stat-label">En Progreso</text>
          </view>
          <view className="stat-item">
            <text className="stat-number">{classes.filter(c => c.status === 'completed').length}</text>
            <text className="stat-label">Completadas</text>
          </view>
        </view>
      </view>
    </view>
  )
} 