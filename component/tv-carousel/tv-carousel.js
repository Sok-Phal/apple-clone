class TVCarousel extends HTMLElement {
  constructor() {
    super();
    this.current = 0;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    this.update();
    setInterval(() => this.move(1), 4000);
  }

  render() {
    this.innerHTML = `
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                
                .carousel-container {
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                    height: 495px;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }

                .carousel {
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 495px;
                    width: 100%;
                    overflow: hidden;
                }

                .card {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    width: 275px;
                    height: 495px;
                    transition: all 0.6s ease;
                    cursor: pointer;
                    transform-origin: center;
                    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 200px);
                }

                .acapulco {
                    background-image: url("./public/homepage/severance-small.jpg");
                    background-size: cover;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    justify-content: space-between;
                }

                .logo {
                    font-size: 24px;
                    margin-top: 30px; 
                    background-image: url("./public/homepage/apple-tv-logo.png");
                    background-repeat: no-repeat;
                    background-size: 69px 27px;
                    background-position: center;
                    color: transparent;
                }

                .title {
                    background-image: url("./public/homepage/severance-logo.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: transparent;
                    font-size: 48px; 
                    font-style: italic;
                }

                .info {
                    font-size: 24px;
                    text-align: center;
                    padding: 0 15px;
                    margin-bottom: 30px;
                }

                .genre { font-size: 16px; font-weight: 600; }
                .season { font-size: 15px; opacity: 0.9; margin-bottom: 12px; }
                
                .btn {
                    background: rgba(255,255,255,0.95);
                    color: #333;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 25px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .btn:hover { background: white; transform: translateY(-2px); }

                .other {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    font-weight: 300;
                }
                
                .card1 {
                    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 200px), 
                        url("./public/homepage/the-studio-small.jpg");
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                    height: 100%;
                    justify-content: space-between;
                }

                .title-card1 {
                    background-image: url("./public/homepage/the-studio-logo.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: transparent;
                    font-size: 48px; 
                    font-style: italic;
                }

                .card2 {
                    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 200px), 
                        url("./public/homepage/acapulco-small.jpg");
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                    height: 100%;
                    justify-content: space-between;
                }

                .title-card2 {
                    background-image: url("./public/homepage/acapulco-logo.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: transparent;
                    font-size: 48px; 
                    font-style: italic;
                }

                .card3 {
                    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 200px), 
                        url("./public/homepage/shrinking-small.jpg");
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                    height: 100%;
                    justify-content: space-between;
                }

                .title-card3 {
                    background-image: url("./public/homepage/shrinking-logo.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: transparent;
                    font-size: 48px; 
                    font-style: italic;
                }

                .card4 {
                    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 200px), 
                        url("./public/homepage/season-pass-small.jpg");
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: white;
                    height: 100%;
                    justify-content: space-between;
                }

                .title-card4 {
                    background-image: url("./public/homepage/season-pass-logo.png");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: transparent;
                    font-size: 32px; 
                    font-style: italic;
                    margin-top: 30px;
                }

                .nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 99px;
                    height: 495px;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: white;
                    font-size: 48px;
                    cursor: pointer;
                    backdrop-filter: blur(20px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                
                .nav:hover { background: rgba(255,255,255,0.15); }
                .prev { left: 0; }
                .next { right: 0; }
            </style>
            <div class="carousel-container">
                <div class="carousel">
                    <div class="card acapulco">
                        <div>
                            <div class="logo">Apple TV</div>
                            <div class="title">Severance</div>
                        </div>
                        <div class="info">
                            <div class="genre">Thriller</div>
                            <div class="season"> 27 Emmy® Nominations Including Best Drama</div>
                            <button class="btn">Stream now</button>
                        </div>
                    </div>
                    <div class="card card1">
                        <div>
                            <div class="logo">Apple TV</div>
                            <div class="title-card1">Severance</div>
                        </div>
                        <div class="info">
                            <div class="genre">Comedy</div>
                            <div class="season"> 23 Emmy® Nominations Including Best Comedy</div>
                            <button class="btn">Stream now</button>
                        </div>
                    </div>
                    <div class="card card2">
                        <div>
                            <div class="logo">Apple TV</div>
                            <div class="title-card2">Severance</div>
                        </div>
                        <div class="info">
                            <div class="genre">Comedy</div>
                            <div class="season">New season</div>
                            <button class="btn">Stream now</button>
                        </div>
                    </div>
                    <div class="card card3">
                        <div>
                            <div class="logo">Apple TV</div>
                            <div class="title-card3">Severance</div>
                        </div>
                        <div class="info">
                            <div class="genre">Comedy</div>
                            <div class="season"> 7 Emmy® Nominations Including Best Comedy</div>
                            <button class="btn">Stream now</button>
                        </div>
                    </div>
                    <div class="card card4">
                        <div>
                            <div class="title-card4">Severance</div>
                        </div>
                        <div class="info">
                            <div class="season">Watch every club, every match, live—all season long.</div>
                            <button class="btn">See the schedule</button>
                        </div>
                    </div>
                    <button class="nav prev">‹</button>
                    <button class="nav next">›</button>
                </div>
            </div>
        `;
  }

  setupEventListeners() {
    const cards = this.querySelectorAll(".card");
    const prevBtn = this.querySelector(".prev");
    const nextBtn = this.querySelector(".next");

    cards.forEach((card, i) => {
      card.onclick = () => {
        this.current = i;
        this.update();
      };
    });

    prevBtn.onclick = () => this.move(-1);
    nextBtn.onclick = () => this.move(1);
  }

  update() {
    const cards = this.querySelectorAll(".card");
    const total = cards.length;
    cards.forEach((card, i) => {
      let offset = i - this.current;
      if (offset > 2) offset -= total;
      if (offset < -2) offset += total;
      const spacing = 291;
      let translateX = offset * spacing;
      card.style.transform = `translateX(${translateX - 137.5}px)`;
      card.style.opacity = i === this.current ? 1 : 0.7;
      card.style.zIndex = i === this.current ? 3 : 2;
    });
  }

  move(dir) {
    const total = this.querySelectorAll(".card").length;
    this.current = (this.current + dir + total) % total;
    this.update();
  }
}

customElements.define("tv-carousel", TVCarousel);
