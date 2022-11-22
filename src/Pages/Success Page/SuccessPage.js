import { createClient } from "@supabase/supabase-js";
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Admin from "../Admin/Admin";
// import { Main } from "../../api";

const supabase = createClient(
  "https://mqmanoknpskkhsinemwa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbWFub2tucHNra2hzaW5lbXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4NjMyMDgsImV4cCI6MTk4MjQzOTIwOH0.hKyRlLYNCQk4ED3RNqX7ABgDT1KY5DLVv5l2F3tFyLU"
);

function Success() {
  const [user, setUser] = useState({});
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [barcode, setBarcode] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        // value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    await supabase.auth.signOut();
    navigate("/");
  }

  const max = ()=>{
    alert(email + " " + name + " " + barcode);
  }

  function readData(a){
    setBarcode(a)
  }

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <div className="success-container">
            <label htmlFor="email-id">Student's email-id:</label>
            <input type="email" name="user" onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="email-id">Name of Document:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            {/* <Admin barcode={readData}/> */}
            {/* <Link to="/admin">
              <button className="scan-btn">Scan Document and register</button>
            </Link> */}
            </div>
            <button onClick={max} className="scan-btn">Scan Document</button>
            <Admin barcode={readData}/>
            <button onClick={() => signOutUser()} className="sign-out-btn">Sign Out</button>
          </>
        ) : (
          <>
            <h1>User is not logged in</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go back Home!
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default Success;
