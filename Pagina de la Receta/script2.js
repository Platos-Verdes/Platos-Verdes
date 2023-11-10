document.getElementById("post-comment").addEventListener("click", function () {
    const commentText = document.getElementById("comment-input").value;
    if (commentText.trim() !== "") {
        const comment = document.createElement("div");
        comment.className = "comment";
        
        const userInfo = document.createElement("div");
        userInfo.className = "user-info";
        userInfo.innerHTML = `
            <div class="user-avatar"></div>
            <h3>Nombre</h3>
        `;
        
        const commentTextElement = document.createElement("div");
        commentTextElement.className = "comment-text";
        commentTextElement.innerHTML = `<p>${commentText}</p>`;
        
        comment.appendChild(userInfo);
        comment.appendChild(commentTextElement);
        
        document.getElementById("comments").appendChild(comment);
        document.getElementById("comment-input").value = "";
    }
});