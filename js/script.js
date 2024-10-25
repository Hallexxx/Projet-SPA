const coursData = [
    {
      name: 'Créer un SPA en Vanilla JS',
      description: "Dans ce cours de création de Single Page Applications (SPA) en Vanilla JavaScript d'une durée de 4 heures, les participants peuvent acquérir une introduction rapide mais instructive aux concepts essentiels du développement d'applications web avancées. Au cours de cette brève formation, les étudiants apprendront à maîtriser les principes de base du JavaScript, y compris la manipulation du Document Object Model (DOM), la gestion des événements, et l'exécution de requêtes HTTP...",
    },
    {
      name: 'Apprendre React',
      description: "Dans ce cours de React destiné aux débutants, les étudiants acquièrent une solide compréhension des fondamentaux de cette bibliothèque JavaScript largement utilisée pour la création d'interfaces utilisateur interactives...",
    },
    {
      name: 'Apprendre Angular',
      description: "Dans ce cours d'Angular destiné aux débutants, les étudiants se familiarisent avec ce puissant framework JavaScript développé par Google, qui est largement utilisé pour la création d'applications web modernes...",
    }
];

const app = document.createElement('div');
document.body.appendChild(app);

function renderHomePage() {
    app.innerHTML = '';
    const header = document.createElement('header');
    const logo = document.createElement('img');
    logo.src = 'ynov.jpg';
    logo.alt = 'Logo Ynov';
    logo.style.cursor = 'pointer';
    logo.onclick = () => location.hash = '#';
    header.appendChild(logo);
    app.appendChild(header);
    const title = document.createElement('h1');
    title.textContent = 'Cours disponibles';
    app.appendChild(title);

    const coursList = document.createElement('div');
    coursList.className = 'cours-list';

    coursData.forEach((cours, index) => {
        const coursDiv = document.createElement('div');
        coursDiv.className = 'cours';

        const coursTitle = document.createElement('h2');
        coursTitle.textContent = cours.name.length > 25 ? `${cours.name.slice(0, 25)}...` : cours.name;
        coursDiv.appendChild(coursTitle);

        const coursDsc = document.createElement('p');
        coursDsc.textContent = cours.description.length > 100 ? `${cours.description.slice(0, 100)}...` : cours.description;
        coursDiv.appendChild(coursDsc);

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Get details';
        detailsButton.onclick = () => location.hash = `#cours-${index}`;
        coursDiv.appendChild(detailsButton);

        coursList.appendChild(coursDiv);
    });

    app.appendChild(coursList);
}

function renderCourseDetails(coursIndex) {
    app.innerHTML = '';

    const header = document.createElement('header');
    const logo = document.createElement('img');
    logo.src = 'https://prod-files-secure.s3.us-west-2.amazonaws.com/cabb3a88-2e2d-4113-a7fd-1e5d0ebd235a/8458caea-2a4c-4aad-86e8-f6afb1de085c/logo_ynov.png';
    logo.alt = 'Logo Ynov';
    logo.style.cursor = 'pointer';
    logo.onclick = () => location.hash = '#';
    header.appendChild(logo);
    app.appendChild(header);

    const cours = coursData[coursIndex];
    const coursDetails = document.createElement('div');
    coursDetails.className = 'cours-details';

    const backLink = document.createElement('a');
    backLink.className = 'back-link';
    backLink.onclick = () => location.hash = '#';
    backLink.innerHTML = `<span class="arrow">&#8592;</span> Retour à la liste`;
    coursDetails.appendChild(backLink);

    const coursTitle = document.createElement('h2');
    coursTitle.textContent = cours.name;
    coursDetails.appendChild(coursTitle);

    const coursDesc = document.createElement('p');
    coursDesc.textContent = cours.description;
    coursDetails.appendChild(coursDesc);

    app.appendChild(coursDetails);
}

function router() {
    const hash = location.hash;
    if (!hash || hash === '#') {
        renderHomePage();
    } else if (hash.startsWith('#cours-')) {
        const coursIndex = parseInt(hash.split('-')[1], 10);
        if (!isNaN(coursIndex) && coursIndex < coursData.length) {
        renderCourseDetails(coursIndex);
        } else {
        renderHomePage();
        }
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);