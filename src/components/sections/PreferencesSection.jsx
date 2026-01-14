import Container from '../Container'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'
import { useStyleFromConfig } from '../../hooks/useStyleFromConfig'
import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'

const PreferencesSection = ({ props: sectionProps }) => {
  const { getColorStyle } = useStyleFromConfig()
  const { currentTheme, setTheme } = useTheme()
  const { title, groups } = sectionProps
  const [density, setDensity] = useState('Comfortable')

  const handleThemeChange = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  const handleDensityChange = (newDensity) => {
    setDensity(newDensity)
  }

  return (
    <section className="py-8 sm:py-12">
      <Container maxWidth="6xl">
        <div className="mb-6 sm:mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: getColorStyle('text.primary') }}
          >
            {title}
          </h2>
          <p 
            className="text-sm sm:text-base"
            style={{ color: getColorStyle('text.secondary') }}
          >
            Customize your experience and manage your account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {groups.map((group, groupIndex) => (
            <Card key={groupIndex} className="hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-4 border-b" style={{ borderColor: getColorStyle('border') }}>
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${getColorStyle('primary')}15`,
                    color: getColorStyle('primary')
                  }}
                >
                  <Icon name="config" size={20} />
                </div>
                <h3 
                  className="text-lg sm:text-xl font-semibold"
                  style={{ color: getColorStyle('text.primary') }}
                >
                  {group.title}
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="p-4 rounded-lg transition-all duration-200 hover:bg-opacity-50"
                    style={{ 
                      backgroundColor: item.type ? `${getColorStyle('primary')}05` : 'transparent'
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div 
                          className="font-semibold text-sm sm:text-base mb-2"
                          style={{ color: getColorStyle('text.primary') }}
                        >
                          {item.label}
                        </div>
                        
                        {item.type === 'theme' && (
                          <div className="mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleThemeChange}
                              className="flex items-center gap-2 w-full sm:w-auto"
                            >
                              <Icon name={currentTheme === 'light' ? 'moon' : 'sun'} size={16} />
                              <span>Switch to {currentTheme === 'light' ? 'Dark' : 'Light'}</span>
                            </Button>
                          </div>
                        )}
                        
                        {item.type === 'density' && item.options && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.options.map((option) => (
                              <Button
                                key={option}
                                variant={density === option ? 'primary' : 'outline'}
                                size="sm"
                                onClick={() => handleDensityChange(option)}
                                className="flex-1 sm:flex-none"
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                        )}
                        
                        {!item.type && (
                          <div 
                            className="text-sm font-medium mt-1"
                            style={{ color: getColorStyle('text.secondary') }}
                          >
                            {item.value}
                          </div>
                        )}
                      </div>
                      
                      {item.editable && !item.type && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-shrink-0"
                        >
                          Edit
                        </Button>
                      )}
                    </div>
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

export default PreferencesSection
