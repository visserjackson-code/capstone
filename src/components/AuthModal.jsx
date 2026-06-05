import { useState } from "react";
import { registerUser, loginUser } from "../utils/api.js";
import "../styles/AuthModal.css"

function AuthModal({onClose, onAuth}) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); //error field to show up top

    const handleSubmit = async () => {
        setError(""); 

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if(!isLogin && password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        //default is "Login"
        const result = isLogin
        ? await loginUser(email, password)
        : await registerUser(email, password);

        //logs in and closes form
        if (result.token) {
            onAuth(result.token, result.email);
            onClose();
        //otherwise, something else happened. show error message
        } else {
            setError(result.message || "Something went wrong")
        }
    }

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {error && <p className="modal-error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()} //allows for both enter key and clicking button to submit form
        />
        <button className="modal-submit" onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>
        <p className="modal-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {/* flips back and forth between register and login */}
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );  
}

export default AuthModal;