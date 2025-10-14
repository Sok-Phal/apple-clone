class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar">
        <div class="navbar-container">
            <ul class="nav-links">
                <li>
                    <img src="./public/icons/apple-icon.svg" alt="home-page">
                </li>
                <ul class="search-bag-hamburger">
                    <li>
                        <img src="./public/icons/search-icon.svg" alt="search-icon">
                    </li>
                    <li>
                        <img src="./public/icons/bag-icon.svg" alt="bag-icon">
                    </li>
                    <li>
                        <img src="./public/icons/hamburger-icon.svg" alt="hamburger-icon">
                    </li>
                </ul>
            </ul>
        </div>

        <div class="hidden-container">
            <ul class="hidden-mobile-navbar">
                <li>
                    <img src="./public/icons/apple-icon.svg" alt="home-page">
                </li>
                <li>
                    <a href="">Store</a>
                </li>
                <li>
                    <a href="">Mac</a>
                <li>
                <li>
                    <a href="">iPad</a>
                </li>
                <li>
                    <a href="">iPhone</a>
                </li>
                <li>
                    <a href="">Watch</a>
                </li>
                <li>
                    <a href="">Vision</a>
                <li>
                <li>
                    <a href="">AirPods</a>
                </li>
                <li>
                    <a href="">TV & Home</a>
                </li>
                <li>
                    <a href="">Entertainment</a>
                </li>
                <li>
                    <a href="">Accessories</a>
                <li>
                <li>
                    <a href="">Support</a>
                <li>
                <li>
                    <img src="./public/icons/search-icon.svg" alt="search-icon">
                </li>
                <li>
                    <img src="./public/icons/bag-icon.svg" alt="bag-icon">
                </li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
