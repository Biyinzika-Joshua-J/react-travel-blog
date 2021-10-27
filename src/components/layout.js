import React from 'react'
import PrimarySearchAppBar from './navBar'
import Footer from './footer'

const Layout = (props) =>{

    const style ={
        paddingTop:'30px'
    }

    return <React.Fragment>
        <PrimarySearchAppBar/>
        <main style={style}  >{props.children}</main>
        <Footer/>
    </React.Fragment>
}

export default Layout