import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import FavoriteRecipes from "./pages/FavoriteRecipes/FavoriteRecipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes isPublic={true} />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/favorites"
            element={
              <Layout>
                <FavoriteRecipes />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
