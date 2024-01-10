import BtnSection from "../buttons/btnSection";
import ProcessIcon from "../iconsList/processIcon";
export default function ProcessCard(props){
    const btnStyle = {
      border: "2px solid #E74B4C",
      background: "#FFF",
      color: "#E74B4C",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.59)",
    };
    return (
      <div className="col-md-4 text-center process-card">
        <ProcessIcon icon={props.icon} />
        <h3 className="mb-0">{props.heading}</h3>
        <p className="mb-0">
          {props.description}
        </p>
        <BtnSection text={props.btnText} {...btnStyle} />
      </div>
    );
}