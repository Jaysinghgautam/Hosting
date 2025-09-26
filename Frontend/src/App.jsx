 // frontend/src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ use correct env variable

    axios.get(`${backendUrl}/api/hello`)
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage("❌ Error: " + err.message));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-xl font-bold">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
