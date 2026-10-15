# Explore Destinations

A responsive, static travel-inspiration website for discovering destinations, browsing travel tips and facts, and viewing a curated photo gallery.

## Pages

- **Home** — a full-screen introduction and link to start exploring.
- **Destinations** — destination listings with individual city pages for Bern, Istanbul, Maldives, New York City, Paris, and Tokyo.
- **Tips**, **Facts**, **Gallery**, and **FAQ** — practical travel content and visual inspiration.
- **Newsletter**, **About**, and **Contact** — supporting site pages.

## Built with

- HTML5
- CSS3, including responsive layouts and animations
- Vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) (Poppins) and [Phosphor Icons](https://phosphoricons.com/)

Shared navigation and footer markup live in `layout.js`; interactive behaviors such as scroll reveals and the gallery lightbox live in `script.js`.

## Run locally

No build step or package installation is required. Open `index.html` in a modern browser, or serve the folder with any static-file server. For example:

```sh
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html             # Home page
├── destinations.html      # Destination overview
├── [city].html            # Individual destination pages
├── gallery.html           # Image gallery and lightbox
├── style.css              # Shared styling and responsive rules
├── layout.js              # Shared header, footer, mobile menu, back-to-top button
├── script.js              # Scroll reveal and gallery interactions
└── images/                # Local destination imagery
```

## License

No license has been specified for this project.
