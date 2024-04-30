'use client'
 
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";
 
const Login = () => {
  const router = useRouter();
 
  const newAccount = () => {
    router.push("/register");
    //router.back();
    //router.forward();
   
 
}
 
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const handleChangeUsername = (e : ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
 
  const handleChangePassword = (e : ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
 
 
const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    if (!username || !password )
       {
      console.log(username, password);
      setError('All fields are required');
    }
   
    else {
     
    try {
      postData()
      setError("product created successfully");
    }
    catch (e : any) {
      setError(e);
    }
      setUsername('');
      setPassword('');
     
      setError('');
    }
 
  };
  async function postData() {
   try {
    const jsonData = {
      username:username,
      password: password,
     
    }
    const response = await axios.post('http://localhost:8000/auth/login', jsonData);
   
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }
  return (
    <div>
   
      <h1>Login Page</h1>
      <form >
        <div>
          <label>Name: </label>
          <input type="text" name="username" value={username} onChange={handleChangeUsername} />
        </div>
        <br/><br/>
        <div>
          <label>Email: </label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <br/><br/>
       
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Create New account? </p>
      <button onClick={newAccount}>Click Here</button>
    </div>
  )
}
 
export default Login;
 