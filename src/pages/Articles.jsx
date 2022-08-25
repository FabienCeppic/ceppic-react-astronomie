import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./Articles.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesRef = query(
      collection(db, "articles"),
      orderBy("created", "desc")
    );
    onSnapshot(articlesRef, (snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="tousArticles">
      {articles.map((article) => (
        <div className="container" key={article.id}>
          <h2>{article.data.titre}</h2>
          <p>{article.data.articleContenu}</p>
        </div>
      ))}
    </div>
  );
}
