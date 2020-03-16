const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

function closeNav() {
    let x = document.getElementById("navigacja");

    if (x.className === "navigation") {
        x.className += " open";
    }
    else
    {
        x.className = "navigation";
        hamburger.classList.toggle('hamburger--active');
    }


}