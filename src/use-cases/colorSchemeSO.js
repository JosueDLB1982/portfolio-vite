const isDarkThemeMode = window.matchMedia('(prefers-color-scheme: dark)')
      export const setTheme = (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme)
      }

      if(isDarkThemeMode.matches) {
        setTheme('dark')
      }