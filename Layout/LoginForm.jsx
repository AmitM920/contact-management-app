// import React, { useRef, useState } from "react";
// import App from "../src/App";
// import ContactView from "./ContactView";

// function LoginForm() {
//   const Email = useRef();
//   const pass = useRef();

//   // to get the value we need to pass the key under getItem method
//   const getEmail = localStorage.getItem("userEmail");
//   const getPass = localStorage.getItem("userPass");
//   const login = () => {
//     if (
//       Email.current.value === "user@gmail.com" &&
//       pass.current.value === "1234"
//     ) {
//       localStorage.setItem("userEmail", "user@gmail.com");
//       // key and value is set to local storage
//       localStorage.setItem("userPass", "1234");
//     }
//   };
//   return (
//     <>
//       {getEmail && getPass ? (
//         <App />
//       ) : (
//         <form onSubmit={login}>
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input
//               type="text"
//               class="form-control"
//               ref={Email}
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" class="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <div class="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               class="form-control"
//               ref={pass}
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <div class="form-check">
//             <input
//               type="checkbox"
//               class="form-check-input"
//               id="exampleCheck1"
//             />
//             <label class="form-check-label" for="exampleCheck1">
//               Check me out
//             </label>
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       )}
//     </>
//   );
// }

// export default LoginForm;
