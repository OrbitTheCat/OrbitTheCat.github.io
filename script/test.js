const svg = document.querySelectorAll("#quote1SVG, #quote2TextSVG")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
}, {
    rootMargin: "-150px",
    }
)


svg.forEach(svg => {
    observer.observe(svg)
})

