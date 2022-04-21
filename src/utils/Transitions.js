const revealOnLoad = () => {
    console.log("Enter revealOnLoad");
    let reveals = document.querySelectorAll(".reveal-load");
  
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 0;
    
        if (elementTop < (windowHeight - elementVisible)) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

export { revealOnLoad }