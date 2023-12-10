import './Header.css'

export function Header() {
    return (
      <div className="header">
        <div className="header-block">
          <div className="header-block-text">
            <h1 className="header-title">Virtual healthcare<br/> for you</h1>
            <span className="header-text">
              Our service provides progressive, and<br/> affordable healthcare,
              accessible on mobile<br/> and online for everyone
            </span>
            <br/>
            <button className="header-button">Consult today</button>
          </div>
          <img
            className="header-image"
            src="/images/header-illustration.svg"
            alt="Header Illustration"
          />
        </div>
      </div>
    );
  }
  