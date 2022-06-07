import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

//Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./Hooks/useAuthentication";

//Context
import { AuthProvider } from "./Context/AuthContext";

//Pages
import { Home } from "./Pages/Home/Home.jsx";
import { About } from "./Pages/About/About.jsx";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { CreatePost } from "./Pages/CreatePost/CreatePost";
import { Dashboard } from "./Pages/DashBoard/Dashboard";
import { Search } from "./Pages/Search/Search";
import { Post } from "./Pages/Post/Post";

//Components
import { NavBar } from "./Components/NavBar/NavBar";
import { EditPost } from "./Pages/EditPost/EditPost";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
