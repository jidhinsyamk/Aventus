import { useEffect } from 'react'
import Icon from './Icon'
import Button from './Button'
import { useStyleFromConfig } from '../hooks/useStyleFromConfig'

const Dialog = ({ isOpen, onClose, config = {} }) => {
  const { getColorStyle, getBorderRadiusStyle } = useStyleFromConfig()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const {
    title = 'Product Information',
    description = '',
    productName = '',
    productPrice = '',
    image = '',
    ctaText = 'Continue',
    showImage = true,
    showPrice = true
  } = config

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all animate-scaleIn"
        style={{ 
          backgroundColor: getColorStyle('surface'),
          borderRadius: getBorderRadiusStyle('xl')
        }}
        onClick={(e) => e.stopPropagation()}
      >
         
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors z-10"
          style={{ 
            color: getColorStyle('text.primary'),
            backgroundColor: `${getColorStyle('primary')}10`
          }}
          aria-label="Close dialog"
        >
          <Icon name="close" size={20} />
        </button>

         
        <div className="p-6 sm:p-8">
          {showImage && image && (
            <div className="w-full h-48 sm:h-64 mb-6 rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              {typeof image === 'string' && image.startsWith('http') ? (
                <img 
                  src={image} 
                  alt={productName || 'Product'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              ) : null}
            </div>
          )}

          <div className="mb-4">
            <h2 
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: getColorStyle('text.primary') }}
            >
              {title}
            </h2>

            {productName && (
              <h3 
                className="text-lg sm:text-xl font-semibold mb-3"
                style={{ color: getColorStyle('primary') }}
              >
                {productName}
              </h3>
            )}

            {productPrice && showPrice && (
              <div 
                className="inline-flex items-center px-4 py-2 rounded-lg mb-4"
                style={{ 
                  backgroundColor: `${getColorStyle('primary')}15`,
                  color: getColorStyle('primary')
                }}
              >
                <span className="text-2xl font-bold">{productPrice}</span>
              </div>
            )}
          </div>

          {description && (
            <p 
              className="text-base mb-6 leading-relaxed"
              style={{ color: getColorStyle('text.secondary') }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t" style={{ borderColor: getColorStyle('border') }}>
            <Button 
              variant="primary" 
              size="md" 
              className="flex-1"
              onClick={onClose}
            >
              {ctaText}
            </Button>
            <Button 
              variant="outline" 
              size="md"
              className="flex-1 sm:flex-none"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog
