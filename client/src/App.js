import axios from "axios";

function App() {

  const translate = () => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_RapidAPI_URL,
      params: { text: 'Hello, world!!', to: 'ar', from: 'en' },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_RapidAPI_Host
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data.translated_text);
    }).catch(function (error) {
      console.error(error);
    });

  }


  return (
    <div className="container mt-3">
      <h2 class="text-center">iTranslate</h2>
      <div>
        <div class="mb-3">
          <label for="text" class="form-label">
            Enter your Text:
          </label>
          <textarea class="form-control" id="bio" rows="3"></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary"
            onClick={translate}>
            Translate!!
          </button>
        </div>
        <div><form action="/action_page.php">
          <label for="cars">Select a Language:</label>
          <select name="cars" id="cars">
            <option value="ar">Arabic</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>

        </form></div>

        <br></br>
        <div class="mb-3">
          <label for="result" class="form-label">
            Translation
          </label>
          <textarea class="form-control" id="result" rows="3"></textarea>
        </div>

      </div>
    </div>
  );
}

export default App;
