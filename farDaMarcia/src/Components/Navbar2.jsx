import "./Navbar2.css";

function Navbar2() {
  return (
    <nav>
      <img src="/farmarcia-logo-pq.avif" alt="Logo da Farmácia" />
      <div className="navbar-brand">FarDaMarcia</div>
      <ul className="navbar-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#serviços">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#cadastre-se">cadastre-se</a></li>

      </ul>
      {/* Barra de Pesquisa */}
      <form className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          aria-label="Pesquisar"
        />
        <button type="submit">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar2;
