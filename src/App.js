import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import Article from "./components/Article";

function App() {
  return (
    <div className="container w-50 mt-4">
      <div className="row">
        <Header />

        <div className="row mb-4">
          <div className="col-xl-12">
            <form className="form">
              <div className="form-group mb-2">
                <InputField />
              </div>
              <div className="form-group">
                <SubmitBtn />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <h1>Articles</h1>

          <Article />
        </div>
      </div>
    </div>
  );
}

export default App;
