import {Fragment} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom'
import './blogItem.css'


const BlogItem =props=>{

    const cardStyles = {
        boxShadow: '1px 1px 1px 1px #fe6888'
    }

    const linkStyles = {
        background:'linear-gradient(45deg, #fe6888, #ff8e53)',
        color:'#fff',
        padding:'10px 15px',
        textDecoration:'none',
        fontSize:'large'
    }

    let link = `/post/${props.postContent.article.id}`

    return <Fragment>
       
       <Grid item xs={12} sm={6} lg={6} key={props.postContent.article.id}>
           
            <Card style={cardStyles}>
                <CardMedia
                component="img"
                height="300"
                image={props.postContent.article.image}
                alt={props.postContent.article.title}
                />
                
                <CardContent>
                    <h3>{props.postContent.article.title}</h3>
                    <p>{props.postContent.article.content.substr(0, 200)}</p>
                </CardContent>

                <CardActions>
                    <Link to={link} style={linkStyles} >Continue reading</Link>
                </CardActions>
            </Card>
        </Grid>
        
    </Fragment>
}

export default BlogItem