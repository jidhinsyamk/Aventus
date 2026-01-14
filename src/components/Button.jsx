import { useStyleFromConfig } from '../hooks/useStyleFromConfig'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}) => {
  const { getColorStyle, getSpacingStyle, getBorderRadiusStyle } = useStyleFromConfig()

  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const getVariantStyles = () => {
    const primaryColor = getColorStyle('primary')
    const secondaryColor = getColorStyle('secondary')
    const accentColor = getColorStyle('accent')
    
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: primaryColor,
          color: '#ffffff',
          border: 'none'
        }
      case 'secondary':
        return {
          backgroundColor: secondaryColor,
          color: '#ffffff',
          border: 'none'
        }
      case 'accent':
        return {
          backgroundColor: accentColor,
          color: '#ffffff',
          border: 'none'
        }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: primaryColor,
          border: `2px solid ${primaryColor}`
        }
      default:
        return {
          backgroundColor: primaryColor,
          color: '#ffffff',
          border: 'none'
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem'
        }
      case 'lg':
        return {
          padding: '0.875rem 1.5rem',
          fontSize: '1rem'
        }
      default:
        return {
          padding: '0.625rem 1.25rem',
          fontSize: '0.9375rem'
        }
    }
  }

  const style = {
    borderRadius: getBorderRadiusStyle('md'),
    ...getVariantStyles(),
    ...getSizeStyles()
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
      style={style}
      onMouseEnter={(e) => {
        if (!disabled && variant !== 'outline') {
          e.target.style.opacity = '0.9'
        }
      }}
      onMouseLeave={(e) => {
        if (variant !== 'outline') {
          e.target.style.opacity = '1'
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
