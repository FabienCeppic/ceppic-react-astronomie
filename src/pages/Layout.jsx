import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../App.css";

export default function Layout() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Footer />
    </div>
  );
}
