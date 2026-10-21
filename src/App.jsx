
import './App.css'

function App() {
  return (
    <div>
       <img
        src="/student.jpg"
        alt="Photo de l'étudiant"
        className="student-image"
      />
      <h1>Fiche étudiant</h1>

      <p>Nom & Prénom : Jmil Amine </p>
      <p>Email : aminjmil2@gmail.com</p>
      <p>Filiere : GLSI </p>
      <p>Group : GLSI2 A</p>
      <p>Établissement : ISIMA</p>
      <p>Ville : Mahdia</p>

      <a
        className="contact-button"
        href="mailto:aminjmil2@gmail.com"
      >
        Contacter
      </a>
    </div>
  )
}

export default App
