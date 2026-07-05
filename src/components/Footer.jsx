import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <p>© {new Date().getFullYear()} Asma Mehraban</p>

      <div className="socials">
        <a href="https://github.com/asmamehraban6-beep/Asma-Mehraban-.git" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/asma-mehraban-279a48404?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="mailto:asmamehraban6@gmail.com">
          Email
        </a>
      </div>

    </footer>
  );
}

export default Footer;