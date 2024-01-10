"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Kai is a sweet little guy. He smiles all the time. I don’t think the transition has been hard on him at all.  I am just in love with this little guy. We have a few issues to work through, but I think he will settle in with a little more time as well. Thank you for your website and helping me find this sweet little guy.",
      author: "Nice Banjara",
      role: "Adopter",
      img_url: "/images/testimonials/Nice.jpg",
      address: "Toronto, Ontario",
    },
    {
      id: 1,
      text: "Kai is a sweet little guy. He smiles all the time. I don’t think the transition has been hard on him at all.  I am just in love with this little guy. We have a few issues to work through, but I think he will settle in with a little more time as well. Thank you for your website and helping me find this sweet little guy.",
      author: "Nice Banjara",
      role: "Adopter",
      img_url: "/images/testimonials/Nice.jpg",
      address: "Toronto, Ontario",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testi-slider text-center">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <p>{testimonial.text}</p>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Image
                src={testimonial.img_url}
                alt={testimonial.author}
                width={60}
                height={60}
              />
              <div className="testi-info ms-2">
                <h4>{testimonial.author}</h4>
                <p className="mb-0">
                  {testimonial.role} | {testimonial.address}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
