import { useMemo } from 'react'
import { useConfigContext } from '../context/ConfigContext'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to access and derive page configuration based on current route
 * Encapsulates logic for finding page config and extracting relevant sections
 */
export const useConfig = () => {
  const config = useConfigContext()
  const location = useLocation()

  const currentPage = useMemo(() => {
    return config.pages.find(page => page.path === location.pathname) || config.pages[0]
  }, [config.pages, location.pathname])

  const getPageById = (pageId) => {
    return config.pages.find(page => page.id === pageId)
  }

  const getNavigationItems = () => {
    return config.navigation.items
  }

  const getThemeConfig = () => {
    return config.theme
  }

  return {
    config,
    currentPage,
    getPageById,
    getNavigationItems,
    getThemeConfig
  }
}
