
export default function Dashboard() {
  const data = JSON.parse(localStorage.getItem("farmData"));

  return (
    <div style={{padding:40}}>
      <h2>📊 Dashboard</h2>

      <p><strong>Location:</strong> {data?.location}</p>

      <h3>Recommended Crops:</h3>

      {data?.crops?.map((crop, i) => (
        <div key={i}>
          🌱 {crop.name} - ROI: {crop.roi}%
        </div>
      ))}
    </div>
  );
}
