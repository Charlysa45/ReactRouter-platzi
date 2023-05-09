import { HashRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./views/HomePage"
import { BlogPage } from "./views/BlogPage"
import { Menu } from "./components/Menu"
import { ProfilePage } from "./views/ProfilePage"
import { BlogPost } from "./views/BlogPost"
import { LoginPage } from "./views/LoginPage"
import { LogoutPage } from "./views/LogoutPage"

import "./App.css"
import { AuthProvider } from "./context/Auth"
import { AuthRoute } from "./components/AuthRoute"
function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/logout"
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />
          <Route path="*" element0={<p>Not Found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
