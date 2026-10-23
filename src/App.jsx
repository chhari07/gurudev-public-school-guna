import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Academics from "./pages/Academics";
import MandatoryDisclousre from "./pages/MandatoryDisclousre";
import FAQ from "./pages/FAQ";
import TotheStudents from "./pages/TotheStudents";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import GIPSNews from "./pages/GIPSNews";
import HolidayHomework from "./pages/HolidayHomework";
import Home from "./pages/Home"; // Create this if you don’t have it
import DirectorsDesk from "./pages/DirectorsDesk";
import PrincipleDesk from "./pages/PrincipleDesk";
import OurCommitment from "./pages/ourCommitment";
import BookList from "./pages/BookList";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclousre />} />
          <Route path="/holiday-homework" element={<HolidayHomework/>}/>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<GIPSNews />} />
          <Route path="/directors-desk" element={<DirectorsDesk/>}/>
          <Route path="/principals-desk" element={<PrincipleDesk/>}/>
          <Route path="/our-commitment" element={<OurCommitment/>}/>
          <Route path="/book-list" element={<BookList/>}/>
          <Route path="/facilities" element={<Facilities/>}/>
             <Route path="/to-the-students" element={<TotheStudents/>}/>
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
