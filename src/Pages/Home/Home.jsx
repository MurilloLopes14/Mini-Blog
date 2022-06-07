//Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { HomeStyle, NoPosts, Search_form } from "./HomeStyle";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";

//Components
import { PostDetail } from "../../Components/PostDetail/PostDetail";

export const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <HomeStyle>
      <h1>Veja os posts mais recentes!</h1>
      <Search_form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </Search_form>
      <div>
        {loading && <p>Carregando . . .</p>}
        {posts && posts.length === 0 && (
          <NoPosts>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro Post.
            </Link>
          </NoPosts>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </HomeStyle>
  );
};
