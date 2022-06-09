import { Link } from "react-router-dom";

//Styles
import {
  DashboardStyle,
  NoPosts,
  Posts_header,
  Post_row,
} from "./DashboardStyle";

//Hooks
import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useDeleteDocument } from "../../Hooks/useDeleteDocument";

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando . . .</p>;
  }

  return (
    <DashboardStyle>
      <h2>Biblioteca de Posts</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <NoPosts>
          <p>não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post!
          </Link>
        </NoPosts>
      ) : (
        <>
          <Posts_header>
            <span>Título</span>
            <span>Ações</span>
          </Posts_header>
          {posts &&
            posts.map((post) => (
              <Post_row key={post.id}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Excluir
                  </button>
                </div>
              </Post_row>
            ))}
        </>
      )}
    </DashboardStyle>
  );
};
