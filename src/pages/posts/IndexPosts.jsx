/* Import link */
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

/* Post list page */
export default function IndexPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  /* Fetch data */
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((req) => req.json())
      .then((data) => {
        const postsData = data.map((post) => ({
          id: post.id,
          image: post.image,
          title: post.title,
          published: post.published,
          tags: post.tags,
        }));
        console.log(postsData);
        setPosts(postsData);
      });
  };

  return (
    <>
      <main>
        <div className="container my-5">
          <h1>Lista dei post</h1>
          {posts.length > 0 ? (
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Anteprima</th>
                  <th scope="col">Titolo</th>
                  <th scope="col">Disponibilità</th>
                  <th scope="col">Tags</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.image}</td>
                    <td>{post.title}</td>
                    <td>{post.published ? "Si" : "No"}</td>
                    <td>{post.tags.join(", ")}</td>
                    <td>
                      {/* Show Post */}
                      <Link
                        to={`/posts/${post.id}`}
                        type="button"
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <button type="button" class="btn btn-danger ms-3">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2>No post</h2>
          )}
        </div>
      </main>
    </>
  );
}
