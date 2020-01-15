const listElements = document.querySelector(".posts");
const template = document.querySelector("#single-post");
const fetchButton = document.querySelector("#fetch");
const form = document.querySelector("#new-post form");
const listposts = document.querySelector("ul");

const xhr = new XMLHttpRequest(("Content-type": "application/json"));

xhr.responseType = "json";

function sendHttpRequest(method, url, post) {
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.onload = function(params) {
      // const posts = JSON.parse(xhr.response)
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("something went wrong..."));
      }
    };
    xhr.onerror = function(params) {
      reject(new Error("something went wrong..."));
    };
    xhr.send(JSON.stringify(post));
  });
  return promise;
}
function createNode(post) {
  postEl = document.importNode(template.content, true);
  postEl.querySelector("h2").textContent = post.title;
  postEl.querySelector("p").textContent = post.body;
  postEl.querySelector("li").id = post.id;
  listElements.appendChild(postEl);
}
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = responseData;
    for (const post of posts) {
      createNode(post);
    }
  } catch (error) {
    alert("something went wrong");
  }
}

async function sendPost(title, body) {
  const userId = Math.random();
  const post = {
    title,
    body,
    userId
  };
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
