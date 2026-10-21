import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contactez l'Administration</h3>
          <p>📧 Email : contact@universite.tn</p>
          <p>📞 Téléphone : +216 71 000 000</p>
          <p>📍 Adresse : Campus Universitaire, Tunisie</p>
        </div>
        <div className="footer-section">
          <p>&copy; 2026 - Département Génie Logiciel & Systèmes d'Information (GLSI 2).</p>
          <p>Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;