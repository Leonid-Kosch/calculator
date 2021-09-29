let operator = ['/', '*', '+', '-',];
let buttonClear = document.querySelector('.clear');

document.querySelector('.keyboard').onclick = function () {
    let tableau = document.querySelector('input');
    let target = event.target;
    if (tableau.value == '0') {
        tableau.value = '';
        if (target.innerHTML == '.') {
            tableau.value = '0';
        }
    } 
    if (target.classList.contains('number')) { // если нажали на цифру
        let lastChar = tableau.value[tableau.value.length -1];
        if (target.innerHTML == '.') {
            if (lastChar == '.') {
                tableau.value = tableau.value;
            } else {
                tableau.value = tableau.value + '.';
            }
        } else {
            tableau.value = tableau.value + target.innerHTML;
        }
        buttonClear.innerHTML = 'C';
    } else 

    if (target.classList.contains('operation')) { // если мы нажимаем на операцию 
        if (tableau.value != '') { // если в табло что то есть 
            let lastChar = tableau.value[tableau.value.length -1];
            if (operator.indexOf(lastChar) != -1) { //если последний симбол это какой то математический знак
                tableau.value = tableau.value.substring(0, tableau.value.length -1);  // удаляем последние симболы
            }
            tableau.value = tableau.value + target.value; // тогда мы прибавляем операцию
        } else { // иначе если в табло ничего нет
            tableau.value = '0'; // тогда мы добовляем 0
        }
        buttonClear.innerHTML = 'C';
    } else 

    if (target.classList.contains('calculate')) { //если мы нажимаем на знак равно
        let lastChar = tableau.value[tableau.value.length -1];
        if (tableau.value != '') { // если инпут не равен пустоте
            if (operator.indexOf(lastChar) != -1 || lastChar == '.') { 
                tableau.value = tableau.value;
            } else {
                tableau.value = eval(tableau.value); //то происходит расчет, evel переводит строки в числа
            }
        } else { //иначе
            tableau.value = '0'; //ставим 0
        }
        buttonClear.innerHTML = 'AC';
    } else

    if (target.classList.contains('procent')) {
        let lastChar = tableau.value[tableau.value.length -1];
        if (tableau.value != '') {
            if (operator.indexOf(lastChar) != -1) {
                tableau.value = tableau.value.substring(0, tableau.value.length -1);
                tableau.value = eval(tableau.value) / 100;
            } else {
                tableau.value = eval(tableau.value) / 100;
            }
        } else {
            tableau.value = '0';
        }
        buttonClear.innerHTML = 'AC';
    } else
     
    if (target.classList.contains('clear')) { //кнопка удаления
        if (target.innerHTML == 'AC') {
            tableau.value = '0';
            target.innerHTML = 'AC'
        } else {
            tableau.value = tableau.value.substring(0, tableau.value.length -1);  // удаляем последние симболы
            if (tableau.value.length < 1) {
                tableau.value = '0';
                target.innerHTML = 'AC'
            }
        }
    } else

    if (target.classList.contains('minus')) {
        let lastChar = tableau.value[tableau.value.length -1];
        if (lastChar == '-' || lastChar =='+' ) {
            tableau.value = tableau.value;
        } else {
            tableau.value = tableau.value + '-';
        }
    }

    if (tableau.value.length > 6) {
        tableau.classList.add('tableau_small');
        if (tableau.value.length > 12) {
            tableau.classList.add('tableau_extra_small');
        }
    }
    if (tableau.value.length < 12) {
        tableau.classList.remove('tableau_extra_small');
        if (tableau.value.length < 6) {
            tableau.classList.remove('tableau_small');
        }
    } 
}

// || - или

// && - и