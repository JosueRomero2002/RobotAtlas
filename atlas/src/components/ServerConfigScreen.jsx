import React, { useState, useEffect } from 'react';
import robotAPI from '../services/RobotAPI';

const ServerConfigScreen = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [currentConfig, setCurrentConfig] = useState({});

  useEffect(() => {
    // Load current configuration
    const config = robotAPI.getServerConfig();
    setCurrentConfig(config);
    setHost(config.host);
    setPort(config.port);
    
    // Test initial connection
    testConnection();
  }, []);

  const testConnection = async () => {
    setIsTesting(true);
    setConnectionStatus('Testing connection...');
    
    try {
      const result = await robotAPI.testConnection();
      setIsConnected(result.success);
      setConnectionStatus(result.message);
    } catch (error) {
      setIsConnected(false);
      setConnectionStatus('Connection test failed');
    } finally {
      setIsTesting(false);
    }
  };

  const saveConfiguration = async () => {
    if (!host.trim() || !port.trim()) {
      setConnectionStatus('Host and port are required');
      return;
    }

    const success = robotAPI.setServerConfig(host, port);
    if (success) {
      setCurrentConfig(robotAPI.getServerConfig());
      setConnectionStatus('Configuration saved successfully');
      
      // Test new configuration
      await testConnection();
    } else {
      setConnectionStatus('Failed to save configuration');
    }
  };

  const resetToDefault = () => {
    robotAPI.resetToDefault();
    const config = robotAPI.getServerConfig();
    setCurrentConfig(config);
    setHost(config.host);
    setPort(config.port);
    setConnectionStatus('Reset to default configuration');
    testConnection();
  };

  const getConnectionStatusColor = () => {
    if (isTesting) return 'text-yellow-500';
    return isConnected ? 'text-green-500' : 'text-red-500';
  };

  const getConnectionStatusIcon = () => {
    if (isTesting) return '⏳';
    return isConnected ? '🟢' : '🔴';
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🔧 Server Configuration
          </h1>
          <p className="text-gray-600">
            Configure the IP address and port to connect to your robot server
          </p>
        </div>

        {/* Configuration Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Server Settings
          </h2>
          
          <div className="space-y-4">
            {/* Host Input */}
            <div>
              <label htmlFor="host" className="block text-sm font-medium text-gray-700 mb-2">
                Server IP Address / Hostname
              </label>
              <input
                type="text"
                id="host"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                placeholder="e.g., 192.168.1.100 or localhost"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter the IP address of the computer running robot_gui.py
              </p>
            </div>

            {/* Port Input */}
            <div>
              <label htmlFor="port" className="block text-sm font-medium text-gray-700 mb-2">
                Port Number
              </label>
              <input
                type="text"
                id="port"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                placeholder="e.g., 8080"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Default port is 8080. Make sure this matches the port in robot_gui.py
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={saveConfiguration}
                disabled={isTesting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💾 Save Configuration
              </button>
              
              <button
                onClick={testConnection}
                disabled={isTesting}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTesting ? '⏳ Testing...' : '🔍 Test Connection'}
              </button>
              
              <button
                onClick={resetToDefault}
                disabled={isTesting}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔄 Reset to Default
              </button>
            </div>
          </div>
        </div>

        {/* Current Configuration */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Current Configuration
          </h2>
          
          <div className="bg-gray-50 rounded-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">Host:</span>
                <p className="text-lg font-mono text-gray-800">{currentConfig.host}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Port:</span>
                <p className="text-lg font-mono text-gray-800">{currentConfig.port}</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-500">Full URL:</span>
              <p className="text-sm font-mono text-gray-800 break-all">{currentConfig.baseURL}</p>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Connection Status
          </h2>
          
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getConnectionStatusIcon()}</span>
            <div>
              <p className={`text-lg font-medium ${getConnectionStatusColor()}`}>
                {connectionStatus || 'Not tested'}
              </p>
              <p className="text-sm text-gray-500">
                {isConnected 
                  ? 'Ready to control the robot' 
                  : 'Cannot connect to robot server'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            💡 How to Connect
          </h2>
          
          <div className="space-y-3 text-blue-700">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">1.</span>
              <p>Make sure <code className="bg-blue-100 px-1 rounded">robot_gui.py</code> is running on your computer</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">2.</span>
              <p>Find your computer's IP address (use <code className="bg-blue-100 px-1 rounded">ipconfig</code> on Windows or <code className="bg-blue-100 px-1 rounded">ifconfig</code> on Mac/Linux)</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">3.</span>
              <p>Enter the IP address above (e.g., <code className="bg-blue-100 px-1 rounded">192.168.1.100</code>)</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">4.</span>
              <p>Make sure both devices are on the same WiFi network</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">5.</span>
              <p>Click "Test Connection" to verify the setup</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-100 rounded-md">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> If you're testing on the same computer, use <code className="bg-yellow-200 px-1 rounded">localhost</code> as the host.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerConfigScreen;
