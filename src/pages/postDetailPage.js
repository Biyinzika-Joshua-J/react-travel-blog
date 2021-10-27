import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import { collection, onSnapshot } from '@firebase/firestore';
import db from '../firebase'
import './postDetail.css'
import Grid from '@mui/material/Grid'
import AddComments from '../components/addComments'
import PostDetailContentPlaceHolder from '../components/postDetailContentPlaceHolder'

const PostDetailPage =()=>{

    const params = useParams()
    const [postDetail, setPostDetail] = useState([])
    const [posts, setPosts] = useState([])


    useEffect(()=>{
        onSnapshot(collection(db, 'posts'), (snapshot)=>{
            let blogPost = []
            snapshot.docs.forEach(post =>{
                let data =  post.data()
                data.article.id = post.id
                if (post.id === params.id){
                    blogPost.push(data)
                    setPostDetail(blogPost)
                }
                
            }) 
            
        })
        
    }, [params])

    

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

    let contentPlaceHolder;
    if (postDetail.length>0){
        contentPlaceHolder = <div className='container'>
        {postDetail.length>0 && <Grid container >
            <Grid item xs={12} sm={12} lg={8} className='post'>
                <div className='image'>
                    <img className='img' src={postDetail[0].article.image} alt='other posts' />
                    <h2>{postDetail[0].article.title}</h2>
                </div>
                <div className='content'>
                    {postDetail[0].article.content}
                </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} className='allposts'>
                <h2>Other Posts</h2>
                {posts.map(post => {
                    if (post.article.id !== postDetail[0].article.id){
                        return <div className='singlePost'>
                        <div className='postImg'>
                            <img src={post.article.image} alt='post' />
                        </div>
                        <h3>{post.article.title}</h3>
                        <p>{post.article.content.substr(0, 100)}</p>
                        <Link to={`/post/${post.article.id}`} className='link'>Continue reading</Link>
                    </div>
                    }
                })}
            </Grid>
        </Grid>}

        <AddComments id={params.id}/>
    </div>
    }else{
        contentPlaceHolder =  <PostDetailContentPlaceHolder/>
    }
    
   
    return <React.Fragment>
        {contentPlaceHolder}
    </React.Fragment>
}

export default PostDetailPage