import "./Header.scss";
import logo from "./logo.svg";

type HeaderProps = {
  isClosed: boolean;
  buttonClickHandler: () => void;
};

export function Header(props: HeaderProps) {
  const isClosed = props.isClosed;
  const navClass = !isClosed ? "opened" : "";

  function handleBurgerButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    props.buttonClickHandler();
  }

  return (
    <header>
      <div className="container flex-between">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <nav className={navClass}>
          <a href="#" className="nav-link">
            Who is Batman?
          </a>
          <a href="#" className="nav-link">
            Photos
          </a>
          <a href="#" className="nav-link">
            Casts
          </a>
          <a href="#" className="nav-link">
            Awards
          </a>
          <a href="#" className="nav-link">
            DC Comics
          </a>
          <a href="#" className="link-button medium">
            Watch Series
          </a>
        </nav>
        <button className="mobile-only" onClick={handleBurgerButtonClick}>
          burger
        </button>
      </div>
    </header>
  );
}
