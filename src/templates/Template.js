import "./Template.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../organisms/nav/Nav";
import Section from "../organisms/Section";
import Footer from "../organisms/footer/Footer";
import { UserProvider } from "../context/UserContext";

const Template = (props) => {
  return (
    <>
      <Router>
        <Nav datatest="nav" position="static" />
        <Section />
        <Footer datatest="footer" text="Metroevent" />
      </Router>
    </>
  );
};

export default Template;
