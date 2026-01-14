import {
  FaHome,
  FaBox,
  FaUser,
  FaBolt,
  FaCog,
  FaPalette,
  FaPuzzlePiece,
  FaSync,
  FaLaptop,
  FaBullseye,
  FaRocket,
  FaStar,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaTimes
} from 'react-icons/fa'

const iconMap = {
  // Navigation icons
  home: FaHome,
  products: FaBox,
  profile: FaUser,
  
  
  // Feature icons
  config: FaCog,
  theme: FaPalette,
  modular: FaPuzzlePiece,
  resolver: FaSync,
  
  // Product icons
  box: FaBox,
  laptop: FaLaptop,
  target: FaBullseye,
  bolt: FaBolt,
  rocket: FaRocket,
  sparkles: FaStar,
  
  // User/Avatar
  user: FaUser,
  
  // Cart
  cart: FaShoppingCart,
  
  // Theme icons
  sun: FaSun,
  moon: FaMoon,
  
  // UI icons
  close: FaTimes,
  logo: FaBolt
}

const Icon = ({ name, size = 20, className = '', style = {}, ...props }) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return null
  }

  return (
    <IconComponent
      size={size}
      className={className}
      style={style}
      {...props}
    />
  )
}

export default Icon
