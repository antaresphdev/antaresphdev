import { createSearchHandler } from "../libraries/search"

const form = document.forms['search']
/** @type {HTMLDivElement} */
const resultUI = document.querySelector('[data-search-results]')

/** @type {HTMLTemplateElement} */
const template = document.getElementById('tmpl-search')

async function initializeSearchForm() {
  const search = await createSearchHandler()
  form.reset()

  form.addEventListener('submit', e => {
    e.preventDefault()
    clearResults()

    const query = form.elements['query'].value
    const results = search.find(query)
    for (let key in results) {
      const set = results[key]
      const ul = createResultsList(set, query)
      const h2 = document.createElement('h2')
      const resultsCount = document.createElement('p')

      const cluster = document.createElement('div')
      cluster.classList.add('cluster', 'gap', 'ai--center')

      h2.classList.add('modal__subtitle')
      h2.innerText = key
      cluster.appendChild(h2)

      const pr = new Intl.PluralRules('en-US')
      resultsCount.classList.add('font-sans', 'h7')
      resultsCount.innerHTML = `${set.length} ${pr.select(set.length) === 'one' ? "result" : "results"}`
      cluster.appendChild(resultsCount)

      resultUI.appendChild(cluster)
      resultUI.appendChild(ul)
    }
  })

  const parentDialog = form.closest('[role=dialog]')
  if (parentDialog != null) {
    parentDialog.addEventListener('hide', e => clearResults())
  }
}

function clearResults() {
  while (resultUI.lastChild != null)
    resultUI.removeChild(resultUI.lastChild)
}

/**
 * @description Creates an HTMLUListElement based on an array of SearchResults
 * @author Francis Rubio
 * @param {import("../libraries/search").SearchResult[]} array
 * @returns {HTMLUListElement}
 */
function createResultsList(array, query) {
  const ul = document.createElement('ul')
  ul.classList.add('result-list')

  array.forEach(item => {
    const li = createListItem(item, query)
    ul.appendChild(li)
  })

  return ul
}

/**
 * 
 * @param {import("../libraries/search").SearchResult} data 
 * @param {string} query
 */
function createListItem(data, query) {
  const li = template.content.cloneNode(true).firstElementChild
  const a = li.querySelector('a[data-search-result=link]')
  const title = li.querySelector('[data-search-result=title]')
  const datetime = li.querySelector('[data-search-result=datetime]')
  const subtitle = li.querySelector('[data-search-result=description]')

  a.setAttribute('href', `${data.url}?highlight=${query}`)
  title.innerHTML = highlightQuery(query, data.title)
  subtitle.innerHTML = highlightQuery(query, data.description)

  const date = new Date(Date.parse(data.datetime))
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
  datetime.innerHTML = formatter.format(date)
  datetime.setAttribute('datetime', date.toISOString())

  return li
}

/**
 * @description For argument string, encloses all instances of query within <mark> element
 * @author Francis Rubio
 * @param {string} query the string to highlight
 * @param {string} string the source
 */
function highlightQuery(query, string) {
  const regex = new RegExp(query, 'igm')
  const iter = string.matchAll(regex)
  let newStr = string

  for (let value of iter) {
    const { index } = value
    const start = index
    const end = query.length + index

    const sliceStart = newStr.slice(0, start)
    const sliceMid = newStr.slice(start, end)
    const sliceEnd = newStr.slice(end, newStr.length - 1)
    const strArr = [sliceStart, `<mark>${sliceMid}</mark>`, sliceEnd]

    newStr = strArr.join('')
    console.log(newStr)
  }

  return newStr
}

initializeSearchForm()