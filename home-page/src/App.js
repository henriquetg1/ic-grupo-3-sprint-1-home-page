import './styles/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <h1>Palavras de Impacto</h1>
        <p>O Insper Coding é uma entidade focada em...</p>
        <div className="buttons">
          <button className="btn-primary">Nosso Trabalho</button>
          <button className="btn-secondary">Contato</button>
        </div>
      </section>
    </div>
  );
}

export default App;
