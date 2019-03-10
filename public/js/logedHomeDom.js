const addPost = document.querySelector('.newPost--submit');
const msg = document.querySelector('.msg');

addPost.addEventListener('click', (e) => {
  e.preventDefault();
  const cont = document.querySelector('.newPost--content');
  const content = document.querySelector('.newPost--content').value.trim();
  cont.value = '';
  if (!content) {
    msg.textContent = 'Add something to post'
  } else {
    const postInfo = {
      content
    };
    fetch('/addpost', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((result) => result.json())
      .then((serverRes) => {
        location.reload();
      })
      .catch((err) => {
        console.log(err)
      })
  }
})


const addComment = document.querySelectorAll('.main--section-submit');
const array = Array.from(addComment)

array.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let content = document.querySelector(`#z${element.value}`).value;
    console.log(content)
    const postid = element.value;
    const commentInfo = {
      content,
      postid
    };
    console.log('commentInfo', commentInfo)
    fetch('/addcomment', {
        method: 'POST',
        body: JSON.stringify(commentInfo),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((result) => result.json())
      .then((serverRes) => {
        location.reload();
      })
      .catch((err) => {
        msg.textContent = 'Plz try again'
      })
  })
});