import React ,{useEffect} from 'react';
import './App.css';
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import {auth} from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {login,logout,selectuser} from './userSlice';
import Profilescreen from './screens/Profilescreen'
function App() {
  const user = useSelector(selectuser);

  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //looged in
       dispatch(login({
         uid : userAuth.uid,
         email : userAuth.email,
       }))
      }else{
           //loggedout
           dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
         <Router>  
          {!user ? (
             <Loginscreen/>
          ):(
            <Switch>
              <Route exact path='/profile'>
                <Profilescreen/>
              </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
          )} 
    </Router>
    </div>
  );
}

export default App;
