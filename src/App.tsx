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
  const [userData, setUserData] = useState<RegisterData>({
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
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
    setUserData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <h1>Auth</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={userData.email}
          onChange={handleRegChange}
        />
        <input
          name="password"
          type="password"
          value={userData.password}
          onChange={handleRegChange}
        />
        <input
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          onChange={handleRegChange}
        />
        <button>Sing Up</button>
      </form>
    </div>
  );
}

export default App;
