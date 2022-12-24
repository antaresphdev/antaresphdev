class Search {
  #data;
  constructor(data) {
    this.#data = data
  }

  find(str) {
    const result = {}
    Object.keys(this.#data).forEach(category => {
      result[category] = this.#data[category]
        .filter(item => item.content.includes(str) | item.description.includes(str) | item.title.includes(str))
        .map(item => ({
            content: item.content.replaceAll(str, `<mark class="search__result-occurence">${str}</mark>`),
            description: item.description.replaceAll(str, `<mark class="search__result-occurence">${str}</mark>`),
            title: item.title.replaceAll(str, `<mark class="search__result-occurence">${str}</mark>`)
          }))
    })

    return result
  }
}

async function createSearchHandler() {
  return new Promise((resolve, reject) => {
    fetch(API_CONTENT, { method: "GET" })
      .then(response => response.json())
      .then(json => resolve(new Search(json)))
      .catch(err => reject(err))
  })
}

export {
  createSearchHandler
}