// Data for Project Summary Cards

var vm = new Vue({
  el: "#vue1",
  data: {
    sum_card_data: [
      {
        title: "Resume Website",
        image_url: "../content/James smiling - recolored, square.jpg",
        altText: "Profile Photo",
        description:
          "You're looking at it. This website was built with HTML, CSS and Tailwind, with touches of JS and Vue. Mobile responsive down to 400px.",
        languages: "HTML, CSS, Tailwind CSS, Javascript, Vue.js",
        link1Text: "Learn More",
        link1: "./projects.html#proj1",
        link2Text: "GitHub",
        link2: "https://github.com/JamesTheBald/ResumeWebsite",
      },
      //  {
      //     title: "Catalog of EvolveU Student Projects",
      //     image_url: "../content/Project 2 stack - tall.png",
      //     altText: "Lists picture",
      //     description: "This CRUD app was a team effort, and used React (with Tailwind and CSS formatting) on a 'MERN' stack.",
      //     languages: "React, Javascript, Tailwind CSS, Express, Axios, Node.js, mongoDB",
      //     link1Text: "Learn More",
      //     link2Text: "GitHub",
      //  },
      {
        title: "SwarmShare",
        image_url: "../content/SwarmShare screenshot - small.png",
        altText: "Screenshot",
        description:
          "SwarmShare is a '2.5-dimensional' mind map that makes it easy to share assorted information. It features a fluid zoom-pan and drag-and-drop interface.",
        languages: "Javascript, React, Tailwind CSS, Express, Axios, Node.js, mongoDB",
        link1Text: "Learn More",
        link1: "./projects.html#proj2",
        link2Text: "Run It Coming Soon",
      },
    ],
  },
});

var vm2 = new Vue({
  el: "#vue2",
  data: {
    sum_card_data: [
      {
        id: "proj1",
        title: "Project Details: Resume Website",
        image_url: "../content/Projects page sketch.png",
        altText: "Initial design sketches",
        caption: "My initial layout sketch for the top part of this webpage",
        description:
          "The website you're currently looking at is my first website ever. It's straightforward HTML but with Tailwind for formatting, JS for controls and Vue.js for loading the content. I went for a simple, clean look, and worked hard to make it fully mobile responsive. (Try resizing this window.)",
        features: "Future Features: More interesting colour scheme; display resume by rendering PDF; add a page/features that shows my interests and personality",
        languages: "Languages/Frameworks: HTML, CSS, Tailwind, Javascript, Vue.js",
        link1Text: "Home",
        link1: "./index.html",
        link2Text: "Look at the code on GitHub",
        link2: "https://github.com/JamesTheBald/ResumeWebsite",
      },
      {
        id: "proj2",
        title: "Project Details: SwarmShare",
        image_url: "../content/SwarmShare screenshot - full.png",
        altText: "SwarmShare screenshot",
        caption: "A screenshot from SwarmShare",
        description:
          "This app allows easy sharing of diverse information (such as learning resources), using a '2.5-dimensional mindmap' format. Users navigate to topics of interest by zooming and panning. They can then open and read postings, or create, edit or move them. This app makes use of hooks like useState, useRef and useEffect, as well as modals, tooltips, listeners. It leverages numerous React libraries, including react-zoom-pan-pinch, react-draggable, and suneditor-react.",
        features: "Key Features: zoom-pan navigation, drag-and-drop organization, rich text editor",
        languages: "Javascript, React, Tailwind CSS, Express, Axios, Node.js, mongoDB",
        link1Text: "'Run It' coming soon",
        link1: "./projects.html#proj2",
        link2Text: "Look at the code on GitHub",
        link2: "https://github.com/JamesTheBald/SwarmShare",
      },
    ],
  },
});
