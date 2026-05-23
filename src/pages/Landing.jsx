import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (
    <>
    <div className="page-background">
        <div className="glass-box">
      <h1 className="landing-header">Pokémon Team Tracker</h1>
      <p className="landing-desc">
        Track your Pokémon teams across the mainline series games, from Red and
        Blue all the way up to Scarlet and Violet! Interested in{" "}
        <a href="https://en.wikipedia.org/wiki/Nuzlocke" target="_blank">
          Nuzlockes
        </a>
        ? Check out the Nuzlocke zone for detailed run tracking.
      </p>
      <div className="btn-container">
      <button onClick={() => navigate("/tracker")} class="button">
        <div class="button-outer">
          <div class="button-inner">
            <span>Start tracking your teams</span>
          </div>
        </div>
      </button>
      <button onClick={() => navigate("/nuzlocke")} class="button">
        <div class="button-outer">
          <div class="button-inner">
            <span>Enter the Nuzlocke zone</span>
          </div>
        </div>
      </button>
      </div>
      </div>
      </div>
    </>
  );
}

export default Landing;
