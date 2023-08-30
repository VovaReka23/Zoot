
window.onload = (event) => {

    let toggle = document.querySelector(".toggle--ReadMore"),
        more = document.querySelector(".more-zoot"),
        isExpanded = true;

    toggle.onclick = toggleReadMore;

    function toggleReadMore() {
        console.log('test')
        more.classList.toggle("hidden-zoot");
        toggle.innerText = isExpanded ? "Learn less" : "Learn more"
        isExpanded = !isExpanded;
    }
};