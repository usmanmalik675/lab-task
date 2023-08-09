// script.js
const contentContainer = document.getElementById("contentContainer");
const loadingIndicator = document.getElementById("loadingIndicator");
let isLoading = false;
let page = 0;
const pageSize = 1000; // Number of items to load per batch

function fetchMoreContent() {
    isLoading = true;
    loadingIndicator.style.display = "block";

    // Simulate fetching content from a server or generating it on the client side
    setTimeout(() => {
        for (let i = 0; i < pageSize; i++) {
            const newContent = document.createElement("div");
            newContent.className = "content";
            newContent.innerHTML = `<p>anab ${page * pageSize + i}</p>`;
            contentContainer.appendChild(newContent);
        }

        isLoading = false;
        loadingIndicator.style.display = "none";
        page++;
    }, 1500);
}

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const containerHeight = contentContainer.offsetHeight;
    const windowHeight = window.innerHeight;

    if (!isLoading && scrollPos + windowHeight >= containerHeight) {
        fetchMoreContent();
    }
});

// Initial content load
fetchMoreContent();
