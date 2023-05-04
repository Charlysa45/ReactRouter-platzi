import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "../../utils/blogdata"

export const BlogPost = () => {
  const navigate = useNavigate()
  const { slug } = useParams()

  const blogpost = blogdata.find(post => post.slug === slug)

  const returnToBlog = () => {
    navigate(-1)
  }
  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <div>{blogpost.author}</div>  
      <div>{blogpost.content}</div>  
    </>
  )
}

