const login = document.querySelector('.header--nav-login');
const signup = document.querySelector('.header--nav-signup');

login.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = '/login'
});

signup.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = '/signup'
});
