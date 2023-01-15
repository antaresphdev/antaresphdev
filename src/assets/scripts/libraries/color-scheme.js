class ColorScheme {
  constructor() {
    const form = document.forms['color-scheme']
    form.addEventListener('submit', e => {
      e.preventDefault()
      this.#setColorScheme(form['color-scheme'].value)
    })

    const scheme = this.#loadFromLocalStorage()
    console.log('[COLOR SCHEME]', scheme)
    this.scheme = ""
    this.#setColorScheme(scheme)

    form['color-scheme'].value = scheme
  }

  #saveToLocalStorage() {
    if (window.localStorage) {
      localStorage.setItem('color-scheme', this.scheme)
    }
  }

  #loadFromLocalStorage() {
    const colorScheme = localStorage.getItem('color-scheme')

    return colorScheme != null
      ? colorScheme in ['light', 'dark', 'default']
        ? colorScheme
        : "default"
      : "default"
  }

  /**
   * Set the color scheme
   * @param {"default" | "light" | "dark"} colorScheme the color scheme for this page
   */
  #setColorScheme(colorScheme) {
    const body = document.body
    body.classList.remove('theme-default', 'theme-light', 'theme-dark')
    body.classList.add('theme-' + colorScheme)
    this.scheme = colorScheme
    this.#saveToLocalStorage()
  }

  setLight() { this.#setColorScheme('light') }
  setDefault() { this.#setColorScheme('default') }
  setDark() { this.#setColorScheme('dark') }
}

export { ColorScheme }