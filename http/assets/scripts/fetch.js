const listElements = document.querySelector(".posts");
const template = document.querySelector("#single-post");
const fetchButton = document.querySelector("#fetch");
const form = document.querySelector("#new-post form");
const listposts = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    data: JSON.stringify(data)
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        throw new Error("something has went wrong");
      }
    })
    .catch(error => {
      throw new Error("something has went wrong", error);
    });
}
function createNode(post) {
  postEl = document.importNode(template.content, true);
  postEl.querySelector("h2").textContent = post.title;
  postEl.querySelector("p").textContent = post.body;
  postEl.querySelector("li").id = post.id;
  listElements.appendChild(postEl);
}
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = responseData;
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
  const fd = new FormData(form);
  fd.append("title", title);
  fd.append("content", content);
  fd.append("userId", userId);
  await sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
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
  sendHttpRequest(
    "DELETE",
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
});
