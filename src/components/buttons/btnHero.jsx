import Image from "next/image";

const style = {
  backgroundColor: "var(--accent-color)",
  borderColor: "var(--secondary-color)",
  borderWidth: "2px",
  borderStyle: "solid",
  fontSize: "18px",
  fontWeight: "600",
  padding: "12px 21px",
  boxShadow: "0px 4px 4px 0px rgba(66, 66, 66, 0.80)",
};

export default function BtnHero(){
    return (
      <a href="" className="btn btn-hero" style={style}>
        Get Your Pet
        <Image
          src="/images/hero/btnHero.svg"
          alt="dog"
          width={30}
          height={30}
        />
      </a>
    );
}