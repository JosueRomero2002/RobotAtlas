# 🔧 IP Configuration Guide - Robot Atlas Mobile App

## 📱 Overview

The Robot Atlas mobile app now supports custom IP configuration to connect to the `robot_gui.py` server from any device on the same network. This allows you to control the robot from your phone, tablet, or any other mobile device.

## 🚀 Quick Setup

### 1. Find Your Computer's IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your WiFi adapter (usually starts with 192.168.x.x)

**Mac/Linux:**
```bash
ifconfig
# or
ip addr
```
Look for "inet" followed by your IP address

**Example:** `192.168.1.100`

### 2. Configure the Mobile App

1. Open the Robot Atlas mobile app
2. Tap the **🔧** (wrench) icon in the bottom navigation
3. Enter your computer's IP address in the "Server IP Address" field
4. Enter the port (default: `8080`)
5. Tap **💾 Save Configuration**
6. Tap **🔍 Test Connection** to verify

### 3. Start the Robot Server

```bash
cd ia-clases
python robot_gui.py
```

The server will start automatically on the configured port.

## 📋 Step-by-Step Configuration

### Step 1: Access Configuration Screen

1. Launch the Robot Atlas mobile app
2. Navigate to the **🔧 Configuration** tab in the bottom navigation
3. You'll see the current server configuration

### Step 2: Enter Server Details

**Server IP Address / Hostname:**
- For same computer testing: `localhost`
- For network access: Your computer's IP (e.g., `192.168.1.100`)
- For hostname: Your computer's hostname (e.g., `mycomputer.local`)

**Port Number:**
- Default: `8080`
- Must match the port in `robot_gui.py`
- Can be changed in the robot_gui.py Mobile App tab

### Step 3: Save and Test

1. Tap **💾 Save Configuration** to store the settings
2. Tap **🔍 Test Connection** to verify connectivity
3. Check the connection status indicator:
   - 🟢 **Green**: Connected successfully
   - 🔴 **Red**: Connection failed
   - ⏳ **Yellow**: Testing connection

### Step 4: Use the App

Once connected, you can:
- Control the robot from the **● Control** tab
- Start classes from the **★ Classes** tab
- Monitor connections from the **⚙ Connections** tab

## 🔧 Advanced Configuration

### Changing Server Port

If you need to use a different port:

1. **In robot_gui.py:**
   - Go to the **📱 Mobile App** tab
   - Change the port number
   - Click **Aplicar** to restart the server

2. **In mobile app:**
   - Update the port in the configuration screen
   - Save and test the connection

### Network Troubleshooting

#### Common Issues:

**❌ "Connection failed"**
- Verify both devices are on the same WiFi network
- Check firewall settings on your computer
- Ensure `robot_gui.py` is running
- Try using `localhost` if testing on the same device

**❌ "Cannot reach server"**
- Verify the IP address is correct
- Check that the port matches between app and server
- Try pinging the IP address from your mobile device

**❌ "Timeout error"**
- Check network connectivity
- Verify the server is not blocked by antivirus
- Try a different port if 8080 is in use

### Security Considerations

**⚠️ Important Notes:**
- The server accepts connections from any IP on the network
- No authentication is implemented (for development use)
- Use only on trusted networks
- Consider firewall rules for production use

## 📊 Connection Monitoring

### Real-Time Status

The **⚙ Connections** tab shows:
- Current server configuration
- Connection status in real-time
- Last ping time
- Quick access to configuration

### Server Configuration Display

The connections screen shows:
- **Host:** Current IP/hostname
- **Port:** Current port number
- **URL:** Full API endpoint
- **Status:** Connection indicator

## 🔄 Configuration Persistence

### Automatic Saving

- Configuration is automatically saved to device storage
- Settings persist between app restarts
- No need to reconfigure each time

### Reset to Default

If you need to reset:
1. Go to Configuration screen
2. Tap **🔄 Reset to Default**
3. This sets host to `localhost` and port to `8080`

## 🌐 Network Examples

### Same Computer Testing
```
Host: localhost
Port: 8080
URL: http://localhost:8080/api
```

### Local Network Access
```
Host: 192.168.1.100
Port: 8080
URL: http://192.168.1.100:8080/api
```

### Custom Port
```
Host: 192.168.1.100
Port: 9000
URL: http://192.168.1.100:9000/api
```

## 🛠️ Troubleshooting Guide

### Connection Issues

| Problem | Solution |
|---------|----------|
| Can't connect | Check IP address and port |
| Timeout | Verify server is running |
| Network error | Check WiFi connection |
| Port in use | Change port in robot_gui.py |

### Server Issues

| Problem | Solution |
|---------|----------|
| Server won't start | Check if port is available |
| Permission denied | Run as administrator |
| Import errors | Install required Python packages |

### Mobile App Issues

| Problem | Solution |
|---------|----------|
| App crashes | Restart the app |
| Settings not saved | Check device storage |
| Can't access config | Update app to latest version |

## 📱 Mobile App Features

### Configuration Screen
- **IP/Hostname Input:** Enter server address
- **Port Input:** Enter server port
- **Save Button:** Store configuration
- **Test Button:** Verify connection
- **Reset Button:** Return to defaults
- **Status Display:** Real-time connection status

### Connections Screen
- **Current Config Display:** Shows active settings
- **Quick Config Access:** Direct link to configuration
- **Connection Testing:** Test current setup
- **Status Monitoring:** Real-time connection status

### Integration
- **Automatic Loading:** Loads saved configuration on startup
- **Persistent Storage:** Settings saved to device
- **Real-time Updates:** Connection status updates automatically
- **Error Handling:** Clear error messages and suggestions

## 🎯 Best Practices

### For Development
1. Use `localhost` for same-device testing
2. Use consistent port numbers
3. Test connection after configuration changes
4. Monitor the robot_gui.py console for errors

### For Network Use
1. Use static IP addresses when possible
2. Document your network configuration
3. Test from multiple devices
4. Keep firewall rules minimal

### For Production
1. Implement authentication
2. Use HTTPS for security
3. Restrict network access
4. Monitor connection logs

## 🔄 Updates and Maintenance

### Configuration Updates
- Configuration changes are applied immediately
- No app restart required
- Test connection after any changes
- Monitor for connection issues

### Server Updates
- Restart robot_gui.py after configuration changes
- Check the Mobile App tab for server status
- Monitor connection logs for issues
- Update port if needed

## 📞 Support

If you encounter issues:

1. **Check the robot_gui.py console** for error messages
2. **Verify network connectivity** between devices
3. **Test with localhost first** to isolate network issues
4. **Check firewall settings** on your computer
5. **Review the connection logs** in the Mobile App tab

### Common Error Messages

- **"Connection refused"**: Server not running or wrong port
- **"Network timeout"**: Network connectivity issue
- **"Invalid URL"**: Incorrect IP address or port format
- **"CORS error"**: Browser security restriction (rare in mobile apps)

---

**🎉 You're now ready to control your robot from anywhere on your network!**
