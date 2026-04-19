
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{padding:40}}>
      <h1>🌾 SmartFarm AI</h1>
      <p>AI-powered crop recommendations</p>
      <Link to="/setup">
        <button>Start Farm Analysis</button>
      </Link>
    </div>
  );
}
