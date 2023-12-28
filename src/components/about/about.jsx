import Image from "next/image";
import SubHeading from "../headings/subHeading";

export default function About(){
    return (
      <section className="about">
        <div className="container">
          <SubHeading text="About Us" color="#424242" textAlign="center" />
          <div className="row justify-content-around align-items-center py-5">
            <div className="col-md-4">
              <Image
                src="/images/about/about.svg"
                alt="pet-with-women"
                width={300}
                height={300}
              />
            </div>
            <div className="col-md-6">
              <p className="mb-0">
                WelcomePets.org is more than just a pet adoption platform – its
                a community driven by compassion and a shared love for animals.
                Our journey began with a simple yet profound mission: to connect
                people who want to adopt a pet with those who need to rehome
                their cherished companions.
                <br />
                <br />
                At WelcomePets.org, our mission is simple yet profound - to
                create a world where every pet finds a loving home. We believe
                in the power of connection and the joy that comes from bringing
                pets and people together. Whether you&apos;re looking to adopt a
                furry friend, provide temporary care as a guardian, or
                contribute as a vet, WelcomePets.org is your platform for
                positive change.
              </p>
            </div>
            <div className="col-md-11 p-5">
              <h4>
                <Image
                  src="/images/icons/quot.svg"
                  alt="quot"
                  width={40}
                  height={40}
                />
                By choosing WelcomePets.org, you&apos;re not just adopting a pet
                – you&apos;re becoming part of a movement dedicated to making
                the world a better place for animals.
              </h4>
              <p className="mb-0">- John Doe (Founder & CEO)</p>
            </div>
          </div>
        </div>
      </section>
    );
}