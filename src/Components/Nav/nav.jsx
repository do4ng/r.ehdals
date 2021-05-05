import config from "../../Data/config";
import "./style.scss";

export default function Nav() {
    return(
        <div className="nav">
            <h3><a href="/">@{config.nick}</a><img src={config.img} alt=""></img></h3>
        </div>
    );
}