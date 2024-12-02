const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

function dragStart(event) {
  draggedElement = event.target; 
  event.target.classList.add('selected'); 
}

function dragOver(event) {
  event.preventDefault(); 
}

function drop(event) {
  event.preventDefault();

  const targetElement = event.target;

  if (targetElement !== draggedElement && targetElement.classList.contains('image')) {
    const draggedBg = getComputedStyle(draggedElement).backgroundImage;
    const targetBg = getComputedStyle(targetElement).backgroundImage;
    const draggedText = draggedElement.textContent;
    draggedElement.textContent = targetElement.textContent;
    targetElement.textContent = draggedText;
    

    draggedElement.style.backgroundImage = targetBg;
    targetElement.style.backgroundImage = draggedBg;
  }
}

function dragEnd(event) {
  event.target.classList.remove('selected');
  draggedElement = null; 
}
