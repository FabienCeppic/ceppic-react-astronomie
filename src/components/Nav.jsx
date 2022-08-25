import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="barre">
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/ajouterArticle">Ajouter un article</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
