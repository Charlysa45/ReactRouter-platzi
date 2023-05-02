import { useParams } from "react-router-dom"
import { blogdata } from "../../utils/blogdata"

export const BlogPost = () => {
  const { slug } = useParams()

  const blogpost = blogdata.find(post => post.slug === slug)
  return (
    <>
      <h2>{blogpost.title}</h2>
      <div>{blogpost.author}</div>  
      <div>{blogpost.content}</div>  
    </>
  )
}

