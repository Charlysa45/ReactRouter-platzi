import { Link, Outlet } from 'react-router-dom'
import { blogdata } from '../../utils/blogdata'

export const BlogPage = () => {
  return (
    <>
      <div>Blog</div>

      <Outlet/>

      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}

export const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}

