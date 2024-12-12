import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Show */
export default function ShowPost() {
  const postId = useParams().id;
  const [postDetail, setPostDetail] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  /* Fetch data */
  const fetchPost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((req) => req.json())
      .then((data) => {
        setPostDetail(data);
      });
  };
  return (
    <>
      {/* Post detail */}
      <div className="container">
        <h1 className="my-5">Dettaglio post</h1>
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
                      {postDetail.tags.map((tag) => (
                        <span className="badge text-bg-primary m-1">{tag}</span>
                      ))}
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
