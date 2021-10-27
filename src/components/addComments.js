import React, {useEffect, useState} from 'react'
import db from '../firebase'
import { doc, setDoc } from '@firebase/firestore';
import { v4 as uuid } from "uuid/";
import { collection, onSnapshot } from '@firebase/firestore';
import DisplayComments from './displayComments'
import Authentication from '../context/context';
import {signInWithGoogle} from '../firebase'
import { useContext} from 'react';
import './addComment.css'

const AddComments = props =>{
    const [text, setText] = useState('')
    const [loginText, setLoginText] = useState('Login in now')
    const [popClosed, setPopUpClosed] = useState(false)
    const [comments, setComments] = useState([])
    let authStatus = useContext(Authentication);
 
    function commentFormText(e){
        setText(e.target.value)
    }

    if (popClosed){
        setLoginText('Login in now')
        setPopUpClosed(false)
    }

    function commentFormHandler(e){
        e.preventDefault()
        // Add a new document in collection "cities"
        setDoc(doc(db, "comments", uuid()),  {post_id:props.id,
            comment:text, date:new Date(), image:authStatus.image});
        setText('')
    }

    // fetch comments and display them
    useEffect(()=>{
       
            onSnapshot(collection(db, 'comments'), (snapshot)=>{
                let allComments = []
                snapshot.docs.forEach(comment =>{
                    let data =  comment.data()
                    if (data.post_id === props.id){
                        allComments.push(data)
                    }
                }) 
                allComments.sort(function(a,b){
                    return b.date - a.date;
                })
                setComments(allComments) 
            })
           
         
    }, [props.id])

    function loader(){
        let loading = <span id="loading"><span>&bull;</span><span>&bull;</span><span>&bull;</span></span>
        setLoginText(loading)
        
    }

    let commentForm = <div>
           
            <form onSubmit={commentFormHandler}>
                <input value={text} onChange={commentFormText} placeholder='Leave a comment'  type='text' />
            </form>
        </div>

    let login = <div>
        <h2>Login to add a comment</h2>
        <button onClick={()=>{signInWithGoogle().catch(error=>{setPopUpClosed(true)}); loader();}} className='loginBtn'>{loginText}</button>
    </div>

    
    return <React.Fragment>
        <div className='comments'>
            {authStatus.isLoggedIn?commentForm:login}
            
            <DisplayComments comments={comments} />
        </div>
    </React.Fragment>
}

export default AddComments