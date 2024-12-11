import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Show */
export default function ShowPost() {
  const postId = useParams().id;
  const [singlePost, setSinglePost] = useState();

  console.log(postId);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((req) => req.json())
      .then((data) => {
        setSinglePost(data);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Dettaglio pizza</h1>
        {singlePost && (
          <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={singlePost.image} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{singlePost.title}</h5>
                  <p className="card-text">{singlePost.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {singlePost.tags.join(", ")}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
