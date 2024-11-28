import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import "./styles/auth.scss";

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
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
    <div className="container">
      <div className="auth">
        <h1 className="auth__title">Auth</h1>

        {isLogin ? (
          <form className="auth__form" onSubmit={handleRegSubmit}>
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
              placeholder="Create a password"
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
        ) : (
          <form className="auth__form" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter you password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button>Sign In</button>
          </form>
        )}

        <div className="auth__bottom">
          {isLogin ? (
            <div className="auth__bottom--item">
              <span>Don't have an account?</span>{" "}
              <button onClick={() => setIsLogin(false)}>SinUp</button>
            </div>
          ) : (
            <div className="auth__bottom--item">
              <span>Allready have an account?</span>{" "}
              <button onClick={() => setIsLogin(true)}>SignIn</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
