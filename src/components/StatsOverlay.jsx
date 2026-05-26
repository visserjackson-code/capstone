import "../styles/StatsOverlay.css";

const STAT_CONFIG = {
  hp: {label: "HP", color: "green"},
  attack: {label: "ATK", color: "red"},
  defense: {label: "DEF", color: "blue"},
  "special-attack": {label: "SP.ATK", color: "red"},
  "special-defense": {label: "SP.DEF", color: "blue"},
  speed: {label: "SPD", color: "green"},
};

function StatsOverlay({name, types, stats}) {
  return (
    <div className="stats-overlay">
      <h3>{name}</h3>
      <div className="types">
        {types.map((type, index) => (
          <span key={type}>
            <span className={`type-badge ${type}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            {index < types.length - 1 && " / "}
          </span>
        ))}
      </div>
      <div className="stat-bars">
        {Object.entries(stats).map(([statName, value]) => {
          const config = STAT_CONFIG[statName];
          return (
            <div key={statName} className="stat-row">
              <span className="stat-label">{config.label}</span>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar-fill"
                  style={{
                    width: `${(value / 255) * 100}%`,
                    backgroundColor: config.color,
                  }}
                />
              </div>
              <span className="stat-value">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatsOverlay;
