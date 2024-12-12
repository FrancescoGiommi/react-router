import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Show */
export default function ShowPost() {
  const postId = useParams().id;
  const [postDetail, setPostDetail] = useState(null);

  console.log(postId);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((req) => req.json())
      .then((data) => {
        setPostDetail(data);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Dettaglio post</h1>
        {postDetail && (
          <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={postDetail.image} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{postDetail.title}</h5>
                  <p className="card-text">{postDetail.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {postDetail.tags.join(", ")}
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
