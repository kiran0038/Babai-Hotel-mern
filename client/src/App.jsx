import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>

        <nav className="navbar">
          <div className="logo">
  <img src={logo} alt="Babai Hotel Logo" />
</div>

          <div className="nav-links">
            <a href="/">About</a>
            <a href="/">Specials</a>
            <a href="/">Menu</a>
            <a href="/">Gallery</a>
            <a href="/">Reviews</a>
            <a href="/">Location</a>
          </div>

          
        </nav>

        <div className="hero-content">
          <div className="rating-box">
            ⭐ 3.9 Google (8K+ Reviews)
            <span>|</span>
            ⭐ 4.1 Zomato
          </div>

          <h1>Babai Hotel</h1>

          <h3>
            "Authentic Andhra Flavours Since Generations"
          </h3>

          <p>📍 Vijayawada, Andhra Pradesh</p>

          <div className="hero-buttons">
            <button className="menu-btn">
              View Menu
            </button>

            <button className="whatsapp-btn">
              Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Since 1942</h3>
          <p>Serving authentic Andhra taste for generations.</p>
        </div>

        <div className="feature-card">
          <h3>100% Authentic</h3>
          <p>Traditional recipes with original spices.</p>
        </div>

        <div className="feature-card">
          <h3>Fresh Everyday</h3>
          <p>Prepared daily with premium ingredients.</p>
        </div>

        <div className="feature-card">
          <h3>Loved by Thousands</h3>
          <p>Trusted by customers across Andhra Pradesh.</p>
        </div>
      </section>
    </>
  );
}

export default App;