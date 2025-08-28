/**
 * Robot API Service
 * Handles communication with the robot_gui.py server
 */

// Default configuration
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = '8080';
const DEFAULT_BASE_URL = `http://${DEFAULT_HOST}:${DEFAULT_PORT}/api`;

class RobotAPI {
  constructor() {
    // Load saved configuration or use defaults
    this.host = localStorage.getItem('robotAPI_host') || DEFAULT_HOST;
    this.port = localStorage.getItem('robotAPI_port') || DEFAULT_PORT;
    this.baseURL = `http://${this.host}:${this.port}/api`;
  }

  // Helper method for making HTTP requests
  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const requestOptions = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('API Request failed:', error);
      return { success: false, error: error.message };
    }
  }

  // CONFIGURATION METHODS

  /**
   * Get current server configuration
   * @returns {Object} Current host and port
   */
  getServerConfig() {
    return {
      host: this.host,
      port: this.port,
      baseURL: this.baseURL
    };
  }

  /**
   * Set server configuration
   * @param {string} host - Server host/IP
   * @param {string} port - Server port
   * @returns {boolean} True if configuration was updated
   */
  setServerConfig(host, port) {
    try {
      // Validate inputs
      if (!host || !port) {
        throw new Error('Host and port are required');
      }

      // Update configuration
      this.host = host.trim();
      this.port = port.trim();
      this.baseURL = `http://${this.host}:${this.port}/api`;

      // Save to localStorage
      localStorage.setItem('robotAPI_host', this.host);
      localStorage.setItem('robotAPI_port', this.port);

      console.log(`Robot API configuration updated: ${this.baseURL}`);
      return true;
    } catch (error) {
      console.error('Error setting server config:', error);
      return false;
    }
  }

  /**
   * Reset to default configuration
   */
  resetToDefault() {
    this.host = DEFAULT_HOST;
    this.port = DEFAULT_PORT;
    this.baseURL = DEFAULT_BASE_URL;

    // Clear localStorage
    localStorage.removeItem('robotAPI_host');
    localStorage.removeItem('robotAPI_port');

    console.log('Robot API configuration reset to default');
  }

  /**
   * Test connection with current configuration
   * @returns {Promise<Object>} Connection test result
   */
  async testConnection() {
    try {
      const result = await this.getRobotStatus();
      return {
        success: result.success,
        message: result.success ? 'Connection successful' : result.error,
        config: this.getServerConfig()
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        config: this.getServerConfig()
      };
    }
  }

  // GET METHODS - Retrieve data from robot

  /**
   * Get current robot status
   * @returns {Promise<Object>} Robot status including battery, temperature, connection
   */
  async getRobotStatus() {
    return this.makeRequest('/status');
  }

  /**
   * Get current robot position
   * @returns {Promise<Object>} Current positions of all robot parts
   */
  async getRobotPosition() {
    return this.makeRequest('/position');
  }

  /**
   * Get available robot classes
   * @returns {Promise<Object>} List of available classes with movements
   */
  async getAvailableClasses() {
    return this.makeRequest('/classes');
  }

  /**
   * Get connection status of all systems
   * @returns {Promise<Object>} Connection status for all components
   */
  async getConnectionStatus() {
    return this.makeRequest('/connection');
  }

  /**
   * Get available movement presets
   * @returns {Promise<Object>} List of available movement presets
   */
  async getMovementPresets() {
    return this.makeRequest('/presets');
  }

  // POST METHODS - Send commands to robot

  /**
   * Move robot part to specified position
   * @param {Object} moveData - Movement data containing part, position, etc.
   * @returns {Promise<Object>} Success status and message
   */
  async moveRobot(moveData) {
    return this.makeRequest('/robot/move', {
      method: 'POST',
      body: JSON.stringify(moveData),
    });
  }

  /**
   * Make robot speak text
   * @param {string} text - Text for robot to speak
   * @returns {Promise<Object>} Success status and message
   */
  async speakText(text) {
    return this.makeRequest('/robot/speak', {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
  }

  /**
   * Start a robot class
   * @param {number} classId - ID of the class to start
   * @returns {Promise<Object>} Success status and message
   */
  async startClass(classId) {
    return this.makeRequest('/class/start', {
      method: 'POST',
      body: JSON.stringify({ classId }),
    });
  }

  /**
   * Stop current robot class
   * @returns {Promise<Object>} Success status and message
   */
  async stopClass() {
    return this.makeRequest('/class/stop', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  }

  /**
   * Execute a movement preset
   * @param {string} presetName - Name of the preset to execute
   * @returns {Promise<Object>} Success status and message
   */
  async executePreset(presetName) {
    return this.makeRequest('/preset/execute', {
      method: 'POST',
      body: JSON.stringify({ preset: presetName }),
    });
  }

  /**
   * Emergency stop - immediately stop all robot movements
   * @returns {Promise<Object>} Success status and message
   */
  async emergencyStop() {
    return this.makeRequest('/robot/emergency', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  }

  // CONVENIENCE METHODS - Common robot movements

  /**
   * Move robot head
   * @param {number} x - X rotation (-45 to 45 degrees)
   * @param {number} y - Y rotation (-30 to 30 degrees)  
   * @param {number} z - Z rotation (-90 to 90 degrees)
   * @returns {Promise<Object>} Success status and message
   */
  async moveHead(x = 0, y = 0, z = 0) {
    return this.moveRobot({
      part: 'head',
      x,
      y,
      z
    });
  }

  /**
   * Move robot arm
   * @param {string} arm - 'leftArm' or 'rightArm'
   * @param {number} shoulder - Shoulder angle (-90 to 90 degrees)
   * @param {number} elbow - Elbow angle (0 to 120 degrees)
   * @param {number} wrist - Wrist angle (-45 to 45 degrees)
   * @returns {Promise<Object>} Success status and message
   */
  async moveArm(arm, shoulder = 0, elbow = 0, wrist = 0) {
    return this.moveRobot({
      part: arm,
      shoulder,
      elbow,
      wrist
    });
  }

  /**
   * Move robot hand fingers
   * @param {string} hand - 'leftHand' or 'rightHand'
   * @param {Object} fingers - Object with finger positions (thumb, index, middle, ring, pinky)
   * @returns {Promise<Object>} Success status and message
   */
  async moveHand(hand, fingers) {
    return this.moveRobot({
      part: hand,
      ...fingers
    });
  }

  // UTILITY METHODS

  /**
   * Get robot server URL
   * @returns {string} The base URL for the robot API
   */
  getServerURL() {
    return this.baseURL;
  }

  /**
   * Set robot server URL (for different environments)
   * @param {string} url - New base URL
   */
  setServerURL(url) {
    this.baseURL = url;
  }
}

// Create singleton instance
const robotAPI = new RobotAPI();

export default robotAPI;
