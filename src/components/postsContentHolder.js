import Grid from '@mui/material/Grid'
import './postsContentHolder.css'
const ContentHolder = () =>{
    let placeHolderContent = [1,2,3,4,5,6,7,8]
    return (
        <Grid container spacing={4} justify='center'>
            {placeHolderContent.map(number => {
                return <Grid item xs={12} sm={6} lg={6} key={number}>
                <div className='card'>
                    <div className='image-ph animated-bg'/>
                    <div className='content-ph'>
                        <div className='heading animated-bg animated-bg-text'></div>
                        <div className='description animated-bg animated-bg-text'></div>
                    </div>
                    <div className='action animated-bg-text animated-bg'>
                    </div>
                </div>
            </Grid>
            })}
        </Grid>
    )
}

export default ContentHolder