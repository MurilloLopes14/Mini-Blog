import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../Hooks/useFetchDocument";
import { PostStyle, Tags } from "./PostStyle";

export const Post = () => {
  const { id } = useParams();

  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <PostStyle>
      {loading && <p>Carregando detalhes do post . . . </p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <Tags>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </Tags>
        </>
      )}
    </PostStyle>
  );
};
