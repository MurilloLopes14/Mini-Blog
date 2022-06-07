import { Link } from "react-router-dom";
import { CreatedBy, Post_detailStyle, Tags } from "./PostDetailStyle";

export const PostDetail = ({ post }) => {
  return (
    <Post_detailStyle>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <CreatedBy>{post.createdBy}</CreatedBy>
      <Tags>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </Tags>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </Post_detailStyle>
  );
};
