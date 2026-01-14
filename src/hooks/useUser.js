import { useMemo } from 'react'
import { useConfigContext } from '../context/ConfigContext'

 
export const useUser = () => {
  const config = useConfigContext()

  // const user = useMemo(() => {
  //   return config.user || {
  //     name: 'Guest User',
  //     email: 'guest@example.com',
  //     role: 'Guest',
  //     avatar: 'user',
  //     joinDate: new Date().toISOString().split('T')[0],
  //     bio: 'Welcome to DevSpace',
  //     lastActive: 'Just now',
  //     stats: {
  //       projects: 0,
  //       contributions: 0,
  //       experience: '0 years'
  //     }
  //   }
  // }, [config])

  const getUserStats = () => {
    return user.stats || {}
  }

  const getUserInfo = () => {
    return {
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      joinDate: user.joinDate,
      bio: user.bio,
      lastActive: user.lastActive
    }
  }

  return {
    // user,
    getUserStats,
    getUserInfo
  }
}
