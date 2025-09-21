import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">HobbyLocal</h3>
            <p className="footer-description">
              Conectando pessoas a hobbies e atividades locais. Projeto
              acadêmico de IHC.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Links Rápidos</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/problema">Problema</Link>
              </li>
              <li>
                <Link to="/solucao">Solução</Link>
              </li>
              <li>
                <Link to="/pesquisa">Pesquisa</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Sobre o Projeto</h4>
            <ul className="footer-links">
              <li>
                <Link to="/equipe">Nossa Equipe</Link>
              </li>
              <li>
                <a href="#metodologia">Metodologia</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Informações</h4>
            <p className="footer-info">
              Disciplina: Interação Humano-Computador
              <br />
              Período: 2025.2
              <br />
              Instituição: Universidade
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} HobbyLocal - Projeto Acadêmico de IHC. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
