import { useState } from "react";
const defaultPost = {
  id: 1,
  image: "",
  title: "",
  published: true,
  tags: [],
};

const tags = ["Dolce", "Ricetta", "Pasta", "Salato", "Pomodoro"];
export default function StorePost() {
  const [formData, setFormData] = useState(defaultPost);
  const [postList, setPostList] = useState([]);

  /* Form submit */

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setPostList([...postList, formData]);
    setFormData({ ...defaultPost, id: formData.id + 1 });
  };

  const handleInputField = (e) => {
    const newPost = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newPost);
  };
  return (
    <>
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
          <div className="col-3 d-flex">
            <label htmlFor="published-form" className="form-label">
              <h3>Disponibilità</h3>
            </label>
            <input
              type="checkbox"
              value={formData.published}
              id="published-form"
            />
          </div>
          <div className="col-3 d-flex">
            <label htmlFor="tags-form" className="form-label">
              <h3>Tags</h3>
            </label>
            <input type="checkbox" value={formData.tags} id="tags-form" />
          </div>
          <button className="btn btn-primary mt-4">Crea post</button>
        </div>
      </form>
    </>
  );
}
