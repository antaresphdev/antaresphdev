const selectors = [
  '.button:is(a, button)',
  '[data-animation=button]:is(a, button)',
  '.breadcrumb__link',
  '.article__tag-link'
]

document.addEventListener('mousemove', e => {
  if (e.target.matches(selectors.join(','))) {
    const button = e.target
    const { offsetX, offsetY } = e
    button.style.setProperty('--hover-top', `${offsetY}px`)
    button.style.setProperty('--hover-left', `${offsetX}px`)
  }
})
