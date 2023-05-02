import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
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
        to: '/',
        text: 'Home',
    },
    {
        to: '/blog',
        text: 'Blog',
    },
    {
        to: '/profile',
        text: 'Profile',
    },
]
