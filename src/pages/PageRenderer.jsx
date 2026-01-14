import { useComponentResolver } from '../hooks/useComponentResolver'
import ComponentResolver from '../components/ComponentResolver'

const PageRenderer = () => {
  const { getSections } = useComponentResolver()
  const sections = getSections()

  return (
    <>
      {sections.map((section, index) => (
        <ComponentResolver key={index} section={section} />
      ))}
    </>
  )
}

export default PageRenderer
