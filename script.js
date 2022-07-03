/* Mehmet Hüseyin Delipalta */
const form = document.querySelector('form');
const input = document.querySelector('#yorumYeniYorum');
const buttonTumYorumlariSil = document.querySelector('#buttonTumYorumlariSil');
const taskList = document.querySelector('#yorumlarListesi');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    buttonTumYorumlariSil.addEventListener('click', deleteAllItems);
}

function addNewItem(e) {
    if (input.value === '') {
        alert('Yeni Yorum Ekle');
    }

    const li = document.createElement('li');
    li.className = 'list-group-item py-4 px-4';
    li.appendChild(document.createTextNode(input.value));

    const h5 = document.createElement('h5');
    h5.innerHTML = 'Anonim';

    const a = document.createElement('a');
    a.className = 'delete-item';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fa fa-trash delete-right"></i>';

    li.appendChild(a);
    li.appendChild(h5);

    taskList.appendChild(li);
    input.value = '';
    e.preventDefault();
}

function deleteItem(e) {
    if (e.target.className === 'fa fa-trash delete-right') {
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}

function deleteAllItems(e) {
    if (confirm('Tüm Yorumlar silinecek ! İşleme devam etmek istediğinize emin misiniz?')) {
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }
    e.preventDefault();
}

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);