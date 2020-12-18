import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1_aRGytxp0SVRVtSgKkfmUgbmXqN348sa3trcvu1cxE8/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'habitual.png',
    title: 'Habitual',
    info: 'A habit tracker SPA that allows users to track their progress, set frequency by week, and manage their goals for personal growth.',
    info2: 'Utilizes React.js, Redux, Rails, SASS, CSS.',
    url: '',
    repo: 'https://github.com/jordles113/habitual-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'get-together.png',
    title: 'Get-Together',
    info: 'Event Planning SPA that allows for creation of events and associated get-togethers or activities.',
    info2: 'Implements vanilla Javascript with a Rails API and Bootstrap',
    url: 'https://jordles113.github.io/get-together-frontend/#',
    repo: 'https://github.com/jordles113/get-together-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Cinephile.png',
    title: 'Cinephile',
    info: 'Cinephile is a movie database application using Rails. Users can create watch lists, and search for movies, and review content.',
    info2: 'Uses Rails and Bootstrap with the OMDB API',
    url: '',
    repo: 'https://github.com/jordles113/cinephile', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jordanromero1390@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jordanr113',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://jordan-t-romero.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jordan-t-romero/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jordles113',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
