---
layout: about
title: about
permalink: /
subtitle: >
  ML + Numerics @ Stanford ICME & Hazy Lab </a> · DOE CSGF Fellow · <a href="mailto:jerrywliu@stanford.edu">jerrywliu@stanford.edu</a>

profile:
  align: right
  image: prof_pic.png
  image_circular: true
  # more_info: >
  #   <p>Stanford University</p>
  #   <p>Stanford, CA 94305</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

### About

I'm a 3rd year PhD student in the Institute of Computational & Mathematical Engineering at Stanford, fortunate to be advised by [Chris Ré](https://cs.stanford.edu/people/chrismre/). I am supported by the [DOE Computational Science Graduate Fellowship](https://www.krellinst.org/csgf/). Previously, I completed my undergraduate degrees in Math and Computer Science at Duke, where I was advised by [Cynthia Rudin](https://users.cs.duke.edu/~cynthia/). My academic career has been shaped by many kind and brilliant researchers, including Jin Yao, [Kenny Weiss](https://kennyweiss.com/), [Michael Mahoney](https://www.stat.berkeley.edu/~mmahoney/), [Ben Erichson](https://sites.google.com/icsi.berkeley.edu/erichson), and [Atri Rudra](https://cse.buffalo.edu/faculty/atri/).

### Research Interests

I'm broadly interested in working towards general-purpose machine learning models for science, particularly differential equations and time series.
Foundation models for language and vision have unlocked powerful new capabilities, but basic questions remain about their effectiveness for regression-type tasks and continuous-valued data.
My recent work investigates the fundamental limitations of existing machine learning techniques and develop more principled approaches for numerical tasks.

Some topics I'm interested in:
- **Numerical Precision**: Understanding architectural limitations in performing precise numerical operations with machine learning and developing improved approaches
- **Algorithmic Learning**: Investigating whether ML methods can learn generalizable algorithms directly from data, beyond pattern matching
- **Generalization**: Exploring different notions of generalization in the context of continuous-valued regression tasks, particularly for differential equations


## Selected Publications

{% bibliography --query @*[selected=true] --group_by none %}

## Contact

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.