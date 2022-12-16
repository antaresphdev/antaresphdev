class Toggle {
  #element;
  #toggler;

  constructor(toggler) {
    this.#toggler = toggler

    const id = this.#toggler.dataset.toggle
    this.#element = document.getElementById(id)

    this.#toggler.addEventListener('click', e => {
      console.log("HELLO")
      this.toggle();
    })

    this.hidden = true
  }

  set hidden(value) {
    if (value) {
      this.#element.setAttribute('hidden', '')
    } else {
      this.#element.removeAttribute('hidden')
    }
  }

  get hidden() {
    return this.#element.hasAttribute('hidden')
  }

  toggle() {
    console.log('[TOGGLE] Before: ', this.hidden)
    this.hidden = !this.hidden
    console.log('[TOGGLE] Now: ', this.hidden)
  }
}

export { Toggle }