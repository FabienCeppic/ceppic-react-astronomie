import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
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
