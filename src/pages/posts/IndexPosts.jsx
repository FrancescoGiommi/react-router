/* Import link */
import { Link } from "react-router-dom";

/* Post list page */
export default function IndexPosts() {
  return (
    <>
      <main>
        <div className="container my-5">
          <h1>Lista dei post</h1>
          <ul>
            <li>
              <Link to="/pages/1">Post 1</Link>
            </li>
            <li>
              <Link to="/pages/2">Post 2</Link>
            </li>
            <li>
              <Link to="/pages/3">Post 3</Link>
            </li>
            <li>
              <Link to="/pages/4">Post 4</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
