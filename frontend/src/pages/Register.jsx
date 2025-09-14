import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import "../styles/home.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await register(name, email, password);
            // ✅ Regjistrimi me sukses → dërgo te Login
            navigate("/login");
        } catch (err) {
            // Kontrollo nëse gabimi vjen nga Laravel (status 422)
            if (err.response && err.response.status === 422) {
                // merr mesazhet e validimit
                const errors = err.response.data.errors;
                // merr gabimin e parë për t'a shfaqur
                const firstError = Object.values(errors)[0][0];
                setError(firstError);
            } else {
                setError("Registration failed. Try again.");
            }
        }
    }

    return (
        <div className="auth-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {error && <p className="error">{error}</p>}

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password (min 6 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" className="btn-signin">
                    Register
                </button>
            </form>
        </div>
    );
}
