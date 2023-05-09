import { NavLink } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export const Menu = () => {
  const auth = useAuth()

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null
          if (route.private && !auth.user) return null
          return (
          <li key={route.text}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.text}
            </NavLink>
          </li>
        )})}
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* <li>
          <NavLink
            // className={({ isActive }) => ''}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
          >
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

const routes = [
  {
    to: "/",
    text: "Home",
    private: false
  },
  {
    to: "/blog",
    text: "Blog",
    private: false
  },
  {
    to: "/profile",
    text: "Profile",
    private: true
  },
  {
    to: "/login",
    text: "Login",
    private: false,
    publicOnly: true
  },
  {
    to: "/logout",
    text: "Logout",
    private: true
  },
]
