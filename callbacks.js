const posts = [
    { title: 'First post', body: 'This is my first post' },
    { title: 'Second post', body: 'This is my second post'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

createPost({ title: 'Post Three', body: 'This is my 3rd Post' }, getPosts);