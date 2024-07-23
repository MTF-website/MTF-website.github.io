---
permalink: /people/
title: "Our group"
excerpt: "Matthew Flavin is an assistant professor in the School of Electrical and Computer Engineering at the Georgia Institute of Technology."
author_profile: false
layout: people
---

{% include base_path %}
## Principal investigator

{% include pi_card.html %}

## Graduate students

{% for post in site.grad_students %}
  {% include people_card.html %}
{% endfor %}

