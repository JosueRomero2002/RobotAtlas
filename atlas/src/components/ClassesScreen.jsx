import { useState, useCallback } from '@lynx-js/react'

export function ClassesScreen() {
  const [selectedClass, setSelectedClass] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const [classes] = useState([
    {
      id: 1,
      title: 'Introducción a la Robótica',
      duration: '45 min',
      level: 'Básico',
      subject: 'Tecnología',
      description: 'Conceptos fundamentales de robótica y automatización',
      schedule: 'Lunes 9:00 AM',
      status: 'scheduled',
      robotActions: [
        'Demostración de movimientos básicos',
        'Explicación de sensores',
        'Interacción con estudiantes'
      ]
    },
    {
      id: 2,
      title: 'Programación de Movimientos',
      duration: '60 min',
      level: 'Intermedio',
      subject: 'Programación',
      description: 'Aprende a programar movimientos complejos del robot',
      schedule: 'Martes 10:30 AM',
      status: 'active',
      robotActions: [
        'Ejecución de secuencias programadas',
        'Demostración de algoritmos',
        'Práctica con estudiantes'
      ]
    },
    {
      id: 3,
      title: 'Inteligencia Artificial Básica',
      duration: '90 min',
      level: 'Avanzado',
      subject: 'IA',
      description: 'Introducción a conceptos de IA y machine learning',
      schedule: 'Miércoles 2:00 PM',
      status: 'scheduled',
      robotActions: [
        'Demostración de reconocimiento de voz',
        'Interacción conversacional',
        'Ejemplos de aprendizaje'
      ]
    },
    {
      id: 4,
      title: 'Interacción Humano-Robot',
      duration: '75 min',
      level: 'Intermedio',
      subject: 'Interacción',
      description: 'Cómo los robots interactúan con humanos',
      schedule: 'Jueves 11:00 AM',
      status: 'completed',
      robotActions: [
        'Demostración de gestos',
        'Reconocimiento facial',
        'Comunicación verbal'
      ]
    },
    {
      id: 5,
      title: 'Sensores y Percepción',
      duration: '50 min',
      level: 'Básico',
      subject: 'Electrónica',
      description: 'Cómo los robots perciben su entorno',
      schedule: 'Viernes 9:30 AM',
      status: 'scheduled',
      robotActions: [
        'Demostración de sensores',
        'Lectura de datos en tiempo real',
        'Análisis de información'
      ]
    }
  ])

  const handleStartClass = useCallback((classId) => {
    'background only'
    setIsPlaying(true)
    setSelectedClass(classId)
    console.log(`Iniciando clase ${classId}`)
    
    // Simular duración de la clase
    setTimeout(() => {
      setIsPlaying(false)
      console.log(`Clase ${classId} completada`)
    }, 5000) // 5 segundos para demo
  }, [])

  const handleStopClass = useCallback(() => {
    'background only'
    setIsPlaying(false)
    setSelectedClass(null)
    console.log('Clase detenida')
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'green'
      case 'scheduled': return 'blue'
      case 'completed': return 'gray'
      default: return 'gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return '▶️'
      case 'scheduled': return '📅'
      case 'completed': return '✅'
      default: return '⏸️'
    }
  }

  const ClassCard = ({ classItem }) => (
    <view className={`class-card ${classItem.status}`}>
      <view className="class-header">
        <view className="class-status">
          <view className={`status-dot ${getStatusColor(classItem.status)}`} />
          <text className="class-title">{classItem.title}</text>
        </view>
        <view className="class-meta">
          <text className="class-duration">{classItem.duration}</text>
          <text className="class-level">{classItem.level}</text>
        </view>
      </view>
      
      <view className="class-content">
        <text className="class-description">{classItem.description}</text>
        <text className="class-subject">Materia: {classItem.subject}</text>
        <text className="class-schedule">Horario: {classItem.schedule}</text>
      </view>
      
      <view className="class-actions">
        {classItem.status === 'active' ? (
          <view className="action-button stop" bindtap={handleStopClass}>
            <text className="action-text">⏹️ Detener</text>
          </view>
        ) : (
          <view className="action-button start" bindtap={() => handleStartClass(classItem.id)}>
            <text className="action-text">▶️ Iniciar</text>
          </view>
        )}
        <view className="action-button details" bindtap={() => setSelectedClass(classItem.id)}>
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
          <text className="meta-item">⏱️ {classItem.duration}</text>
          <text className="meta-item">📚 {classItem.level}</text>
          <text className="meta-item">🎯 {classItem.subject}</text>
        </view>
      </view>
      
      <view className="details-content">
        <text className="details-description">{classItem.description}</text>
        
        <view className="robot-actions">
          <text className="actions-title">Acciones del Robot:</text>
          {classItem.robotActions.map((action, index) => (
            <text key={index} className="action-item">• {action}</text>
          ))}
        </view>
        
        <view className="class-progress">
          <text className="progress-title">Progreso de la Clase</text>
          <view className="progress-bar">
            <view className="progress-fill" style={{ width: '65%' }} />
          </view>
          <text className="progress-text">65% completado</text>
        </view>
      </view>
      
      <view className="details-actions">
        <view className="action-button primary" bindtap={() => handleStartClass(classItem.id)}>
          <text className="action-text">🎓 Iniciar Clase</text>
        </view>
        <view className="action-button secondary" bindtap={() => setSelectedClass(null)}>
          <text className="action-text">← Volver</text>
        </view>
      </view>
    </view>
  )

  return (
    <view className="screen">
      <view className="classes-content">
        <text className="classes-title">Clases Programadas</text>
        <text className="classes-subtitle">Sesiones Educativas del Robot Inmoov</text>

        {isPlaying && (
          <view className="active-class-banner">
            <view className="banner-icon">🎓</view>
            <view className="banner-content">
              <text className="banner-title">Clase en Progreso</text>
              <text className="banner-subtitle">El robot está impartiendo una clase</text>
            </view>
            <view className="banner-action" bindtap={handleStopClass}>
              <text className="banner-button">⏹️ Detener</text>
            </view>
          </view>
        )}

        {selectedClass ? (
          <ClassDetails classItem={classes.find(c => c.id === selectedClass)} />
        ) : (
          <view className="classes-grid">
            {classes.map(classItem => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </view>
        )}

        <view className="classes-stats">
          <view className="stat-item">
            <text className="stat-number">{classes.length}</text>
            <text className="stat-label">Clases Totales</text>
          </view>
          <view className="stat-item">
            <text className="stat-number">{classes.filter(c => c.status === 'active').length}</text>
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