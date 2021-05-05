import "./style.scss";

export default function Tag(props) {
    return(
        <span className="tag">#{props.text}</span>
    );
}