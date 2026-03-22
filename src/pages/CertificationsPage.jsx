import Navbar from "../components/Navbar";
import CertificateGallerySection from "../components/CertificateGallerySection";
import { portfolioData } from "../data/portfolioData";

function CertificationsPage({ theme, toggleTheme }) {
  const { certifications } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <CertificateGallerySection certifications={certifications} />
    </div>
  );
}

export default CertificationsPage;
