
window.onload = (event) => {

    let toggle = document.querySelector(".toggle--ReadMore"),
        more = document.querySelector(".more-zoot"),
        isExpanded = true;

    toggle.onclick = toggleReadMore;

    function toggleReadMore() {
        more.classList.toggle("hidden-zoot");
        toggle.innerText = isExpanded ? "See less" : "Learn more"
        isExpanded = !isExpanded;
    }


    let tabs = document.querySelectorAll(".tab-zoot");

    for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", tabActive)
	}

    function tabActive() {
        for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        this.classList.add("active");
    }

};

