import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TrainingSection from "./components/TrainingSection";
import Header from "./components/Header";
import { HeroSection } from "./components/Herosection";
import InternshipSection from "./components/InternshipSection";
import StudyAbroadSection from "./components/StudyAbroadSection";
import About from "./components/Aboutsection";
import CTASection from "./components/ContactSection";
import SuccessStories from "./components/SuccessStories";
import FooterSection from "./components/FooterSection";

// Define types for section objects
interface Section {
  id: number;
  component: string;
  color: string;
}

// ================= HOME PAGE =================
const HomePage = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [heroCompleted, setHeroCompleted] = useState<boolean>(false);
  const windowHeightRef = useRef<number>(window.innerHeight);

  const sections: Section[] = [
    { id: 1, component: "training", color: "#4ecdc4" },
    { id: 2, component: "internship", color: "#1a535c" },
    { id: 3, component: "abroad", color: "#ffe66d" },
    { id: 4, component: "about", color: "#ff6b6b" },
    { id: 5, component: "contact", color: "#4ecdc4" },
    { id: 6, component: "stories", color: "#baf4fd" },
  ];

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y >= windowHeightRef.current) {
        setHeroCompleted(true);
      } else {
        setHeroCompleted(false);
      }
    };

    const handleResize = () => {
      windowHeightRef.current = window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // STACKING TRANSLATE
  const getTranslate = (index: number): number => {
    if (!heroCompleted) return 0;

    const adjustedScrollY = Math.max(0, scrollY - windowHeightRef.current);
    const start = index * windowHeightRef.current;
    const progress = adjustedScrollY - start;

    return -Math.max(0, Math.min(progress, windowHeightRef.current));
  };

  // RENDER SECTIONS WITH PROGRESS
  const renderSectionContent = (sec: Section, index: number) => {
    const adjustedScrollY = Math.max(0, scrollY - windowHeightRef.current);

    const progress: number =
      (adjustedScrollY - (index - 1) * windowHeightRef.current) / windowHeightRef.current;

    switch (sec.component) {
      case "training":
        return <TrainingSection />;

      case "internship":
        return (
          <InternshipSection
            progress={progress}
          />
        );

      case "abroad":
        return <StudyAbroadSection />;

      case "about":
        return <About />;

      case "contact":
        return <CTASection />;

      case "stories":
        return <SuccessStories />;

      default:
        return null;
    }
  };

  return (
    <>
      {/* HEADER + HERO */}
      <div style={{ position: "relative", zIndex: 1000 }}>
        <Header />
        <HeroSection />
      </div>

      {/* STACKING SECTIONS */}
      <div
        style={{
          height: `${sections.length * 100}vh`,
          position: "relative",
        }}
      >
        <style>{`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #111;
            height: 100%; 
          }

          body::-webkit-scrollbar {
            display: none;
          }

          .section {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
          }
          
          .section-content {
            width: 100%;
            height: auto;
            min-height: auto;
          }
        `}</style>

        {sections.map((sec: Section, index: number) => (
          <div
            key={sec.id}
            className="section"
            style={{
              background: sec.color,
              zIndex: sections.length - index,
              transform: `translateY(${getTranslate(index)}px)`,
              transition: "transform 0.25s linear",
            }}
          >
            <div className="section-content">
              {renderSectionContent(sec, index)}
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </>
  );
};

// ================= ROUTES =================
const AboutPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <About />
    </div>
    <FooterSection />
  </>
);

const ContactPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <CTASection />
    </div>
    <FooterSection />
  </>
);

const StoriesPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <SuccessStories />
    </div>
    <FooterSection />
  </>
);

const TrainingPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <TrainingSection />
    </div>
    <FooterSection />
  </>
);

const InternshipPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <InternshipSection progress={1} />
      </div>
      <FooterSection />
    </>
  );
};

const StudyAbroadPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <StudyAbroadSection />
    </div>
    <FooterSection />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
      </Routes>
    </Router>
  );
}

export default App;