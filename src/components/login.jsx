import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Pastikan Anda mengganti ini
// import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import logo from '../logomni.png';
import './login.css';
// import useToken from "./useToken";



async function loginUser(credentials) {
	return fetch('http://127.0.0.1:8081/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
	// const { /*token,*/ setToken } = useToken(); // State untuk menyimpan token
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (!username || !password) {
        // setError("Username dan password harus diisi!");
        setTimeout(() => {
          setLoading(false);
          setError("Username dan password harus diisi!");
        }, 500);
        return;
      }

      setLoading(true);
    
      // const token = await loginUser({
      // username,
      // password
      // });
      // setToken(token);
      // setLoading(false);
      // setTimeout(() => {
      //   setLoading(false);
      //   history.push("/dashboard"); // Redirect to Dashboard after successful login
      // }, 1000);
      const response = await loginUser({ username, password });

      if (response.success) {
        // setLoading(false);
        localStorage.setItem('token', response.token);
        // navigate('/admin/dashboard'); // Redirect to Dashboard after successful login
        setTimeout(() => {
          setLoading(false);
          navigate('/admin/dashboard'); // Redirect to Dashboard after successful login
        }, 1000);
      } else {
        // setError("Username atau password salah.");
        // setLoading(false);
        setTimeout(() => {
          setError("Username atau password salah.");
          setLoading(false);
        }, 500);
      }
    } catch (error) {
        // setError("Terjadi masalah saat login. Silakan coba lagi.");
        // console.error("Error during login:", error);
        // setLoading(false);
        setTimeout(() => {
          setError("Terjadi masalah saat login. Silakan coba lagi.");
          console.error("Error during login:", error);
          setLoading(false);
        }, 100);
    }
  }

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Di sini Anda bisa melakukan validasi dan autentikasi sesuai dengan kebutuhan Anda.
  //   // Contoh sederhana: Cek apakah username dan password sesuai.
  //   if (username === 'admin' && password === 'admin') {
  //     alert('Login berhasil!');
  //   } else {
  //     alert('Login gagal. Cek username dan password Anda.');
  //   }
  // };

  return (
    <div className="card">
			<NavLink className="navbar-brand" to="/">
				<img src={logo} alt="Logo Masjid Nurul Islam" className="logo-login" />
			</NavLink>
      <h2 className="login">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input className="input" type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="input" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button className="button" type="submit" disabled={loading}>{loading ? "Loading..." : "Login"}</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

Login.propTypes = {
	setToken: PropTypes.func.isRequired
};

export default Login;



// import React from "react";
// //import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import logo from '../logomni.png';
// import './Header.css';
// import './login.css';
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBInput,
// } from 'mdb-react-ui-kit';

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

// function login(/*{ setToken }*/) {
//     /*const [username, setUserName] = useState();
//     const [password, setPassword] = useState();
//     const { token, setToken } = useToken(); // State untuk menyimpan token

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         setToken(token);
//       }*/

//     return (
//         <div>
//             <MDBContainer fluid>

//             <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//                 <MDBCol col='12'>

//                 <MDBCard className='my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
//                     <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//                         <NavLink className="navbar-brand" to="/">
//                             <img src={logo} alt="Logo Masjid Nurul Islam" className="logo" />
//                         </NavLink>
//                         <h2 className="fw-bold mb-5 text-uppercase">Login</h2>

//                         <form /*onSubmit={handleSubmit}*/>
//                         <MDBInput wrapperClass='mb-3 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg" /*onChange={e => setUserName(e.target.value)}*//>
//                         <MDBInput wrapperClass='mb-3 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" /*onChange={e => setPassword(e.target.value)}*//>
                        
//                         <MDBBtn outline className='mx-auto px-4 d-flex' size='lg'>
//                             Login
//                         </MDBBtn>
//                         </form>
                        
//                     </MDBCardBody>
//                 </MDBCard>

//                 </MDBCol>
//             </MDBRow>

//             </MDBContainer>
//         </div>
//     )

//     //Login.propTypes = {
//         //setToken: PropTypes.func.isRequired;
// };

// export default login;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../logomni.png';
// import './Header.css';
// import './login.css';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
//             <MDBCardBody className='p-5 w-100 d-flex flex-column'>

//             	<NavLink className="navbar-brand d-flex" to="/">
//               	<img src={logo} alt="Logo Masjid Nurul Islam" className="logo" />
//               </NavLink>
//               <p className="mb-3">Please enter your login and password!</p>

//               <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
//               <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

//               <MDBBtn size='lg'>
//                 Login
//               </MDBBtn>

//               <hr className="my-4" />

//               <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
//                 <MDBIcon fab icon="google" className="mx-2"/>
//                 Sign in with google
//               </MDBBtn>

//               <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
//                 <MDBIcon fab icon="facebook-f" className="mx-2"/>
//                 Sign in with facebook
//               </MDBBtn>

//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;
