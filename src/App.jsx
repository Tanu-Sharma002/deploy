import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);

    // Simulating API call
    setTimeout(() => {
      setUser({
        name: "Tanu Sharma",
        email: "tanu@example.com",
        role: "Software Engineer",
      });

      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Authentication Required</h1>
        <p>Please log in to view your profile.</p>

        <button
          onClick={() => {
            localStorage.setItem("token", "demo-token");
            window.location.reload();
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>User Profile</h1>

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;