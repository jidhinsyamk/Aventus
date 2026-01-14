import { useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useConfigContext } from '../context/ConfigContext'

 
export const useStyleFromConfig = () => {
  const { themeConfig, allThemes } = useTheme()
  const config = useConfigContext()

  const getColorStyle = useMemo(() => {
    return (colorKey) => {
      const colorPath = colorKey.split('.')
      let color = themeConfig.colors
      
      for (const key of colorPath) {
        color = color?.[key]
        if (!color) return null
      }
      
      return color
    }
  }, [themeConfig])

  const getSpacingStyle = useMemo(() => {
    return (spacingKey) => {
      const spacing = allThemes?.spacing || themeConfig?.spacing
      return spacing?.[spacingKey] || spacing?.md || '1rem'
    }
  }, [allThemes, themeConfig])

  const getBorderRadiusStyle = useMemo(() => {
    return (radiusKey) => {
      const borderRadius = allThemes?.borderRadius || themeConfig?.borderRadius
      return borderRadius?.[radiusKey] || borderRadius?.md || '0.5rem'
    }
  }, [allThemes, themeConfig])

  const getShadowStyle = useMemo(() => {
    return (shadowKey) => {
      const shadows = allThemes?.shadows || themeConfig?.shadows
      return shadows?.[shadowKey] || shadows?.md || '0 4px 6px -1px rgb(0 0 0 / 0.1)'
    }
  }, [allThemes, themeConfig])

  const buildStyleObject = (styleConfig) => {
    const styles = {}
    
    if (styleConfig.color) {
      styles.color = getColorStyle(styleConfig.color)
    }
    if (styleConfig.backgroundColor) {
      styles.backgroundColor = getColorStyle(styleConfig.backgroundColor)
    }
    if (styleConfig.padding) {
      styles.padding = getSpacingStyle(styleConfig.padding)
    }
    if (styleConfig.margin) {
      styles.margin = getSpacingStyle(styleConfig.margin)
    }
    if (styleConfig.borderRadius) {
      styles.borderRadius = getBorderRadiusStyle(styleConfig.borderRadius)
    }
    if (styleConfig.boxShadow) {
      styles.boxShadow = getShadowStyle(styleConfig.boxShadow)
    }

    return styles
  }

  const getGradientStyle = useMemo(() => {
    return (gradientKey) => {
      const gradientPath = gradientKey.split('.')
      let gradient = config?.gradients
      
      for (const key of gradientPath) {
        gradient = gradient?.[key]
        if (!gradient) return null
      }
      
      return gradient
    }
  }, [config])

  return {
    getColorStyle,
    getSpacingStyle,
    getBorderRadiusStyle,
    getShadowStyle,
    getGradientStyle,
    buildStyleObject,
    config
  }
}
