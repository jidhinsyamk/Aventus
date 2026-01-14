import Container from '../Container'
import Card from '../Card'
import Button from '../Button'
import { useStyleFromConfig } from '../../hooks/useStyleFromConfig'

const SettingsSection = ({ props: sectionProps }) => {
  const { getColorStyle } = useStyleFromConfig()
  const { title, groups } = sectionProps

  return (
    <section className="py-8 sm:py-12">
      <Container maxWidth="4xl">
        <h2 
          className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
          style={{ color: getColorStyle('text.primary') }}
        >
          {title}
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {groups.map((group, groupIndex) => (
            <Card key={groupIndex}>
              <h3 
                className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"
                style={{ color: getColorStyle('text.primary') }}
              >
                {group.title}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {group.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 py-3 border-b last:border-b-0"
                    style={{ borderColor: getColorStyle('border') }}
                  >
                    <div className="flex-1">
                      <div 
                        className="font-medium text-sm sm:text-base"
                        style={{ color: getColorStyle('text.primary') }}
                      >
                        {item.label}
                      </div>
                      <div 
                        className="text-xs sm:text-sm mt-1"
                        style={{ color: getColorStyle('text.secondary') }}
                      >
                        {item.value}
                      </div>
                    </div>
                    {item.editable && (
                      <Button variant="outline" size="sm" className="w-full sm:w-auto mt-2 sm:mt-0">
                        Edit
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SettingsSection
