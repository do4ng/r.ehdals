import config from "../../Data/config";
import "./style.scss";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-text">
                <a href={"/p/"+props.url}>
                    <div className="title-card">{props.title}</div>
                    <span className="des">{props.des}</span>
                    <div className="au" >
                        <span>{config.nick} | {props.time}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}