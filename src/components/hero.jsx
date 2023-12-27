import IconList from "./iconList";
import BtnHero from "./buttons/btnHero";
import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <h1>Bringing Pets and People Together with Love</h1>
            <p className="mb-0">
              <strong>WelcomePets.org:</strong> Your online hub for connecting
              pet lovers. Adopt a furry friend or find a loving home for your
              pet effortlessly.
            </p>
            <BtnHero />
            <IconList/>
          </div>
          <div className="col-md-5">
            <Image
              src="/images/hero/hero-img.svg"
              alt=""
              className="hero-img"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="hero-bg"></div>
    </main>
  );
}
