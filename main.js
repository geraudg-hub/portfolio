document.getElementById('secret-code').addEventListener('click', function () {
  const img = document.getElementById('grimace-img');
  if (img.style.display === 'block') {
    img.style.display = 'none';
  } else {
    img.style.display = 'block';
  }
});
