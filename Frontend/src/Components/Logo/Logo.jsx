import "./Logo.css";
import LogoB from "../Assets/eLogoEnhancedB.png"; // Black logo
import LogoW from "../Assets/eLogoEnhancedW.png"; // White logo

const Logo = ({ theme }) => {
  const logoSrc = theme === "dark" ? LogoW : LogoB; // Select the logo based on the theme

  return (
    <div className="nav-logo">
      <img src={logoSrc} alt="Logo" />
      <p>Electra</p>
    </div>
  );
};

export default Logo;
