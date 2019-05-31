// your code here
function getRepositories() {
  const xhr = new XMLHttpRequest();
  const name = document.getElementById('username').value;
  const uri = 'https://api.github.com' + '/users/' + name + '/repos';
  
  xhr.addEventListener('load', displayRepositories);
  xhr.open('GET', uri);
  xhr.send();
  return false;
}