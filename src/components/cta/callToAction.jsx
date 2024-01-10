import Image from "next/image";
import BtnSection from "../buttons/btnSection";

export default function CTA(){
    const btnStyleAdopters = {
      border: "2px solid #424242",
      background: "#FFF",
      color: "#E74B4C",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.59)",
    };
    const btnStyleGuardians = {
      border: "2px solid #E74B4C",
      background: "#FFF",
      color: "#E74B4C",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.59)",
    };
    return (
      <section className="cta">
        <div className="row">
          <div className="col-md-6 for-adopters">
            <h3>For Adopter</h3>
            <p>
              Adopt a pet <span className="before">before</span> they have to go
              to the shelter.
            </p>
            <BtnSection text="Adopt Now" {...btnStyleAdopters} />
          </div>
          <Image src="/images/cta/cta.svg" width={350} height={350} alt="cta" />
          <div className="col-md-6 for-guardians">
            <h3>For Guardians</h3>
            <p>
              Rehome a pet <span className="before">before</span> they have to
              go to the shelter.
            </p>
            <BtnSection text="ReHome Your Pet" {...btnStyleGuardians} />
          </div>
        </div>
      </section>
    );
}