let aff = document.getElementById('afficher');
let max = 50;

function afficher2(index) {
  window.location.href = 'page2.html?index=' + index;
}

function wathing(index) {
  window.location.href = 'playvideos.html?index=' + index;
}

function afficher(url, callback) {
  let req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        callback(JSON.parse(req.response));
      } else {
        console.error('Une erreur s\'est produite lors de la requête.');
      }
    }
  };
  req.open('GET', url);
  req.send();
}

afficher('movies-2020s.json', function(users) {
  let h = '';
  for (let i = 0; i < Math.min(max, users.length); i++) {
    h += `
      <div class="card">
        <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
        <h2>${users[i].title}</h2>
        <h4>${users[i].year}</h4>
      </div>
    `;
  }
  aff.innerHTML = h;
});

// Dans la page2.html, vous devez inclure un script qui récupère l'index du film et effectue une autre requête pour obtenir les détails du film.

// page2.html
let urlParams = new URLSearchParams(window.location.search);
let index = urlParams.get('index');

afficher('movies-2020s.json', function(users) {
  let aff2 = document.getElementById('afficher2');
  let h = `
    <div class="bob">
      <img src="${users[index].thumbnail}">
      <ul>
        <li>${users[index].title}(${users[index].year})</li>
        <li>${users[index].year}</li>
        <li>${users[index].cast}</li>
        <li>${users[index].genres}</li>
        <li class="story">${users[index].extract}</li>
        <button class="btn btn-danger bb2" onclick="wathing(${index})">WATCH</button>
        <button class="btn btn-danger bb2" onclick="window.location.href = '${users[index].href}';">DOWNLOAD</button>
      </ul>
    </div>
  `;
  aff2.innerHTML = h;
});

afficher('movies-2020s.json',function(users){
  let wat = document.getElementById('videoPlayer');
  let bod=document.querySelector('.body');
  bod.style.cssText=`
  background-image: linear-gradient(rgb(0 0 0 / 52%), rgb(0 0 0 / 76%)),url(${users[index].thumbnail});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;`
  let h = `
  <iframe src="${users[index].src}" height="100%" width="100%" allowfullscreen="" frameborder="0" scrolling="no"></iframe>
  `;
  wat.innerHTML=h
})





function chercher() {
  let req = new XMLHttpRequest();
  req.onreadystatechange= function(){
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        let movies = JSON.parse(req.response);
        let titre = document.getElementById('titre').value;
        let h = '';
        for (let i = 0; i < max; i++) {
          if (movies[i].title.toLowerCase().indexOf(titre.toLowerCase()) >= 0) {
            h += `
            <div class="card">
              <img src="${movies[i].thumbnail}" onclick="afficher2(${i})">
              <h2>${movies[i].title}</h2>
              <h4>${movies[i].year}</h4>
            </div>
            `;
          }
        }
        aff.innerHTML = h;
      } else {
        console.error('Une erreur s\'est produite lors de la requête.');
      }
    }
  }
  req.open('GET', 'movies-2020s.json');
  req.send();
}



let req = new XMLHttpRequest();
req.open('GET', 'movies-2020s.json');
req.send();

function chercher_year() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let years = document.getElementById('search_year');
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].year == years.value) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}


function chercher_action() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Action")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}



function chercher_horror() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Horror")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}

function chercher_drama() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Drama")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}

function chercher_comedy() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Comedy")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}


function chercher_crime() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Crime")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}

function chercher_war() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("War")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}


function chercher_animated() {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) {
      let users = JSON.parse(req.response);
      let h = '';
      for (let i = 0; i < max; i++) {
        if (users[i].genres.includes("Animated")) {
          h += `
          <div class="card">
            <img src="${users[i].thumbnail}" onclick="afficher2(${i})">
            <h2>${users[i].title}</h2>
            <h4>${users[i].year}</h4>
          </div>
          `;
        }
      }
      aff.innerHTML = h;
    } else {
      console.error('Une erreur s\'est produite lors de la requête.');
    }
  }
}












// let aff = document.getElementById('afficher');
// let max = 20;

// function afficher2(index) {
//   let aff2 = document.getElementById('afficher2');
//   window.location.href = 'page2.html?index=' + index;
// }

// function makeRequest(url, callback) {
//   let req = new XMLHttpRequest();
//   req.onreadystatechange = function() {
//     if (req.readyState === XMLHttpRequest.DONE) {
//       if (req.status === 200) {
//         callback(JSON.parse(req.response));
//       } else {
//         console.error('Une erreur s\'est produite lors de la requête.');
//       }
//     }
//   };
//   req.open('GET', url);
//   req.send();
// }

// makeRequest('movies-2020s.json', function(users) {
//   let h = '';
//   for (let i = 0; i < Math.min(max, users.length); i++) {
//     h += `
//       <div class="card">
//         <img src="${users[i].thumbnail}">
//         <h2>${users[i].title}</h2>
//         <h4>${users[i].year}</h4>
//         <button onclick="afficher2(${i})">ffff</button>
//       </div>
//     `;
//   }
//   aff.innerHTML = h;
// });

// // Dans la page2.html, vous devez inclure un script qui récupère l'index du film et effectue une autre requête pour obtenir les détails du film.

// // page2.html
// let urlParams = new URLSearchParams(window.location.search);
// let index = urlParams.get('index');

// makeRequest('movies-2020s.json', function(users) {
//   let aff2 = document.getElementById('afficher2');
//   let h = `
//     <div>
//       <img src="${users[index].thumbnail}">
//       <ul>
//         <li>${users[index].title}</li>
//         <li>${users[index].year}</li>
//         <li>${users[index].cast}</li>
//         <li>${users[index].genres}</li>
//         <li>${users[index].extract}</li>
//         <button class="btn btn-danger bb2">WATCH</button>
//       </ul>
//     </div>
//   `;
//   aff2.innerHTML = h;
// });