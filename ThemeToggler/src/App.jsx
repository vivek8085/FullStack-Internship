import { useState, useContext } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="app-root" style={{ padding: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: 'var(--text)' }}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 56,
              height: 30,
              borderRadius: 9999,
              padding: 4,
              background: 'var(--button-bg)',
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 22,
                borderRadius: 9999,
                background: 'var(--accent)',
                transform: theme === 'dark' ? 'translateX(26px)' : 'translateX(0px)',
                transition: 'transform 200ms ease'
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
