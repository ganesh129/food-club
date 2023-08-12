import { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Login=()=>{
 const [userName,setUserName]=useState('');
 const [userEmail,setUserEmail]=useState('');
 const [password,setUserPassword]=useState('')
 const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
const formOnSubmit=(e)=>{
    
}
return(
<div className="flex flex-col w-72 items-center m-auto p-2 text-center bg-gray-400">
<input
 className="p-2 m-2 rounded-md focus:outline-none"
  type="text" placeholder="Name..." 
  onChange={(e)=>{setUserName(e.target.value)}}
  ></input>
<input className="p-2 m-2 rounded-md focus:outline-none"  required type="email" placeholder="Email..."  default=""
onChange={(e)=>{setUserEmail(e.target.value)}}></input>
<input className="p-2 m-2 rounded-md focus:outline-none" required type="password" placeholder="password" 
onChange={(e)=>{setUserPassword(e.target.value)}}></input>
<button className="p-1 m-1 bg-white rounded-lg hover:bg-green-300" onClick={() => signInWithEmailAndPassword(userEmail, password)}>LogIn</button>

 <button className="underline text-red-600" onClick={signInWithGoogle}>
          Login with Google
        </button>
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
</div>
)
}
export default Login;