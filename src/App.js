import { useState } from "react";

import Header from "./components/Header";
import InputField from "./components/InputField";

function App() {
  const [url, setUrl] = useState("");
  // let [items, setItems] = useState([]);
  const baseUrl = "https://my-fliplet-test-api.herokuapp.com/api/v1/";

  const getUrl = (event) => setUrl(event.target.value);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <Header me="charles" />
        </div>

        <div className="row">
          <div className="col-xl-12">
            <form className="form">
              <div className="form-group">
                <InputField url={url} getUrl={getUrl} />
              </div>
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
  );
}

export default App;
