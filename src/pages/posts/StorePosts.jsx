import { useState } from "react";

/* Default Post */
const defaultPost = {
  id: 1,
  image: "",
  title: "",
  published: true,
  tags: [],
};

/* Tag list */
const tagList = ["Dolce", "Ricetta", "Pasta", "Salato", "Pomodoro"];

export default function StorePost() {
  const [formData, setFormData] = useState(defaultPost);
  const [postList, setPostList] = useState([]);

  /* Form submit */
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setPostList([...postList, formData]);
    setFormData({ ...defaultPost, id: formData.id + 1 });
  };

  /* Input function */
  const handleInputField = (e) => {
    const newPost = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newPost);
  };

  /* Tag function */
  const handleFormTagChange = (e) => {
    let newTags;
    if (!e.target.checked) {
      newTags = formData.tags.filter((tag) => tag != e.target.value);
    } else {
      newTags = [...formData.tags, e.target.value];
    }
    const newFormTags = { ...formData, tags: newTags };
    setFormData(newFormTags);
    console.log(newFormTags);
  };

  /* Delete function */
  const removePost = (deleteIndex) => {
    const deletedPost = postList.filter((item, index) => {
      return deleteIndex !== index;
    });
    setPostList(deletedPost);
  };
  return (
    <>
      {/* Store post */}
      <form onSubmit={handleSubmitForm} className="container">
        <div className="row">
          <h1 className="my-3">Crea post</h1>
          <div className="col-3">
            <label htmlFor="image-form" className="form-label">
              <h3>Anteprima</h3>
            </label>
            <input
              id="image-form"
              className="form-control"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputField}
            />
          </div>
          <div className="col-3">
            <label htmlFor="title-form" className="form-label">
              <h3>Titolo</h3>
            </label>
            <input
              id="title-form"
              className="form-control"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputField}
            />
          </div>
          <div className="col-3">
            <h3>Tags</h3>
            <div className="col-3 d-flex flex-row gap-2">
              <label htmlFor="tags-form" className="form-label"></label>
              {tagList.map((tag, index) => (
                <label
                  className="form-label"
                  htmlFor={`tags-form-${tag}`}
                  key={index}
                >
                  {tag}
                  <input
                    checked={formData.tags.includes(tag)}
                    id={`tags-form-${tag}`}
                    type="checkbox"
                    name="tags"
                    value={tag}
                    onChange={handleFormTagChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mt-4">Crea post</button>
        </div>
      </form>
      <hr />
      <div className="container">
        {postList.map((post) => (
          <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.image} alt="" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title h1">{post.title}</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {post.tags.map((tag) => (
                        <span className="badge text-bg-primary m-1">{tag}</span>
                      ))}
                    </small>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => removePost(post.id)}
                    className="btn btn-danger m-2 "
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
