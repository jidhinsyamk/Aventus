import { useState } from "react";
import Container from "../Container";
import Card from "../Card";
import Button from "../Button";
import Icon from "../Icon";
import Dialog from "../Dialog";
import { useStyleFromConfig } from "../../hooks/useStyleFromConfig";

const ProductGrid = ({ props: sectionProps }) => {
  const { getColorStyle } = useStyleFromConfig();
  const { columns = 3, products, dialog: dialogConfig = {} } = sectionProps;
  const [imageErrors, setImageErrors] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGetStarted = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const getDialogConfig = () => {
    if (!selectedProduct || !dialogConfig.enabled) return {};

    return {
      title:
        dialogConfig.title?.replace("{productName}", selectedProduct.name) ||
        `Get Started with ${selectedProduct.name}`,
      description: dialogConfig.description || selectedProduct.description,
      productName: selectedProduct.name,
      productPrice:
        selectedProduct.price === "Free" ? "Free" : `$${selectedProduct.price}`,
      image: dialogConfig.showImage ? selectedProduct.image : "",
      ctaText: dialogConfig.ctaText || "Continue",
      showImage: dialogConfig.showImage !== false,
      showPrice: dialogConfig.showPrice !== false,
    };
  };

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className={`grid ${gridCols[columns]} gap-4 sm:gap-6`}>
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="w-full h-48 sm:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative">
                {product.image &&
                typeof product.image === "string" &&
                product.image.startsWith("http") &&
                !imageErrors[product.id] ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                    loading="lazy"
                    onError={() => {
                      setImageErrors((prev) => ({
                        ...prev,
                        [product.id]: true,
                      }));
                    }}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ color: getColorStyle("primary") }}
                  >
                    <Icon
                      name={
                        product.image && !product.image.startsWith("http")
                          ? product.image
                          : "box"
                      }
                      size={64}
                      className="sm:w-16 sm:h-16"
                    />
                  </div>
                )}
              </div>
              <div className="mb-2 flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${getColorStyle("primary")}20`,
                    color: getColorStyle("primary"),
                  }}
                >
                  {product.category}
                </span>
                {product.status && (
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor:
                        product.statusType === "success"
                          ? `${getColorStyle("accent")}20`
                          : product.statusType === "warning"
                          ? "#fbbf2420"
                          : `${getColorStyle("primary")}20`,
                      color:
                        product.statusType === "success"
                          ? getColorStyle("accent")
                          : product.statusType === "warning"
                          ? "#f59e0b"
                          : getColorStyle("primary"),
                    }}
                  >
                    {product.status}
                  </span>
                )}
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: getColorStyle("text.primary") }}
              >
                {product.name}
              </h3>
              <p
                className="text-xs sm:text-sm mb-4 flex-grow"
                style={{ color: getColorStyle("text.secondary") }}
              >
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto pt-2">
                <span
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: getColorStyle("primary") }}
                >
                  {product.price === "Free"
                    ? product.price
                    : `$${product.price}`}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                  onClick={() => handleGetStarted(product)}
                >
                  <Icon name="cart" size={14} />
                  <span>Get Started</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {dialogConfig.enabled && (
        <Dialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          config={getDialogConfig()}
        />
      )}
    </section>
  );
};

export default ProductGrid;
