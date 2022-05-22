import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <Header me="charles" />
        </div>

        <div className="row">
          <div className="col-xl-12">
            <form className="form">
              <div className="form-group">{/* <InputField /> */}</div>
              <div className="form-group">{/* <SubmitBtn /> */}</div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <h1>Articles</h1>

          {/* <Article /> */}
        </div>
      </div>
    </div>
  )
}

export default App
