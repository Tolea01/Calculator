class calculator {

    insert(num) {
        document.form.textview.value = document.form.textview.value += num;
    }

    clearAll() {
        document.form.textview.value = "";
    }

    backspace() {
        let delSign = document.form.textview.value;
        document.form.textview.value = delSign.substring(0, delSign.length - 1);
    }

    equal() {
        let calcValue = document.form.textview.value;
        if (calcValue) {
            document.form.textview.value = eval(calcValue);
        }
    }
}

let calc = new calculator();