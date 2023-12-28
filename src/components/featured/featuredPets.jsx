import BtnSection from "../buttons/btnSection";
import SubHeading from "../headings/subHeading";
import PetsCard from "./petsCard";
import Image from "next/image";

const petsData = [
  {
    img: "/images/featured/fp1.svg",
    name: "Buddy",
    breed: "Golden Retriever",
    gender: "Male",
    age: 3,
    lastVetVisit: "2022-06-15",
    newHomeDate: "2022-09-01",
    petLocation: "City Park Animal Shelter",
    nearBy: "City Park, Downtown",
  },
  {
    img: "/images/featured/fp2.svg",
    name: "Mittens",
    breed: "Domestic Shorthair",
    gender: "Female",
    age: 2,
    lastVetVisit: "2022-07-20",
    newHomeDate: "2022-08-15",
    petLocation: "Happy Paws Adoption Center",
    nearBy: "Happyville",
  },
  {
    img: "/images/featured/fp3.svg",
    name: "Rocky",
    breed: "Boxer",
    gender: "Male",
    age: 4,
    lastVetVisit: "2022-05-10",
    newHomeDate: "2022-07-01",
    petLocation: "Countryside Animal Rescue",
    nearBy: "Rural Area",
  },
];

export default function FeaturedPets() {
  const btnStyle = {
    border: "2px solid #424242",
    background: "#FFF",
    color: "#E74B4C",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.59)",
  };

  return (
    <section className="featured-pets">
      <Image
        src="/images/featured/fp-bg.svg"
        alt="paws"
        className="fp-bg-top"
        width={300}
        height={300}
      />
      <div className="container text-center">
        <SubHeading text="Featured Pets" textAlign="center" color="#fff" />
        <div className="row align-item-center justify-content-between py-5">
          {petsData.map((pet, index) => (
            <PetsCard key={index} {...pet} />
          ))}
        </div>
        <BtnSection text="Browse More Pets" {...btnStyle} />
      </div>
      <Image
        src="/images/featured/fp-bg.svg"
        alt="paws"
        className="fp-bg-bottom"
        width={300}
        height={300}
      />
    </section>
  );
}
