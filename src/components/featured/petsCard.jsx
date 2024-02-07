import Image from "next/image"

export default function PetsCard(props) {
    return (
      <div className="pets-card gap-2">
        <Image src={props.img} alt={props.name} width={400} height={300} />
        <h3>{props.name}</h3>
        <p className="mb-0 age">{props.breed}/{props.gender}/{props.age} Years</p>
        <div className="info-box">
          <span>Last Vet Visit : {props.lastVetVisit}</span>
          <br></br>
          <span>Needs New Home By: {props.newHomeDate}</span>
        </div>
      </div>
    );
}