import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginData {
  email: string;
  password: string;
}
function App() {
  const [regData, setRegData] = useState<RegisterData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(regData);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, regData.email, regData.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
    setRegData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div>
      <h1>Auth</h1>
      <form className="auth_form" onSubmit={handleRegSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={regData.email}
          onChange={handleRegChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={regData.password}
          onChange={handleRegChange}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm you password"
          value={regData.confirmPassword}
          onChange={handleRegChange}
          required
        />
        <button>Sing Up</button>
      </form>

      <form className="auth_form" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter you password"
          onChange={handleLoginChange}
          required
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default App;
