let closeBtn = document.querySelector('.close-btn');
let addBtn = document.querySelector('#add-book');
let count = 3;
let closeBtnEdit = document.querySelector('.close-btn-edit');
let currentEditBook = 0;

closeBtn.addEventListener('click', () => {
    let modal = document.querySelector('#modal1');
    modal.classList.remove('modal-show');
})

addBtn.addEventListener('click', () => {
    let modal = document.querySelector('#modal1');
    modal.classList.add('modal-show');
})


const addBook = () => {
    const bookName = document.querySelector('#book_name');
    const bookPrice = document.querySelector('#book_price');
    const bookImage = document.querySelector('#sel-img');
    const boxBooks = document.querySelector('#all-books');
    let modal = document.querySelector('#modal1');

    boxBooks.innerHTML += `
    <tr data-id="${++count}">
        <td>${bookName.value}</td>
        <td>${bookPrice.value}</td>
        <td><img src="images/book${bookImage.value}.jpeg" alt="book"></td>
        <td>
            <button class="btn waves-effect waves-light">Edit
                <i class="material-icons right">edit</i>
            </button>
            <button class="btn waves-effect waves-light">Delete
                <i class="material-icons right">delete</i>
            </button>
        </td>
    </tr>
    `;

    bookName.value = '';
    bookPrice.value = '';
    bookImage.value = '';
    
    modal.classList.remove('modal-show');
}

//document.querySelector('.modal-add').addEventListener('click', addBook);


const deleteBook = (e) => {
    if(e.target.classList.contains('delete-btn')){
       let bookId = e.target.closest('tr').dataset.id;
       let bookContainer = e.target.closest('tr');
       bookContainer.remove();
    }
}

//document.addEventListener('click', deleteBook);

const editBookModal = (e) => {
    if(e.target.classList.contains('edit-btn')){
        let bookId = e.target.closest('tr').dataset.id;
        let currentBookName = e.target.closest('tr').children[0].innerText;
        let currentBookPrice = e.target.closest('tr').children[1].innerText;
        let currentBookImg = e.target.closest('tr').dataset.id;
        const bookName = document.querySelector('#book_name_edit');
        const bookPrice = document.querySelector('#book_price_edit');
        const bookImage = document.querySelector('#sel-img-edit');
        let modal = document.querySelector('#modal2');
        modal.classList.add('modal-show');
        bookName.value = currentBookName;
        bookPrice.value = currentBookPrice;
        bookImage.selectedIndex = Number(currentBookImg);
        currentEditBook = currentBookImg;
    }
}

document.addEventListener('click', editBookModal);


const closeModalEdit = () => {
    let modal = document.querySelector('#modal2');
    modal.classList.remove('modal-show');
}

closeBtnEdit.addEventListener('click', closeModalEdit)


const editInfoBook = () =>{
    const bookItem = document.querySelector(`[data-id = "${currentEditBook}"]`);
    const bookName = document.querySelector('#book_name_edit');
    const bookPrice = document.querySelector('#book_price_edit');
    const bookImage = document.querySelector('#sel-img-edit').value;
    bookItem.children[0].innerText = bookName.value;
    bookItem.children[1].innerText = bookPrice.value;
    bookItem.children[2].children[0].src = `images/book${bookImage}.jpeg`;
    closeModalEdit();
}

// document.querySelector('.modal-add-edit').addEventListener('click', editInfoBook);