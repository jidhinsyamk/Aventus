import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useStyleFromConfig } from "../hooks/useStyleFromConfig";
import { useTheme } from "../context/ThemeContext";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const Layout = () => {
  const { getNavigationItems, config } = useConfig();
  const { getColorStyle } = useStyleFromConfig();
  const { currentTheme } = useTheme();
  const location = useLocation();
  const navItems = getNavigationItems();
  const themeToggleConfig = config.navigation?.themeToggle || {
    enabled: true,
    showLabel: true,
    label: "Theme",
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarBackground = currentTheme === "dark" ? "#1f1f1f" : "#ffffff";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const backgroundStyle = {
    background:
      getColorStyle("background") ||
      "linear-gradient(to right, #FFC837, #FF8008)",
    backgroundColor: getColorStyle("backgroundFallback") || "#FF8008",
    minHeight: "100vh",
  };

  return (
    <div className="flex flex-col" style={backgroundStyle}>
      <header
        className="sticky top-0 z-50 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: navbarBackground,
          borderBottom: `1px solid ${getColorStyle("border")}`,
          boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
        }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-3 group transition-all duration-200"
            >
              <span
                className="hidden sm:inline-block text-2xl sm:text-3xl font-extrabold relative"
                style={{
                  background: `linear-gradient(135deg, ${getColorStyle(
                    "primary"
                  )}, ${getColorStyle("secondary")})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.03em",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                {config.navigation?.logo?.text}
                <span
                  className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${getColorStyle(
                      "primary"
                    )}, ${getColorStyle("secondary")})`,
                  }}
                />
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2 transition-all duration-200 group"
                    style={{
                      color: isActive
                        ? getColorStyle("primary")
                        : getColorStyle("text.primary"),
                      fontWeight: isActive ? "600" : "400",
                    }}
                  >
                    <span className="font-medium text-sm lg:text-base relative">
                      {item.label}

                      {isActive && (
                        <span
                          className="absolute bottom-0 left-0 w-full h-0.5 block transition-all duration-200"
                          style={{ backgroundColor: getColorStyle("primary") }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}

              <div
                className="h-6 w-px mx-2"
                style={{ backgroundColor: getColorStyle("border") }}
              />

              {themeToggleConfig.enabled && (
                <div className="flex items-center gap-2 pl-2">
                  {themeToggleConfig.showLabel && (
                    <span
                      className="text-sm hidden lg:inline font-medium"
                      style={{ color: getColorStyle("text.secondary") }}
                    >
                      {themeToggleConfig.label || "Theme"}
                    </span>
                  )}
                  <ThemeToggle config={themeToggleConfig} />
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center gap-3">
              {themeToggleConfig.enabled && (
                <div className="flex items-center gap-2">
                  <ThemeToggle config={themeToggleConfig} />
                </div>
              )}

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  color: getColorStyle("text.primary"),
                  backgroundColor: `${getColorStyle("primary")}08`,
                }}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 pb-4 border-t"
                : "max-h-0 opacity-0"
            }`}
            style={{ borderColor: getColorStyle("border") }}
          >
            <div className="flex flex-col space-y-1 pt-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 transition-all duration-200"
                    style={{
                      color: isActive
                        ? getColorStyle("primary")
                        : getColorStyle("text.primary"),
                      fontWeight: isActive ? "600" : "400",
                    }}
                  >
                    <span className="font-medium relative">
                      {item.label}

                      {isActive && (
                        <span
                          className="absolute bottom-0 left-0 w-full h-0.5 block transition-all duration-200"
                          style={{ backgroundColor: getColorStyle("primary") }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer
        className="mt-auto py-6 sm:py-8 border-t"
        style={{
          backgroundColor: getColorStyle("surface"),
          borderColor: getColorStyle("border"),
        }}
      >
        <div
          className="container mx-auto px-4 text-center"
          style={{ color: getColorStyle("text.secondary") }}
        ></div>
      </footer>
    </div>
  );
};

export default Layout;
