import { React, /*useState, useEvent*/ } from "react";

//import { ReactRouter as Router, Route} from "react-router-dom"

export function Post (props) {
    /*onst [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    const [image, setImage] = useState(props.image);
    const [subreddit, setSubreddit] = useState(props.subreddit);
    const [user, setUser] = useState(props.user);
    const [id, setId] = useState(props.id);*/

    return (
        <div className="post">
            <h3>title: {props.data.title}</h3>
           <h6>{props.data.user}</h6>
            <h6>{props.data.subreddit}</h6>
            <p>text: {props.data.text}</p>
        </div>
    );
}