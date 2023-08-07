import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input type="text" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Lista de películas</main>
    </div>
  );
}

export default App;
