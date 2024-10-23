import './styles/App.css';
import Header from './components/Header';
import Cultura from './components/Cultura';
import PalavraImpacto from './components/PalavraImpacto';
import Valores from './components/Valores';
import Parceiros from './components/Parceiros';
import Footer from './components/Footer.js';
import Case from './components/Case.js';
import Contato from './components/Contato.js';

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
      <section className="parceiros">
        <Parceiros />
      </section>
      <section className="cases">
        <Case />
      </section>
      <section className="contato">
        <Contato />
      </section>  
      <Footer />
    </div>
  );
}

export default App;
