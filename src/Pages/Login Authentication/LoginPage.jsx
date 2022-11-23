import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    'https://mqmanoknpskkhsinemwa.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbWFub2tucHNra2hzaW5lbXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4NjMyMDgsImV4cCI6MTk4MjQzOTIwOH0.hKyRlLYNCQk4ED3RNqX7ABgDT1KY5DLVv5l2F3tFyLU'
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== 'SIGNED_OUT'){
            // forward to success URL
            navigate('/success');
        }
        else{
            // forward to localhost:3000
            navigate('/');
        }
    })

    return (
      <div className="App">
        <header className="App-header">
            <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='dark'
            providers={['google']}
            />
        </header>
      </div>
    );
  }
  
  export default Login;