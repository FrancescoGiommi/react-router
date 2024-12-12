/* Import link */
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import StorePost from "./StorePosts";

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

  /* Add Delete  */
  const deletePost = (id) => {
    const apiUrl = `http://localhost:3000/posts/${id}`;
    fetch(apiUrl, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetchPosts();
      });
  };

  const handleDeletePost = (id) => {
    deletePost(id);
  };

  return (
    <>
      <StorePost />
      <main>
        <div className="container my-5">
          <h1 className="mb-4">Lista dei post</h1>
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
                    <td>
                      {post.tags.map((tag) => (
                        <span className="badge text-bg-primary ms-1 mt-1">
                          {tag}
                        </span>
                      ))}
                    </td>

                    <td>
                      {/* Show Post */}
                      <Link
                        to={`/posts/${post.id}`}
                        type="button"
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        type="button"
                        className="btn btn-danger ms-3"
                        data-bs-toggle="modal"
                        data-bs-target={`#delete-posts-modal-${post.id}`}
                      >
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
      {/* Modal */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="modal fade"
          id={`delete-posts-modal-${post.id}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-danger fs-5"
                  id="staticBackdropLabel"
                >
                  Sei sicuro di voler eliminare il post
                  <strong> {post.title} </strong>?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">L'operazione è irreversibile </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Annulla
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
