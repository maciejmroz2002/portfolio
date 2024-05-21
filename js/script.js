window.addEventListener("scroll", function(){
    const header = document.querySelector("div.navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
    // if (window.scrollY > 0){
    //     document.documentElement.style.setProperty('--txt', '#000');  
    // } else {
    //     document.documentElement.style.setProperty('--txt', '#fff')
    // }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const banner = document.querySelector("div.banner")
    const bio = document.querySelector("div.bio");
    const portfolio = document.querySelector("div.portfolio");
    const contact = document.querySelector("div.contact");
    const footer = document.querySelector("div.footer");

    const txBio = document.getElementById("txBio");
    const txPortfolio = document.getElementById("txPortfolio");
    const txContact = document.getElementById("txContact");
    const txHome = document.getElementById("txHome");

    const yourFunction = async () => {
        await delay(1000);
        if (window.scrollY <= bio.getBoundingClientRect().top) {
            console.log ("banner")
            txHome.scrollIntoView({behavior: "smooth"});
        } else if (window.scrollY <= portfolio.getBoundingClientRect().top) {
            console.log("bio")
    
            txBio.scrollIntoView({behavior: "smooth"});
        } else if ( window.scrollY >= contact.getBoundingClientRect().top && window.scrollY <= footer.getBoundingClientRect().top){
            console.log("portfolio")
    
            txPortfolio.scrollIntoView({behavior: "smooth"});
        } else if (window.scrollY >= contact.getBoundingClientRect().top) {
            console.log("contact")
    
            txContact.scrollIntoView({behavior: "smooth"});
        }
      };

    yourFunction();
})