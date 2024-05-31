/**
 *   JS Chess King - a example for Drag and Drop
 *   @author iKasparek.cz
 */

/** read main element */
const container = document.querySelector('#main');


/** create all element for work */
const createGameBoard = document.createElement('div');
createGameBoard.id = 'gameboard';

const createSquare1 = document.createElement('div');
createSquare1.classList.add('square', 'beige');
const createSquare2 = document.createElement('div');
createSquare2.classList.add('square', 'brown');
const createSquare3 = document.createElement('div');
createSquare3.classList.add('square', 'beige');

const createKing = document.createElement('img');
createKing.src = 'images/chess-king.png';
// createKing.src = 'images/dot_200x200.png';
createKing.id = 'king';
createKing.alt = 'Král';
createKing.classList.add('chess-piece');
createKing.setAttribute('draggable', '');

const createInfoPanel = document.createElement('p');
createInfoPanel.id = 'info-display';
createInfoPanel.classList.add('text-center', 'mx-auto', 'mt-3');

createSquare1.appendChild(createKing);
createGameBoard.appendChild(createSquare1)
createGameBoard.appendChild(createSquare2)
createGameBoard.appendChild(createSquare3);
container.appendChild(createGameBoard);
container.appendChild(createInfoPanel);


/** own service */
const king = document.querySelector('.chess-piece');
const squares = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info-display');
let beingDragged;

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', draggStart);

squares.forEach(square => {
	square.addEventListener('dragover', dragOver);
	square.addEventListener('dragenter', dragEnter);
	square.addEventListener('dragleave', dragLeave);
	square.addEventListener('drop', dragDrop);
	square.addEventListener('dragend', dragEnd);
})

function draggStart(e) {
	beingDragged = e.target;

	/* change another image for dragged */
	// const newImg = new Image();
	// newImg.src = 'images/dot_200x200.png';
	// e.dataTransfer.setDragImage(newImg, 100, 100);

	/* change a default cursor for dragged */
	e.dataTransfer.effectAllowed = 'move';

	// console.log('dragging has started on ' + beingDragged.id);
}

function dragging() {
	infoDisplay.textContent = 'You are draggind a ' + beingDragged.id;
}

function dragOver(e) {
	e.preventDefault();
	// console.log('You are dragging something over ' + e.target.classList);
}

function dragEnter(e) {
	e.target.classList.add('chess-haighlight')
	// console.log('You are entering the space of ' + e.target.classList);
}

function dragLeave(e) {
	e.target.classList.remove('chess-haighlight');
	// console.log('You are leaving the space of ' + e.target.classList);
}

function dragDrop(e) {
	e.target.append(beingDragged);
	e.target.classList.remove('chess-haighlight');
	// console.log('You have dropped something into ' + e.target.classList);
}

function dragEnd(e) {
	e.target.classList.add('chess-target');
	setTimeout(() => {
		e.target.classList.remove('chess-target');
	}, 100);
	infoDisplay.textContent = '';
	// console.log('The drag has ended in ' + e.target.classList);
}
