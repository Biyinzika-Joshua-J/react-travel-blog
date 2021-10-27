import './App.css';
import PostsPage from './pages/postsPage';
import PostDetailPage from './pages/postDetailPage'
import Layout from './components/layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { useEffect } from 'react';
import Authentication from './context/context'
import {useContext} from 'react';

function App() {
  let authStatus = useContext(Authentication)
  useEffect(()=>{
      getAuth().onAuthStateChanged(user=>{
        if (user){
          authStatus.setLogin();
          authStatus.handleUsername(user.displayName);
          authStatus.handleImage(user.photoURL)
        }
      })
  }, [])

  return (<Layout>
        <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <PostsPage/>
              </Route>

              <Route exact path='/post/:id'>
                <PostDetailPage/>
              </Route>
            </Switch>
        </BrowserRouter>

      </Layout>);
}

export default App;
