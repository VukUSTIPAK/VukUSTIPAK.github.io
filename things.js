document.addEventListener('DOMContentLoaded', function() {
  const items = [
    { href: "https://echoproject.itch.io/echo", src: "https://img.itch.zone/aW1nLzIxNjgyNDkucG5n/315x250%23c/8s%2BnVP.png", alt: "Echo " },
    { href: "https://echoproject.itch.io/Adastra", src: "https://img.itch.zone/aW1nLzM2NDkzNzQucG5n/original/fIHhMD.png", alt: "Adastra " },
    { href: "https://echoesofarcane.itch.io/farbeyondtheworld", src: "https://img.itch.zone/aW1nLzY3MjEwMTgucG5n/315x250%23c/VW0CSt.png", alt: "Far Beyond the World " },
    { href: "https://cryptiddog.itch.io/roadsyettraveled", src: "https://img.itch.zone/aW1nLzEwMzI4NTU2LnBuZw==/315x250%23c/jMqWid.png", alt: "Roads Yet Traveled " },
    { href: "https://en.wikipedia.org/wiki/Wolf", src: "https://api.tinyfox.dev/img?animal=woof", alt: "Wolf " },
    { href: "https://jerichowo.itch.io/remember-the-flowers", src: "https://img.itch.zone/aW1nLzc5MTA0NDgucG5n/315x250%23c/8tZTkB.png", alt: "Remember the Flowers " },
    { href: "https://atmac.itch.io/lyre", src: "https://img.itch.zone/aW1nLzE0MTkxMjY4LnBuZw==/315x250%23c/zKz%2BjJ.png", alt: "Lyre " },
    { href: "https://store.steampowered.com/app/400/Portal/", src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg", alt: "Portal " },
    { href: "https://store.steampowered.com/app/391540/Undertale/", src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg", alt: "Undertale " },
    { href: "https://ryuovn.itch.io/soulcreek", src: "https://img.itch.zone/aW1nLzE0OTc2NTE2LnBuZw==/315x250%23c/bQLIiw.png", alt: "Soulcreek"},
    { href: "https://www.netflix.com/title/81054847", src: "https://i.ytimg.com/vi/-5M4lbEpn6c/maxresdefault.jpg", alt: "Beastars " },
    { href: "https://store.steampowered.com/app/4500/STALKER_Shadow_of_Chernobyl/", src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4500/capsule_616x353.jpg", alt: "STALKER: Shadow of Chernobyl " },
    { href: "https://store.steampowered.com/app/70/HalfLife/", src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/70/header.jpg", alt: "Half-Life " },
    { href: "https://www.imdb.com/title/tt0098936/", src: "https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_.jpg", alt: "Twin Peaks " },
    { href: "https://www.imdb.com/title/tt0106179/", src: "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg", alt: "The X Files " },
  ];

  const container = document.createElement('div');
  container.className = 'image-container';

  items.forEach(item => {
    const anchor = document.createElement('a');
    anchor.href = item.href;
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    anchor.appendChild(img);
    container.appendChild(anchor);
  });

  document.getElementById('things').appendChild(container);
});