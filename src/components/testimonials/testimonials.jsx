import Image from "next/image";
import SubHeading from "../headings/subHeading";
import TestimonialSlider from "./testimonialSider";

export default function Testimonials(){
    return (
      <section className="testimonials">
        <Image
          src="/images/testimonials/testi-left.svg"
          alt=""
          width={420}
          height={420}
          className="testi-left"
        />
        <div className="container">
          <SubHeading
            text="Success Stories"
            textAlign="center"
            color="#424242"
          />
          <p className="text-center py-3">
            Real-life success stories and testimonials from users who found
            their furry companions through WelcomePets.org.
          </p>
          <h4 className="text-uppercase text-center">
            <Image src="/images/icons/quot.svg" alt="" width={50} height={50} />{" "}
            PEOPLE ARE SAYING
          </h4>
          <TestimonialSlider />
        </div>
        <Image
          src="/images/testimonials/testi-right.svg"
          alt=""
          width={420}
          height={420}
          className="testi-right"
        />
      </section>
    );
}