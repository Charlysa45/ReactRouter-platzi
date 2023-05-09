import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const adminList = ['Irisval', 'RetaxMaster', 'freddier']

function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username)
    setUser({ username, isAdmin })
    navigate("/profile")
  }
  const logout = () => {
    setUser(null)
    navigate("/")
  }
  const auth = { user, login, logout }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export { AuthProvider }
