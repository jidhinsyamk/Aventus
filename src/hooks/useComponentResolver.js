import { useMemo } from 'react'
import { useConfig } from './useConfig'

export const useComponentResolver = () => {
  const { currentPage } = useConfig()

  const resolveComponent = useMemo(() => {
    return (section) => {
      const componentMap = {
        hero: 'HeroSection',
        features: 'FeaturesSection',
        pageHeader: 'PageHeader',
        productGrid: 'ProductGrid',
        profileCard: 'ProfileCard',
        settings: 'SettingsSection'
      }

      return componentMap[section.type] || 'UnknownComponent'
    }
  }, [currentPage])

  const getSections = () => {
    return currentPage?.layout?.sections || []
  }

  return {
    resolveComponent,
    getSections
  }
}
