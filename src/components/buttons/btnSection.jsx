export default function BtnSection(props){
    const style = {
        borderRadius: "9px",
        border: props.border,
        background: props.background,
        boxShadow: props.boxShadow,
        color: props.color,
        fontWeight: "600",
        fontSize: "19px"
    };
    return (
      <a href="" className="btn" style={style}>
            {props.text}
      </a>
    );
}