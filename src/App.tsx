import { useState } from "react";

function App() {
  const [userData, setUserData] = useState();
  return (
    <div>
      <h1>Auth</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <button>Sing Up</button>
      </form>
    </div>
  );
}

export default App;
