import React, {useState, useEffect} from 'react'
import BlogItem from './blogItem';
import db from '../firebase'
import { collection, onSnapshot } from '@firebase/firestore';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CircularIndeterminate from './linearProgress'
import ContentHolder from './postsContentHolder'

const BlogPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        onSnapshot(collection(db, 'posts'), (snapshot)=>{
            const blogPosts = []
            snapshot.docs.forEach(post =>{
                let data =  post.data()
                data.article.id = post.id
                blogPosts.push(data)
            })
            setPosts(blogPosts)
            
        })
    }, [])

    let content = null

    if (posts.length > 0){
        content = <Grid container spacing={4} justify='center'>{posts.map(post => <BlogItem postContent={post}/>) }</Grid>
    }else{
        content = <ContentHolder/>
    }


    return <React.Fragment>
    <Container >
        {content}
    </Container>
    </React.Fragment>
}

export default BlogPosts