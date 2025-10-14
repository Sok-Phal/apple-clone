class SimpleAccordion extends HTMLElement {
  connectedCallback() {
    this.classList.add("accordion");

    this.querySelectorAll(".item").forEach((item) => {
      const title = item.getAttribute("title") || "Untitled";
      const contentHTML = item.innerHTML;

      item.innerHTML = `
        <div class="accordion-item">
          <button class="accordion-header">
            ${title}
            <img class="accordion-icon" src="./public/icons/chevron.svg" alt="">
          </button>
          <div class="accordion-content">
            <div class="accordion-inner">
              ${contentHTML}
            </div>
          </div>
        </div>
      `;
    });

    this.querySelectorAll(".accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains("open");

        header.classList.toggle("open");
        content.classList.toggle("open", !isOpen);
      });
    });
  }
}

customElements.define("simple-accordion", SimpleAccordion);
