class Ui {
    getAmout() {
        return document.getElementById("amount").value;
    }
    getOptions() {
        return [
            document.getElementById("firstCurrency").value,
            document.getElementById("secondCurrency").value,
        ];
    }
    setResult(result) {
        document.getElementById("result-input").value = result;
    }
    setSpanUi(span1, span2) {
        document.getElementById("span-1").innerHTML = span1;
        document.getElementById("span-2").innerHTML = span2;
    }
}
