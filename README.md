# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Screenshot](#screenshot)

  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)

  - [What I learned](#what-i-learned)

  - [Continued development](#continued-development)

  - [Useful resources](#useful-resources)

  - [AI Collaboration](#ai-collaboration)

- [Author](#author)

- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

The core of this challenge from Frontend Mentor is to build a pixel-perfect, highly responsive Recipe Page matching strict design specifications across mobile and desktop viewport profiles.

While a static recipe page is typically built with raw HTML and CSS, I chose to treat this project as a production-grade engineering exercise. I used **Angular (v18+)** to build a dynamic, component-driven architecture that pulls real-world data from a third-party REST API, simulating how a modern recipe web application handles live content delivery, state propagation, and asynchronous networking.

### Features

- **Dynamic Data Integration**: Integrated Jonas Schmedtmann's **Forkify API** to dynamically fetch, parse, and display real recipe data rather than hardcoding content.
- **Component-Driven Architecture**: Structured the interface into atomic, reusable components (such as `RecipeHeaderComponent`), paving the way for seamless scalability and future feature additions (e.g., adding user collections, search, or ingredient calculators).
- **Robust Routing**: Leveraged the **Angular Router** to handle clean, semantic parameters, allowing specific recipes to be deep-linked and loaded programmatically based on unique API identifiers.
- **Reactive Image Hydration & Skeleton Loaders**: Implemented defensive UI mechanics utilizing Angular Signals (`computed`, `signal`). The UI renders an animated Tailwind skeleton loader while the network transits external image data, gracefully fallback-routing to localized media assets if the remote asset server experiences hosting timeouts or errors.
- **Streamlined Asynchronous Networking**: Managed API handshakes entirely via Angular's `HttpClient`, utilizing declarative stream handling for efficient data fetching.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/HosseinHeydarpour/fm-recipe-page](https://github.com/HosseinHeydarpour/fm-recipe-page)
- Live Site URL: [https://fm-recipe-page-pink.vercel.app/](https://fm-recipe-page-pink.vercel.app/)

## My process

### Built with

- **Semantic HTML5** markup
- **Mobile-first workflow**
- **Tailwind CSS** (v3) - Utility-first CSS framework for fast UI development
- **SASS (SCSS)** - For structured, modular, and maintainable component styling
- **[Angular](https://angular.dev/)** (v18+) - Modern, high-performance web framework using Standalone Components and Signals
- **Angular Router** - For handling clean, deep-linked application states
- **Angular HttpClient** - For streamlined asynchronous REST API consumption

### Structural & Component Breakdown

Rather than building the page as a single monolithic template, I approached the design using an atomic, component-driven methodology. I analyzed the design mockups and broke the interface down into distinct visual and logical boundaries:

- **Shell/Root Component**: Establishes the global canvas layout, centering the recipe card on desktop screens and matching the background color constraints.
- **Recipe Header**: Manages the dynamic hero image asset, the dynamic recipe title, and publisher metadata. This component isolates the network error boundaries for external media.
- **Recipe Details/Metadata**: Handles cooking duration, serving sizes, and quick information tags.
- **Ingredients Component**: Iterates through dynamic array data, parsing units of measurement and formatting quantities into clean list items.
- **Instructions/Steps Component**: Formats sequential preparation steps into an aligned, ordered tree structure.

### Development Workflow

1.  **Route and HTTP Architecture**: Began by mapping out the application state. I configured the Angular Router to listen for dynamic parameters so that specific recipe IDs could be bookmarked and deep-linked. I then implemented an API data service utilizing Angular's `HttpClient` to communicate with the Forkify API.
2.  **Defensive Skeleton Implementation**: Recognizing that dynamic network imagery often experiences latency, I crafted animated Tailwind skeleton states. I deliberately kept the real DOM image nodes present but hidden during transit to allow browser engines to fully execute native lifecycle hooks.
3.  **State Reactive Refactoring**: Initially, I used synchronization effects to bridge input updates to image source states. To optimize performance and align with standard Angular best practices, I refactored the entire system into a declarative signal graph using `computed()` primitives. This ensures the component remains highly performant with explicit data flows and zero unnecessary change-detection cycles.
4.  **Refining the Layout**: Using Tailwind v3 backed by an optimized custom SASS layer, I styled the typography (matching font-families precisely to design definitions) and implemented custom grid/flex configurations to achieve a flawless mobile-to-desktop transition.

### What I Learned

#### 1. Decoupling Templates and Managing Binary Loading Lifecycles

A core learning experience on this project was managing browser image behaviors when mixed with structural template logic. I initially encountered a bug where hidden images coupled with incorrect asset fallbacks triggered recursive error hooks, leading to infinite rendering loops.

I learned that keeping the media element consistently within the active DOM tree and leveraging native `(load)` and `(error)` hooks allows for reliable event processing. This approach guarantees smooth transitions between the loading skeleton and the final resolved asset:

```html
<div [class.hidden]="!isImageLoaded()">
	<img
		[src]="imageSrc()"
		(load)="handleImageLoad()"
		(error)="handleImageError()"
	/>
</div>
```

### Continued development

Moving forward, I plan to expand on the architectural patterns established in this project by focusing on the following areas in my future development:

- **Advanced API Integrations**: Working with more complex, enterprise-level REST and GraphQL APIs that require advanced pagination, complex query parameters, authentication headers, and real-time data sync.
- **Comprehensive Testing**: Implementing rigorous unit, integration, and End-to-End (E2E) testing workflows utilizing modern testing frameworks like Jasmine, Karma, or Playwright to ensure robust component functionality and prevent UI regressions.
- **Deepening Angular Signals**: Exploring more intricate reactive patterns using Signals, such as fine-grained state management across multi-route architectures and handling advanced asynchronous streaming data.

### Useful resources

- [Forkify API by Jonas Schmedtmann](https://forkify-api.herokuapp.com/v2) - This public API was an excellent resource for fetching rich, realistic recipe data. It allowed me to transform a static Frontend Mentor template into a dynamic, data-driven web application, providing an authentic sandbox to practice asynchronous HTTP operations and error handling.

### AI Collaboration

During this project, I collaborated with **Gemini** to act as a technical peer reviewer and pair programmer:

- **Code Quality & Optimization Feedback**: I shared my active TypeScript and HTML implementations with the AI assistant to gather feedback on code structure. This helped identify alternative ways to leverage Angular's modern change-detection engine.
- **Refactoring Synchronization Logic**: Working with Gemini, we successfully refactored imperative synchronization patterns (like standard lifecycle hooks or `effect()` bindings) into modern, declarative, functional `computed()` signals.
- **Edge-Case Troubleshooting**: The assistant provided deep technical context on how hidden DOM structures process native browser `(load)` and `(error)` hooks, which helped isolate and fix a recurring infinite layout rendering loop.

## Author

- GitHub - [@HosseinHeydarpour](https://github.com/HosseinHeydarpour)
- LinkedIn - [Mohammad Hossein Heydarpour](https://ir.linkedin.com/in/hosseinheydarpour)
- Twitter / X - [@htechdaily](https://www.twitter.com/htechdaily)
- Frontend Mentor - [@HosseinHeydarpour](https://www.frontendmentor.io/profile/HosseinHeydarpour)

## Acknowledgments

I would like to extend my sincere gratitude to the platforms and individuals that made this project possible:

- **Frontend Mentor**: For designing such a clean, practical, and highly realistic design challenge that serves as a fantastic playground to test and refine modern frontend engineering skills.
- **Jonas Schmedtmann**: For creating and hosting the **Forkify API**. Having access to a well-structured public data endpoint allowed me to elevate this challenge from a static layout into a fully dynamic, reactive, and asynchronous web application.
