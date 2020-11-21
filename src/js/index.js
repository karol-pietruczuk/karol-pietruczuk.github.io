import '../scss/main.scss';

console.log("Hi, I'm Karol - Nice to meet You 🚀");

fetch('https://api.github.com/users/karol-pietruczuk/repos?sort=created&direction=desc')
    .then(res => res.json())
    .then(res => {
        const container = document.querySelector('.projects-grid--js');
        for(let repo of res){
            const {name, description, homepage, html_url} = repo;

            const template = `<article class="project">
            <div class="project__window">
              <span class="project__circle"></span>
              <span class="project__circle"></span>
              <span class="project__circle"></span>
            </div>
            <div class="project__content">
              <img src="img/GithubIcon.svg" alt="">
              <h3 class="project__grid project__title">
                <span class="project__label">project:</span><span>${name}</span>
              </h3>
              <p class="project__grid project__grid--description">
                <span class="project__label">description:</span>
                <span>${description}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">demo:</span>
                <span>&lt;<a class="project__link" target="_blank" rel="noopener noreferrer" href="${homepage}" title="${name} - demo">see here</a>&gt;</span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span>
                <span>&lt;<a class="project__link" target="_blank" rel="noopener noreferrer" href="${html_url}" title="${name} - github">source code</a>&gt;</span>
              </p>
          </div>
          </article>`
          if(description && name != 'buisness-card'){ //There I can add condition for number of repositories to display, e.g by using variable let i = 0
            container.innerHTML += template;
          }
        }
    })
 .catch((e) => console.log(e));