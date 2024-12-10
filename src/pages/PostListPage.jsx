/* Import link */
import { Link } from "react-router-dom";

/* Post list page */
export default function PostListPage() {
  return (
    <>
      <main>
        <div className="container my-5">
          <h1>PostList</h1>
          <ul>
            <li>
              <Link to="/post/1">Post 1</Link>
            </li>
            <li>
              <Link to="/post/2">Post 2</Link>
            </li>
            <li>
              <Link to="/post/3">Post 3</Link>
            </li>
            <li>
              <Link to="/post/4">Post 4</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
