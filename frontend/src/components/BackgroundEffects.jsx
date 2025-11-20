function BackgroundEffects() {
  return (
    <>
      {/* Grille animée */}
      <div className="animated-grid"></div>

      {/* Formes flottantes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Points lumineux (étoiles) */}
      <div className="stars">
        <div className="star" style={{top: '10%', left: '15%', animation: 'twinkle 3s infinite'}}></div>
        <div className="star" style={{top: '20%', left: '80%', animation: 'twinkle 4s infinite'}}></div>
        <div className="star" style={{top: '40%', left: '25%', animation: 'twinkle 2.5s infinite'}}></div>
        <div className="star" style={{top: '60%', left: '70%', animation: 'twinkle 3.5s infinite'}}></div>
        <div className="star" style={{top: '80%', left: '40%', animation: 'twinkle 2s infinite'}}></div>
        <div className="star" style={{top: '15%', left: '60%', animation: 'twinkle 4.5s infinite'}}></div>
        <div className="star" style={{top: '50%', left: '10%', animation: 'twinkle 3s infinite'}}></div>
        <div className="star" style={{top: '70%', left: '85%', animation: 'twinkle 2.5s infinite'}}></div>
        <div className="star" style={{top: '30%', left: '50%', animation: 'twinkle 4s infinite'}}></div>
        <div className="star" style={{top: '90%', left: '30%', animation: 'twinkle 3.5s infinite'}}></div>
      </div>
    </>
  )
}

export default BackgroundEffects