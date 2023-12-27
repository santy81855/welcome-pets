export default function BtnPrimary(props){
    return (
      <button className="btn brand-btn" type="submit">
        {props.text}
      </button>
    );
}