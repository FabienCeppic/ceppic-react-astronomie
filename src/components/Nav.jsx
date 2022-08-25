import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="barre">
          <li>
            <Link to="/articles" className="barreLien">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/ajouterArticle" className="barreLien">
              Ajouter un article
            </Link>
          </li>
          <li>
            <Link to="/apropos" className="barreLien">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
      <main className="contenu">
        <Outlet />
      </main>
    </>
  );
}
