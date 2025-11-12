// Demo kullanıcı
const demoUser = "admin";
const demoPass = "1234";

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if(username === demoUser && password === demoPass) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'flex';
    error.textContent = "";
  } else {
    error.textContent = "Kullanıcı adı veya şifre yanlış!";
  }
}

function logout() {
  document.getElementById('loginContainer').style.display = 'block';
  document.getElementById('adminContainer').style.display = 'none';
}

// Sekme geçişi
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';

  const menuItems = document.querySelectorAll('.sidebar ul li');
  menuItems.forEach(item => item.classList.remove('active'));
  document.querySelector(`.sidebar ul li[onclick="showSection('${sectionId}')"]`).classList.add('active');
}
