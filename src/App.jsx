import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './views/HomePage'
import { BlogPage } from './views/BlogPage'
import { Menu } from './components/Menu'
import { ProfilePage } from './views/ProfilePage'

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element0={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
