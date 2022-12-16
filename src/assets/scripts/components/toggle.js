class Toggle {
  #element;
  #toggler;
  #events;

  constructor(toggler) {
    this.#toggler = toggler

    const id = this.#toggler.dataset.toggle
    this.#element = document.getElementById(id)

    this.#toggler.addEventListener('click', e => {
      console.log("HELLO")
      this.toggle();
    })

    this.hidden = true

    if (this.#element.matches('form[data-toggle-on-submit]')) {
      this.#element.addEventListener('submit', e => this.toggle())
    }

    this.#events = {
      show: [],
      hide: [],
    }
  }

  addEventListener(eventKey, eventHandler) {
    this.#events[eventKey].push(eventHandler)
  }

  set hidden(value) {
    if (value) {
      this.#element.setAttribute('hidden', '')
      this.#events.hide.forEach(fn => fn(this))
    } else {
      this.#element.removeAttribute('hidden')
      this.#events.show.forEach(fn => fn(this))
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