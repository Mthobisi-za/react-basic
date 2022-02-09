import '../App.css'
import {useState} from 'react'
import Form from './form';
function Home({}){
    
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
    return(
        <>
            <div className="menu">
                <div className="menu-tab one"> <br />
                    <button onClick={()=> {setSignin(!signin); setSignup(false)} } className="btn">LogIn</button>
                    <br /> <br />
                </div>
                <div className="menu-tab two"> <br />
                    <button onClick={()=>{setSignup(!signup);  setSignin(false)} } className="btn">Signup</button>
                    <br /> <br />
                </div>
            </div>  <br />
      <Form signup={signup} signin={signin}/>
        </>
    )
}
export default Home