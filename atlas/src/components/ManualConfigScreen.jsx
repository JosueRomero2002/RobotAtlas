import { useState, useEffect } from '@lynx-js/react'
import robotAPI from '../services/RobotAPI'
import { useConfig } from '../services/useConfig'

export function ManualConfigScreen() {
  const [host, setHost] = useState('')
  const [port, setPort] = useState('')
  const [message, setMessage] = useState('')
  
  // Estados para debug de botones
  const [examplePressed, setExamplePressed] = useState(false)
  const [refreshPressed, setRefreshPressed] = useState(false)
  const [savePressed, setSavePressed] = useState(false)
  const [testPressed, setTestPressed] = useState(false)
  const [resetPressed, setResetPressed] = useState(false)
  const [staticPressed, setStaticPressed] = useState(false)
  
  // Use the configuration hook for reactive state management
  const {
    serverConfig,
    connectionStatus,
    configStats,
    isConnected,
    setServerConfig: updateServerConfig,
    forceRefresh,
    resetToDefaults
  } = useConfig()

  useEffect(() => {
    // Initialize local state with current configuration
    setHost(serverConfig.host)
    setPort(serverConfig.port)
    setMessage(`Cargado: ${serverConfig.host}:${serverConfig.port} - Estado: ${connectionStatus.status}`)
    console.log('ManualConfig loaded:', { serverConfig, connectionStatus, configStats })
  }, [serverConfig.host, serverConfig.port, connectionStatus.status, configStats])

  const handleSave = () => {
    console.log('ManualConfig saving:', { host, port, hostLength: host.length })
    
    if (!host || !port) {
      setMessage('❌ Error: IP y puerto son requeridos')
      return
    }

    const trimmedHost = host.trim()
    const trimmedPort = port.trim()
    
    if (!trimmedHost || !trimmedPort) {
      setMessage('❌ Error: IP y puerto no pueden estar vacíos')
      return
    }

    console.log('Guardando:', { trimmedHost, trimmedPort })

    // Use the configuration hook method for saving
    const success = updateServerConfig(trimmedHost, trimmedPort)
    if (success) {
      setMessage(`✅ Guardado: ${trimmedHost}:${trimmedPort}`)
      console.log('ManualConfig saved successfully via useConfig hook')
    } else {
      setMessage('❌ Error: No se pudo guardar')
    }
  }

  const handleTest = async () => {
    setMessage('🔄 Probando conexión...')
    
    try {
      const result = await robotAPI.pingServer()
      setMessage(result.success ? '✅ ¡Conectado!' : `❌ Error: ${result.message}`)
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`)
    }
  }

  const handleRefresh = () => {
    // Force refresh configuration from storage
    forceRefresh()
    
    // Get the refreshed configuration immediately
    setTimeout(() => {
      // Update local input fields with refreshed values
      setHost(serverConfig.host)
      setPort(serverConfig.port)
      
      setMessage(`🔄 Valores actualizados: ${serverConfig.host}:${serverConfig.port} - Estado: ${connectionStatus.status}`)
      console.log('🔍 DEBUG: handleRefresh - Valores actualizados:', { host: serverConfig.host, port: serverConfig.port })
    }, 100)
  }

  const handleReset = () => {
    // Use the configuration hook method for reset
    resetToDefaults()
    
    // Update local input fields with default values after reset
    setTimeout(() => {
      setHost(serverConfig.host)
      setPort(serverConfig.port)
      
      setMessage('🔄 Configuración reseteada a valores por defecto')
    }, 100)
  }

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Nunca';
    try {
      return new Date(timestamp).toLocaleString('es-ES');
    } catch (error) {
      return 'Inválido';
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return '#00ff00';
      case 'connecting': return '#ffff00';
      case 'error': return '#ff0000';
      default: return '#888888';
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'connected': return '🟢 CONECTADO';
      case 'connecting': return '🟡 CONECTANDO';
      case 'error': return '🔴 ERROR';
      default: return '⚪ DESCONECTADO';
    }
  }

  const handleHostInput = (e) => {
    setHost(e.target.value)
    setMessage('🔄 IP actualizada - Presiona "Guardar" para aplicar cambios')
  }

  const handlePortInput = (e) => {
    setPort(e.target.value)
    setMessage('🔄 Puerto actualizado - Presiona "Guardar" para aplicar cambios')
  }

  const handleQuickUpdate = () => {
    if (!host || !port) {
      setMessage('❌ Error: IP y puerto son requeridos')
      return
    }

    const trimmedHost = host.trim()
    const trimmedPort = port.trim()
    
    if (!trimmedHost || !trimmedPort) {
      setMessage('❌ Error: IP y puerto no pueden estar vacíos')
      return
    }

    // Update configuration immediately
    const success = updateServerConfig(trimmedHost, trimmedPort)
    if (success) {
      setMessage(`✅ IP actualizada inmediatamente: ${trimmedHost}:${trimmedPort}`)
    } else {
      setMessage('❌ Error: No se pudo actualizar la IP')
    }
  }

  return (
    <view className="screen">
      <view style={{ padding: '20px', textAlign: 'center' }}>
        <text style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>
          🛠️ Config Manual
        </text>
        
        {/* Connection Status */}
        <view style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          border: `2px solid ${getStatusColor(connectionStatus.status)}`
        }}>
          <text style={{ 
            fontSize: '18px', 
            color: getStatusColor(connectionStatus.status),
            fontWeight: 'bold'
          }}>
            {getStatusText(connectionStatus.status)}
          </text>
          
          {connectionStatus.lastConnected && (
            <text style={{ 
              fontSize: '12px', 
              color: '#cccccc',
              display: 'block',
              marginTop: '5px'
            }}>
              Última conexión: {formatTimestamp(connectionStatus.lastConnected)}
            </text>
          )}
        </view>

        {/* Configuration Info */}
        <view style={{ 
          marginTop: '15px',
          padding: '15px',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <text style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 'bold' }}>
            📊 Configuración Actual:
          </text>
          <text style={{ fontSize: '12px', color: '#93c5fd', fontFamily: 'monospace' }}>
            Host: {host}{'\n'}
            Port: {port}{'\n'}
            URL: http://{host}:{port}/api{'\n'}
            Versión: {configStats.configVersion || '1.0.0'}
          </text>
        </view>

        {/* Live Preview Label */}
        <view style={{ 
          marginTop: '15px',
          padding: '15px',
          backgroundColor: 'rgba(168, 85, 247, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          border: '2px solid #a855f7'
        }}>
          <text style={{ fontSize: '14px', color: '#a855f7', fontWeight: 'bold' }}>
            🔍 Vista Previa en Tiempo Real:
          </text>
          <text style={{ 
            fontSize: '16px', 
            color: host && port ? '#22c55e' : '#f59e0b', 
            fontWeight: 'bold',
            fontFamily: 'monospace',
            display: 'block',
            marginTop: '8px'
          }}>
            {host && port ? `http://${host}:${port}/api` : 'Completa IP y Puerto para ver la URL'}
          </text>
          {host && port && (
            <text style={{ 
              fontSize: '12px', 
              color: '#22c55e',
              display: 'block',
              marginTop: '5px'
            }}>
              ✅ URL válida - Lista para probar conexión
            </text>
          )}
        </view>

        {/* Configuration Inputs */}
        <view style={{ marginTop: '20px', textAlign: 'left' }}>
          <text style={{ fontSize: '16px', color: 'white', marginBottom: '10px', fontWeight: 'bold' }}>
            📍 IP del Servidor:
          </text>
          
          <input
            type="text"
            value={host}
            onInput={handleHostInput}
            onChange={handleHostInput}
            onBlur={handleHostInput}
            onKeyUp={handleHostInput}
            placeholder="Ejemplo: 192.168.100.6"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '8px',
              border: '3px solid #3b82f6',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '10px'
            }}
          />

          <text style={{ fontSize: '16px', color: 'white', marginBottom: '10px', fontWeight: 'bold' }}>
            🔌 Puerto:
          </text>
          
          <input
            type="text"
            value={port}
            onInput={handlePortInput}
            onChange={handlePortInput}
            onBlur={handlePortInput}
            onKeyUp={handlePortInput}
            placeholder="Ejemplo: 8080"
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              borderRadius: '8px',
              border: '3px solid #3b82f6',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          />
        </view>

        {/* Action Buttons */}
        <view style={{ marginBottom: '15px' }}>

          <view 
            style={{ 
              padding: '15px',
              backgroundColor: examplePressed ? '#dc2626' : '#f59e0b',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setExamplePressed(true)
              setHost('192.168.100.6')
              setPort('8080')
              setMessage('📝 Ejemplo establecido - Modifica si es necesario')
              console.log('🔍 DEBUG: Botón Ejemplo presionado')
              // Resetear el color después de 500ms
              setTimeout(() => setExamplePressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              📝 Poner Ejemplo (192.168.100.6:8080)
            </text>
          </view>

          <view 
            style={{ 
              padding: '15px',
              backgroundColor: staticPressed ? '#dc2626' : '#059669',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setStaticPressed(true)
              setHost('192.168.1.100')
              setPort('2233')
              setMessage('🔧 Valores estáticos establecidos: 192.168.1.100:2233')
              console.log('🔍 DEBUG: Botón Estático presionado - Host: 192.168.1.100, Port: 2233')
              // Resetear el color después de 500ms
              setTimeout(() => setStaticPressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              🔧 Establecer Valores Estáticos (192.168.1.100:2233)
            </text>
          </view>
          
          <view 
            style={{ 
              padding: '15px',
              backgroundColor: refreshPressed ? '#dc2626' : '#10b981',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setRefreshPressed(true)
              handleRefresh()
              
              console.log('🔍 DEBUG: Botón Actualizar presionado')
              // Resetear el color después de 500ms
              setTimeout(() => setRefreshPressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              🔄 Actualizar Valores
            </text>
          </view>
          
          <view 
            style={{ 
              padding: '15px',
              backgroundColor: savePressed ? '#dc2626' : '#3b82f6',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setSavePressed(true)
              handleSave()
              console.log('🔍 DEBUG: Botón Guardar presionado')
              // Resetear el color después de 500ms
              setTimeout(() => setSavePressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              💾 Guardar Configuración
            </text>
          </view>

          <view 
            style={{ 
              padding: '15px',
              backgroundColor: '#10b981',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              handleQuickUpdate()
              console.log('🔍 DEBUG: Actualización rápida de IP')
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              ⚡ Actualizar IP Inmediatamente
            </text>
          </view>
          
          <view 
            style={{ 
              padding: '15px',
              backgroundColor: testPressed ? '#dc2626' : '#8b5cf6',
              borderRadius: '8px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setTestPressed(true)
              handleTest()
              console.log('🔍 DEBUG: Botón Probar presionado')
              // Resetear el color después de 500ms
              setTimeout(() => setTestPressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              🚀 Probar Conexión
            </text>
          </view>

          <view 
            style={{ 
              padding: '15px',
              backgroundColor: resetPressed ? '#dc2626' : '#ef4444',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            bindtap={() => {
              setResetPressed(true)
              handleReset()
              console.log('🔍 DEBUG: Botón Reset presionado')
              // Resetear el color después de 500ms
              setTimeout(() => setResetPressed(false), 500)
            }}
          >
            <text style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              🔄 Reset a Valores por Defecto
            </text>
          </view>
        </view>

        {/* Status Message */}
        {message && (
          <view style={{ 
            padding: '15px', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            borderRadius: '8px',
            border: '1px solid #4b5563'
          }}>
            <text style={{ 
              color: message.includes('❌') ? '#ff4444' : message.includes('✅') ? '#00ff00' : '#60a5fa', 
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {message}
            </text>
          </view>
        )}

        {/* Configuration Statistics */}
        <view style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <text style={{ fontSize: '14px', color: '#22c55e', fontWeight: 'bold' }}>
            📈 Estadísticas de Configuración:
          </text>
          <text style={{ fontSize: '12px', color: '#86efac' }}>
            Claves guardadas: {configStats.savedKeys}/{configStats.totalKeys}{'\n'}
            Versión: {configStats.configVersion}{'\n'}
            Estado: {connectionStatus.status}{'\n'}
            Última conexión: {formatTimestamp(connectionStatus.lastConnected)}
          </text>
        </view>

        {/* Instructions */}
        <view style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <text style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 'bold' }}>
            🎯 Instrucciones:
          </text>
          <text style={{ fontSize: '12px', color: '#93c5fd' }}>
            1. Ejecuta robot_gui.py en tu computadora{'\n'}
            2. Encuentra tu IP con "ipconfig" (Windows) o "ifconfig" (Mac/Linux){'\n'}
            3. Tap "📝 Poner Ejemplo" para autocompletar{'\n'}
            4. Modifica la IP según tu red{'\n'}
            5. Tap "⚡ Actualizar IP Inmediatamente" para aplicar cambios{'\n'}
            6. Tap "🚀 Probar Conexión" para verificar{'\n'}
            7. Opcional: Tap "💾 Guardar Configuración" para persistir
          </text>
        </view>
      </view>
    </view>
  )
}
