import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://timebusinessnews.com/wp-content/uploads/travel-8.jpg"
        title="JOURNEY TO YOUR DESTINATION"
        text="Choose Your Favorite Tour"
        buttonText="Tour Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
