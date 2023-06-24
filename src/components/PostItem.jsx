import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();

    const handleOpenPost = () => {
        navigate(`/posts/${props.post.id}`);
    };

    const handleRemovePost = () => {
        props.remove(props.post);
    };

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={handleOpenPost}>
                    Открыть
                </MyButton>
                <MyButton onClick={handleRemovePost}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
