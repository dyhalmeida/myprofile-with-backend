(() => {
  const cards = Array.from(document.querySelectorAll('.card'));
  
  cards.map(card => card.addEventListener('click', () => { 
    const [,,,,videoID] = card.querySelector('img').src.split('/');
    window.location .href= `/video?id=${videoID}`;
  
  }));
})();

