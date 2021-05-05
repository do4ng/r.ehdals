import List from "../../Data/post";
import Error from "../../Components/Error/err";
import { MarkedHTML } from "../../Library/markdown";
import Tag from "../../Components/Tags/tag";
import "./style.scss"
import config from "../../Data/config";
const PostStyle = {
}

export default function App({match}) {
    var result = (<Error title="등록된 글이 없어요." content="URL이 맞는지 다시 확인해주세요."></Error>);
    List.forEach((element) => {
        var resultTag = element.tags.map((element) => <Tag text={element}></Tag>)
        if ( element.url === match.params.p ) {
            result = (
                <div style={PostStyle} className="post">
                    <h1># {element.title}</h1><span className="time">{element.time} : {config.nick}</span><hr></hr>
                    <p dangerouslySetInnerHTML={MarkedHTML(element.content)}></p>
                    <div className="p-tags">
                        {resultTag}
                    </div>
                    <div className="author">
                        <img src={config.img} alt=""></img>
                        By <strong><a href={"/user/"+config.nick}>{config.nick}</a></strong><br></br>
                        <span className="des">{config.des}</span>
                        
                    </div>
                </div>
            )
        }
    })
    return result
}
