import { useTheme } from "../context/ThemeContext";
import { useStyleFromConfig } from "../hooks/useStyleFromConfig";
import Icon from "./Icon";

const ThemeToggle = ({ config = {} }) => {
  const { currentTheme, toggleTheme } = useTheme();
  const { getColorStyle, getBorderRadiusStyle } = useStyleFromConfig();
  const isDark = currentTheme === "dark";

  const width = config.size?.width || "56px";
  const height = config.size?.height || "32px";
  const widthNum = parseInt(width);
  const heightNum = parseInt(height);
  const thumbSize = heightNum - 8;
  const translateDistance = widthNum - thumbSize - 8;

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      style={{
        width: width,
        height: height,
        borderRadius: getBorderRadiusStyle("xl"),
        focusRingColor: getColorStyle("primary"),
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: isDark
            ? getColorStyle("primary")
            : getColorStyle("text.muted"),
          borderRadius: getBorderRadiusStyle("xl"),
          opacity: isDark ? 1 : 0.4,
        }}
      />

      <div
        className="absolute top-1 left-1 transition-all duration-300 flex items-center justify-center"
        style={{
          width: `${thumbSize}px`,
          height: `${thumbSize}px`,
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          transform: isDark
            ? `translateX(${translateDistance}px)`
            : "translateX(0)",
          boxShadow:
            "0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            color: isDark ? getColorStyle("primary") : "#f59e0b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={isDark ? "moon" : "sun"} size={14} />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <div
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 0.3 : 1,
            color: "#ffffff",
          }}
        >
          <Icon name="sun" size={12} />
        </div>
        <div
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 1 : 0.3,
            color: "#ffffff",
          }}
        >
          <Icon name="moon" size={12} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
