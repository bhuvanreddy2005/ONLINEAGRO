function selectRole(role) {
  document.querySelector('.login-section').style.display = 'none';
  document.getElementById('farmer-form').style.display = role === 'farmer' ? 'block' : 'none';
  document.getElementById('consumer-form').style.display = role === 'consumer' ? 'block' : 'none';
}
