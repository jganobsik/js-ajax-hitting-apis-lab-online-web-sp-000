// your code here
function getRepositories() {
  const xhr = new XMLHttpRequest();
  const name = document.getElementById('username').value;
  const uri = 'https://api.github.com/users/' + name + '/repos';
  
  xhr.addEventListener('load', displayRepositories);
  xhr.open('GET', uri);
  xhr.send();
  return false;
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsDisplay = `<ul>${commits
    .map(
      commit =>
        '<li><h3>' +
        commit.commit.author.name +
        ' (' +
        commit.author.login +
        ')</h3>' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsDisplay;
}

function displayBranches() {
  const branches = JSON.parse(this.responseText);
  const branchesDisplay = `<ul>${branches
    .map(branch => '<li>' + branch.name + '</li>')
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = branchesDisplay;
}

function getBranches(el) {
  const repoName = el.dataset.repository;
  const uri =
    rootURL + '/repos/' + el.dataset.username + '/' + repoName + '/branches';
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', displayBranches);
  xhr.open('GET', uri);
  xhr.send();
}