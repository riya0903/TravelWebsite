import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://media.istockphoto.com/id/465552268/photo/sentosa-sunset.jpg?s=612x612&w=0&k=20&c=6ofEur_g6M4MDPyeRsfJpUn6eX63pk3945C8fqtmngs="
        title="CONTACT"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
