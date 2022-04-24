import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';



function App() {
  
  const [loginData, setLoginData] = useState (
    localStorage.getItem ('loginData')
    ? JSON.parse ( localStorage.getItem ('loginData')) 
    : null 
  )
  
  const handleLogin = async (googleData) => {
    
    const res = await fetch ('/api/google-login' , {
      method: 'POST',
      body: JSON.stringify ({
        token: googleData.tokenId,

      }),

      headers:  {
        'Content-Type': 'application/json',

      },
    });

    const data = await res.json();
    setLoginData (data);

  };

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogout  = () => {
    localStorage.removeItem ('loginData');
    setLoginData (null);
  };

  const CLIENT_ID =
  "827529413912-celsdkun_YOUR_API_KEY_lsn28.apps.googleusercontent.com";
   // ID above is from a tutorial. Rob's OAuth Key: "631626218619-ji0ejmaem9in1sptnf4l748pqi1mp9rs.apps.googleusercontent.com" 
   // "827529413912-celsdkun_YOUR_API_KEY_lsn28.apps.googleusercontent.com"
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Google Login App</h1>

        <div>

          {
            loginData? (
              <div>
                <h3> You logged in as {loginData.email} </h3>
                <button onClick = {handleLogout}>Logout</button> 
              </div>
            ) :

            (
              <GoogleLogin
            //clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
            clientId={CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
            )
          }

          
        </div>
      </header>
    </div>
  );
}

export default App;
