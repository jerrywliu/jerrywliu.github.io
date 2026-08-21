---
layout: about
title: about
permalink: /
subtitle: >
  PhD student at Stanford ICME · Hazy Research · DOE CSGF Fellow · <a href="mailto:jerrywliu@stanford.edu">jerrywliu@stanford.edu</a>

profile:
  align: right
  image: prof_pic.png
  image_circular: true # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
show_selected_paper_tldrs: true # shows TLDRs from BibTeX tldr fields for selected papers
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->

### About

I'm a rising fifth-year PhD student in the Institute of Computational & Mathematical Engineering at Stanford, advised by [Chris Ré](https://cs.stanford.edu/people/chrismre/). I am supported by the [DOE Computational Science Graduate Fellowship](https://www.krellinst.org/csgf/). Previously, I completed my undergraduate degrees in Math and Computer Science at Duke, where I was advised by [Cynthia Rudin](https://users.cs.duke.edu/~cynthia/). My path has been shaped by many kind and brilliant researchers, including [Atri Rudra](https://cse.buffalo.edu/faculty/atri/), [Michael Mahoney](https://www.stat.berkeley.edu/~mmahoney/), Jin Yao, and [Kenny Weiss](https://kennyweiss.com/).

### Research Interests

My recent work studies memory in language models: how knowledge is [encoded in model weights](/publications/#garcia2026mlpsarehebbian) and how architectural choices determine what models can remember and at what cost. As LLM workloads become more recall-intensive, I'm interested in the tradeoffs between learning **in weights** and learning **in context**, and in using these insights to build more parameter- and compute-efficient systems.

I'm also interested in machine learning for numerical tasks, especially in scientific settings such as differential equations. My previous work examined why standard architectures struggle with [high-precision numerical computation](/publications/#liu2025towards), and developed methods to improve precision in [PDEs](/publications/#liu2025bwler) and [continuous-valued regression](/publications/#deng2026constructing).
