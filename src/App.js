import { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import InputField from './components/InputField'
import SubmitBtn from './components/SubmitBtn'
import Article from './components/Article'

function App() {
  const [url, setUrl] = useState('')
  let [items, setItems] = useState([])
  const baseUrl = 'https://my-fliplet-test-api.herokuapp.com/api/v1/'

  const getUrl = (event) => setUrl(event.target.value)

  const handleSearch = async (event) => {
    event.preventDefault()

    const isAllValid = handleFormValidation()

    if (!isAllValid) {
      return
    }

    const fullUrl = `${baseUrl}rss-to-json?rss_url=${url}`
    let result

    try {
      result = await axios.get(fullUrl)
    } catch (error) {
      console.error(error)
    }

    setItems((items = result.data.items))
  }

  const handleFormValidation = () => {
    if (!url) {
      alert('A RSS URL is required')
      return false
    }

    if (!url.includes('http://') && !url.includes('https://')) {
      alert('RSS URL must be a valid url')
      return false
    }

    return true
  }

  return (
    <div className="container w-50 mt-4">
      <div className="row">
        <Header />

        <div className="row mb-4">
          <div className="col-xl-12">
            <form className="form">
              <div className="form-group mb-2">
                <InputField url={url} getUrl={getUrl} />
              </div>
              <div className="form-group">
                <SubmitBtn handleSubmit={handleSearch} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <h1>Articles</h1>

          {items.map((item, key) => {
            return (
              <Article
                key={key}
                imgSrc={item.thumbnail}
                title={item.title}
                link={item.link}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
