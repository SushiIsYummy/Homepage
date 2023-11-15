import cat from './images/profile-pic-cat.jpg';
import '/src/styles.css';
import githubLogo from './images/github.svg';
import linkedinLogo from './images/linkedin.svg';
import twitterLogo from './images/twitter.svg';
import externalLinkLogo from './images/external-link.svg';

let tripleLogos = document.querySelectorAll('.triple-logos');

tripleLogos.forEach((logos) => {
  const githubLogoElement = document.createElement('object');
  githubLogoElement.setAttribute('type', 'image/svg+xml');
  githubLogoElement.setAttribute('data', githubLogo);
  githubLogoElement.classList.add('github-logo');

  const linkedinLogoElement = document.createElement('object');
  linkedinLogoElement.setAttribute('type', 'image/svg+xml');
  linkedinLogoElement.setAttribute('data', linkedinLogo);
  linkedinLogoElement.classList.add('linkedin-logo');

  const twitterLogoElement = document.createElement('object');
  twitterLogoElement.setAttribute('type', 'image/svg+xml');
  twitterLogoElement.setAttribute('data', twitterLogo);
  twitterLogoElement.classList.add('twitter-logo');

  logos.append(githubLogoElement, linkedinLogoElement, twitterLogoElement);
});

let projectCards = document.querySelector('main .project-cards');

for (let i = 0; i < 6; i++) {
  projectCards.appendChild(projectCard());
}

function projectCard() {
  let projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  let img = document.createElement('img');
  img.classList.add('project-img');

  let projectName = document.createElement('p');
  projectName.classList.add('project-name');
  projectName.textContent = 'Project name';

  let links = document.createElement('div');

  const githubLogoElement = document.createElement('object');
  githubLogoElement.setAttribute('type', 'image/svg+xml');
  githubLogoElement.setAttribute('data', githubLogo);
  githubLogoElement.classList.add('github-logo');

  const externalLinkElement = document.createElement('object');
  externalLinkElement.setAttribute('type', 'image/svg+xml');
  externalLinkElement.setAttribute('data', externalLinkLogo);
  externalLinkElement.classList.add('external-link-logo');

  links.append(githubLogoElement, externalLinkElement);

  let nameAndLinks = document.createElement('div');
  nameAndLinks.classList.add('name-and-links');
  nameAndLinks.append(projectName, links);

  let projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = 'Short description of the project. Just a couple sentences will do.';

  projectCard.append(img, nameAndLinks, projectDescription);
  return projectCard;
}
