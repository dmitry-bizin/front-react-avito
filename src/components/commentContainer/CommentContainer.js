import React from "react";
import CommentList from "../commentList/CommentList";
import CommentForm from "../comentForm/CommentForm";

function CommentContainer({
            comments,
            addComment,
            deleteComment,
            setComments,
            user,
            isComPopupOpen,
            handleEditCommPopupOpen,
            username,
            password,
            adId
        }) {
            console.log('CommentContainer', deleteComment);
    return (
        <div className="commentContainer">
            <h2 className="commentContainer__title">Отзывы</h2>
            <CommentList
                comments={comments}
                setComments={setComments}
                user={user}
                username={username}
                password={password}
                isComPopupOpen={isComPopupOpen}
                adId={adId}
                deleteComment={deleteComment}
            />
            <CommentForm
                addComment={addComment}
                isComPopupOpen={isComPopupOpen}
                handleEditCommPopupOpen={handleEditCommPopupOpen}
            />
        </div>
    );
}

export default CommentContainer;
