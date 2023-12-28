
export default function SubHeading(props){
    const style = {
        color: props.color,
        textAlign: props.textAlign,
        fontSize: "3em",
        fontWeight: "600"
    }
    return <h2 className="sub-heading pb-4 mb-0" style={style}>{props.text}</h2>;
}