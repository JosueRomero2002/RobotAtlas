/**
 * Robot API Service
 * Handles communication with the robot_gui.py server
 */

const API_BASE_URL = 'http://localhost:8080/api';

class RobotAPI {
  constructor() {
    this.baseURL = API_BASE_URL;
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
   * Test connection to robot server
   * @returns {Promise<boolean>} True if connected, false otherwise
   */
  async testConnection() {
    const result = await this.getRobotStatus();
    return result.success;
  }

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
