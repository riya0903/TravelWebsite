import Img1 from "../assets/phuket1.jpg";
import Img2 from "../assets/phuket2.jpg";
import Img3 from "../assets/bangkok1.jpg";
import Img4 from "../assets/bangkok2.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinatinData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Famous Destinations</h1>
      <p>Tours give you chance to explore places and self.</p>

      <DestinationData
        className="first-des"
        heading="Phuket, Thailand"
        text="Tropical beaches, hidden temples, local markets, and a thumping club
      scene. Phuket draws those who mellow in the sun and thrive at night.
      Further inland, Phuket Town’s eateries allow you to dip into chili
      and blue ginger-spiced dishes, and a stroll through the old quarter
      opens a window into the layers of its past. Despite its size and
      geography, there’s plenty of dining, accommodations, and adventure
      to satisfy luxury travellers and budget-conscious trip takers all
      year long."
        img01={Img1}
        img02={Img2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Bangkok, Thailand"
        text="For major tourist attractions in Bangkok, most of them are Historical sites or religious sites such as
         temples in Bangkok. There is beautiful architecture, wall painting and also
         important in History, such as Wat Phra Sri Rattanasamaram (Phra Kaew),Wat Phra Chetuphon Wimon Mangalaram (wat pho), wat arun Ratchawararam, Wat Sra Ket,
         and Phra Bor Banphot (Golden mountain),etc. There are also other interesting 
         places such as palaces, museums, parks, as well as various Shopping centres in Bangkok.
         There are both chilling places like Chatuchak Weekend Market, and Phahurat night market or luxury level such as many leading department stores in all
         areas of Bangkok as well."
        img01={Img3}
        img02={Img4}
      />
    </div>
  );
};
export default Destination;
