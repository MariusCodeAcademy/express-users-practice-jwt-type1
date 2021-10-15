import { getUser, generateNav } from './helper.js';

console.log('front');
const URL = 'http://localhost:3000/posts';

// elements
const postsContainer = document.querySelector('.posts-container');
const mainNavEl = document.querySelector('.navbar-nav');

const { email, token } = getUser();

async function fetchData(urlPath) {
  const resp = await fetch(`${URL}${urlPath}`);
  const dataFromResp = await resp.json();
  return dataFromResp;
}

async function init() {
  const allPostsArr = await getPost();
  // console.log('allPostsArr', allPostsArr);
  generatePosts(allPostsArr, postsContainer);
  initNav();
}
init();

// fetch GET /posts/all
async function getPost() {
  const data = await fetchData('/all');
  // console.log('data', data);
  if (data.msg === 'success') {
    return data.data;
  }
  throw new Error('no posts found');
}

// generate cards with post data
function generatePosts(dataArr, dest) {
  dest.innerHTML = dataArr
    .map(
      (post) => `
      <div class="card m-2 ">
        <div class="card-header">Author: ${post.author}</div>
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <a href="single-posts.html?postId=${post.postId}" class="btn btn-primary btn-sm">See more</a>
        </div>
        <div class="card-footer">Time ${post.timeStamp}</div>
      </div>
  `,
    )
    .join('');
}

// create navigation
function initNav() {
  const navArr = [
    {
      title: 'Posts',
      url: 'index.html',
      extraClass: 'active',
    },
    {
      title: 'User posts',
      url: 'user-posts.html',
      extraClass: '',
    },
    {
      title: email,
      url: '#',
      extraClass: 'disabled',
    },
    {
      title: 'Logout',
      url: '#logout',
      extraClass: '',
    },
  ];
  generateNav(navArr, mainNavEl);
}
