const isDarkThemeMode = window.matchMedia('(prefers-color-scheme: dark)')
      const setTheme = (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme)
      }

      if(isDarkThemeMode.matches) {
        setTheme('dark')
      }