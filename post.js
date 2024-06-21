let posts = [
    {
        title: "First Post",
        content: "This is the content of the first post.",
        author: "John Doe",
        date: "2023-10-01"
    },
    {
        title: "Second Post",
        content: "This is the content of the second post.",
        author: "Jane Smith",
        date: "2023-10-02"
    }
];

function submitPost() {
    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    let author = document.getElementById('postAuthor').value;
    let date = new Date().toISOString().split('T')[0];  // Current date in YYYY-MM-DD

    let newPost = {
        title: title,
        content: content,
        author: author,
        date: date
    };

    addToArray(newPost);
}

function addToArray(newPost) {
    posts.push(newPost);
    let newRow = `
      <div class="post">
        <h4>${newPost.title}</h4>
        <p>${newPost.content}</p>
        <small>by ${newPost.author} on ${newPost.date}</small>
      </div>
    `;
    document.getElementById("postsSection").innerHTML += newRow;
}

