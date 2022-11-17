import { createClient } from "@supabase/supabase-js";
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const supabase = createClient(
  "https://mqmanoknpskkhsinemwa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbWFub2tucHNra2hzaW5lbXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4NjMyMDgsImV4cCI6MTk4MjQzOTIwOH0.hKyRlLYNCQk4ED3RNqX7ABgDT1KY5DLVv5l2F3tFyLU"
);

function Success() {
  const [user, setUser] = useState({});
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

  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>SUCCESS</h1>
            <button onClick={() => signOutUser()}>Sign Out</button> 
            <input type="email" name="user" placeholder="Enter student's email id" />
            <input type="text" placeholder="Name of Document" />
            <Link to="/admin">
              <button>Scan Document and register</button>
            </Link>
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
