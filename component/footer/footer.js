class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer-bg">
        <div class="footer-apple">
            <div class="footer-text-container">
                <span class="footer-text">
                    1. Available for Qualified Purchasers only. Qualified Purchasers purchasing an eligible Mac/iPad (“Eligible Product”) with eligible AirPods/accessory (“Promotion Product”) from a Qualifying Location through September 30, 2025 will receive Promotion Savings (up to $199, not to exceed the price of the Promotion Product). Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms 
                    <a href="#">here</a> 
                </span>
                <span class="footer-text">
                    2. Visual intelligence is available in iOS 18.2 or later on iPhone 16, iPhone 16 Plus, iPhone 16 Pro, and iPhone 16 Pro Max; iOS 18.3 or later on iPhone 16e; and iOS 18.4 or later on iPhone 15 Pro and iPhone 15 Pro Max. Apple Intelligence must be on to use visual intelligence.
                </span>
                <span class="footer-text">
                    3. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.
                    <br>
                    <br>
                    Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See 
                    <a href="#">support.apple.com/120850</a>
                    for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.
                </span>
                <span class="footer-text">
                    4. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                </span>
                <span class="footer-text">
                    To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch. 
                </span>
                <span class="footer-text">
                    Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
                </span>
                <span class="footer-text">
                    If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
                </span>
                <span class="footer-text">
                    Learn more about how Apple Card applications are evaluated at 
                    <a href="#">support.apple.com/kb/HT209218</a>
                </span>
                <span class="footer-text">
                    Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18, and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean, and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
                </span>
                <span class="footer-text">
                    A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
                </span>
                <span class="footer-text">
                    Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
                </span>
            </div>

            <simple-accordion>
                <div class="item" title="Shop and Learn">
                    <p>Store</p>
                    <p>Mac</p>
                    <p>iPad</p>
                    <p>iPhone</p>
                    <p>Watch</p>
                    <p>Vision</p>
                    <p>AirPods</p>
                    <p>TV & Home</p>
                    <p>AirTags</p>
                    <p>Accessories</p>
                    <p>Gift Cards</p>
                </div>
                <div class="item" title="Apple Wallet">
                    <p>Wallet</p>
                    <p>Apple Card</p>
                    <p>Apple Pay</p>
                    <p>Apple Cash</p>
                </div>
                <div class="item" title="Account">
                    <p>Manage Your Apple Account</p>
                    <p>Apple Store Account</p>
                    <p>iCloud.com</p>
                </div>
                <div class="item" title="Entertainment">
                    <p>Apple One</p>
                    <p>Apple TV+</p>
                    <p>Apple Music</p>
                    <p>Apple Arcade</p>
                    <p>Apple Fitness+</p>
                    <p>Apple News+</p>
                    <p>Apple Podcasts</p>
                    <p>Apple Books</p>
                    <p>App Store</p>
                </div>

                <div class="item" title="Apple Store">
                    <p>Find a Store</p>
                    <p>Genius Bar</p>
                    <p>Today at Apple</p>
                    <p>Group Reservations</p>
                    <p>Apple Camp</p>
                    <p>Apple Store App</p>
                    <p>Certified Refurbished</p>
                    <p>Order Status</p>
                    <p>Shopping Help</p>
                </div>

                <div class="item" title="For Business">
                    <p>Apple For Business</p>
                    <p>Shop For Business</p>
                </div>

                <div class="item" title="For Education">
                    <p>Apple and Education</p>
                    <p>Shop for K-12</p>
                    <p>Shop for College</p>
                </div>

                <div class="item" title="For Healthcare">
                    <p>Apple in Healthcare</p>
                    <p>Mac in Healthcare</p>
                    <p>Health on Apple Watch</p>
                    <p>Health Records on iPhone and iPad</p>
                </div>

                <div class="item" title="For Government">
                    <p>Shop For Government</p>
                    <p>Shop For Veterans and Military</p>
                </div>

                <div class="item" title="Apple Values">
                    <p>Accessibilty</p>
                    <p>Education</p>
                    <p>Environment</p>
                    <p>Inclusion and Diversity</p>
                    <p>Privacy</p>
                    <p>Racial Equity and Justice</p>
                    <p>Suplly Chain innovation</p>
                </div>

                <div class="item" title="About Apple">
                    <p>Newsroom</p>
                    <p>Apple Leadership</p>
                    <p>Career Opportunities</p>
                    <p>Investors</p>
                    <p>Ethics & Compliance</p>
                    <p>Events</p>
                    <p>Contact Apple</p>
                </div>
            </simple-accordion>
            <div class="footer-text-container">
                <span class="footer-text">
                    More ways to shop: <a class="a-blue" href="#">Find an Apple Store</a> or <a class="a-blue" href="#">Other retailer</a> near you.
                    Or call <a class="a-blue" href="#">1-800-MY-APPLE</a> (1-800-692-7753)
                </span>
                <span class="footer-text" style="width: 100%;">
                    United States
                </span>
                <span class="footer-text">
                    <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <p><a href="">Privacy Policy</a> |  <a href="">Term of Use</a> | <a href="">Sales and Refunds</a> | <a href="">Legal</a> | <a href="">Site Map</a></p>
                </span>  
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("apple-footer", Footer);
