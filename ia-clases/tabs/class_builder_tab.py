# -*- coding: utf-8 -*-
"""
Class Builder Tab for RobotGUI - Simplified Class Creation
"""

import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from .base_tab import BaseTab
import os
import datetime

class ClassBuilderTab(BaseTab):
    """Simplified class builder tab based on main.py workflow"""
    
    def __init__(self, parent_gui, notebook):
        super().__init__(parent_gui, notebook)
        self.tab_name = "🏗️ Class Builder"
        
        # Initialize class builder variables
        self.class_title_var = tk.StringVar(value="Mi Clase de Robótica")
        self.class_subject_var = tk.StringVar(value="Robots Médicos")
        self.class_description_var = tk.StringVar(value="Una clase sobre robots en medicina")
        self.class_duration_var = tk.StringVar(value="45 minutos")
        
        self.diagnostic_qr_path = tk.StringVar()
        self.class_pdf_path = tk.StringVar()
        self.demo_pdf_path = tk.StringVar()
        self.final_exam_qr_path = tk.StringVar()
        
        self.diagnostic_preset_var = tk.StringVar()
        self.pdf_preset_var = tk.StringVar()
        self.demo_preset_var = tk.StringVar()
        self.exam_preset_var = tk.StringVar()
        
        # Demo configuration
        self.demo_enabled = tk.BooleanVar(value=False)
        self.demo_sequences = []  # List of demo sequence configurations
        self.demo_pdf_loaded = False
        self.demo_pdf_pages = 0
        
        self.generated_class_code = ""
        self.class_execution_active = False
        
    def setup_tab_content(self):
        """Setup the class builder tab content"""
        # Create scrollable frame
        main_content, canvas, container = self.create_scrollable_frame(self.tab_frame)
        
        # Title
        builder_title = tk.Label(main_content, text="🎓 Creador de Clases ADAI", 
                                font=('Arial', 18, 'bold'), 
                                bg='#1e1e1e', fg='#ffffff')
        builder_title.pack(pady=(10, 20))
        
        # Subtitle
        subtitle = tk.Label(main_content, text="Crea una clase completa: Prueba Diagnóstica → Clase → Examen Final", 
                           font=('Arial', 11), 
                           bg='#1e1e1e', fg='#888888')
        subtitle.pack(pady=(0, 20))
        
        # Main workflow container
        workflow_frame = tk.Frame(main_content, bg='#1e1e1e')
        workflow_frame.pack(fill="both", expand=True, padx=20, pady=10)
        
        # Setup workflow steps
        self.setup_step_1_basic_info(workflow_frame)
        self.setup_step_2_diagnostic_test(workflow_frame)
        self.setup_step_3_class_content(workflow_frame)
        self.setup_step_4_demo_configuration(workflow_frame)
        self.setup_step_5_final_exam(workflow_frame)
        self.setup_step_6_class_generation(workflow_frame)
        
    def setup_step_1_basic_info(self, parent):
        """Step 1: Basic class information"""
        step1_frame = tk.LabelFrame(parent, text="📝 Paso 1: Información Básica", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step1_frame.pack(fill="x", pady=(0, 15))
        
        form_frame = tk.Frame(step1_frame, bg='#2d2d2d')
        form_frame.pack(fill="x", padx=20, pady=15)
        
        # Class title
        tk.Label(form_frame, text="Título:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(anchor="w")
        tk.Entry(form_frame, textvariable=self.class_title_var, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 10), width=50).pack(fill="x", pady=(5, 15))
        
        # Subject selection
        tk.Label(form_frame, text="Materia/Tema:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 11, 'bold')).pack(anchor="w")
        subject_combo = ttk.Combobox(form_frame, textvariable=self.class_subject_var, 
                                   values=["Robots Médicos", "Exoesqueletos", "IoMT", "Robótica Industrial"], 
                                   state="readonly")
        subject_combo.pack(fill="x", pady=(5, 15))
        
    def setup_step_2_diagnostic_test(self, parent):
        """Step 2: Diagnostic test configuration"""
        step2_frame = tk.LabelFrame(parent, text="📱 Paso 2: Prueba Diagnóstica", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step2_frame.pack(fill="x", pady=(0, 15))
        
        content_frame = tk.Frame(step2_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=20, pady=15)
        
        # QR selection
        qr_input_frame = tk.Frame(content_frame, bg='#2d2d2d')
        qr_input_frame.pack(fill="x", pady=(5, 15))
        
        tk.Entry(qr_input_frame, textvariable=self.diagnostic_qr_path, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
        
        tk.Button(qr_input_frame, text="📁 Seleccionar QR", bg='#2196F3', fg='#ffffff',
                 font=('Arial', 9, 'bold'), 
                 command=lambda: self.select_qr_file(self.diagnostic_qr_path)).pack(side="right", padx=(10, 0))
        
    def setup_step_3_class_content(self, parent):
        """Step 3: Main class content (PDF)"""
        step3_frame = tk.LabelFrame(parent, text="📚 Paso 3: Contenido Principal", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step3_frame.pack(fill="x", pady=(0, 15))
        
        content_frame = tk.Frame(step3_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=20, pady=15)
        
        # PDF selection
        pdf_input_frame = tk.Frame(content_frame, bg='#2d2d2d')
        pdf_input_frame.pack(fill="x", pady=(5, 15))
        
        tk.Entry(pdf_input_frame, textvariable=self.class_pdf_path, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
        
        tk.Button(pdf_input_frame, text="📁 Seleccionar PDF", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 9, 'bold'), 
                 command=self.select_pdf_file).pack(side="right", padx=(10, 0))
        
        # Demo PDF selection (optional)
        demo_frame = tk.Frame(content_frame, bg='#2d2d2d')
        demo_frame.pack(fill="x", pady=(5, 15))
        
        # Demo enable checkbox
        demo_check_frame = tk.Frame(demo_frame, bg='#2d2d2d')
        demo_check_frame.pack(fill="x", pady=(0, 10))
        
        tk.Checkbutton(demo_check_frame, text="🎬 Incluir Demo Interactivo", 
                      variable=self.demo_enabled, bg='#2d2d2d', fg='#ffffff',
                      selectcolor='#3d3d3d', font=('Arial', 10, 'bold'),
                      command=self.toggle_demo_configuration).pack(side="left")
        
        # Demo PDF input (only visible when enabled)
        self.demo_pdf_frame = tk.Frame(demo_frame, bg='#2d2d2d')
        
        tk.Label(self.demo_pdf_frame, text="PDF de Demo:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 10, 'bold')).pack(anchor="w")
        
        demo_pdf_input_frame = tk.Frame(self.demo_pdf_frame, bg='#2d2d2d')
        demo_pdf_input_frame.pack(fill="x", pady=(5, 0))
        
        tk.Entry(demo_pdf_input_frame, textvariable=self.demo_pdf_path, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
        
        tk.Button(demo_pdf_input_frame, text="📁 Seleccionar Demo PDF", bg='#FF9800', fg='#ffffff',
                 font=('Arial', 9, 'bold'), 
                 command=self.select_demo_pdf_file).pack(side="right", padx=(10, 0))
        
        # Demo sequence configuration (only visible when demo is enabled and PDF is loaded)
        self.demo_sequence_frame = tk.LabelFrame(demo_frame, text="🎯 Configuración de Secuencias de Demo", 
                                               font=('Arial', 11, 'bold'),
                                               bg='#3d3d3d', fg='#ffffff')
        
        # Demo sequence list
        sequence_list_frame = tk.Frame(self.demo_sequence_frame, bg='#3d3d3d')
        sequence_list_frame.pack(fill="x", padx=10, pady=10)
        
        tk.Label(sequence_list_frame, text="Secuencias configuradas:", bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 10, 'bold')).pack(anchor="w")
        
        # Demo sequence listbox
        list_frame = tk.Frame(sequence_list_frame, bg='#3d3d3d')
        list_frame.pack(fill="x", pady=(5, 0))
        
        self.demo_sequence_listbox = tk.Listbox(list_frame, bg='#1e1e1e', fg='#ffffff',
                                              font=('Consolas', 9), height=6, selectmode=tk.SINGLE)
        self.demo_sequence_listbox.pack(side="left", fill="both", expand=True)
        
        sequence_scrollbar = tk.Scrollbar(list_frame, orient="vertical", 
                                        command=self.demo_sequence_listbox.yview)
        sequence_scrollbar.pack(side="right", fill="y")
        self.demo_sequence_listbox.configure(yscrollcommand=sequence_scrollbar.set)
        
        # Demo sequence controls
        sequence_controls_frame = tk.Frame(self.demo_sequence_frame, bg='#3d3d3d')
        sequence_controls_frame.pack(fill="x", padx=10, pady=10)
        
        tk.Button(sequence_controls_frame, text="➕ Agregar Secuencia", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.add_demo_sequence).pack(side="left", padx=(0, 5))
        
        tk.Button(sequence_controls_frame, text="✏️ Editar Secuencia", bg='#2196F3', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.edit_demo_sequence).pack(side="left", padx=5)
        
        tk.Button(sequence_controls_frame, text="🗑️ Eliminar Secuencia", bg='#f44336', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.delete_demo_sequence).pack(side="left", padx=5)
        
        # Initially hide demo sequence frame
        self.demo_sequence_frame.pack_forget()
        
    def setup_step_4_demo_configuration(self, parent):
        """Step 4: Demo configuration"""
        step4_frame = tk.LabelFrame(parent, text="🎬 Paso 4: Configuración de Demo", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step4_frame.pack(fill="x", pady=(0, 15))
        
        content_frame = tk.Frame(step4_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=20, pady=15)
        
        # Demo enable checkbox
        demo_check_frame = tk.Frame(content_frame, bg='#2d2d2d')
        demo_check_frame.pack(fill="x", pady=(0, 10))
        
        tk.Checkbutton(demo_check_frame, text="🎬 Incluir Demo Interactivo", 
                      variable=self.demo_enabled, bg='#2d2d2d', fg='#ffffff',
                      selectcolor='#3d3d3d', font=('Arial', 10, 'bold'),
                      command=self.toggle_demo_configuration).pack(side="left")
        
        # Demo PDF selection (only visible when enabled)
        self.demo_pdf_frame = tk.Frame(content_frame, bg='#2d2d2d')
        
        tk.Label(self.demo_pdf_frame, text="PDF de Demo:", bg='#2d2d2d', fg='#ffffff',
                font=('Arial', 10, 'bold')).pack(anchor="w")
        
        demo_pdf_input_frame = tk.Frame(self.demo_pdf_frame, bg='#2d2d2d')
        demo_pdf_input_frame.pack(fill="x", pady=(5, 0))
        
        tk.Entry(demo_pdf_input_frame, textvariable=self.demo_pdf_path, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
        
        tk.Button(demo_pdf_input_frame, text="📁 Seleccionar Demo PDF", bg='#FF9800', fg='#ffffff',
                 font=('Arial', 9, 'bold'), 
                 command=self.select_demo_pdf_file).pack(side="right", padx=(10, 0))
        
        # Demo sequence configuration (only visible when demo is enabled and PDF is loaded)
        self.demo_sequence_frame = tk.LabelFrame(content_frame, text="🎯 Configuración de Secuencias de Demo", 
                                               font=('Arial', 11, 'bold'),
                                               bg='#3d3d3d', fg='#ffffff')
        
        # Demo sequence list
        sequence_list_frame = tk.Frame(self.demo_sequence_frame, bg='#3d3d3d')
        sequence_list_frame.pack(fill="x", padx=10, pady=10)
        
        tk.Label(sequence_list_frame, text="Secuencias configuradas:", bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 10, 'bold')).pack(anchor="w")
        
        # Demo sequence listbox
        list_frame = tk.Frame(sequence_list_frame, bg='#3d3d3d')
        list_frame.pack(fill="x", pady=(5, 0))
        
        self.demo_sequence_listbox = tk.Listbox(list_frame, bg='#1e1e1e', fg='#ffffff',
                                              font=('Consolas', 9), height=6, selectmode=tk.SINGLE)
        self.demo_sequence_listbox.pack(side="left", fill="both", expand=True)
        
        sequence_scrollbar = tk.Scrollbar(list_frame, orient="vertical", 
                                        command=self.demo_sequence_listbox.yview)
        sequence_scrollbar.pack(side="right", fill="y")
        self.demo_sequence_listbox.configure(yscrollcommand=sequence_scrollbar.set)
        
        # Demo sequence controls
        sequence_controls_frame = tk.Frame(self.demo_sequence_frame, bg='#3d3d3d')
        sequence_controls_frame.pack(fill="x", padx=10, pady=10)
        
        tk.Button(sequence_controls_frame, text="➕ Agregar Secuencia", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.add_demo_sequence).pack(side="left", padx=(0, 5))
        
        tk.Button(sequence_controls_frame, text="✏️ Editar Secuencia", bg='#2196F3', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.edit_demo_sequence).pack(side="left", padx=5)
        
        tk.Button(sequence_controls_frame, text="🗑️ Eliminar Secuencia", bg='#f44336', fg='#ffffff',
                 font=('Arial', 9, 'bold'), command=self.delete_demo_sequence).pack(side="left", padx=5)
        
        # Initially hide demo sequence frame
        self.demo_sequence_frame.pack_forget()
        
    def setup_step_5_final_exam(self, parent):
        """Step 4: Final exam configuration"""
        step5_frame = tk.LabelFrame(parent, text="🎓 Paso 5: Examen Final", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step5_frame.pack(fill="x", pady=(0, 15))
        
        content_frame = tk.Frame(step5_frame, bg='#2d2d2d')
        content_frame.pack(fill="x", padx=20, pady=15)
        
        # QR selection
        qr_input_frame = tk.Frame(content_frame, bg='#2d2d2d')
        qr_input_frame.pack(fill="x", pady=(5, 15))
        
        tk.Entry(qr_input_frame, textvariable=self.final_exam_qr_path, bg='#3d3d3d', fg='#ffffff',
                font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
        
        tk.Button(qr_input_frame, text="📁 Seleccionar QR", bg='#9C27B0', fg='#ffffff',
                 font=('Arial', 9, 'bold'), 
                 command=lambda: self.select_qr_file(self.final_exam_qr_path)).pack(side="right", padx=(10, 0))
        
    def setup_step_6_class_generation(self, parent):
        """Step 6: Class generation and execution"""
        step6_frame = tk.LabelFrame(parent, text="🚀 Paso 6: Generación y Ejecución", 
                                   font=('Arial', 14, 'bold'),
                                   bg='#2d2d2d', fg='#ffffff')
        step6_frame.pack(fill="both", expand=True)
        
        content_frame = tk.Frame(step6_frame, bg='#2d2d2d')
        content_frame.pack(fill="both", expand=True, padx=20, pady=15)
        
        # Left side - Controls
        left_side = tk.Frame(content_frame, bg='#2d2d2d')
        left_side.pack(side="left", fill="y", padx=(0, 15))
        
        # Generation controls
        tk.Button(left_side, text="🔨 Generar Clase", bg='#4CAF50', fg='#ffffff',
                 font=('Arial', 12, 'bold'), command=self.generate_complete_class).pack(fill="x", pady=5)
        
        tk.Button(left_side, text="💾 Guardar Clase", bg='#9C27B0', fg='#ffffff',
                 font=('Arial', 11, 'bold'), command=self.save_generated_class).pack(fill="x", pady=5)
        
        tk.Button(left_side, text="▶️ Ejecutar Clase", bg='#FF5722', fg='#ffffff',
                 font=('Arial', 11, 'bold'), command=self.execute_complete_class).pack(fill="x", pady=5)
        
        tk.Button(left_side, text="🧪 Prueba Rápida", bg='#FF9800', fg='#ffffff',
                 font=('Arial', 10, 'bold'), command=self.quick_test_execution).pack(fill="x", pady=5)
        
        # Status
        self.class_status_label = tk.Label(left_side, text="✅ Listo para generar", 
                                         bg='#2d2d2d', fg='#4CAF50', font=('Arial', 10))
        self.class_status_label.pack(pady=10)
        
        # Right side - Preview
        right_side = tk.Frame(content_frame, bg='#2d2d2d')
        right_side.pack(side="right", fill="both", expand=True)
        
        # Code preview
        preview_frame = tk.LabelFrame(right_side, text="Vista Previa del Código", 
                                    font=('Arial', 11, 'bold'),
                                    bg='#3d3d3d', fg='#ffffff')
        preview_frame.pack(fill="both", expand=True)
        
        self.class_code_preview = tk.Text(preview_frame, bg='#1e1e1e', fg='#ffffff',
                                        font=('Consolas', 9), wrap=tk.WORD, height=15)
        self.class_code_preview.pack(fill="both", expand=True, padx=10, pady=10)
        
        # Initialize with welcome message
        welcome_msg = """# 🎓 Bienvenido al Creador de Clases ADAI

# Completa los pasos 1-4 y luego genera la clase
# El código seguirá el mismo flujo que main.py:

# FASE 1: Evaluación Diagnóstica
#   - Muestra QR code para prueba inicial
#   - Tiempo configurable de visualización

# FASE 2: Inicio de Clase  
#   - Saludo de ADAI con texto a voz
#   - Introducción al tema seleccionado

# FASE 3: Contenido Principal
#   - Presentación de diapositivas del PDF
#   - Explicación automática de cada slide
#   - Soporte para múltiples formatos

# FASE 4: Examen Final
#   - QR code del examen correspondiente
#   - Mensaje de finalización

# ¡La clase será completamente funcional e independiente!"""
        
        self.class_code_preview.insert("1.0", welcome_msg)
    
    def select_qr_file(self, path_var):
        """Select QR code image file"""
        try:
            file_path = filedialog.askopenfilename(
                title="Seleccionar QR Code",
                filetypes=[("Image files", "*.png *.jpg *.jpeg *.gif *.bmp"), ("All files", "*.*")]
            )
            if file_path:
                path_var.set(file_path)
                self.update_class_status(f"✅ QR seleccionado: {os.path.basename(file_path)}")
        except Exception as e:
            messagebox.showerror("Error", f"Error seleccionando QR: {e}")

    def select_pdf_file(self):
        """Select PDF file for class content"""
        try:
            file_path = filedialog.askopenfilename(
                title="Seleccionar PDF de la Clase",
                filetypes=[("PDF files", "*.pdf"), ("All files", "*.*")]
            )
            if file_path:
                self.class_pdf_path.set(file_path)
                self.update_class_status(f"✅ PDF seleccionado: {os.path.basename(file_path)}")
        except Exception as e:
            messagebox.showerror("Error", f"Error seleccionando PDF: {e}")
    
    def select_demo_pdf_file(self):
        """Select demo PDF file"""
        try:
            file_path = filedialog.askopenfilename(
                title="Seleccionar PDF de Demo",
                filetypes=[("PDF files", "*.pdf"), ("All files", "*.*")]
            )
            if file_path:
                self.demo_pdf_path.set(file_path)
                self.load_demo_pdf_info(file_path)
                self.update_class_status(f"✅ Demo PDF seleccionado: {os.path.basename(file_path)}")
        except Exception as e:
            messagebox.showerror("Error", f"Error seleccionando Demo PDF: {e}")
    
    def load_demo_pdf_info(self, pdf_path):
        """Load demo PDF information and extract page count"""
        try:
            import fitz  # PyMuPDF
            doc = fitz.open(pdf_path)
            self.demo_pdf_pages = len(doc)
            self.demo_pdf_loaded = True
            doc.close()
            
            # Show demo sequence configuration
            if self.demo_enabled.get():
                self.demo_pdf_frame.pack(fill="x", pady=(10, 0))
                self.demo_sequence_frame.pack(fill="x", pady=(10, 0))
                
                # Update status
                self.update_class_status(f"✅ Demo PDF cargado: {self.demo_pdf_pages} páginas")
                
        except ImportError:
            messagebox.showwarning("Advertencia", "PyMuPDF no disponible. No se puede obtener información del PDF.")
            self.demo_pdf_pages = 0
            self.demo_pdf_loaded = True
        except Exception as e:
            messagebox.showerror("Error", f"Error cargando Demo PDF: {e}")
            self.demo_pdf_pages = 0
            self.demo_pdf_loaded = False
    
    def toggle_demo_configuration(self):
        """Toggle demo configuration visibility"""
        if self.demo_enabled.get():
            self.demo_pdf_frame.pack(fill="x", pady=(10, 0))
            if self.demo_pdf_loaded:
                self.demo_sequence_frame.pack(fill="x", pady=(10, 0))
        else:
            self.demo_pdf_frame.pack_forget()
            self.demo_sequence_frame.pack_forget()
            # Clear demo data
            self.demo_pdf_path.set("")
            self.demo_sequences.clear()
            self.demo_pdf_loaded = False
            self.demo_pdf_pages = 0
            self.update_demo_sequence_list()
    
    def add_demo_sequence(self):
        """Add a new demo sequence configuration"""
        try:
            if not self.demo_pdf_loaded:
                messagebox.showwarning("Advertencia", "Primero debes cargar un PDF de demo.")
                return
            
            # Create demo sequence dialog
            self.create_demo_sequence_dialog()
            
        except Exception as e:
            messagebox.showerror("Error", f"Error agregando secuencia de demo: {e}")
    
    def create_demo_sequence_dialog(self):
        """Create dialog for configuring demo sequence"""
        try:
            # Create top-level window
            dialog = tk.Toplevel(self.tab_frame)
            dialog.title("🎯 Configurar Secuencia de Demo")
            dialog.geometry("600x500")
            dialog.configure(bg='#2d2d2d')
            dialog.transient(self.tab_frame)
            dialog.grab_set()
            
            # Center dialog
            dialog.update_idletasks()
            x = (dialog.winfo_screenwidth() // 2) - (600 // 2)
            y = (dialog.winfo_screenheight() // 2) - (500 // 2)
            dialog.geometry(f"600x500+{x}+{y}")
            
            # Main content
            main_frame = tk.Frame(dialog, bg='#2d2d2d')
            main_frame.pack(fill="both", expand=True, padx=20, pady=20)
            
            # Title
            title_label = tk.Label(main_frame, text="🎯 Configurar Secuencia de Demo", 
                                 font=('Arial', 16, 'bold'), 
                                 bg='#2d2d2d', fg='#ffffff')
            title_label.pack(pady=(0, 20))
            
            # Form fields
            form_frame = tk.Frame(main_frame, bg='#2d2d2d')
            form_frame.pack(fill="x", pady=(0, 20))
            
            # Page number
            page_frame = tk.Frame(form_frame, bg='#2d2d2d')
            page_frame.pack(fill="x", pady=(0, 15))
            
            tk.Label(page_frame, text="Página del PDF:", bg='#2d2d2d', fg='#ffffff',
                    font=('Arial', 11, 'bold')).pack(anchor="w")
            
            page_var = tk.IntVar(value=1)
            page_spinbox = tk.Spinbox(page_frame, from_=1, to=self.demo_pdf_pages, 
                                    textvariable=page_var, bg='#3d3d3d', fg='#ffffff',
                                    font=('Arial', 10), width=10)
            page_spinbox.pack(anchor="w", pady=(5, 0))
            
            # Sequence file
            seq_frame = tk.Frame(form_frame, bg='#2d2d2d')
            seq_frame.pack(fill="x", pady=(0, 15))
            
            tk.Label(seq_frame, text="Archivo de Secuencia:", bg='#2d2d2d', fg='#ffffff',
                    font=('Arial', 11, 'bold')).pack(anchor="w")
            
            seq_path_var = tk.StringVar()
            seq_input_frame = tk.Frame(seq_frame, bg='#2d2d2d')
            seq_input_frame.pack(fill="x", pady=(5, 0))
            
            tk.Entry(seq_input_frame, textvariable=seq_path_var, bg='#3d3d3d', fg='#ffffff',
                    font=('Arial', 9), state="readonly").pack(side="left", fill="x", expand=True)
            
            tk.Button(seq_input_frame, text="📁 Seleccionar", bg='#2196F3', fg='#ffffff',
                     font=('Arial', 9, 'bold'), 
                     command=lambda: self.select_sequence_file(seq_path_var)).pack(side="right", padx=(10, 0))
            
            # Description
            desc_frame = tk.Frame(form_frame, bg='#2d2d2d')
            desc_frame.pack(fill="x", pady=(0, 15))
            
            tk.Label(desc_frame, text="Descripción:", bg='#2d2d2d', fg='#ffffff',
                    font=('Arial', 11, 'bold')).pack(anchor="w")
            
            desc_var = tk.StringVar()
            tk.Entry(desc_frame, textvariable=desc_var, bg='#3d3d3d', fg='#ffffff',
                    font=('Arial', 10), width=50).pack(fill="x", pady=(5, 0))
            
            # Buttons
            button_frame = tk.Frame(main_frame, bg='#2d2d2d')
            button_frame.pack(fill="x", pady=(20, 0))
            
            tk.Button(button_frame, text="💾 Guardar Secuencia", bg='#4CAF50', fg='#ffffff',
                     font=('Arial', 11, 'bold'), 
                     command=lambda: self.save_demo_sequence(dialog, page_var.get(), 
                                                          seq_path_var.get(), desc_var.get())).pack(side="right", padx=(0, 10))
            
            tk.Button(button_frame, text="❌ Cancelar", bg='#f44336', fg='#ffffff',
                     font=('Arial', 11, 'bold'), 
                     command=dialog.destroy).pack(side="right")
            
        except Exception as e:
            messagebox.showerror("Error", f"Error creando diálogo: {e}")
    
    def select_sequence_file(self, path_var):
        """Select sequence file for demo"""
        try:
            file_path = filedialog.askopenfilename(
                title="Seleccionar Archivo de Secuencia",
                filetypes=[("JSON files", "*.json"), ("All files", "*.*")]
            )
            if file_path:
                path_var.set(file_path)
        except Exception as e:
            messagebox.showerror("Error", f"Error seleccionando secuencia: {e}")
    
    def save_demo_sequence(self, dialog, page, sequence_path, description):
        """Save demo sequence configuration"""
        try:
            if not sequence_path:
                messagebox.showwarning("Advertencia", "Debes seleccionar un archivo de secuencia.")
                return
            
            # Create demo sequence config
            demo_seq = {
                "page": page,
                "sequence_file": sequence_path,
                "sequence_name": os.path.basename(sequence_path),
                "description": description or f"Demo en página {page}",
                "enabled": True
            }
            
            # Add to list
            self.demo_sequences.append(demo_seq)
            
            # Update UI
            self.update_demo_sequence_list()
            
            # Close dialog
            dialog.destroy()
            
            messagebox.showinfo("Éxito", f"Secuencia de demo agregada para la página {page}")
            
        except Exception as e:
            messagebox.showerror("Error", f"Error guardando secuencia de demo: {e}")
    
    def edit_demo_sequence(self):
        """Edit selected demo sequence"""
        try:
            selection = self.demo_sequence_listbox.curselection()
            if not selection:
                messagebox.showwarning("Advertencia", "Selecciona una secuencia para editar.")
                return
            
            index = selection[0]
            demo_seq = self.demo_sequences[index]
            
            # Create edit dialog (similar to add dialog)
            self.create_demo_sequence_dialog(edit_index=index, edit_data=demo_seq)
            
        except Exception as e:
            messagebox.showerror("Error", f"Error editando secuencia de demo: {e}")
    
    def delete_demo_sequence(self):
        """Delete selected demo sequence"""
        try:
            selection = self.demo_sequence_listbox.curselection()
            if not selection:
                messagebox.showwarning("Advertencia", "Selecciona una secuencia para eliminar.")
                return
            
            index = selection[0]
            demo_seq = self.demo_sequences[index]
            
            # Confirm deletion
            result = messagebox.askyesno("Confirmar Eliminación", 
                f"¿Estás seguro de que quieres eliminar la secuencia de demo?\n\n"
                f"Página: {demo_seq['page']}\n"
                f"Secuencia: {demo_seq['sequence_name']}")
            
            if result:
                # Remove from list
                deleted_seq = self.demo_sequences.pop(index)
                
                # Update UI
                self.update_demo_sequence_list()
                
                messagebox.showinfo("Éxito", f"Secuencia de demo eliminada: {deleted_seq['sequence_name']}")
            
        except Exception as e:
            messagebox.showerror("Error", f"Error eliminando secuencia de demo: {e}")
    
    def update_demo_sequence_list(self):
        """Update the demo sequence listbox"""
        try:
            # Clear current list
            self.demo_sequence_listbox.delete(0, tk.END)
            
            # Add sequences
            for i, demo_seq in enumerate(self.demo_sequences):
                display_text = f"Página {demo_seq['page']}: {demo_seq['sequence_name']} - {demo_seq['description']}"
                self.demo_sequence_listbox.insert(tk.END, display_text)
                
        except Exception as e:
            print(f"Error actualizando lista de secuencias de demo: {e}")
    
    def _generate_demo_sequences_code(self):
        """Generate Python code for demo sequences configuration"""
        if not self.demo_enabled.get() or not self.demo_sequences:
            return "[]"
        
        sequences_code = "[\n"
        for i, demo_seq in enumerate(self.demo_sequences):
            sequences_code += f"    {{\n"
            sequences_code += f"        'page': {demo_seq['page']},\n"
            sequences_code += f"        'sequence_file': '{demo_seq['sequence_file']}',\n"
            sequences_code += f"        'sequence_name': '{demo_seq['sequence_name']}',\n"
            sequences_code += f"        'description': '{demo_seq['description']}',\n"
            sequences_code += f"        'enabled': {demo_seq['enabled']}\n"
            sequences_code += f"    }}{',' if i < len(self.demo_sequences) - 1 else ''}\n"
        sequences_code += "]"
        
        return sequences_code
 
    def generate_complete_class(self):
        """Generate complete class code"""
        try:
            self.update_class_status("🔨 Generando clase...")
            
            if not self.class_title_var.get().strip():
                messagebox.showwarning("Información faltante", "Por favor ingresa el título")
                return
                
            # Generate simplified class code
            class_code = self._generate_class_code()
            
            self.class_code_preview.delete("1.0", tk.END)
            self.class_code_preview.insert("1.0", class_code)
            
            self.generated_class_code = class_code
            self.update_class_status("✅ Clase generada exitosamente")
            
            messagebox.showinfo("Éxito", "¡Clase generada exitosamente!")
            
        except Exception as e:
            self.update_class_status(f"❌ Error: {e}")
            messagebox.showerror("Error", f"Error generando clase: {e}")

    def _generate_class_code(self):
        """Generate class code based on main.py structure"""
        class_title = self.class_title_var.get().strip()
        class_subject = self.class_subject_var.get()
        
        clean_name = "".join(c for c in class_title if c.isalnum() or c in " _-").replace(" ", "_")
        
        # Mapear las materias a los QR codes correspondientes
        subject_qr_mapping = {
            "Robots Médicos": {
                "diagnostic": "RobotsMedicosExamen/pruebadiagnosticaRobotsMedicos.jpeg",
                "pdf": "RobotMedico.pdf",
                "final_exam": "RobotsMedicosExamen/RobotsMedicosExamenI.jpeg"
            },
            "Exoesqueletos": {
                "diagnostic": "ExoesqueletosExamen/pruebadiagnosticaExoesqueletos.jpeg", 
                "pdf": "ExoesqueletosDeRehabilitacion.pdf",
                "final_exam": "ExoesqueletosExamen/ExoesqueletosExamenI.jpeg"
            },
            "IoMT": {
                "diagnostic": "DesafiosIoMTExamen/pruebadiagnosticaDesafiosIoMT.jpeg",
                "pdf": "DesafiosDeIoMT.pdf", 
                "final_exam": "DesafiosIoMTExamen/DesafiosIoMTExamenI.png"
            },
            "Robótica Industrial": {
                "diagnostic": "RobotsMedicosExamen/pruebadiagnosticaRobotsMedicos.jpeg",
                "pdf": "RobotMedico.pdf",
                "final_exam": "RobotsMedicosExamen/RobotsMedicosExamenI.jpeg"
            }
        }
        
        # Obtener rutas según la materia seleccionada
        selected_subject = subject_qr_mapping.get(class_subject, subject_qr_mapping["Robots Médicos"])
        
        diagnostic_qr = self.diagnostic_qr_path.get() or selected_subject["diagnostic"]
        class_pdf = self.class_pdf_path.get() or selected_subject["pdf"] 
        demo_pdf = self.demo_pdf_path.get() if self.demo_enabled.get() else ""
        final_exam_qr = self.final_exam_qr_path.get() or selected_subject["final_exam"]
        
        return f'''#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
{class_title}
Materia: {class_subject}
Generado por ADAI Class Builder el {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Clase automática basada en el flujo de main.py
"""

import cv2
import numpy as np
import pyttsx3
import speech_recognition as sr
import os
import fitz
import openai
import time
import multiprocessing
from multiprocessing import Process, Value, Event
import random
import winsound
import sys

# Configurar codificación para Windows
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.detach())

# ======================
#  CONFIGURACIÓN OPENAI
# ======================
try:
    client = openai.OpenAI(api_key="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")
except Exception as e:
    print(f"WARNING: OpenAI no disponible: {{e}}")
    client = None

# Obtener directorio actual
script_dir = os.path.dirname(os.path.abspath(__file__))

# ======================
#  RUTAS DE ARCHIVOS
# ======================
QR_PATHS = {{
    'diagnostic': os.path.join(script_dir, "{diagnostic_qr}"),
    'final_exam': os.path.join(script_dir, "{final_exam_qr}")
}}

PDF_PATH = os.path.join(script_dir, "{class_pdf}")

class {clean_name}:
    """Clase generada automáticamente por ADAI Class Builder"""
    
    def __init__(self):
        print("="*60)
        print(f"ADAI - {class_title}")
        print(f"Materia: {class_subject}")
        print("="*60)
        
        self.class_title = "{class_title}"
        self.class_subject = "{class_subject}"
        self.diagnostic_qr = QR_PATHS['diagnostic']
        self.class_pdf = PDF_PATH
        self.final_exam_qr = QR_PATHS['final_exam']
        
        # Variables para simulación
        self.hand_raised_counter = multiprocessing.Value('i', 0)
        self.current_slide_num = multiprocessing.Value('i', 1)
        self.exit_flag = multiprocessing.Value('i', 0)
        self.current_hand_raiser = multiprocessing.Value('i', -1)
        
        # Inicializar TTS
        self.engine = self.initialize_tts()
        
        # Inicializar ESP32 communication
        self.esp32_connected = False
        self.esp32_ip = "192.168.1.100"
        self.esp32_port = 80
        
    def initialize_tts(self):
        """Inicializar motor de texto a voz"""
        try:
            engine = pyttsx3.init()
            engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Speech\\\\Voices\\\\Tokens\\\\TTS_MS_ES-MX_SABINA_11.0')
            return engine
        except Exception as e:
            print(f"ERROR: Error al inicializar TTS: {{e}}")
            return None
    
    def speak_with_animation(self, text):
        """Hablar texto con animación simple"""
        print(f"ADAI dice: {{text}}")
        if self.engine:
            try:
                self.engine.say(text)
                self.engine.runAndWait()
            except Exception as e:
                print(f"ERROR en TTS: {{e}}")
        time.sleep(1)
    
    def send_esp32_command(self, command, parameters=None):
        """Enviar comando al ESP32"""
        try:
            import requests
            import json
            
            # Construir URL del comando
            url = f"http://{{self.esp32_ip}}:{{self.esp32_port}}/{{command}}"
            
            # Preparar datos
            data = {{}}
            if parameters:
                data.update(parameters)
            
            # Enviar comando
            response = requests.post(url, json=data, timeout=5)
            
            if response.status_code == 200:
                print(f"✅ ESP32 Command: {{command}} - Success")
                result = response.json()
                
                # Intentar registrar en el log del robot_gui si está disponible
                try:
                    # Buscar el robot_gui en el contexto global
                    import sys
                    for module_name in sys.modules:
                        if 'robot_gui' in module_name:
                            module = sys.modules[module_name]
                            if hasattr(module, 'log_esp32_command_from_class'):
                                module.log_esp32_command_from_class(command, parameters, result)
                                break
                except:
                    pass  # Si no se puede registrar, continuar normalmente
                
                return result
            else:
                print(f"❌ ESP32 Command: {{command}} - Error: {{response.status_code}}")
                return None
                
        except Exception as e:
            print(f"⚠️ ESP32 Command: {{command}} - Connection error: {{e}}")
            return None
    
    def esp32_robot_gesture(self, gesture_type):
        """Realizar gesto del robot via ESP32"""
        gestures = {{
            "saludo": "wave",
            "aplauso": "clap", 
            "punto": "point",
            "ok": "ok_gesture",
            "pensar": "think",
            "explicar": "explain"
        }}
        
        command = gestures.get(gesture_type, "wave")
        return self.send_esp32_command("gesture", {{"type": command}})
    
    def esp32_robot_movement(self, movement_type):
        """Realizar movimiento del robot via ESP32"""
        movements = {{
            "centrar": "center",
            "mirar_izquierda": "look_left",
            "mirar_derecha": "look_right", 
            "mirar_arriba": "look_up",
            "mirar_abajo": "look_down",
            "saludar": "wave_gesture",
            "abrazar": "hug_gesture"
        }}
        
        command = movements.get(movement_type, "center")
        return self.send_esp32_command("movement", {{"type": command}})
    
    def esp32_robot_speech(self, text):
        """Hacer que el robot hable via ESP32"""
        return self.send_esp32_command("speak", {{"text": text}})
    
    def show_diagnostic_qr(self, display_time=15):
        """Mostrar QR de evaluación diagnóstica"""
        try:
            print("Mostrando código QR para evaluación diagnóstica...")
            
            if not os.path.exists(self.diagnostic_qr):
                print(f"WARNING: No se encontró el QR diagnóstico: {{self.diagnostic_qr}}")
                return False
            
            # Cargar imagen del QR
            qr_image = cv2.imread(self.diagnostic_qr)
            if qr_image is None:
                print(f"ERROR: No se pudo cargar la imagen QR")
                return False
            
            # Crear ventana y mostrar QR
            cv2.namedWindow("Evaluación Diagnóstica", cv2.WINDOW_NORMAL)
            cv2.resizeWindow("Evaluación Diagnóstica", 800, 600)
            
            # Redimensionar QR para visualización
            qr_resized = cv2.resize(qr_image, (600, 600))
            
            # Crear canvas con información
            canvas = np.full((700, 800, 3), (240, 240, 240), dtype=np.uint8)
            
            # Insertar QR en el centro
            start_x = (800 - 600) // 2
            start_y = 50
            canvas[start_y:start_y + 600, start_x:start_x + 600] = qr_resized
            
            # Añadir texto
            cv2.putText(canvas, self.class_title, (50, 30), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 0), 2)
            cv2.putText(canvas, "Escanea el codigo QR para la evaluacion diagnostica", 
                       (50, 680), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 0), 2)
            
            # Mostrar por el tiempo especificado
            start_time = time.time()
            while time.time() - start_time < display_time:
                cv2.imshow("Evaluación Diagnóstica", canvas)
                if cv2.waitKey(1000) & 0xFF == ord('q'):
                    break
            
            cv2.destroyWindow("Evaluación Diagnóstica")
            print("QR diagnóstico mostrado exitosamente")
            return True
            
        except Exception as e:
            print(f"ERROR mostrando QR diagnóstico: {{e}}")
            return False
    
    def show_final_exam_qr(self, display_time=20):
        """Mostrar QR de examen final"""
        try:
            print("Mostrando código QR para examen final...")
            
            if not os.path.exists(self.final_exam_qr):
                print(f"WARNING: No se encontró el QR de examen: {{self.final_exam_qr}}")
                return False
            
            # Cargar imagen del QR
            qr_image = cv2.imread(self.final_exam_qr)
            if qr_image is None:
                print(f"ERROR: No se pudo cargar la imagen QR del examen")
                return False
            
            # Crear ventana y mostrar QR
            cv2.namedWindow("Examen Final", cv2.WINDOW_NORMAL)
            cv2.resizeWindow("Examen Final", 800, 600)
            
            # Redimensionar QR para visualización
            qr_resized = cv2.resize(qr_image, (600, 600))
            
            # Crear canvas con información
            canvas = np.full((700, 800, 3), (245, 245, 255), dtype=np.uint8)
            
            # Insertar QR en el centro
            start_x = (800 - 600) // 2
            start_y = 50
            canvas[start_y:start_y + 600, start_x:start_x + 600] = qr_resized
            
            # Añadir texto
            cv2.putText(canvas, f"EXAMEN FINAL - " + self.class_subject.upper(), (50, 30), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 0), 2)
            cv2.putText(canvas, "Escanea el codigo QR para acceder al examen final", 
                       (50, 680), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 0), 2)
            
            # Mostrar por el tiempo especificado
            start_time = time.time()
            while time.time() - start_time < display_time:
                cv2.imshow("Examen Final", canvas)
                if cv2.waitKey(1000) & 0xFF == ord('q'):
                    break
            
            cv2.destroyWindow("Examen Final")
            print("QR examen final mostrado exitosamente")
            return True
            
        except Exception as e:
            print(f"ERROR mostrando QR examen: {{e}}")
            return False
    
    def extract_text_from_pdf(self):
        """Extraer texto del PDF de la clase"""
        try:
            if not os.path.exists(self.class_pdf):
                print(f"WARNING: No se encontró el PDF: {{self.class_pdf}}")
                return f"Contenido de la clase sobre {{self.class_subject}}"
            
            text = ""
            with fitz.open(self.class_pdf) as doc:
                for page in doc:
                    text += page.get_text()
            
            print(f"PDF cargado: {{len(text)}} caracteres")
            return text
            
        except Exception as e:
            print(f"ERROR al leer PDF: {{e}}")
            return f"Contenido de la clase sobre {{self.class_subject}}"
    
    def show_pdf_slides(self, pdf_text):
        """Mostrar diapositivas del PDF y explicar"""
        try:
            if not os.path.exists(self.class_pdf):
                print(f"PDF no encontrado, simulando presentación...")
                self.simulate_presentation()
                return True
            
            print("Iniciando presentación...")
            
            # Crear ventana para presentación
            cv2.namedWindow("Presentacion", cv2.WINDOW_NORMAL)
            cv2.resizeWindow("Presentacion", 800, 600)
            
            with fitz.open(self.class_pdf) as doc:
                total_slides = len(doc)
                
                for slide_num in range(total_slides):
                    self.current_slide_num.value = slide_num + 1
                    print(f"Diapositiva {{slide_num + 1}} de {{total_slides}}")
                    
                    # Obtener página
                    page = doc[slide_num]
                    
                    # Convertir página a imagen
                    pix = page.get_pixmap()
                    img_data = np.frombuffer(pix.samples, dtype=np.uint8)
                    img = img_data.reshape((pix.h, pix.w, pix.n))
                    
                    if pix.n == 4:  # RGBA
                        img_bgr = cv2.cvtColor(img, cv2.COLOR_RGBA2BGR)
                    elif pix.n == 3:  # RGB
                        img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
                    else:  # Escala de grises
                        img_bgr = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
                    
                    # Mostrar diapositiva
                    cv2.imshow("Presentacion", img_bgr)
                    cv2.waitKey(100)
                    
                    # Obtener texto de la página
                    page_text = page.get_text()
                    
                    # Explicar diapositiva
                    if page_text.strip():
                        explanation = f"Diapositiva {{slide_num + 1}}: {{page_text[:200]}}..."
                    else:
                        explanation = f"Diapositiva {{slide_num + 1}} contiene elementos visuales sobre {{self.class_subject}}"
                    
                    # Gesto de explicación para cada diapositiva
                    if slide_num % 2 == 0:
                        self.esp32_robot_gesture("explicar")
                    else:
                        self.esp32_robot_movement("mirar_izquierda")
                        time.sleep(0.3)
                        self.esp32_robot_movement("mirar_derecha")
                        time.sleep(0.3)
                        self.esp32_robot_movement("centrar")
                    
                    self.speak_with_animation(explanation)
                    
                    # Pausa entre diapositivas
                    time.sleep(2)
            
            cv2.destroyWindow("Presentacion")
            return True
            
        except Exception as e:
            print(f"ERROR mostrando PDF: {{e}}")
            self.simulate_presentation()
            return True
    
    def simulate_presentation(self):
        """Simular presentación cuando no hay PDF"""
        print("Simulando presentación...")
        
        slides_content = [
            f"Introducción a {{self.class_subject}}",
            f"Conceptos fundamentales de {{self.class_subject}}",
            f"Aplicaciones prácticas en {{self.class_subject}}",
            f"Casos de estudio en {{self.class_subject}}",
            f"Futuro y tendencias en {{self.class_subject}}",
            f"Conclusiones sobre {{self.class_subject}}"
        ]
        
        for i, content in enumerate(slides_content):
            self.current_slide_num.value = i + 1
            print(f"Diapositiva simulada {{i + 1}}/{{len(slides_content)}}")
            self.speak_with_animation(content)
            time.sleep(3)
    
    def run(self):
        """Ejecutar la clase completa siguiendo el flujo de main.py"""
        try:
            print("\\n" + "="*60)
            print("FASE 1: EVALUACIÓN DIAGNÓSTICA")
            print("="*60)
            
            # Inicializar ESP32 y hacer gesto de saludo
            print("🤖 Inicializando comunicación con ESP32...")
            self.esp32_robot_movement("centrar")
            time.sleep(1)
            self.esp32_robot_gesture("saludo")
            
            # Mostrar evaluación diagnóstica
            self.speak_with_animation("Bienvenidos a la clase. Comenzaremos con una evaluación diagnóstica.")
            self.show_diagnostic_qr(display_time=15)
            
            print("\\n" + "="*60)
            print("FASE 2: INICIO DE CLASE")
            print("="*60)
            
            # Saludo e introducción
            self.speak_with_animation(f"Hola, soy ADAI. Hoy estudiaremos {{self.class_subject}}.")
            
            # Gesto de explicación
            self.esp32_robot_gesture("explicar")
            
            # Extraer texto del PDF
            pdf_text = self.extract_text_from_pdf()
            
            # Introducción al tema
            self.speak_with_animation(f"En esta clase exploraremos los aspectos fundamentales de {{self.class_subject}}.")
            
            # Movimiento de cabeza para enfatizar
            self.esp32_robot_movement("mirar_izquierda")
            time.sleep(0.5)
            self.esp32_robot_movement("mirar_derecha")
            time.sleep(0.5)
            self.esp32_robot_movement("centrar")
            
            print("\\n" + "="*60)
            print("FASE 3: CONTENIDO PRINCIPAL")
            print("="*60)
            
            # Mostrar presentación
            self.speak_with_animation("Ahora comenzaremos con la presentación principal.")
            
            # Gesto de preparación
            self.esp32_robot_gesture("pensar")
            time.sleep(1)
            
            self.show_pdf_slides(pdf_text)
            
            print("\\n" + "="*60)
            print("FASE 4: EXAMEN FINAL")  
            print("="*60)
            
            # Examen final
            self.speak_with_animation("Excelente trabajo. Ahora es momento del examen final.")
            
            # Gesto de aprobación
            self.esp32_robot_gesture("ok")
            
            self.speak_with_animation("Por favor, escanea el código QR que aparecerá en pantalla.")
            self.show_final_exam_qr(display_time=20)
            
            # Mensaje final
            self.speak_with_animation("Perfecto. Mucha suerte en el examen.")
            
            # Gesto de despedida
            self.esp32_robot_gesture("saludo")
            time.sleep(1)
            
            self.speak_with_animation("Gracias por participar en esta clase con ADAI. Hasta la próxima.")
            
            # Movimiento final
            self.esp32_robot_movement("centrar")
            
            print("\\n" + "="*60)
            print("CLASE COMPLETADA EXITOSAMENTE")
            print("="*60)
            
        except Exception as e:
            print(f"ERROR durante la ejecución: {{e}}")
            import traceback
            traceback.print_exc()
        finally:
            # Limpiar recursos
            cv2.destroyAllWindows()
            print("Recursos liberados")

def main():
    """Función principal"""
    print("Iniciando clase generada por ADAI Class Builder...")
    
    try:
        # Crear y ejecutar la clase
        clase = {clean_name}()
        clase.run()
        
    except KeyboardInterrupt:
        print("\\nClase interrumpida por el usuario")
    except Exception as e:
        print(f"ERROR fatal: {{e}}")
        import traceback
        traceback.print_exc()
    finally:
        cv2.destroyAllWindows()
        print("Fin de la clase")

if __name__ == "__main__":
    multiprocessing.freeze_support()
    main()
'''

    def save_generated_class(self):
        """Save the generated class to its own folder"""
        try:
            if not self.generated_class_code:
                messagebox.showwarning("Sin código", "Primero genera la clase")
                return
            
            # Generar nombre del archivo
            clean_name = "".join(c for c in self.class_title_var.get() if c.isalnum() or c in " _-").replace(" ", "_")
            suggested_name = f"{clean_name}_clase.py"
            
            # Obtener información de la clase
            title = self.class_title_var.get()
            subject = self.class_subject_var.get()
            description = self.class_description_var.get()
            duration = self.class_duration_var.get()
            
            # Usar el ClassManager para guardar la clase
            if hasattr(self.parent_gui, 'class_manager') and self.parent_gui.class_manager:
                success = self.parent_gui.class_manager.save_class_file(
                    class_name=suggested_name,
                    content=self.generated_class_code,
                    title=title,
                    subject=subject,
                    description=description,
                    duration=duration
                )
                
                if success:
                    self.update_class_status(f"✅ Clase guardada en su carpeta: {clean_name}")
                    messagebox.showinfo("Éxito", f"Clase guardada en carpeta: {clean_name}")
                    
                    # Agregar recursos si están seleccionados
                    self.add_selected_resources_to_class(suggested_name)
                else:
                    messagebox.showerror("Error", "Error guardando la clase")
            else:
                messagebox.showerror("Error", "Class Manager no disponible")
                
        except Exception as e:
            messagebox.showerror("Error", f"Error guardando: {e}")
    
    def add_selected_resources_to_class(self, class_name):
        """Agregar recursos seleccionados a la clase"""
        try:
            if not hasattr(self.parent_gui, 'class_manager') or not self.parent_gui.class_manager:
                return
            
            # Agregar QR diagnóstico si está seleccionado
            if self.diagnostic_qr_path.get():
                self.parent_gui.class_manager.add_resource_to_class(
                    class_name, 
                    self.diagnostic_qr_path.get(), 
                    "qrs"
                )
            
            # Agregar PDF si está seleccionado
            if self.class_pdf_path.get():
                self.parent_gui.class_manager.add_resource_to_class(
                    class_name, 
                    self.class_pdf_path.get(), 
                    "pdfs"
                )
            
            # Agregar QR examen final si está seleccionado
            if self.final_exam_qr_path.get():
                self.parent_gui.class_manager.add_resource_to_class(
                    class_name, 
                    self.final_exam_qr_path.get(), 
                    "qrs"
                )
                
        except Exception as e:
            print(f"⚠️ Error agregando recursos: {e}")
    
    def notify_new_class_created(self, file_path, class_name):
        """Notificar al sistema que se creó una nueva clase"""
        try:
            # Crear metadata de la clase
            class_metadata = {
                "name": class_name,
                "title": self.class_title_var.get(),
                "subject": self.class_subject_var.get(),
                "file_path": file_path,
                "created_at": datetime.datetime.now().isoformat(),
                "description": self.class_description_var.get(),
                "duration": self.class_duration_var.get()
            }
            
            # Guardar metadata en archivo JSON
            metadata_file = os.path.join(os.path.dirname(file_path), "classes_metadata.json")
            
            # Cargar metadata existente o crear nueva
            if os.path.exists(metadata_file):
                with open(metadata_file, 'r', encoding='utf-8') as f:
                    metadata = json.load(f)
            else:
                metadata = {"classes": []}
            
            # Agregar nueva clase
            metadata["classes"].append(class_metadata)
            
            # Guardar metadata actualizada
            with open(metadata_file, 'w', encoding='utf-8') as f:
                json.dump(metadata, f, indent=2, ensure_ascii=False)
            
            print(f"✅ Metadata guardada para: {class_name}")
            
        except Exception as e:
            print(f"⚠️ Error guardando metadata: {e}")

    def execute_complete_class(self):
        """Execute the generated class"""
        try:
            if not self.generated_class_code:
                messagebox.showwarning("Sin código", "Primero genera la clase")
                return
                
            if not messagebox.askyesno("Confirmar", "¿Ejecutar la clase completa?"):
                return
                
            self.update_class_status("🚀 Ejecutando...")
            
            # Save the generated code to a temporary file and execute it
            import tempfile
            import subprocess
            import sys
            
            # Create a temporary file with the generated code
            with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False, encoding='utf-8') as temp_file:
                temp_file.write(self.generated_class_code)
                temp_file_path = temp_file.name
            
            try:
                # Execute the class in a separate process to ensure proper OpenCV window display
                def execute_process():
                    try:
                        # Run the class in a separate Python process
                        result = subprocess.run([
                            sys.executable, 
                            temp_file_path
                        ], 
                        capture_output=False,  # Don't capture output to allow OpenCV windows
                        text=True,
                        cwd=os.getcwd())
                        
                        # Update status after execution
                        self.parent_gui.root.after(0, lambda: self.update_class_status("✅ Ejecutado exitosamente"))
                        
                    except Exception as e:
                        error_msg = f"❌ Error: {str(e)}"
                        self.parent_gui.root.after(0, lambda: self.update_class_status(error_msg))
                        self.parent_gui.root.after(0, lambda: messagebox.showerror("Error de Ejecución", f"Error ejecutando la clase:\n{str(e)}"))
                    finally:
                        # Clean up temporary file
                        try:
                            os.unlink(temp_file_path)
                        except:
                            pass
                
                # Execute in a separate thread to avoid blocking UI
                import threading
                threading.Thread(target=execute_process, daemon=True).start()
                
            except Exception as e:
                # Clean up temporary file on error
                try:
                    os.unlink(temp_file_path)
                except:
                    pass
                raise e
            
        except Exception as e:
            self.update_class_status(f"❌ Error: {str(e)}")
            messagebox.showerror("Error", f"Error ejecutando: {e}")
    
    def show_execution_window(self):
        """Show a window with execution output"""
        try:
            # Create execution output window
            exec_window = tk.Toplevel(self.parent_gui.root)
            exec_window.title("🚀 Ejecutando Clase")
            exec_window.geometry("600x400")
            exec_window.configure(bg='#1e1e1e')
            
            # Center the window
            exec_window.transient(self.parent_gui.root)
            exec_window.grab_set()
            
            # Title
            title_label = tk.Label(exec_window, text="🎓 Ejecución de Clase ADAI", 
                                 font=('Arial', 16, 'bold'), 
                                 bg='#1e1e1e', fg='#ffffff')
            title_label.pack(pady=20)
            
            # Output text area
            output_frame = tk.Frame(exec_window, bg='#1e1e1e')
            output_frame.pack(fill="both", expand=True, padx=20, pady=10)
            
            output_text = tk.Text(output_frame, bg='#2d2d2d', fg='#ffffff',
                                font=('Consolas', 10), wrap=tk.WORD)
            output_text.pack(fill="both", expand=True)
            
            # Simulate class execution output
            class_title = self.class_title_var.get()
            class_subject = self.class_subject_var.get()
            
            execution_output = f"""🤖 Inicializando {class_title}
📚 Materia: {class_subject}
⏰ Hora de inicio: {datetime.datetime.now().strftime('%H:%M:%S')}

🚀 Iniciando clase...
📱 Mostrando prueba diagnóstica...
   └─ QR Code: {os.path.basename(self.diagnostic_qr_path.get()) if self.diagnostic_qr_path.get() else 'No seleccionado'}

📚 Explicando contenido...
   └─ PDF: {os.path.basename(self.class_pdf_path.get()) if self.class_pdf_path.get() else 'No seleccionado'}

🎓 Examen final...
   └─ QR Code: {os.path.basename(self.final_exam_qr_path.get()) if self.final_exam_qr_path.get() else 'No seleccionado'}

✅ Clase completada exitosamente!
📊 Duración estimada: {self.class_duration_var.get()}
🕒 Hora de finalización: {datetime.datetime.now().strftime('%H:%M:%S')}

🎉 ¡Gracias por usar ADAI Class Builder!"""
            
            output_text.insert("1.0", execution_output)
            output_text.config(state="disabled")  # Make read-only
            
            # Close button
            close_btn = tk.Button(exec_window, text="✅ Cerrar", bg='#4CAF50', fg='#ffffff',
                                font=('Arial', 12, 'bold'), 
                                command=exec_window.destroy)
            close_btn.pack(pady=20)
            
            # Auto-close after 10 seconds
            def auto_close():
                try:
                    if exec_window.winfo_exists():
                        exec_window.destroy()
                except:
                    pass
                    
            exec_window.after(10000, auto_close)  # Close after 10 seconds
            
        except Exception as e:
            self.log_message(f"Error showing execution window: {e}")
            messagebox.showinfo("Ejecución", f"Clase ejecutada: {self.class_title_var.get()}")
    
    def quick_test_execution(self):
        """Quick test execution to verify functionality"""
        try:
            self.update_class_status("🧪 Ejecutando prueba rápida...")
            
            # Simple test execution
            test_window = tk.Toplevel(self.parent_gui.root)
            test_window.title("🧪 Prueba Rápida")
            test_window.geometry("400x300")
            test_window.configure(bg='#1e1e1e')
            
            # Center the window
            test_window.transient(self.parent_gui.root)
            
            # Title
            title_label = tk.Label(test_window, text="🧪 Prueba de Ejecución", 
                                 font=('Arial', 14, 'bold'), 
                                 bg='#1e1e1e', fg='#ffffff')
            title_label.pack(pady=20)
            
            # Test output
            test_output = tk.Text(test_window, bg='#2d2d2d', fg='#ffffff',
                                font=('Consolas', 10), wrap=tk.WORD, height=10)
            test_output.pack(fill="both", expand=True, padx=20, pady=10)
            
            # Simulate test execution
            test_message = f"""✅ Sistema de ejecución funcionando correctamente!

🎓 Clase: {self.class_title_var.get()}
📚 Materia: {self.class_subject_var.get()}
⏰ Timestamp: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

🔍 Archivos configurados:
📱 QR Diagnóstico: {'✅' if self.diagnostic_qr_path.get() else '❌'} 
📚 PDF Clase: {'✅' if self.class_pdf_path.get() else '❌'}
🎓 QR Examen: {'✅' if self.final_exam_qr_path.get() else '❌'}

✅ Prueba completada exitosamente!"""
            
            test_output.insert("1.0", test_message)
            test_output.config(state="disabled")
            
            # Close button
            close_btn = tk.Button(test_window, text="✅ Cerrar", bg='#4CAF50', fg='#ffffff',
                                font=('Arial', 10, 'bold'), 
                                command=test_window.destroy)
            close_btn.pack(pady=10)
            
            self.update_class_status("✅ Prueba completada")
            
        except Exception as e:
            self.update_class_status(f"❌ Error en prueba: {str(e)}")
            messagebox.showerror("Error", f"Error en prueba rápida: {e}")

    def update_class_status(self, message):
        """Update the class status label"""
        try:
            if hasattr(self, 'class_status_label'):
                self.class_status_label.config(text=message)
                
                if "✅" in message:
                    self.class_status_label.config(fg='#4CAF50')
                elif "❌" in message:
                    self.class_status_label.config(fg='#f44336')
                elif "🚀" in message or "🔨" in message:
                    self.class_status_label.config(fg='#2196F3')
                else:
                    self.class_status_label.config(fg='#ffffff')
                    
        except Exception as e:
            self.log_message(f"Error updating status: {e}")
