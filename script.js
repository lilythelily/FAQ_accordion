const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  title.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    const activeItem = document.querySelector('.accordion-item.active');
    if (activeItem && activeItem !== item) {
      const activeItemContent = activeItem.querySelector('.accordion-content');
      activeItem.classList.remove('active');
      activeItemContent.style.maxHeight = 0;
    }
    if (!isActive) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      item.classList.remove('active');
      content.style.maxHeight = 0;
    }
  });
});