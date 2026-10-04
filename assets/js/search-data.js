// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications by Jerry Liu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae for Jerry Liu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-presented-bwler-at-the-theory-of-ai-for-scientific-computing-tasc-workshop-at-colt-where-it-received-the-best-paper-award",
          title: 'Presented BWLer at the Theory of AI for Scientific Computing (TASC) Workshop at...',
          description: "",
          section: "News",},{id: "news-constructing-machine-precision-neural-networks-with-quasi-interpolants-was-selected-for-an-oral-presentation-8-113-at-the-ai-amp-amp-pde-workshop-at-iclr-2026",
          title: 'Constructing Machine-Precision Neural Networks with Quasi-Interpolants was selected for an oral presentation (8/113)...',
          description: "",
          section: "News",},{id: "news-featured-in-a-deixis-profile-on-my-work-at-the-intersection-of-machine-learning-numerics-and-scientific-reasoning",
          title: 'Featured in a DEIXIS profile on my work at the intersection of machine...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%72%72%79%77%6C%69%75@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jerrywliu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qFAuHxcAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jerrywliu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
