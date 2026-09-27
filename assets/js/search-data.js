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
  },{id: "news-presented-a-preliminary-version-of-our-paper-generating-financial-time-series-by-matching-random-convolutional-features-at-the-neurips-2025-workshop-on-generative-ai-in-finance",
          title: 'Presented a preliminary version of our paper, Generating Financial Time Series by Matching...',
          description: "",
          section: "News",},{id: "news-our-new-preprint-robust-control-under-stationary-ambiguity-is-up-on-arxiv-this-is-my-favorite-project-that-i-have-worked-on-during-my-phd-so-far-it-is-based-on-a-simple-observation-idea-but-has-lots-of-practical-implications-check-it-out",
          title: 'Our new preprint, Robust Control under Stationary Ambiguity, is up on arXiv! This...',
          description: "",
          section: "News",},{id: "news-our-paper-generating-financial-time-series-by-matching-random-convolutional-features-has-been-accepted-to-neurips-2026",
          title: 'Our paper, Generating Financial Time Series by Matching Random Convolutional Features, has been...',
          description: "",
          section: "News",},{id: "news-i-ll-be-speaking-at-quantminds-2026-19-nov-2026-11-55-about-my-latest-research-on-stationary-ambiguity",
          title: 'I’ll be speaking at QuantMinds 2026 (19 Nov 2026, 11:55) about my latest...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B.%6D%75%65%6C%6C%65%72%32%33@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/konmue", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rz2ChBIAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/konrad-mueller", "_blank");
        },
      },];
