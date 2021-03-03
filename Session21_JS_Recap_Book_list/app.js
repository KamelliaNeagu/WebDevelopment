const formElem = document.getElementById('form');
const bookTitleElem = document.getElementById('book-title');
const bookAuthorElem = document.getElementById('book-author');
const bookISBNElem = document.getElementById('book-isbn');
const submitBtn = document.getElementById('submitBtn');
let tableBody = document.getElementById('table-body');

class Book {
	addBook() {
		this.titleInput = bookTitleElem.value;
		this.authorInput = bookAuthorElem.value;
		this.isbnInput = bookISBNElem.value;
		tableBody.innerHTML += `
			<tr class = 'row'>
				<td>${bookTitleElem.value}</td>
				<td>${bookAuthorElem.value}</td>
				<td>${bookISBNElem.value}</td>
				<td><input type="button" class="deleteBtn" value="&#10006;"></button></td>
			</tr>`
	}
}
let book = new Book();

class UI {
	constructor() {
		this.allElementsAreValid = true;
		this.submitNumbers = 0;
	}

    showError(elem) {
        elem.parentElement.classList.remove('success');
		elem.parentElement.classList.add('error');
	}

	showSuccess(elem) {
		elem.parentElement.classList.remove('error');
		elem.parentElement.classList.add('success');
	}

	showSubmitMessage() {
		if (this.allElementsAreValid && this.submitNumbers == 0) {
			let successMessage = document.createElement('p');
			successMessage.classList.add('success');
			successMessage.innerHTML =
				'Book Added!';
			let divFirstInput = document.getElementById('first-input');
			formElem.insertBefore(successMessage, divFirstInput);

            setTimeout(() => {
				successMessage.remove();
			}, 2000);
			this.submitNumbers++;
        }
            else {
                let errorMessage = document.createElement('p');
			    errorMessage.classList.add('error');
			    errorMessage.innerHTML =
				'Please fill in all fields!';
			    let divFirstInput = document.getElementById('first-input');
			    formElem.insertBefore(errorMessage, divFirstInput);

                setTimeout(() => {
                    errorMessage.remove();
                }, 2000);
                this.submitNumbers++;
            }    
	}

	clearFields() {
		formElem.reset();
		bookTitleElem.parentElement.classList.remove('success');
		bookAuthorElem.parentElement.classList.remove('success');
		bookISBNElem.parentElement.classList.remove('success');
	}
}

formElem.addEventListener('submit', (e) => {
	e.preventDefault();

	let ui = new UI(bookTitleElem, bookAuthorElem, bookISBNElem);

	if(bookTitleElem.value === '' || bookAuthorElem.value === '' || bookISBNElem.value === '') {
		ui.allElementsAreValid = false;
	} else {
		ui.showSuccess (bookTitleElem, bookAuthorElem, bookISBNElem);
		book.addBook();
		}
	
	ui.showSubmitMessage();
	ui.clearFields();
});

tableBody.addEventListener ('click', deleteElement);

function deleteElement(e) {
	if(e.target.classList.contains('deleteBtn')) {
		e.target.parentNode.parentNode.remove();
	}
	let deleteMessage = document.createElement('p');
		deleteMessage.classList.add('removed');
		deleteMessage.innerHTML =
				'Book Removed!';
		let divFirstInput = document.getElementById('first-input');
		formElem.insertBefore(deleteMessage, divFirstInput);
	
			setTimeout(() => {
				deleteMessage.remove();
			}, 2000);
			this.submitNumbers++;
}

























