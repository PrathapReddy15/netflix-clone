import React ,{useState}from 'react'
import './Loginscreen.css'
import Signupscreen from './Signupscreen'
function Loginscreen() {


const[signIn,setSignIn] =  useState(false);

    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img 
                className="loginscreen_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="" />

                <button
                onClick={()=> setSignIn(true)}
                 className="loginscreen_button">
                    Sign In
                </button>
                <div className="loginscreen_gradient"/>
                <div className="loginscreen_body">
                    {signIn ? (
                        <Signupscreen/>
                    ):(
                     <div>   
                    <h1>
                        Unlimited films, TV programmes and more.
                    </h1>
                    <h2>
                        Watch anywhere. Cancel at any time.
                    </h2>
                    <p className = "subtitle">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="loginscreen_input">
                        <form> 
                            <input type="email" placeholder="Email Address"/>
                            <button 
                            onClick={()=> setSignIn(true)}
                            className="loginscreen_getstarted">GET STARTED</button>
                        </form>
                    </div>
                    </div>
                     ) }
                </div>
            </div>

        </div>
    )
}

export default Loginscreen
