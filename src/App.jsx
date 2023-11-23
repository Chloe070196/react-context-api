import { useState } from 'react'
import { createContext } from 'react';
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'

const APP_NAME = 'Next-gen Social Media'
const PostsContext = createContext()

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
        <>
        <PostsContext.Provider value={{posts, setPosts, APP_NAME}}>
            <Header />
            <CreatePost />
            <Posts />
        </PostsContext.Provider>
        </>
    )
}

export { App, PostsContext }
