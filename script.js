document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    // Create a new list item for the comment
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.textContent = commentText;

    // Append the new comment to the comments list
    const commentsList = document.getElementById('comments-list');
    commentsList.appendChild(commentItem);

    // Clear the textarea
    commentInput.value = '';
});
