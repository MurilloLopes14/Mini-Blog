import { Link } from "react-router-dom";
import { PostDetail } from "../../Components/PostDetail/PostDetail";

import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useQuery } from "../../Hooks/useQuery";
import { Post_404, SearchStyle } from "./SearchStyle";

export const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <SearchStyle>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <Post_404>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </Post_404>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </SearchStyle>
  );
};
