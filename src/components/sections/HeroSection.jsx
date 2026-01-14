import { Link } from 'react-router-dom'
import Container from '../Container'
import Button from '../Button'
import Icon from '../Icon'
import { useStyleFromConfig } from '../../hooks/useStyleFromConfig'

const HeroSection = ({ props: sectionProps }) => {
  const { getColorStyle } = useStyleFromConfig()
  const { title, subtitle, description, ctaText, ctaLink, backgroundImage, overlay = true, overlayOpacity = 0.4 } = sectionProps

  const sectionStyle = {
    position: 'relative',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <section className="relative overflow-hidden" style={sectionStyle}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          background: `linear-gradient(135deg, ${getColorStyle('primary')}20, ${getColorStyle('secondary')}20)`,
          animation: 'gradientShift 8s ease infinite'
        }}
      />

      {overlay && backgroundImage && (
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            zIndex: 1
          }}
        />
      )}

      <div className="absolute inset-0 z-[2] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 12}%`,
              backgroundColor: getColorStyle('primary'),
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-slideDown" 
              style={{ 
                backgroundColor: `${getColorStyle('primary')}20`,
                border: `1px solid ${getColorStyle('primary')}40`,
                backdropFilter: 'blur(10px)'
              }}>
               
               
            </div>

            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight animate-fadeInUp"
              style={{ 
                color: backgroundImage ? '#ffffff' : getColorStyle('text.primary'),
                textShadow: backgroundImage ? '3px 3px 6px rgba(0, 0, 0, 0.4)' : 'none',
                animationDelay: '0.2s'
              }}
            >
              {title}
            </h1>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-semibold animate-fadeInUp"
              style={{ 
                color: backgroundImage ? '#ffffff' : getColorStyle('primary'),
                textShadow: backgroundImage ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none',
                animationDelay: '0.4s'
              }}
            >
              {subtitle}
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 px-2 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ 
                color: backgroundImage ? '#f0f0f0' : getColorStyle('text.secondary'),
                textShadow: backgroundImage ? '1px 1px 2px rgba(0, 0, 0, 0.2)' : 'none',
                animationDelay: '0.6s'
              }}
            >
              {description}
            </p>
            {ctaText && ctaLink && (
              <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <Link to={ctaLink}>
                  <Button 
                    size="lg" 
                    variant="primary" 
                    className="w-full sm:w-auto group relative overflow-hidden px-8 py-4 text-lg font-semibold"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{ctaText}</span>
                    </span>
                    <span 
                      className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ backgroundColor: getColorStyle('secondary') }}
                    />
                  </Button>
                </Link>
              </div>
            )}

             
            <div className="mt-12 sm:mt-16 animate-bounce">
              <div 
                className="w-6 h-10 rounded-full border-2 mx-auto flex items-start justify-center p-2"
                style={{ borderColor: backgroundImage ? '#ffffff' : getColorStyle('primary') }}
              >
                <div 
                  className="w-1 h-3 rounded-full"
                  style={{ backgroundColor: backgroundImage ? '#ffffff' : getColorStyle('primary') }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection
