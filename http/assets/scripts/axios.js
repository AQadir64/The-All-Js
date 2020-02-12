const listElements = document.querySelector(".posts");
const template = document.querySelector("#single-post");
const fetchButton = document.querySelector("#fetch");
const form = document.querySelector("#new-post form");
const listposts = document.querySelector("ul");

function createNode(post) {
  postEl = document.importNode(template.content, true);
  postEl.querySelector("h2").textContent = post.title;
  postEl.querySelector("p").textContent = post.body;
  postEl.querySelector("li").id = post.id;
  listElements.appendChild(postEl);
}

async function fetchPosts() {
  const responseData = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .catch(e => {
      console.log(e.message);
    });

  const posts = responseData.data;
  for (const post of posts) {
    createNode(post);
  }
}

async function sendPost(title, body) {
  const userId = Math.random();
  const post = {
    title,
    body,
    userId
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  console.log(response);
  createNode(post);
}

fetchButton.addEventListener("click", () => {
  fetchPosts();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;
  sendPost(title, content);
});
listposts.addEventListener("click", event => {
  const postId = event.target.closest("li").id;
  axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
});
