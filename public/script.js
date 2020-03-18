(() => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const cards = Array.from(document.querySelectorAll('.card'));
  
  cards.map(card => card.addEventListener('click', () => { 
    
    modalOverlay.classList.add('active');
    const [,,,,videoID] = card.querySelector('img').src.split('/');
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`;
  
  }));
  
  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', () => { 
    modalOverlay.querySelector('iframe').src = '';
    modalOverlay.classList.remove('active');
  });
})();

