import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Preloader } from "@/components/ui/Preloader";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Partners from "@/pages/Partners";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <Preloader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
