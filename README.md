# Open Communications

Static marketing website for **Open Communications**, a strategic marketing
consultancy based in Dublin. Served as flat files (Cloudflare Pages).

## Structure

```
index.html                              Home (hero carousel)
contact-us/index.html                   Contact (email only)
our-approach/index.html                 Our Approach
our-clients/index.html                  Our Clients
what-we-do/index.html                   What we do (overview)
what-we-do/agency-selection-and-pitch-management/
what-we-do/integrated-communications-planning/
what-we-do/media-auditing/
assets/css/app.css                      Responsive stylesheet
assets/js/carousel.js                   Vanilla-JS hero carousel (home only)
assets/img/…                            Logo, textures, slideshow, headshots
```

## Notes

- **No build step.** Pages are hand-authored static HTML sharing identical
  `<head>` / header / nav / footer blocks. Edit those blocks consistently across
  the 8 files (there is no templating layer by design).
- **Analytics:** Google Analytics 4, measurement ID `G-4WT5LJCQLD`, on every page.
- **Contact:** email only (no form) — `mailto:` links.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push the branch. Cloudflare Pages serves the repo root as-is (no build command).
