import { useState, useCallback } from '@lynx-js/react'

export function ConnectionsScreen() {
  const [connectionStatus, setConnectionStatus] = useState({
    mainServer: 'disconnected',
    robotServer: 'disconnected',
    database: 'disconnected',
    camera: 'disconnected'
  })

  const [serverConfig, setServerConfig] = useState({
    mainServer: {
      url: '192.168.1.100:8080',
      status: 'disconnected',
      lastPing: null
    },
    robotServer: {
      url: '192.168.1.101:3000',
      status: 'disconnected',
      lastPing: null
    },
    database: {
      url: '192.168.1.102:5432',
      status: 'disconnected',
      lastPing: null
    },
    camera: {
      url: '192.168.1.103:8081',
      status: 'disconnected',
      lastPing: null
    }
  })

  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = useCallback((serverType) => {
    'background only'
    setIsConnecting(true)
    console.log(`Conectando a ${serverType}...`)
    
    // Simular conexión
    setTimeout(() => {
      setConnectionStatus(prev => ({
        ...prev,
        [serverType]: 'connected'
      }))
      setServerConfig(prev => ({
        ...prev,
        [serverType]: {
          ...prev[serverType],
          status: 'connected',
          lastPing: new Date().toLocaleTimeString()
        }
      }))
      setIsConnecting(false)
      console.log(`${serverType} conectado exitosamente`)
    }, 2000)
  }, [])

  const handleDisconnect = useCallback((serverType) => {
    'background only'
    console.log(`Desconectando de ${serverType}...`)
    
    setConnectionStatus(prev => ({
      ...prev,
      [serverType]: 'disconnected'
    }))
    setServerConfig(prev => ({
      ...prev,
      [serverType]: {
        ...prev[serverType],
        status: 'disconnected',
        lastPing: null
      }
    }))
    console.log(`${serverType} desconectado`)
  }, [])

  const handleTestConnection = useCallback((serverType) => {
    'background only'
    console.log(`Probando conexión a ${serverType}...`)
    
    // Simular test de conexión
    setTimeout(() => {
      const isOnline = Math.random() > 0.3 // 70% de probabilidad de éxito
      if (isOnline) {
        console.log(`${serverType} está disponible`)
      } else {
        console.log(`${serverType} no está disponible`)
      }
    }, 1000)
  }, [])

  const ConnectionCard = ({ title, serverType, config, status }) => (
    <view className={`connection-card ${status}`}>
      <view className="connection-header">
        <view className="connection-icon">
          {status === 'connected' ? '🟢' : status === 'connecting' ? '🟡' : '🔴'}
        </view>
        <view className="connection-info">
          <text className="connection-title">{title}</text>
          <text className="connection-url">{config.url}</text>
          {config.lastPing && (
            <text className="connection-ping">Último ping: {config.lastPing}</text>
          )}
        </view>
      </view>
      
      <view className="connection-actions">
        {status === 'connected' ? (
          <view className="action-button disconnect" bindtap={() => handleDisconnect(serverType)}>
            <text className="action-text">Desconectar</text>
          </view>
        ) : (
          <view className="action-button connect" bindtap={() => handleConnect(serverType)}>
            <text className="action-text">
              {isConnecting ? 'Conectando...' : 'Conectar'}
            </text>
          </view>
        )}
        <view className="action-button test" bindtap={() => handleTestConnection(serverType)}>
          <text className="action-text">Probar</text>
        </view>
      </view>
    </view>
  )

  const StatusIndicator = ({ label, value, icon }) => (
    <view className="status-indicator">
      <view className="status-icon">{icon}</view>
      <view className="status-content">
        <text className="status-label">{label}</text>
        <text className="status-value">{value}</text>
      </view>
    </view>
  )

  const getOverallStatus = () => {
    const connectedCount = Object.values(connectionStatus).filter(status => status === 'connected').length
    const totalCount = Object.keys(connectionStatus).length
    
    if (connectedCount === totalCount) return 'Completamente Conectado'
    if (connectedCount > 0) return 'Parcialmente Conectado'
    return 'Desconectado'
  }

  return (
    <view className="screen">
      <view className="connections-content">
        <text className="connections-title">Conexiones del Robot</text>
        <text className="connections-subtitle">Configuración de Servidores</text>

        {/* Overall Status */}
        <view className="overall-status">
          <text className="status-title">Estado General</text>
          <view className="status-grid">
            <StatusIndicator 
              label="Estado"
              value={getOverallStatus()}
              icon="📡"
            />
            <StatusIndicator 
              label="Servidores Activos"
              value={`${Object.values(connectionStatus).filter(s => s === 'connected').length}/${Object.keys(connectionStatus).length}`}
              icon="🖥️"
            />
          </view>
        </view>

        {/* Server Connections */}
        <view className="connections-section">
          <text className="section-title">Servidores</text>
          
          <view className="connections-grid">
            <ConnectionCard 
              title="Servidor Principal"
              serverType="mainServer"
              config={serverConfig.mainServer}
              status={connectionStatus.mainServer}
            />
            
            <ConnectionCard 
              title="Servidor del Robot"
              serverType="robotServer"
              config={serverConfig.robotServer}
              status={connectionStatus.robotServer}
            />
            
            <ConnectionCard 
              title="Base de Datos"
              serverType="database"
              config={serverConfig.database}
              status={connectionStatus.database}
            />
            
            <ConnectionCard 
              title="Cámara"
              serverType="camera"
              config={serverConfig.camera}
              status={connectionStatus.camera}
            />
          </view>
        </view>

        {/* Connection Log */}
        <view className="connections-section">
          <text className="section-title">Registro de Conexiones</text>
          <view className="connection-log">
            <text className="log-entry">🟢 Servidor Principal conectado - 14:30:25</text>
            <text className="log-entry">🔴 Servidor del Robot desconectado - 14:29:18</text>
            <text className="log-entry">🟡 Intentando conectar a Base de Datos - 14:28:45</text>
            <text className="log-entry">🟢 Cámara conectada - 14:27:32</text>
            <text className="log-entry">🔴 Servidor Principal desconectado - 14:26:15</text>
          </view>
        </view>

        {/* Quick Actions */}
        <view className="connections-section">
          <text className="section-title">Acciones Rápidas</text>
          <view className="quick-actions">
            <view className="quick-action" bindtap={() => {
              Object.keys(connectionStatus).forEach(server => {
                if (connectionStatus[server] === 'disconnected') {
                  handleConnect(server)
                }
              })
            }}>
              <view className="action-icon">🔗</view>
              <text className="action-label">Conectar Todo</text>
            </view>
            
            <view className="quick-action" bindtap={() => {
              Object.keys(connectionStatus).forEach(server => {
                if (connectionStatus[server] === 'connected') {
                  handleDisconnect(server)
                }
              })
            }}>
              <view className="action-icon">🔌</view>
              <text className="action-label">Desconectar Todo</text>
            </view>
            
            <view className="quick-action" bindtap={() => {
              Object.keys(connectionStatus).forEach(server => {
                handleTestConnection(server)
              })
            }}>
              <view className="action-icon">🔍</view>
              <text className="action-label">Probar Todo</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  )
} 