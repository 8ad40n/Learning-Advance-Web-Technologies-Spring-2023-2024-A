'use client'
import Nav from "@/components/nav";
import { useRouter } from "next/navigation";
const RegisterPage = () => {

    const router = useRouter();
    const newEmployee = () => {
        router.push("/");

    };


  return (
    <div>
      <Nav />

      <h1>Register Employee</h1>
      <form >
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Company Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button onClick={newEmployee}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
