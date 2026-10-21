import "./StudentCard.css";
import studentImage from "../assets/student.jpg"; // Remonte d'un dossier pour aller dans src/assets

function StudentCard(props) {
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      {/* On utilise directement l'image importée ou props.image */}
      <img src={studentImage} alt="Photo de l'étudiant" />
      <h1>Fiche étudiant</h1>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Téléphone:</strong> {props.telephone}</p>
      <p><strong>Filière:</strong> {props.filiere}</p>
      <p><strong>Année:</strong> {props.anneeEtude}</p>
      <p><strong>Groupe:</strong> {props.groupe}</p>
      <p><strong>Ville:</strong> {ville}</p>
    </div>
  );
}

export default StudentCard;