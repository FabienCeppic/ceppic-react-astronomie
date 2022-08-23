import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function FormArticle() {
  const [titre, setTitre] = useState();
  const [articleContenu, setArticleContenu] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "articles"), {
        titre: titre,
        articleContenu: articleContenu,
        created: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (submitted) {
    return (
      <>
        <p> L'article a été enregistré.</p>
      </>
    );
  }

  return (
    <div className="formArticle">
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="titre"
            placeholder="Titre de l'article"
            required
            onChange={(event) => setTitre(event.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Contenu de l'article"
            name="articleContenu"
            required
            onChange={(e) => setArticleContenu(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enregistrer l'article</button>
        </div>
      </form>
    </div>
  );
}
