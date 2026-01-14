export const appConfig = {
  theme: {
    light: {
      colors: {
        primary: '#FF8008',
        secondary: '#FFC837',
        accent: '#FF9500',
        background: 'linear-gradient(to right, #FFC837, #FF8008)',
        backgroundFallback: '#FF8008',
        surface: '#ffffffff',
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          muted: '#6b6b6b'
        },
        border: '#ffd699'
      }
    },
    dark: {
      colors: {
        primary: '#FF8008',
        secondary: '#FFC837',
        accent: '#FF9500',
        background: 'linear-gradient(to right, #FFC837, #FF8008)',
        backgroundFallback: '#FF8008',
        surface: '#1f1f1f',
        text: {
          primary: '#ffffff',
          secondary: '#e0e0e0',
          muted: '#b0b0b0'
        },
        border: '#ffd699'
      }
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem'
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem'
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
    },
    gradients: {
      text: {
        blackWhite: 'linear-gradient(135deg, #000000, #ffffff)',
        primary: 'linear-gradient(135deg, #FF8008, #FFC837)'
      }
    }
  },
  pages: [
    {
      id: 'home',
      path: '/',
      title: 'Home',
      layout: {
        type: 'container',
        sections: [
          {
            type: 'hero',
            props: {
              title: 'Premium Audio Experience',
              subtitle: 'Transform Every Moment with Powerful Sound',
              description: 'Discover our collection of high-quality party speakers designed to elevate your events. From intimate gatherings to large celebrations, find the perfect speaker that matches your style and needs.',
              ctaText: 'Explore the party speaker',
              ctaLink: '/products',
              showThemeToggle: true,
              backgroundImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop',
              overlay: true,
              overlayOpacity: 0.4
            }
          },
          {
            type: 'features',
            props: {
              title: 'Why Choose Our Speakers',
              items: [
                {
                  icon: 'rocket',
                  title: 'Premium Quality',
                  description: 'Crystal-clear sound with powerful bass for the ultimate audio experience'
                },
                {
                  icon: 'bolt',
                  title: 'Wireless Freedom',
                  description: 'Bluetooth connectivity and long battery life for hassle-free entertainment'
                },
                {
                  icon: 'theme',
                  title: 'Versatile Design',
                  description: 'Perfect for indoor parties, outdoor events, and poolside gatherings'
                }
              ]
            }
          }
        ]
      }
    },
    {
      id: 'products',
      path: '/products',
      title: 'Products',
      layout: {
        type: 'container',
        sections: [
          {
            type: 'pageHeader',
            props: {
              title: 'Party Speakers Collection',
              description: 'Discover our premium selection of party speakers. All products are config-driven and displayed through reusable components.'
            }
          },
          {
            type: 'productGrid',
            props: {
              columns: 3,
              dialog: {
                enabled: true,
                title: 'Get Started with {productName}',
                description: 'Thank you for your interest! This product is ready to enhance your audio experience. Click below to proceed.',
                ctaText: 'Continue',
                showImage: true,
                showPrice: true
              },
              products: [
                {
                  id: 1,
                  name: 'Premium Party Speaker',
                  description: 'High-quality wireless speaker with powerful bass and crystal-clear sound. Perfect for parties and events.',
                  price: 199.99,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'Premium',
                  status: 'In Stock',
                  statusType: 'success'
                },
                {
                  id: 2,
                  name: 'Portable Bluetooth Speaker',
                  description: 'Compact design with long battery life. Take the party anywhere with this portable speaker.',
                  price: 89.99,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'Portable',
                  status: 'In Stock',
                  statusType: 'success'
                },
                {
                  id: 3,
                  name: 'Bass Boost Party Speaker',
                  description: 'Enhanced bass technology for the ultimate party experience. Connect multiple speakers for surround sound.',
                  price: 249.99,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'Premium',
                  status: 'In Stock',
                  statusType: 'success'
                },
                {
                  id: 4,
                  name: 'Waterproof Party Speaker',
                  description: 'IPX7 waterproof rating makes this speaker perfect for pool parties and outdoor events.',
                  price: 149.99,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'Outdoor',
                  status: 'Limited Stock',
                  statusType: 'warning'
                },
                {
                  id: 5,
                  name: 'Multi-Room Party System',
                  description: 'Connect multiple speakers throughout your space for synchronized party audio.',
                  price: 799.99,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'System',
                  status: 'In Stock',
                  statusType: 'success'
                },
                {
                  id: 6,
                  name: 'Budget Party Speaker',
                  description: 'Affordable option with great sound quality. Perfect for small gatherings and casual parties.',
                  price: 799,
                  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                  category: 'Budget',
                  status: 'In Stock',
                  statusType: 'success'
                }
              ]
            }
          }
        ]
      }
    },
    {
      id: 'profile',
      path: '/profile',
      title: 'Profile',
      layout: {
        type: 'container',
        sections: [
          {
            type: 'pageHeader',
            props: {
              title: 'My Account',
              description: 'Manage your profile, preferences, and account settings. All data is config-driven and customizable.'
            }
          },
          {
            type: 'profileCard',
            props: {
              user: {
                name: 'Sarah Johnson',
                email: 'sarah.johnson@example.com',
                role: 'Audio Enthusiast',
                avatar: 'user',
                joinDate: '2023-06-20',
                bio: 'Music lover and party host. Always searching for the perfect sound system to make every event memorable.',
                lastActive: '30 minutes ago'
              },
              stats: [
                { label: 'Orders', value: '8', icon: 'rocket' },
                { label: 'Wishlist', value: '5', icon: 'config' },
                { label: 'Reviews', value: '12', icon: 'bolt' }
              ]
            }
          },
          {
            type: 'preferences',
            props: {
              title: 'Preferences',
              groups: [
                {
                  title: 'Appearance',
                  items: [
                    { 
                      label: 'Theme', 
                      value: 'Light', 
                      type: 'theme',
                      editable: true 
                    },
                    { 
                      label: 'Layout Density', 
                      value: 'Comfortable', 
                      type: 'density',
                      options: ['Compact', 'Comfortable', 'Spacious'],
                      editable: true 
                    }
                  ]
                },
                {
                  title: 'Account',
                  items: [
                    { label: 'Email Verified', value: 'Yes', editable: false },
                    { label: 'Two-Factor Auth', value: 'Disabled', editable: true },
                    { label: 'Privacy Mode', value: 'Standard', editable: true }
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  ],
  navigation: {
    items: [
      { label: 'Home', path: '/', icon: 'home' },
      { label: 'Products', path: '/products', icon: 'products' },
      { label: 'Profile', path: '/profile', icon: 'profile' }
    ],
    logo: {
      text: 'SoundStorm',
    },
    themeToggle: {
      enabled: true,
      showLabel: true,
      label: 'Theme',
      position: 'right',
      size: {
        width: '56px',
        height: '32px'
      }
    }
  },
  user: {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'Audio Enthusiast',
    avatar: 'user',
    joinDate: '2023-06-20',
    bio: 'Music lover and party host. Always searching for the perfect sound system to make every event memorable.',
    lastActive: '30 minutes ago',
    stats: {
      orders: 8,
      wishlist: 5,
      reviews: 12
    }
  }
}
