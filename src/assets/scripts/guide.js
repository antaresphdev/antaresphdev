window.addEventListener('hashchange', e => {
  changeVisibleCodeDemo(getSlideIndex()) 
})

document.fonts.ready.then(() => changeVisibleCodeDemo(getSlideIndex()))

function getSlideIndex() {
  const hash = location.hash
  if (hash.length > 0) {
    return +hash.replace(/#code-/gm, '')
  } else {
    return 1
  }
}

function changeVisibleCodeDemo(slideIndex) {
  document.querySelectorAll('[data-guide-demo].shown')
    .forEach(el => el.classList.remove('shown'))
  
  document.querySelector(`[data-guide-demo="${slideIndex}"]`)
    .classList.add('shown')
}