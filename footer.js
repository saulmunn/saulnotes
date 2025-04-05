document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <section>
        <p>
            <a href="/">← Back to home</a> | Liked this note? <a href="https://saulmunn.com/contact">Let me know!</a>
        </p>
        <p1>
            Copyright ${new Date().getFullYear()} <a href="https://saulmunn.com/">Saul Munn</a>. Design from <a href="https://edwardtufte.github.io/tufte-css/">Tufte CSS</a> by Dave Liepmann.
        </p1>
        <section>
    `;
  document.body.appendChild(footer);
});
