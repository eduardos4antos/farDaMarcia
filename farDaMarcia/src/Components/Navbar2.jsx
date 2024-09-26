import "./Navbar2.css"

function Navbar2() {
  return (
    <nav>
     <img src="/farmarcia-logo-pq.avif" alt="deu ruim" />
        <div className="navbar-brand">FarDaMarcia</div>
        <ul className="navbar-links"></ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#serviços">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
    </nav>
  )
}

export default Navbar2
