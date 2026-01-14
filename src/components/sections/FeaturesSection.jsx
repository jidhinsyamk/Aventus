import Container from '../Container'
import Card from '../Card'
import Icon from '../Icon'
import { useStyleFromConfig } from '../../hooks/useStyleFromConfig'

const FeaturesSection = ({ props: sectionProps }) => {
  const { getColorStyle, getSpacingStyle } = useStyleFromConfig()
  const { title, items } = sectionProps

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: getColorStyle('surface') }}>
      <Container>
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2"
          style={{ color: getColorStyle('text.primary') }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center max-w-5xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-200 w-full max-w-sm">
              <div className="flex justify-center mb-3 sm:mb-4" style={{ color: getColorStyle('primary') }}>
                <Icon name={item.icon} size={48} className="sm:w-12 sm:h-12" />
              </div>
              <h3 
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: getColorStyle('text.primary') }}
              >
                {item.title}
              </h3>
              <p 
                className="text-xs sm:text-sm"
                style={{ color: getColorStyle('text.secondary') }}
              >
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection
