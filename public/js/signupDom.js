const signup = document.querySelector('.main--section-signup');
const msg = document.getElementById('msg');

signup.addEventListener('click', (e) => {
  e.preventDefault();

  const userNameVal = document.getElementById('userName').value.trim();
  const emailVal = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!userNameVal || !emailVal || !password || !confirmPassword) {
    msg.textContent = 'All feilds required';
  } else if (password !== confirmPassword) {
    msg.textContent = 'password is not the same';
  } else {
    const userInfo = {
      name: userNameVal,
      email: emailVal,
      password
    };

    fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((result) => result.json())
      .then((serverRes) => {
        if (serverRes.msg === 'User add successfully') {
          msg.textContent = serverRes.msg
          window.location = '/login';
        } else {
          msg.textContent = serverRes.msg;
        }
      })
      .catch((err) => msg.textContent = err)
  }

});