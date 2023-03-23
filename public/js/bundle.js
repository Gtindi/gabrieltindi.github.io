// SELECT DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// set Initial State of Menu
let showMenu = false;

const  toggleMenu = () => {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  };
};
menuBtn.addEventListener('click', toggleMenu);


// Dark mode toggle
const checkbox = document.querySelector('input[name=theme]');

const toggleChange = () => {
  if(checkbox.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
};

checkbox.addEventListener('change', toggleChange);


/**

// Load Portfolio
const portfolioDOM = document.querySelector('.deals');

const getPortfolio = async () => {
  try {
    let result = await fetch('./public/json/portfolio.json');
    //console.log(result);
    let data = await result.json();
    //console.log(data);
    let portfolios = data.portfolio;
    console.log(portfolios);
    portfolios = portfolios.map(portfolio => {
      const  { id }  = portfolio.sys;
      const { title, description } = portfolio.fields;
      const { details } = portfolio.fields;
      const image = portfolio.img.fields.file.url;
    });
    return { title, description, details, image  };

  } catch(error) {
    console.log(error);
  };
};

const displayPortfolio = (portfolios) => {
  let result = '';
  portfolios.forEach(item => {
    result += `
      <article class='sale-item'>
        <h1 class='title'></h1>
        <p> This the best computer money can buy, if you dont have much money.</p>
        <ul>
          <li>Computer</li>
          <li>Monitor</li>
          <li>keyboard</li>
          <li>mouse</li>
        </ul>
        <img src='./img/Asset-10.svg' alt=''>
        <button>See details</button>
      </article>
    `;
  });
  portfolioDOM.innerHTML = result;
};

document.addEventListener('DOMContentLoaded', () => {
  getPortfolio().then(portfolio => {
    displayPortfolio();
  });
});

 **/
