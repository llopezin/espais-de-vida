
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/laura/Desktop/projects/espais-de-vida/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/laura/Desktop/projects/espais-de-vida/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/laura/Desktop/projects/espais-de-vida/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/laura/Desktop/projects/espais-de-vida/src/pages/index.js")),
  "component---src-pages-reviews-js": preferDefault(require("/Users/laura/Desktop/projects/espais-de-vida/src/pages/reviews.js"))
}

