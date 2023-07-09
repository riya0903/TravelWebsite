import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/paris.jpg";
import Trip2 from "../assets/switzerland.jpg";
import Trip3 from "../assets/maldives.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Tours</h1>
      <p>You can find new places using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Paris Trip"
          text="Paris, city and capital of France, situated in the north-central
           part of the country. People were living on the site of the
            present-day city, located along the Seine River some 233 miles
            upstream from the river’s mouth on the English Channel, by about 7600 BCE.
           The modern city has spread from the island (the Île de la Cité) and far 
           beyond both banks of the Seine."
        />
        <TripData
          image={Trip2}
          heading="Switzerland Trip"
          text="Switzerland, federated country of central Europe. Switzerland’s
           administrative capital is Bern, while Lausanne serves as its judicial
            centre. A landlocked country of towering mountains, deep Alpine lakes,
             grassy valleys dotted with neat farms and small villages, and thriving
              cities that blend the old and the new, Switzerland is the nexus of the
               diverse physical and cultural geography of western Europe"
        />
        <TripData
          image={Trip3}
          heading="Maldives Trip"
          text="Maldives, in full Republic of Maldives, also called Maldive Islands,
           independent island country in the north-central Indian Ocean. It consists
            of a chain of about 1,200 small coral islands and sandbanks (some 200 of
           which are inhabited), grouped in clusters, or atolls.The Maldive Islands
            are a series of coral atolls built up from the crowns of a submerged ancient
           volcanic mountain range."
        />
      </div>
    </div>
  );
}
export default Trip;
