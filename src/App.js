import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Restaurant from "./components/restaurants";
import Login from "./components/login";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/restaurants-list";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <Routes>
        <Route path={("/", "/restaurants")} element={<RestaurantsList />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/restaurants/:id/review" element={<AddReview user={user} />} />
        <Route path="/restaurants/:id" element={<Restaurant user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
