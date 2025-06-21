---
permalink: /videos/
title: "Videos"
excerpt: "Videos showing the research published by the Flavin Neuromachines Lab"
author_profile: false
---

{% include base_path %}

{% for post in site.videos %}
  {% include video_item.html %}
{% endfor %}
