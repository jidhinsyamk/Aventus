import { createContext, useContext, useState, useMemo } from 'react'
import { useConfigContext } from './ConfigContext'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const config = useConfigContext()
  const [currentTheme, setCurrentTheme] = useState('light')

  const theme = useMemo(() => {
    const themeData = config.theme[currentTheme] || config.theme.light
    const themeStyles = {
      '--color-primary': themeData.colors.primary,
      '--color-secondary': themeData.colors.secondary,
      '--color-accent': themeData.colors.accent,
      '--color-background': themeData.colors.background,
      '--color-surface': themeData.colors.surface,
      '--color-text-primary': themeData.colors.text.primary,
      '--color-text-secondary': themeData.colors.text.secondary,
      '--color-text-muted': themeData.colors.text.muted,
      '--color-border': themeData.colors.border,
      '--spacing-xs': config.theme.spacing.xs,
      '--spacing-sm': config.theme.spacing.sm,
      '--spacing-md': config.theme.spacing.md,
      '--spacing-lg': config.theme.spacing.lg,
      '--spacing-xl': config.theme.spacing.xl,
      '--spacing-2xl': config.theme.spacing['2xl'],
      '--radius-sm': config.theme.borderRadius.sm,
      '--radius-md': config.theme.borderRadius.md,
      '--radius-lg': config.theme.borderRadius.lg,
      '--radius-xl': config.theme.borderRadius.xl
    }
    return themeStyles
  }, [config, currentTheme])

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const setTheme = (themeName) => {
    if (config.theme[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      currentTheme, 
      toggleTheme, 
      setTheme,
      themeConfig: config.theme[currentTheme] || config.theme.light,
      allThemes: config.theme
    }}>
      <div style={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
