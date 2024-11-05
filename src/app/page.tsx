import Beneficios from './components/Beneficios';
import ComoFunciona from './components/ComoFunciona';
import Contato from './components/Contato';
import Faq from './components/Faq';
import Home from './components/Home';
import Planos from './components/Planos';

export default function LandingPage() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#como-funciona">Como Funciona</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios</a>
          </li>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>

      <Home />
      <ComoFunciona />
      <Beneficios />
      <Planos />
      <Contato />
      <Faq />
    </main>
  );
}
