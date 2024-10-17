import './styles/App.css';
import Header from './components/Header';
import Cultura from './components/Cultura';
import PalavraImpacto from './components/PalavraImpacto';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <PalavraImpacto />
      </section>
      <section className="cultura">
        <Cultura />
      </section>
    </div>
  );
}

export default App;
