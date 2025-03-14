import ButtonSvg from "../assets/svg/ButtonSvg.jsx";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";

const Button = ({ className, href, children, onClick, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <>
      <button onClick={onClick} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
      <ButtonGradient />
    </>
  );
  const renderLink = () => (
    <>
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
      <ButtonGradient />
    </>
  );

  return href ? renderLink() : renderButton();
};
export default Button;
