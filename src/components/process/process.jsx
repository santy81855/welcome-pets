import SubHeading from "../headings/subHeading";
import ProcessCard from "./processCard";
import { BsCheck, BsFileMedicalFill, BsFillSearchHeartFill } from "react-icons/bs";
export default function Process(){
    return (
      <section className="process">
        <div className="container">
          <SubHeading text="How It Works" color="#E74B4C" textAlign="center" />
          <div className="row align-items-center justify-content-between py-4">
            <ProcessCard
              icon={<BsFillSearchHeartFill />}
              heading="Find Your Furry Friend"
              description="Start your journey by browsing through our collection of adorable pets. Use our intuitive search filters to narrow down your preferences."
              btnText="Browse Available Pets"
            />
            <ProcessCard
              icon={<BsFileMedicalFill />}
              heading="Apply and Vet Check"
              description="Complete our easy and secure adoption application form. As part of our commitment to pet welfare, our team, including a qualified vet, will conduct a thorough vet check to ensure a happy and healthy home for your new companion."
              btnText="Submit Your Application"
            />
            <ProcessCard
              icon={<BsCheck />}
              heading="Adoption Success"
              description="Await our swift response as we review your application. Once approved, you'll be ready to welcome your new furry family member. Join our community and share your joyous adoption story!"
              btnText="Share Your Joy"
            />
          </div>
        </div>
      </section>
    );
}