import { useContext } from "react"
import { PostsContext } from "../App"

export default function Header() {
    
    const {posts, setPosts, APP_Name} = useContext(PostsContext)
    return <h1>{ APP_Name }</h1>
}
