// Data for Project Summary Cards

var vm = new Vue ({
   el: '#vue1',
   data: {
      sum_card_data: [
         {
            title: "Resume Website",
            image_url: "../content/James smiling - recolored, square.jpg",
            altText: "Profile Photo",
            description: "You're looking at it. This website was built with HTML, CSS and Tailwind, with touches of JS and Vue. Mobile responsive down to 400px.",
            languages: "HTML, CSS, Tailwind CSS, Javascript, Vue.js",
            link1Text: "Learn More",
            link2Text: "GitHub",
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
            title: "'SwarmShare'",
            image_url: "../content/SwarmShare screenshot - small.png",
            altText: "Screenshot",
            description: "SwarmShare is a '2.5-dimensional' mind map that makes it easy to share assorted information. It features a fluid zoom-pan and drag-and-drop interface.",
            languages: "React, Javascript, Tailwind CSS, Express, Axios, Node.js, mongoDB",
            link1Text: "Learn More",
            link2Text: "Run It",
         },
      ]

   }
})


var vm2 = new Vue ({
   el: '#vue2',
   data: {
      sum_card_data: [
         {
            title: "Project Details: Resume Website",
            image_url: "../content/Projects page sketch.png",
            altText: "Initial design sketches",
            caption: "My initial layout sketch for the top part of this webpage",
            description: "You are looking at it, my first website ever. Straightforward HTML but with Tailwind for formatting and Vue.js for loading in the content. I went for a simple, clean look, and worked hard to make it fully mobile responsive. (Try resizing this window!)",
            features: "Features: Javascript for navbar opening/closing, and Vue.js for content loading",
            languages: "HTML, CSS, Tailwind, JS, Vue.js",
            link1: "TBD",
            link2: "TBD",
         },
         {
            title: "SwarmShare",
            image_url: "../content/SwarmShare screenshot - full.png",
            altText: "SwarmShare screenshot",
            caption: "A screenshot from SwarmShare",
            description: "This app allows easy sharing of diverse information (such as learning resources), using a '2.5-dimensional mindmap' format. Users navigate to topics of interest by zooming and panning. They can then open and read postings, or create, edit or move them. This app makes use of hooks like useState, useRef and useEffect, as well as modals, tooltips, listeners. It leverages numerous React libraries, including react-zoom-pan-pinch, react-draggable, and suneditor-react.",
            features: "Features: zoom-pan navigation, drag-and-drop items, rich text editor",
            languages: "Javascript, React, Tailwind, Node.js, Express, Axios, MongoDB",
            link1: "TBD",
            link2: "TBD",
         },
      ]

   }
})