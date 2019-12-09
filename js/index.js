const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let A2 = document.querySelectorAll("a");

A2.style.color=green;

let A = document.getElementsByTagName("a");

A[0].textContent(siteContent["nav"]["nav-item-1"]);

A[1].textContent(siteContent["nav"]["nav-item-2"]);

A[2].textContent(siteContent["nav"]["nav-item-3"]);

A[3].textContent(siteContent["nav"]["nav-item-4"]);

A[4].textContent(siteContent["nav"]["nav-item-5"]);

A[5].textContent(siteContent["nav"]["nav-item-6"]);

let headerUno = document.getElementsByTagName("h1");
headerUno[0].textContent(siteContent["cta"]["h1"]);

let firstButton = document.getElementsByTagName("button");
firstButton[0].textContent(siteContent["cta"]["button"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let headerQuatro = document.getElementsByTagName("h4");
headerQuatro[0].textContent(siteContent["main-content"]["features-h4"]);

headerQuatro[1].textContent(siteContent["main-content"]["about-h4"]);

headerQuatro[2].textContent(siteContent["main-content"]["services-h4"]);

headerQuatro[3].textContent(siteContent["main-content"]["product-h4"]);

headerQuatro[4].textContent(siteContent["main-content"]["vision-h4"]);

headerQuatro[5].textContent(siteContent["contact"]["contact-h4"]);

let tagP = document.getElementsByTagName("p");
tagP[0].textContent(siteContent["main-content"]["features-content"]);

tagP[1].textContent(siteContent["main-content"]["about-content"]);

tagP[2].textContent(siteContent["main-content"]["services-content"]);

tagP[3].textContent(siteContent["main-content"]["product-content"]);

tagP[4].textContent(siteContent["main-content"]["vision-content"]);

tagP[5].textContent(siteContent["contact"]["address"]);

tagP[6].textContent(siteContent["contact"]["phone"]);

tagP[7].textContent(siteContent["contact"]["email"]);

tagP[8].textContent(siteContent["footer"]["copyright"]);

let mainImage = document.getElementById("middle-image");
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

