import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import { portfolioData } from "../data/portfolioData";

function ContactPage({ theme, toggleTheme }) {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ContactSection personal={personal} />
    </div>
  );
}

export default ContactPage;
