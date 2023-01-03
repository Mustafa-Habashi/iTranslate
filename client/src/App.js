

function App() {
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
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </div>
        <div><form action="/action_page.php">
          <label for="cars">Select a Language:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
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
