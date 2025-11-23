---
layout: layout.njk
title: Alexi Bouygues
name: Alexi Bouygues
jobTitle: Chef Opérateur
email: alexi.bouygues@gmail.com
phone: +33 6 31 29 01 53
---

<div class="contact-container">
  <h1>{{ name }}</h1>
  <p class="contact-title">{{ jobTitle }}</p>
  <div class="contact-details">
    <p>Email: <a href="mailto:{{ email }}">{{ email }}</a></p>
    <p>Téléphone: <a href="tel:{{ phone | replace: ' ', '' }}">{{ phone }}</a></p>
  </div>
</div>
