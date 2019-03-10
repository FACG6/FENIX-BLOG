const login = document.querySelector('.main--section-login');
const msg = document.querySelector('.msg');

login.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if(!email || !password) {
    msg.textcontent = 'fill the email and password'
  }else{
    const userInfo = {
      email,
      password
    };
    
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    .then((serverRes) => {
      console.log(serverRes)
      if(serverRes.msg === 'password is corrict'){
        window.location = '/home';
      }else{
        msg.textContent = serverRes.msg;
      }
    } )
    .catch((err) => msg.textContent = err )
  }
  
})