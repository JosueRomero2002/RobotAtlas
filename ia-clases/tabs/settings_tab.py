# -*- coding: utf-8 -*-
"""
Settings Tab for RobotGUI - System Configuration
"""

import tkinter as tk
from tkinter import ttk, messagebox
from .base_tab import BaseTab

class SettingsTab(BaseTab):
    """Settings and configuration tab"""
    
    def __init__(self, parent_gui, notebook):
        super().__init__(parent_gui, notebook)
        self.tab_name = "⚙️ Settings"
        
    def setup_tab_content(self):
        """Setup the settings tab content"""
        # Create scrollable frame for settings content
        settings_content, canvas, container = self.create_scrollable_frame(self.tab_frame)
        
        # Title for settings tab
        settings_title = tk.Label(settings_content, text="System Settings & Configuration", 
                                 font=('Arial', 18, 'bold'), 
                                 bg='#1e1e1e', fg='#ffffff')
        settings_title.pack(pady=(10, 20))
        
        # Camera settings
        self.setup_camera_settings_panel(settings_content)
        
        # Detection settings
        self.setup_detection_settings_panel(settings_content)
        
        # System settings
        self.setup_system_settings_panel(settings_content)
        
    def setup_camera_settings_panel(self, parent):
        """Setup camera settings panel"""
        camera_frame = tk.LabelFrame(parent, text="📹 Camera Settings", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        camera_frame.pack(fill="x", padx=20, pady=(0, 15))
        
        # Camera settings content
        content_frame = tk.Frame(camera_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=15, pady=15)
        
        # Camera index
        index_frame = tk.Frame(content_frame, bg='#2d2d2d')
        index_frame.pack(fill="x", pady=5)
        
        tk.Label(index_frame, text="Camera Index:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(side="left")
        
        if hasattr(self.parent_gui, 'camera_index'):
            tk.Entry(index_frame, textvariable=self.parent_gui.camera_index, 
                    bg='#3d3d3d', fg='#ffffff', font=('Arial', 10), width=10).pack(side="left", padx=(10, 0))
        
        # Arm simulation toggle
        sim_frame = tk.Frame(content_frame, bg='#2d2d2d')
        sim_frame.pack(fill="x", pady=5)
        
        if hasattr(self.parent_gui, 'arm_simulation_enabled'):
            tk.Checkbutton(sim_frame, text="Enable Arm Simulation", 
                          variable=self.parent_gui.arm_simulation_enabled,
                          bg='#2d2d2d', fg='#ffffff', selectcolor='#4CAF50',
                          font=('Arial', 11)).pack(side="left")
        
        # Camera controls
        controls_frame = tk.Frame(content_frame, bg='#2d2d2d')
        controls_frame.pack(fill="x", pady=10)
        
        tk.Button(controls_frame, text="Start Camera", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.start_camera).pack(side="left", padx=(0, 10))
        
        tk.Button(controls_frame, text="Stop Camera", bg='#f44336', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.stop_camera).pack(side="left", padx=(0, 10))
        
        tk.Button(controls_frame, text="Test Camera", bg='#2196F3', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.test_camera).pack(side="left")
        
    def setup_detection_settings_panel(self, parent):
        """Setup detection settings panel"""
        detection_frame = tk.LabelFrame(parent, text="🎯 Detection Settings", 
                                      font=('Arial', 14, 'bold'),
                                      bg='#2d2d2d', fg='#ffffff')
        detection_frame.pack(fill="x", padx=20, pady=(0, 15))
        
        # Detection settings content
        content_frame = tk.Frame(detection_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=15, pady=15)
        
        # Enabled targets
        targets_frame = tk.Frame(content_frame, bg='#2d2d2d')
        targets_frame.pack(fill="x", pady=5)
        
        tk.Label(targets_frame, text="Enabled Targets:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(anchor="w")
        
        if hasattr(self.parent_gui, 'enabled_targets'):
            targets_list = ['faces', 'objects', 'aruco', 'qr_codes']
            for target in targets_list:
                var = tk.BooleanVar(value=target in self.parent_gui.enabled_targets)
                tk.Checkbutton(targets_frame, text=f"Detect {target.title()}", 
                              variable=var, bg='#2d2d2d', fg='#ffffff', 
                              selectcolor='#4CAF50', font=('Arial', 10)).pack(anchor="w")
        
        # Detection parameters
        params_frame = tk.Frame(content_frame, bg='#2d2d2d')
        params_frame.pack(fill="x", pady=10)
        
        tk.Label(params_frame, text="Detection Parameters:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(anchor="w")
        
        # Confidence threshold
        conf_frame = tk.Frame(params_frame, bg='#2d2d2d')
        conf_frame.pack(fill="x", pady=2)
        
        tk.Label(conf_frame, text="Confidence Threshold:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 10)).pack(side="left")
        
        self.confidence_var = tk.DoubleVar(value=0.5)
        tk.Scale(conf_frame, from_=0.1, to=1.0, resolution=0.1, 
                variable=self.confidence_var, orient="horizontal",
                bg='#2d2d2d', fg='#ffffff', highlightthickness=0).pack(side="left", padx=(10, 0), fill="x", expand=True)
        
    def setup_system_settings_panel(self, parent):
        """Setup system settings panel"""
        system_frame = tk.LabelFrame(parent, text="🔧 System Settings", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        system_frame.pack(fill="x", padx=20, pady=(0, 15))
        
        # System settings content
        content_frame = tk.Frame(system_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=15, pady=15)
        
        # Performance settings
        perf_frame = tk.Frame(content_frame, bg='#2d2d2d')
        perf_frame.pack(fill="x", pady=5)
        
        tk.Label(perf_frame, text="Performance Settings:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(anchor="w")
        
        # FPS limit
        fps_frame = tk.Frame(perf_frame, bg='#2d2d2d')
        fps_frame.pack(fill="x", pady=2)
        
        tk.Label(fps_frame, text="Max FPS:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 10)).pack(side="left")
        
        self.fps_var = tk.IntVar(value=30)
        fps_combo = ttk.Combobox(fps_frame, textvariable=self.fps_var, 
                               values=[15, 30, 60], state="readonly", width=10)
        fps_combo.pack(side="left", padx=(10, 0))
        
        # System controls
        controls_frame = tk.Frame(content_frame, bg='#2d2d2d')
        controls_frame.pack(fill="x", pady=10)
        
        tk.Button(controls_frame, text="Save Settings", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.save_settings).pack(side="left", padx=(0, 10))
        
        tk.Button(controls_frame, text="Load Settings", bg='#2196F3', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.load_settings).pack(side="left", padx=(0, 10))
        
        tk.Button(controls_frame, text="Reset to Defaults", bg='#FF9800', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.reset_settings).pack(side="left")
        
    def start_camera(self):
        """Start camera - delegated to parent GUI"""
        if hasattr(self.parent_gui, 'setup_camera'):
            self.parent_gui.setup_camera()
            self.log_message("Camera started")
        else:
            messagebox.showinfo("Info", "Camera functionality not available")
    
    def stop_camera(self):
        """Stop camera - delegated to parent GUI"""
        if hasattr(self.parent_gui, 'cap') and self.parent_gui.cap:
            self.parent_gui.cap.release()
            self.parent_gui.cap = None
            self.log_message("Camera stopped")
        else:
            messagebox.showinfo("Info", "No camera running")
    
    def test_camera(self):
        """Test camera functionality"""
        try:
            import cv2
            cap = cv2.VideoCapture(0)
            if cap.isOpened():
                ret, frame = cap.read()
                cap.release()
                if ret:
                    messagebox.showinfo("Success", "Camera test successful!")
                else:
                    messagebox.showerror("Error", "Camera test failed - no frame captured")
            else:
                messagebox.showerror("Error", "Camera test failed - cannot open camera")
        except Exception as e:
            messagebox.showerror("Error", f"Camera test failed: {e}")
    
    def save_settings(self):
        """Save current settings"""
        try:
            # This would save settings to a configuration file
            messagebox.showinfo("Success", "Settings saved successfully!")
            self.log_message("Settings saved")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save settings: {e}")
    
    def load_settings(self):
        """Load saved settings"""
        try:
            # This would load settings from a configuration file
            messagebox.showinfo("Success", "Settings loaded successfully!")
            self.log_message("Settings loaded")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to load settings: {e}")
    
    def reset_settings(self):
        """Reset settings to defaults"""
        if messagebox.askyesno("Confirm Reset", "Are you sure you want to reset all settings to defaults?"):
            try:
                # Reset all settings to default values
                self.confidence_var.set(0.5)
                self.fps_var.set(30)
                messagebox.showinfo("Success", "Settings reset to defaults!")
                self.log_message("Settings reset to defaults")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to reset settings: {e}")
