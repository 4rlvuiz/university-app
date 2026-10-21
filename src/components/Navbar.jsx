import "./Navbar.css";

function Navbar() {
  return (
    <nav className="main-navbar">
      <a href="#accueil" className="nav-item">🏠 Accueil</a>
      <a href="#etudiants" className="nav-item">👨‍🎓 Étudiants</a>
      <a href="#contact" className="nav-item">📞 Contact</a>
    </nav>
  );
}

export default Navbar;