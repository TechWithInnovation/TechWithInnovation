import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import GetQuoteSection from "./components/GetQuote";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Projects/>
      <Services/>
      <WhyUs/>
      <Testimonial/>
      <Team/>
      <FAQSection/>
      <GetQuoteSection/>
      <Footer/>
    </>
  );
}
