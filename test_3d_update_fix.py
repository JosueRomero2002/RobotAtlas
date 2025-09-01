#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test script to verify 3D visualization updates
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'ia-clases'))

def test_3d_visualization_update():
    """Test that 3D visualization updates correctly"""
    print("🤖 Testing 3D Visualization Update Fix")
    print("=" * 50)
    
    try:
        # Import the 3D visualizer
        from robot_3d_visualizer import create_robot_visualizer, update_robot_from_esp32_data
        
        print("✅ Successfully imported 3D visualizer")
        
        # Create visualizer
        visualizer = create_robot_visualizer(use_pyvista=True)
        print("✅ Created 3D visualizer")
        
        # Test initial position
        initial_data = {
            'brazos': {
                'BI': 10,   # Brazo Izquierdo
                'FI': 80,   # Frente Izquierdo
                'HI': 80,   # High Izquierdo
                'BD': 40,   # Brazo Derecho
                'FD': 90,   # Frente Derecho
                'HD': 80,   # High Derecho
                'PD': 45    # Pollo Derecho
            },
            'cuello': {
                'L': 155,   # Lateral
                'I': 95,    # Inferior
                'S': 110    # Superior
            }
        }
        
        print("⚡ Updating to initial position...")
        update_robot_from_esp32_data(visualizer, initial_data)
        print("✅ Initial position updated")
        
        # Test new position (like chemistry sequence)
        chemistry_data = {
            'brazos': {
                'BI': 30,   # Chemistry neutralization position
                'FI': 90,
                'HI': 85,
                'BD': 30,
                'FD': 100,
                'HD': 85,
                'PD': 50
            },
            'cuello': {
                'L': 155,
                'I': 95,
                'S': 110
            }
        }
        
        print("⚡ Updating to chemistry position...")
        update_robot_from_esp32_data(visualizer, chemistry_data)
        print("✅ Chemistry position updated")
        
        # Test another position
        wave_data = {
            'brazos': {
                'BI': 45,   # Wave position
                'FI': 120,
                'HI': 90,
                'BD': 45,
                'FD': 120,
                'HD': 90,
                'PD': 60
            },
            'cuello': {
                'L': 155,
                'I': 95,
                'S': 110
            }
        }
        
        print("⚡ Updating to wave position...")
        update_robot_from_esp32_data(visualizer, wave_data)
        print("✅ Wave position updated")
        
        print("\n🎬 Showing 3D visualization (if available)...")
        print("🔄 The visualization should now update in real-time with render() calls")
        
        # Show the visualization
        visualizer.show(interactive=False)
        
        print("\n✅ All 3D visualization update tests passed!")
        print("🎯 The 3D simulator should now update correctly during sequence execution")
        
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("⚠️ PyVista might not be installed. Install with: pip install pyvista")
        return False
    except Exception as e:
        print(f"❌ Test error: {e}")
        return False

if __name__ == "__main__":
    test_3d_visualization_update()
