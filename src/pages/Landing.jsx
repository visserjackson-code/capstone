function Landing() {
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
      <button class="button">
        <div class="button-outer">
          <div class="button-inner">
            <span>Track teams</span>
          </div>
        </div>
      </button>
      <span>OR</span>
      <button class="button">
        <div class="button-outer">
          <div class="button-inner">
            <span>Nuzlocke zone</span>
          </div>
        </div>
      </button>
      </div>
      </div>
    </>
  );
}

export default Landing;
