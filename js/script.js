const coursData = [
    {
      name: 'Créer un SPA en Vanilla JS',
      description: "Dans ce cours de création de Single Page Applications (SPA) en Vanilla JavaScript d'une durée de 4 heures, les participants peuvent acquérir une introduction rapide mais instructive aux concepts essentiels du développement d'applications web avancées. Au cours de cette brève formation, les étudiants apprendront à maîtriser les principes de base du JavaScript, y compris la manipulation du Document Object Model (DOM), la gestion des événements, et l'exécution de requêtes HTTP. Cette base solide en JavaScript est cruciale pour la création de SPAs, qui sont des applications web interactives qui offrent une expérience utilisateur fluide sans rechargement de la page.\nPendant le cours, les étudiants se familiariseront avec la structure et la conception d'une SPA en Vanilla JavaScript. Ils apprendront à gérer la navigation, à mettre en place des vues dynamiques, et à manipuler l'état de l'application de manière efficace. Bien que le temps soit limité à 4 heures, les participants auront l'occasion d'explorer les principaux concepts qui sous-tendent les SPAs, tels que le routage, la gestion de l'état côté client, et la communication avec des API externes.\nEn fin de compte, ce cours intensif de création de SPA en Vanilla JavaScript fournira aux étudiants une première exposition aux concepts clés nécessaires pour commencer à développer des SPAs. Cependant, étant donné la durée limitée, il s'agira d'une introduction de base, et les apprenants devront continuer à approfondir leurs connaissances et leurs compétences par la pratique et l'apprentissage continu pour maîtriser pleinement le développement de SPAs plus complexes et sophistiquées.",
    },
    {
      name: 'Apprendre React',
      description: "Dans ce cours de React destiné aux débutants, les étudiants acquièrent une solide compréhension des fondamentaux de cette bibliothèque JavaScript largement utilisée pour la création d'interfaces utilisateur interactives. Au cours de ce programme, les participants apprennent d'abord les concepts de base de React, tels que les composants, les propriétés (props), et l'état (state). Ils découvrent comment structurer leur code de manière modulaire en divisant leur application en composants réutilisables, favorisant ainsi la maintenabilité et l'extensibilité du code.\nAu fur et à mesure de leur progression, les apprenants sont initiés à la gestion de l'état des composants et à la communication entre ces derniers. Ils explorent également les avantages de l'utilisation de JSX, une extension de JavaScript qui permet de déclarer les interfaces utilisateur de manière déclarative et intuitive. Les étudiants apprennent à manipuler des événements, à gérer les formulaires, et à effectuer des requêtes HTTP pour interagir avec des API externes. Grâce à des exemples pratiques et des projets guidés, les débutants sont rapidement capables de développer des applications web interactives, jetant ainsi les bases pour leur progression dans le monde du développement front-end.\nEnfin, le cours de React pour débutants aborde les principes de la réactivité et de la mise à jour des composants, en mettant en lumière les notions avancées telles que le cycle de vie des composants et les hooks. Les apprenants découvrent comment gérer les données dynamiques de manière efficace, ce qui leur permet de créer des applications plus complexes et interactives. Ils sont également exposés aux meilleures pratiques de développement, à la gestion des erreurs, et à l'optimisation des performances, ce qui les prépare à devenir des développeurs React compétents et confiants dans la création d'applications web modernes et réactives.",
    },
    {
      name: 'Apprendre Angular',
      description: "Dans ce cours d'Angular destiné aux débutants, les étudiants se familiarisent avec ce puissant framework JavaScript développé par Google, qui est largement utilisé pour la création d'applications web modernes. Le cours commence par une introduction aux concepts clés d'Angular, notamment les composants, les modules, et les directives. Les apprenants découvrent comment structurer une application Angular de manière modulaire et apprennent à créer des composants réutilisables qui forment l'ossature de l'application. Ils explorent également le système de gestion de l'état et de la navigation d'Angular, ainsi que les fondamentaux de la liaison de données bidirectionnelle.\nAu fur et à mesure de leur progression, les étudiants se plongent dans les fonctionnalités avancées d'Angular, telles que la gestion des formulaires, la communication avec des services externes via des appels HTTP, et la mise en place de routage pour la navigation à l'intérieur de l'application. Les débutants apprennent à utiliser le système de dépendances d'Angular pour l'injection de dépendances, ce qui favorise la réutilisation du code et la facilité de test. Ils explorent également les aspects de la sécurité, l'authentification, et l'autorisation dans le contexte d'une application Angular, préparant ainsi les apprenants à développer des applications web sécurisées et robustes.\nEnfin, le cours d'Angular pour débutants met l'accent sur les meilleures pratiques de développement, les techniques de débogage, l'optimisation des performances, et l'accessibilité, ce qui permet aux étudiants de créer des applications web professionnelles et hautement performantes. En acquérant une compréhension approfondie d'Angular, les débutants sont prêts à se lancer dans le monde du développement front-end et à contribuer de manière significative à la création d'applications web modernes et réactives.",
    }
];

const app = document.createElement('div');
document.body.appendChild(app);

function renderHomePage() {
    app.innerHTML = '';
    const header = document.createElement('header');
    const logo = document.createElement('img');
    logo.src = 'logo.png';
    logo.alt = 'Logo Ynov';
    logo.style.cursor = 'pointer';
    logo.onclick = () => location.hash = '#';
    header.appendChild(logo);
    app.appendChild(header);
    const container = document.createElement('div');
    container.className = 'container';
    const title = document.createElement('h1');
    title.textContent = 'Cours disponibles';
    app.appendChild(container);
    container.appendChild(title);

    const coursList = document.createElement('div');
    coursList.className = 'cours-list';
    container.appendChild(coursList);

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
}

function renderCourseDetails(coursIndex) {
    app.innerHTML = '';

    const header = document.createElement('header');
    const logo = document.createElement('img');
    logo.src = 'logo.png';
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
    const hash = location.hash || '#';
    
    if (hash === '#') {
        renderHomePage();
        return;
    }

    const coursIndex = parseInt(hash.replace('#cours-', ''), 10);
    
    if (Number.isInteger(coursIndex) && coursIndex >= 0 && coursIndex < coursData.length) {
        renderCourseDetails(coursIndex);
    } else {
        renderHomePage();
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
