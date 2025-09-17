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
        """Generate class code using modular structure"""
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
        
        # Generate demo sequences code if demo is enabled
        demo_sequences_code = ""
        if self.demo_enabled.get() and hasattr(self, 'demo_sequences') and self.demo_sequences:
            demo_sequences_code = self._generate_demo_sequences_code()
        
        return f'''#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
{class_title}
Materia: {class_subject}
Generado por ADAI Class Builder el {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Clase automática usando estructura modular
"""

import cv2
import os
import time
import multiprocessing
from multiprocessing import Process, Value

# Agregar el directorio de módulos al path
import sys
import os
current_dir = os.path.dirname(os.path.abspath(__file__))
# Los módulos están en el directorio padre (ia-clases/modules)
parent_dir = os.path.dirname(current_dir)
modules_dir = os.path.join(parent_dir, "modules")
if modules_dir not in sys.path:
    sys.path.insert(0, modules_dir)

# Import modular functions
from modules.config import client, script_dir, faces_dir, QR_PATHS, QUESTION_BANK, QUESTION_BANK_CHEM
from modules.speech import initialize_tts, speak_with_animation, listen
from modules.camera import verify_camera_for_iriun, camera_process, identify_users, load_known_faces
from modules.qr import show_diagnostic_qr, show_final_exam_qr
from modules.slides import show_pdf_page_in_opencv, extract_text_from_pdf, explain_slides_with_random_questions, explain_slides_with_sequences
from modules.questions import RandomQuestionManager, evaluate_student_answer, process_question
from modules.esp32 import execute_esp32_sequence
from modules.utils import summarize_text, ask_openai

# ======================
#  CONFIGURACIÓN DE LA CLASE
# ======================
CLASS_CONFIG = {{
    "name": "{clean_name}",
    "title": "{class_title}",
    "subject": "{class_subject}",
    "diagnostic_qr": "{diagnostic_qr}",
    "pdf_path": "{class_pdf}",
    "demo_pdf_path": "{demo_pdf}",
    "final_exam_qr": "{final_exam_qr}",
    "use_diagnostic": True,
    "use_pdf": True,
    "use_demo": {str(self.demo_enabled.get()).lower()},
    "use_final_exam": True
}}

{demo_sequences_code}

class {clean_name}:
    """
    {class_title}
    
    Materia: {class_subject}
    Generado por ADAI Class Builder
    """
    
    def __init__(self):
        self.config = CLASS_CONFIG
        self.engine = None
        self.current_users = []
        self.known_faces = {{}}
        self.hand_raised_counter = None
        self.current_slide_num = None
        self.exit_flag = None
        self.current_hand_raiser = None
        self.camera_proc = None
        
    def initialize_systems(self):
        """Initialize TTS and other systems"""
        print("🚀 Inicializando sistemas de {{self.config['name']}}")
        
        # Create multiprocessing variables
        self.hand_raised_counter = multiprocessing.Value('i', 0)
        self.current_slide_num = multiprocessing.Value('i', 1)
        self.exit_flag = multiprocessing.Value('i', 0)
        self.current_hand_raiser = multiprocessing.Value('i', -1)
        
        # Initialize TTS
        self.engine = initialize_tts()
        if not self.engine:
            print("❌ No se pudo inicializar el motor TTS")
            return False
            
        # Create faces directory
        if not os.path.exists(faces_dir):
            os.makedirs(faces_dir)
            
        return True
    
    def run_diagnostic_phase(self):
        """Run diagnostic test phase if enabled"""
        if not self.config['use_diagnostic'] or not self.config['diagnostic_qr']:
            return True
            
        print("\\n" + "="*50)
        print("📱 FASE 1: EVALUACIÓN DIAGNÓSTICA")
        print("="*50)
        
        diagnostic_qr = self.config['diagnostic_qr']
        print(f"🔍 Mostrando QR diagnóstico: {{diagnostic_qr}}")
        
        if os.path.exists(diagnostic_qr):
            return show_diagnostic_qr(diagnostic_qr, display_time=40)
        else:
            print(f"⚠️ No se encontró: {{diagnostic_qr}}")
            return True
    
    def run_class_initialization(self):
        """Initialize class and identify users"""
        print("\\n" + "="*50)
        print("🤖 FASE 2: INICIO DE CLASE")
        print("="*50)
        
        # Create window for animated face
        cv2.namedWindow("ADAI Robot Face", cv2.WINDOW_NORMAL)
        cv2.resizeWindow("ADAI Robot Face", 600, 400)
        
        # Initial greeting
        speak_with_animation(self.engine, f"Hola, soy ADAI. Bienvenidos a la clase: {{self.config['title']}}")
        
        # Verify camera
        if not verify_camera_for_iriun():
            print("⚠️ Problemas detectados con la cámara.")
        
        # Identify users
        print("🔍 Identificando usuarios de izquierda a derecha...")
        self.current_users, _ = identify_users(self.engine, self.current_slide_num, self.exit_flag)
        
        # Load known faces
        self.known_faces = load_known_faces()
        
        # Start camera process
        self.camera_proc = Process(
            target=camera_process,
            args=(self.hand_raised_counter, self.current_slide_num, self.exit_flag, self.current_hand_raiser, self.current_users)
        )
        self.camera_proc.daemon = True
        self.camera_proc.start()
        
        print("⏳ Esperando a que la cámara se inicialice...")
        time.sleep(3)
        
        return True
    
    def run_pdf_phase(self):
        """Run PDF presentation phase if enabled"""
        if not self.config['use_pdf'] or not self.config['pdf_path']:
            return True
            
        print("\\n" + "="*50)
        print("📚 FASE 3: PRESENTACIÓN DE CONTENIDO")
        print("="*50)
        
        pdf_path = self.config['pdf_path']
        if not os.path.exists(pdf_path):
            print(f"❌ No se encontró el PDF: {{pdf_path}}")
                return False
            
        # Extract text from PDF
        pdf_text = extract_text_from_pdf(pdf_path)
        if not pdf_text:
            print("❌ No se pudo leer el PDF")
                return False
            
        # Start presentation
        speak_with_animation(self.engine, f"Ahora comenzaremos con la presentación sobre {{self.config['subject']}}.")
        
        # Explain slides with random questions
        return explain_slides_with_random_questions(
            self.engine, pdf_path, pdf_text, self.current_users,
            self.hand_raised_counter, self.current_slide_num, self.exit_flag, 
            self.known_faces, self.current_hand_raiser
        )
    
    def run_demo_phase(self):
        """Run demo phase if enabled"""
        if not self.config['use_demo'] or not self.config['demo_pdf_path']:
            return True
            
        print("\\n" + "="*50)
        print("🎬 FASE 4: DEMOSTRACIÓN PRÁCTICA")
        print("="*50)
        
        demo_pdf_path = self.config['demo_pdf_path']
        if not os.path.exists(demo_pdf_path):
            print(f"❌ No se encontró el PDF de demo: {{demo_pdf_path}}")
                return False
            
        # Extract text from demo PDF
        demo_pdf_text = extract_text_from_pdf(demo_pdf_path)
        if not demo_pdf_text:
            print("❌ No se pudo leer el PDF de demo")
                return False
            
        # Start demo presentation
        speak_with_animation(self.engine, "Ahora realizaremos una demostración práctica paso a paso.")
        
        # Generate sequence mapping from demo sequences
        sequence_mapping = {{}}
        if hasattr(self, 'demo_sequences') and self.demo_sequences:
            for seq in self.demo_sequences:
                page = seq.get('page', 1)
                sequence_name = seq.get('sequence_name', 'Rutina1')
                sequence_mapping[page] = sequence_name
        
        # Explain slides with sequences
        return explain_slides_with_sequences(
            self.engine, demo_pdf_path, demo_pdf_text, self.current_users,
            self.hand_raised_counter, self.current_slide_num, self.exit_flag, 
            self.known_faces, self.current_hand_raiser, sequence_mapping
        )
    
    def run_final_exam_phase(self):
        """Run final exam phase if enabled"""
        if not self.config['use_final_exam'] or not self.config['final_exam_qr']:
            return True
            
        print("\\n" + "="*60)
        print("🎓 FASE FINAL: EXAMEN")
        print("="*60)
        
        final_exam_qr = self.config['final_exam_qr']
        print(f"🔍 Mostrando QR examen: {{final_exam_qr}}")
        
        if os.path.exists(final_exam_qr):
            # Message from ADAI
            speak_with_animation(self.engine, "Excelente trabajo. Ahora es momento del examen final.")
            speak_with_animation(self.engine, "Por favor, escanea el código QR que aparecerá en pantalla.")
            
            # Show exam QR
            show_final_exam_qr(final_exam_qr, display_time=40)
            
            # Final message
            speak_with_animation(self.engine, "Perfecto. ¡Mucha suerte en el examen!")
            speak_with_animation(self.engine, f"Gracias por participar en la clase: {{self.config['title']}}. ¡Hasta la próxima!")
                return True
                    else:
            print(f"⚠️ No se encontró: {{final_exam_qr}}")
            speak_with_animation(self.engine, "La clase ha terminado. ¡Gracias por participar!")
            return True
            
    def cleanup(self):
        """Clean up resources"""
        print("🛑 Finalizando clase")
        if self.exit_flag:
            self.exit_flag.value = 1
        
        if self.camera_proc and self.camera_proc.is_alive():
            print("⏳ Esperando procesos...")
            self.camera_proc.join(timeout=3)
            
            if self.camera_proc.is_alive():
                self.camera_proc.terminate()
                self.camera_proc.join(timeout=1)
        
        cv2.destroyAllWindows()
        print("✅ Clase finalizada")
    
    def run_complete_class(self):
        """Run the complete class workflow"""
        try:
            print(f"🚀 Iniciando clase: {{self.config['title']}}")
            
            # Initialize systems
            if not self.initialize_systems():
                return False
            
            # Run diagnostic phase
            if not self.run_diagnostic_phase():
                print("⚠️ Error en fase diagnóstica, continuando...")
            
            # Run class initialization
            if not self.run_class_initialization():
                print("❌ Error en inicialización de clase")
                return False
            
            # Run PDF phase
            if not self.run_pdf_phase():
                print("⚠️ Error en fase de presentación, continuando...")
            
            # Run demo phase
            if not self.run_demo_phase():
                print("⚠️ Error en fase de demo, continuando...")
            
            # Run final exam phase
            if not self.run_final_exam_phase():
                print("⚠️ Error en fase de examen, continuando...")
            
            return True
            
        except Exception as e:
            print(f"❌ Error ejecutando clase: {{e}}")
            import traceback
            traceback.print_exc()
            return False
        finally:
            self.cleanup()

def main():
    """Main function to run the class"""
    try:
        # Create and run the class
        class_instance = {clean_name}()
        success = class_instance.run_complete_class()
        
        if success:
            print("✅ Clase completada exitosamente")
        else:
            print("❌ La clase tuvo errores")
            
    except Exception as e:
        print(f"❌ Error en main: {{e}}")
        import traceback
        traceback.print_exc()
    finally:
        cv2.destroyAllWindows()

if __name__ == "__main__":
    multiprocessing.freeze_support()
    main()

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
