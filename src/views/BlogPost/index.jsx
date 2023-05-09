import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "../../utils/blogdata"
import { useAuth } from "../../hooks/useAuth"

export const BlogPost = () => {
  const navigate = useNavigate()
  const { slug } = useParams()

  const auth = useAuth()

  const blogpost = blogdata.find(post => post.slug === slug)

  const canDelete =auth.user?.isAdmin || blogpost.author === auth.user?.username

  const returnToBlog = () => {
    navigate(-1)
  }
  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <div>{blogpost.author}</div>  
      <div>{blogpost.content}</div>  

      {canDelete && (
        <button>Eliminar blogpost</button>
      )}
    </>
  )
}

