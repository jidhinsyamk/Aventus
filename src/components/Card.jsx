import { useStyleFromConfig } from '../hooks/useStyleFromConfig'

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md',
  ...props 
}) => {
  const { getColorStyle, getSpacingStyle, getBorderRadiusStyle, getShadowStyle } = useStyleFromConfig()

  const getPaddingValue = () => {
    const paddingMap = {
      none: '0',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem'
    }
    return paddingMap[padding] || paddingMap.md
  }

  const shadowMap = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  }

  const style = {
    backgroundColor: getColorStyle('surface'),
    borderRadius: getBorderRadiusStyle('lg'),
    boxShadow: shadow === 'none' ? 'none' : getShadowStyle(shadow),
    padding: getPaddingValue()
  }

  return (
    <div
      className={`${shadowMap[shadow]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
