import React from 'react';
import './displayComments.css'

const DisplayComments = props=>{
    

    return <React.Fragment>
        <div className='displayComments'>
                {props.comments.map(singleComment => <div className='comment'> <span> 
                    <img src={singleComment.image} alt='author' /> </span>
                     {singleComment.comment}</div>)}
            </div>
    </React.Fragment>
}

export default DisplayComments