
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Setup() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    setLoading(true);

    // Simulated AI result
    const result = {
      location,
      crops: [
        { name: "Wheat", roi: 25 },
        { name: "Rice", roi: 18 },
        { name: "Corn", roi: 22 }
      ]
    };

    localStorage.setItem("farmData", JSON.stringify(result));

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div style={{padding:40}}>
      <h2>Setup Your Farm</h2>

      <input
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={handleAnalyze}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
