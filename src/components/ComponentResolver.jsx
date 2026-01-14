import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import PageHeader from './sections/PageHeader'
import ProductGrid from './sections/ProductGrid'
import ProfileCard from './sections/ProfileCard'
import SettingsSection from './sections/SettingsSection'
import PreferencesSection from './sections/PreferencesSection'

const componentMap = {
  hero: HeroSection,
  features: FeaturesSection,
  pageHeader: PageHeader,
  productGrid: ProductGrid,
  profileCard: ProfileCard,
  settings: SettingsSection,
  preferences: PreferencesSection
}

const ComponentResolver = ({ section }) => {
  const Component = componentMap[section.type]

  if (!Component) {
    console.warn(`Unknown component type: ${section.type}`)
    return null
  }

  return <Component props={section.props} />
}

export default ComponentResolver
