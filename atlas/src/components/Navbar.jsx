import { useCallback } from '@lynx-js/react'

export function Navbar({ activeRoute, onRouteChange }) {
  const handleRouteChange = useCallback((route) => {
    onRouteChange?.(route)
  }, [onRouteChange])

  return (
    <view className="footer-nav">
      <view 
        className={`footer-nav-item ${activeRoute === 'home' ? 'active' : ''}`}
        bindtap={() => handleRouteChange('home')}
      >
        <text className="nav-icon">⌂</text>
      </view>
      
      <view 
        className={`footer-nav-item ${activeRoute === 'dashboard' ? 'active' : ''}`}
        bindtap={() => handleRouteChange('dashboard')}
      >
        <text className="nav-icon">☰</text>
      </view>
      
      <view 
        className={`footer-nav-item ${activeRoute === 'control' ? 'active' : ''}`}
        bindtap={() => handleRouteChange('control')}
      >
        <text className="nav-icon">●</text>
      </view>
      
      <view 
        className={`footer-nav-item ${activeRoute === 'classes' ? 'active' : ''}`}
        bindtap={() => handleRouteChange('classes')}
      >
        <text className="nav-icon">★</text>
      </view>
      
      <view 
        className={`footer-nav-item ${activeRoute === 'config' ? 'active' : ''}`}
        bindtap={() => handleRouteChange('config')}
      >
        <text className="nav-icon">🔧</text>
      </view>
    </view>
  )
} 