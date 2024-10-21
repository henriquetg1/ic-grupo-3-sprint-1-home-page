import './styles/App.css';
import Header from './components/Header';
import Cultura from './components/Cultura';
import PalavraImpacto from './components/PalavraImpacto';
import Footer from './components/Footer.js';
import Valores from './components/Valores';

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
      <section className="valores">
        <Valores />
      </section>
      <Footer />
    </div>
  );
}

export default App;
