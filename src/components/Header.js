import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header className="py-6 mb-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" ></img>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/login" className="hover:text-violet-900 transition">Login</Link>
          <Link to="/signup" className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition ">Sign Up</Link>
        </div>
      </div>
    </header >
  );
};

export default Header;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/img/logo.svg";

// const Header = () => {
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignUpForm, setShowSignUpForm] = useState(false);

//   const toggleLoginForm = () => {
//     setShowLoginForm(!showLoginForm);
//     setShowSignUpForm(false);
//   };

//   const toggleSignUpForm = () => {
//     setShowSignUpForm(!showSignUpForm);
//     setShowLoginForm(false);
//   };

//   return (
//     <header className="py-6 mb-12 border-b">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={Logo} alt="" />
//         </Link>
//         <div className="flex items-center gap-6">
//           <button
//             onClick={toggleLoginForm}
//             className="hover:text-violet-900 transition"
//           >
//             Login
//           </button>
//           <button
//             onClick={toggleSignUpForm}
//             className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>

//       {showLoginForm && <LoginForm />}
//       {showSignUpForm && <SignUpForm />}
//     </header>
//   );
// };

// const LoginForm = () => {
//   // State và xử lý form đăng nhập
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Thực hiện xử lý đăng nhập ở đây
//     console.log("Logging in with:", email, password);
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded"
//         >
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// };

// const SignUpForm = () => {
//   // State và xử lý form đăng ký
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Thực hiện xử lý đăng ký ở đây
//     console.log("Signing up with:", fullName, email, password);
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Full Name:</label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded p-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Header;

