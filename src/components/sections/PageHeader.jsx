import Container from "../Container";
import { useStyleFromConfig } from "../../hooks/useStyleFromConfig";

const PageHeader = ({ props: sectionProps }) => {
  const { getColorStyle, getGradientStyle } = useStyleFromConfig();
  const { title, description } = sectionProps;
  const textGradient =
    getGradientStyle("text.blackWhite") ||
    "linear-gradient(135deg, #000000, #ffffff)";

  return (
    <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: getColorStyle("primary") }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: getColorStyle("secondary") }}
        />
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: `${getColorStyle("primary")}15`,
              border: `1px solid ${getColorStyle("primary")}30`,
            }}
          >
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
              style={{
                background: textGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium Collection
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight"
            style={{
              background: textGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>

          {description && (
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed px-4"
              style={{ color: getColorStyle("text.secondary") }}
            >
              {description}
            </p>
          )}

          <div className="flex items-center justify-center gap-4 mt-8">
            <div
              className="h-px flex-1 max-w-20"
              style={{
                background: `linear-gradient(to right, transparent, ${getColorStyle(
                  "primary"
                )})`,
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getColorStyle("primary") }}
            />
            <div
              className="h-px flex-1 max-w-20"
              style={{
                background: `linear-gradient(to left, transparent, ${getColorStyle(
                  "primary"
                )})`,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
