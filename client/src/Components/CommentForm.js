import { useState } from 'react'

function CommentForm( { user, shop_id, afterCommented } ){
    const [display, setDisplay] = useState(false)
    const [body, setBody] = useState("")
    const [user_id, setUser_id] = useState(user.id)

    function handleCancel() {
    setDisplay(!display)
    document.getElementById("user-post").value = "";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        debugger
        // fetch returns a Promise, we must await it
        const response = await fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: body, user_id: user_id, shop_id: shop_id }),
        });
        // response.json() returns a Promise, we must await it
        const data = await response.json();
        if (response.ok) {
          console.log("Comment created:", data);
          document.getElementById("user-post").value = "";
          afterCommented();
        } 
    }

    return (
        <div className="div-above-comment-form">
            <p id="commentFormNameInfo">Posting as: {user.name}</p>
            <form id="comment-form" onSubmit={handleSubmit}>
            <textarea 
            id="user-post"
            placeholder="Leave a review" 
            onClick={(e) => setDisplay(true)} 
            onChange={(e) => setBody(e.target.value)}
            />
            <br/>
            { display ? (
            <div className="cancel-post">
            <input id="cancel-comment" className="cancel-bttn" type="button" value="CANCEL" onClick={(e) => handleCancel()}/>
            <input id="post-comment" type="submit" value="COMMENT"/> 
            <br id="last-break"/>
            </div>
            ) : (
            null
            )
            }
            </form>
        </div>
    )
}

export default CommentForm