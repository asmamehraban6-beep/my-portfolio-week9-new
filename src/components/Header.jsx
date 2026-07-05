import "./Header.css";

function Header(props) {
  return (
    <header id="home" className="header">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}

export default Header;