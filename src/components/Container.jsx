import { useStyleFromConfig } from '../hooks/useStyleFromConfig'

const Container = ({ 
  children, 
  maxWidth = '7xl',
  className = '',
  ...props 
}) => {
  const { getSpacingStyle } = useStyleFromConfig()

  const maxWidthMap = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  }

  const style = {
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidthMap[maxWidth]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
