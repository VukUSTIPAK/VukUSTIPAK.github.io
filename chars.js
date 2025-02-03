document.addEventListener('DOMContentLoaded', function() {
  const items = [
    { src: "https://static.wikia.nocookie.net/echoproject/images/5/56/LeoAlvarez.png", alt: "Leo " },
    { src: "https://static.wikia.nocookie.net/echoproject/images/4/4e/Flynn.png", alt: "Flynn " },
    { src: "https://static.wikia.nocookie.net/echoproject/images/6/6e/Amicus-pumped.png", alt: "Amicus " },
    { src: "https://static.wikia.nocookie.net/echoproject/images/c/ce/Neferu.png", alt: "Neferu " },
    { src: "https://static.wikia.nocookie.net/echoproject/images/0/01/05D379D2-8AB0-45B1-8E1A-26179FE752C4.jpeg", alt: "Scipio " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/2/2e/Ranok_Portrait.png", alt: "Ranok " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/d/d5/Vulgor_Portrait.png", alt: "Vulgor " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/b/b9/Vithry_Portrait.png", alt: "Vithyr " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/d/d7/Tano_Portrait.png", alt: "Tano " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/0/07/Tyren_Portrait.png", alt: "Tyren " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/f/fb/Drair_Portrait.png", alt: "Drair " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/5/50/Erof_Bust.png", alt: "Erof " },
    { src: "https://static.wikia.nocookie.net/fbtw/images/5/58/Talisan_Bust.png", alt: "Talisin " },
    { src: "images/cooper.webp", alt: "Cooper " },
    { src: "images/silver.webp", alt: "Silver " },
    { src: "images/ring.webp", alt: "Ring " },
    { src: "images/vita.webp", alt: "Vita " },
    { src: "images/lyall.png", alt: "Lyall " },
    { src: "https://static.wikia.nocookie.net/beastars-eng/images/8/87/Legoshi_%28Anime%29_S2.png", alt: "Legoshi " },
    { src: "images/marruk.png", alt: "Marruk " },
    { src: "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Von_Lycaon_Portrait.png", alt: "Marruk " },
  ];

  const container = document.createElement('div');
  container.className = 'image-container';

  items.forEach(item => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    container.appendChild(img);
  });

  document.getElementById('chars').appendChild(container);
});