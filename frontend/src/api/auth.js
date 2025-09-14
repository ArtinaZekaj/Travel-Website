const API = "http://127.0.0.1:8000/api";

// REGISTER
export async function register(name, email, password) {
    const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Registration failed");
    }
    const data = await res.json();
    localStorage.setItem("access_token", data.access_token);
    return data; // ✅ përmban { access_token, user }
}

// LOGIN
export async function login(email, password) {
    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    return data; // ✅ përmban { access_token, user }
}
// REFRESH
export async function refreshToken() {
    const refresh = localStorage.getItem("refresh_token");
    if (!refresh) return null;

    const res = await fetch("http://127.0.0.1:8000/api/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${refresh}`
        },
    });

    if (!res.ok) return null;
    const data = await res.json();

    localStorage.setItem("access_token", data.access_token);
    return data.access_token;
}


// GET CURRENT USER
export async function me() {
    const token = localStorage.getItem("access_token");
    const r = await fetch("http://127.0.0.1:8000/api/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`, 
        },
    });
    if (!r.ok) throw new Error(await r.text());
    return await r.json();
}


// LOGOUT
export function logout() {
    localStorage.removeItem("access_token");
}
