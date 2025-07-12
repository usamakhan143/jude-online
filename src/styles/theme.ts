export const theme = {
  colors: {
    primary: "#6366f1", // Premium Indigo
    primaryDark: "#4338ca", // Indigo 700
    primaryLight: "#8b5cf6", // Purple 500
    secondary: "#f8fafc",
    success: "#10b981", // Emerald 500
    danger: "#ef4444", // Red 500
    warning: "#f59e0b", // Amber 500
    dark: "#0f172a", // Slate 900
    accent: "#ec4899", // Pink 500
    gradient: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tertiary: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      dark: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
      rainbow:
        "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)",
      glow: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)",
    },
    text: {
      primary: "#0f172a", // Slate 900
      secondary: "#475569", // Slate 600
      light: "#94a3b8", // Slate 400
      white: "#ffffff",
      muted: "#64748b",
    },
    bg: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      tertiary: "#f1f5f9",
      dark: "#0f172a",
      glass: "rgba(255, 255, 255, 0.25)",
    },
    border: "#e2e8f0",
    glow: {
      primary: "0 0 40px rgba(99, 102, 241, 0.3)",
      secondary: "0 0 40px rgba(236, 72, 153, 0.3)",
      success: "0 0 40px rgba(16, 185, 129, 0.3)",
    },
  },

  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
    "4xl": "8rem", // 128px
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },

  borderRadius: {
    sm: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  animations: {
    duration: {
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.5s",
      slower: "0.8s",
      slowest: "1.2s",
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      sharp: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  },

  effects: {
    glass: "backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);",
    glow: "filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));",
    float: "transform: translateY(-10px);",
    scale: "transform: scale(1.05);",
  },
};

export type Theme = typeof theme;
