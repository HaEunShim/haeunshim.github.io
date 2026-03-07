// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated, 2025-12-14. You can find my CV here. If the embedded version of my CV does not work, you can download a copy by clicking the pdf icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-output",
          title: "Output",
          description: "An asterisk (*) indicates equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/output/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-excited-to-attend-the-2025-lsa-summer-institute-at-the-university-of-oregon-and-meet-fellow-linguists",
          title: 'I’m excited to attend the 2025 LSA summer institute at the University of...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-an-oral-talk-at-interspeech-2025-in-rotterdam-netherlands",
          title: 'I will be presenting an oral talk at INTERSPEECH 2025 in Rotterdam, Netherlands!...',
          description: "",
          section: "News",},{id: "news-a-paper-on-korean-ditransitive-structures-will-be-published-in-the-2025-cla-proceedings",
          title: 'A paper on Korean ditransitive structures will be published in the 2025 CLA...',
          description: "",
          section: "News",},{id: "news-the-paper-on-the-acceptability-of-double-object-constructions-in-korean-ditransitive-structures-is-out-paper",
          title: 'The paper on the acceptability of double object constructions in Korean ditransitive structures...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-ma-thesis-and-completed-my-master-s-program-in-linguistics-i-am-deeply-grateful-to-my-committee-dr-chung-hye-han-dr-henny-yeung-dr-keir-moulton-and-dr-ashley-farris-trimble",
          title: 'I successfully defended my MA thesis and completed my master’s program in Linguistics!...',
          description: "",
          section: "News",},{
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
