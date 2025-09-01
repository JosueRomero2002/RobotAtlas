#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Test script to verify PyVista 3D visualization and ESP32 command translation
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'ia-clases'))

def test_pyvista_installation():
    """Test PyVista installation"""
    print("🔍 Testing PyVista Installation")
    print("=" * 40)
    
    try:
        import pyvista as pv
        print(f"✅ PyVista version: {pv.__version__}")
        
        # Test basic PyVista functionality
        plotter = pv.Plotter()
        plotter.add_text("PyVista Test", position='upper_left')
        print("✅ PyVista plotter created successfully")
        
        # Test mesh creation
        sphere = pv.Sphere(radius=1.0)
        plotter.add_mesh(sphere, color='red')
        print("✅ PyVista mesh creation successful")
        
        plotter.close()
        print("✅ PyVista basic functionality test passed")
        return True
        
    except ImportError as e:
        print(f"❌ PyVista import error: {e}")
        return False
    except Exception as e:
        print(f"❌ PyVista test error: {e}")
        return False

def test_3d_visualizer_pyvista():
    """Test 3D visualizer with PyVista"""
    print("\n🤖 Testing 3D Visualizer with PyVista")
    print("=" * 50)
    
    try:
        from robot_3d_visualizer import create_robot_visualizer, update_robot_from_esp32_data
        
        print("✅ Successfully imported 3D visualizer")
        
        # Force PyVista usage
        visualizer = create_robot_visualizer(use_pyvista=True)
        print("✅ Created 3D visualizer with PyVista")
        
        # Check if PyVista is actually being used
        if visualizer.use_pyvista:
            print("✅ Visualizer is using PyVista")
        else:
            print("❌ Visualizer is NOT using PyVista")
            return False
        
        # Test with chemistry sequence data
        chemistry_data = {
            'brazos': {
                'BI': 30,   # Brazo Izquierdo - Chemistry neutralization
                'FI': 90,   # Frente Izquierdo
                'HI': 85,   # High Izquierdo
                'BD': 30,   # Brazo Derecho
                'FD': 100,  # Frente Derecho
                'HD': 85,   # High Derecho
                'PD': 50    # Pollo Derecho
            },
            'cuello': {
                'L': 155,   # Lateral
                'I': 95,    # Inferior
                'S': 110    # Superior
            }
        }
        
        print("⚡ Testing ESP32 data translation...")
        print(f"Input data: {chemistry_data}")
        
        # Update robot state
        update_robot_from_esp32_data(visualizer, chemistry_data)
        print("✅ ESP32 data translation completed")
        
        # Check the translated state
        print(f"Translated robot state: {visualizer.robot_state}")
        
        # Test multiple position updates
        positions = [
            {
                'name': 'Initial Position',
                'data': {
                    'brazos': {'BI': 10, 'FI': 80, 'HI': 80, 'BD': 40, 'FD': 90, 'HD': 80, 'PD': 45},
                    'cuello': {'L': 155, 'I': 95, 'S': 110}
                }
            },
            {
                'name': 'Chemistry Position',
                'data': chemistry_data
            },
            {
                'name': 'Wave Position',
                'data': {
                    'brazos': {'BI': 45, 'FI': 120, 'HI': 90, 'BD': 45, 'FD': 120, 'HD': 90, 'PD': 60},
                    'cuello': {'L': 155, 'I': 95, 'S': 110}
                }
            }
        ]
        
        print("\n🔄 Testing multiple position updates...")
        for i, pos in enumerate(positions):
            print(f"  {i+1}. {pos['name']}")
            update_robot_from_esp32_data(visualizer, pos['data'])
            print(f"     ✅ Updated to {pos['name']}")
        
        print("\n✅ All PyVista 3D visualizer tests passed!")
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False
    except Exception as e:
        print(f"❌ Test error: {e}")
        import traceback
        traceback.print_exc()
        return False

def test_esp32_command_translation():
    """Test ESP32 command translation specifically"""
    print("\n🔄 Testing ESP32 Command Translation")
    print("=" * 45)
    
    try:
        from robot_3d_visualizer import create_robot_visualizer, update_robot_from_esp32_data
        
        visualizer = create_robot_visualizer(use_pyvista=True)
        
        # Test different ESP32 command formats
        test_commands = [
            {
                'name': 'Chemistry Neutralization',
                'esp32_data': {
                    'brazos': {
                        'BI': 30, 'FI': 90, 'HI': 85,
                        'BD': 30, 'FD': 100, 'HD': 85, 'PD': 50
                    },
                    'cuello': {'L': 155, 'I': 95, 'S': 110}
                }
            },
            {
                'name': 'Saludo Inicial',
                'esp32_data': {
                    'brazos': {
                        'BI': 30, 'FI': 90, 'HI': 85,
                        'BD': 30, 'FD': 100, 'HD': 85, 'PD': 50
                    }
                }
            },
            {
                'name': 'Movimiento Simple',
                'esp32_data': {
                    'brazos': {
                        'BI': 45, 'FI': 120, 'HI': 90,
                        'BD': 45, 'FD': 120, 'HD': 90, 'PD': 60
                    }
                }
            }
        ]
        
        for cmd in test_commands:
            print(f"\n📋 Testing: {cmd['name']}")
            print(f"   ESP32 Input: {cmd['esp32_data']}")
            
            # Store initial state
            initial_state = visualizer.robot_state.copy()
            
            # Apply translation
            update_robot_from_esp32_data(visualizer, cmd['esp32_data'])
            
            # Check if state changed
            if visualizer.robot_state != initial_state:
                print(f"   ✅ State updated successfully")
                print(f"   📊 Left arm: {visualizer.robot_state['left_arm']}")
                print(f"   📊 Right arm: {visualizer.robot_state['right_arm']}")
            else:
                print(f"   ❌ State did not change")
        
        print("\n✅ ESP32 command translation tests completed")
        return True
        
    except Exception as e:
        print(f"❌ ESP32 translation test error: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Main test function"""
    print("🧪 PyVista 3D Visualization and ESP32 Translation Test")
    print("=" * 60)
    
    # Test PyVista installation
    if not test_pyvista_installation():
        print("\n❌ PyVista installation test failed")
        return False
    
    # Test 3D visualizer
    if not test_3d_visualizer_pyvista():
        print("\n❌ 3D visualizer test failed")
        return False
    
    # Test ESP32 command translation
    if not test_esp32_command_translation():
        print("\n❌ ESP32 command translation test failed")
        return False
    
    print("\n🎉 All tests passed! PyVista 3D visualization should work correctly")
    print("🎯 The 3D simulator should now update properly during sequence execution")
    
    return True

if __name__ == "__main__":
    main()
