import "./Footer.css";

export default function Footer() {
  const CurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer>
        <p><span className="copyleft"> &copy; </span> - {CurrentYear()}</p>
      </footer>
    </>
  );
}
