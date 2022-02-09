import {useState} from 'react'
function Form({signup, signin}){
    const [usernameSign, setUsernameSign] = useState('');
    const [passwordSign, setPasswordSign] = useState('');
    const [usernamelog, setUsernamelog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    function signUp(){
        
        return(
            <>
                <div  className="form form-sign-up">
                    <h1 className="subtitle">Signup Form</h1> <br />
                    <div className="form-wrapper">
                        <input onInput={ (e)=>{
                            setUsernameSign(e.target.value)
                        }} value={usernameSign} type="text" placeholder="Username"/>
                    </div> <br />
                    <div className="form-wrapper">
                        <input onInput={ (e)=>{
                            setPasswordSign(e.target.value)
                        }} value={passwordSign} type="password" placeholder="Password****"/>
                    </div> <br />
                    <div className="form-wrapper">
                        <button onClick={()=>{
                            localStorage.setItem('userName', usernameSign)
                            localStorage.setItem('password', passwordSign)
                            localStorage.setItem('loggedin status', true)
                            setUsernameSign('');
                            setPasswordSign('');
                        }} className="btn bg-secondary">Signup</button>
                </div>
                <br />
                </div>
            </>
        )
    }
    function login(){
        return(
            <>
                <div  className="form form-log-in">
                <h1 className="subtitle">Login Form</h1> <br />
                <div className="form-wrapper">
                        <input onInput={ (e)=>{
                            setUsernamelog(e.target.value)
                        }} value={usernamelog} type="text" placeholder="Username"/>
                </div> <br />
                <div className="form-wrapper"> 
                        <input onInput={ (e)=>{
                            setPasswordlog(e.target.value)
                        }} value={passwordlog} type="password" placeholder="Password****"/>
                </div> <br />
                <div className="form-wrapper">
                        <button onClick={()=>{
                            var username = localStorage.getItem('username')
                            var password = localStorage.getItem('password')
                            setUsernamelog('');
                            setPasswordlog('');
                        }}  className="btn bg-secondary">LogIn</button>
                </div>
                <br />
                </div>
            </>
        )
    }
    return(
        <>
           {signup? signUp(): ''}
           {signin ? login(): ''}
        </>
    )
}

export default Form