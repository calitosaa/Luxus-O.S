---
source_repo: https://github.com/beercss/beercss
source_file: dist/cdn/beer.custom-element.min.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

class BeerCssCustomElement extends HTMLElement {static isCssLoaded = false;static isJsLoaded = false;constructor() {super();this.run();}async addJs() {if (BeerCssCustomElement.isJsLoaded) return;BeerCssCustomElement.isJsLoaded = true;if (window.ui) return;return await import("https://cdn.jsdelivr.net/npm/beercss@4.0.20/dist/cdn/beer.min.js");}async addCss() {if (BeerCssCustomElement.isCssLoaded) return;BeerCssCustomElement.isCssLoaded = true;const isScoped = !!getComputedStyle(document.documentElement).getPropertyValue("--scoped");if (isScoped) return;const head = document.querySelector("head");const element = document.createElement("link");element.setAttribute("href", "https://cdn.jsdelivr.net/npm/beercss@4.0.20/dist/cdn/beer.scoped.min.css");element.setAttribute("rel", "stylesheet");head.appendChild(element);}async run() {await Promise.all([this.addJs(), this.addCss()]);ui();}}customElements.define("beer-css", BeerCssCustomElement);export default BeerCssCustomElement;