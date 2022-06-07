//Hooks
import { useEffect, useState } from "react";
import { useUpdateDocument } from "../../Hooks/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocument } from "../../Hooks/useFetchDocument";

//styles
import { EditPostSylte, Image_preview, Preview_title } from "./EditPostStyle";

export const EditPost = () => {
  const { id } = useParams();

  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validate image Url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }
    //Edit tags array

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //check all values

    if (!title || !image || !tags || !body) {
      setFormError("Por favor preencha todos os campos!");
    }

    if (formError) {
      return;
    }

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    //redirect to Home Page
    navigate("/dashboard");
  };

  return (
    <EditPostSylte>
      {post && (
        <>
          <h2>Editaando Post: {post.title}</h2>
          <p>Altere os dados do post como desejar!</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name="title"
                placeholder="Pense num bom título..."
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>Url da imagem:</span>
              <input
                type="text"
                name="image"
                placeholder="insira uma imagem que representa o seu post"
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <div>
              <Preview_title>Preview da imagem atual:</Preview_title>
              <Image_preview src={post.image} alt={post.title} />
            </div>
            <label>
              <span>Conteúdo:</span>
              <textarea
                name="body"
                placeholder="Insira o conteúdo do post"
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                placeholder="insira as tags sepraradas por vírgula (,)"
                required
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </EditPostSylte>
  );
};
