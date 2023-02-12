class Search {
  /**
   * @type {SearchResultCollection}
   */
  #data;
  constructor(data) {
    this.#data = data
  }

  /**
   * @description Searches the dataset for a string
   * @author Francis Rubio
   * @param {String} query the string to find
   * @returns {SearchResultCollection}
   * @memberof Search
   */
  find(query) {
    /** @type {SearchResultCollection} */
    const results = {}

    Object.keys(this.#data)
      .forEach(key => {
        const array = this.#data[key]
        const keyResults = array.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
          || item.description.toLowerCase().includes(query.toLowerCase())
          || item.content.toLowerCase().includes(query.toLowerCase()))

        results[key] = keyResults
      })

    return results
  }
}

/**
 * @description Creates a search handler
 * @author Francis Rubio
 * @returns {Promise<Search>}  
 */
async function createSearchHandler() {
  return new Promise((resolve, reject) => {
    console.log(`${API_CONTENT}`)
    fetch(`${API_CONTENT}`, { method: "GET" })
      .then(response => response.json())
      .then(json => resolve(new Search(json)))
      .catch(err => reject(err))
  })
}


/**
 * @typedef {Object} SearchResult
 * @param {string} content
 * @param {string} title
 * @param {string} description
 */

/**
 * @typedef {Object<string, SearchResult>} SearchResultCollection
 */

export {
  createSearchHandler
}