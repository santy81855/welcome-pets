import SubHeading from "../headings/subHeading";

export default function Partners(){
    return (
      <section className="partners">
        <div className="container">
          <SubHeading text="Our Partners" textAlign="center" color="#424242" />
          <div className="partner-box row align-items-center justify-content-center mt-5">
            <div className="image-box col-md-12 d-flex flex-wrap gap-3 justify-content-around">
              <img src="/images/partners/pt-1.svg" />
              <img src="/images/partners/pt-2.svg" />
              <img src="/images/partners/pt-3.svg" />
              <img src="/images/partners/pt-4.svg" />
            </div>
          </div>
        </div>
      </section>
    );
}