import { createContext, useContext } from 'react'
import { appConfig } from '../config/appConfig'

const ConfigContext = createContext(null)

export const ConfigProvider = ({ children }) => {
  return (
    <ConfigContext.Provider value={appConfig}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfigContext = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfigContext must be used within ConfigProvider')
  }
  return context
}
