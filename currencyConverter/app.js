const currency = new Currency();
const ui = new Ui();

document.getElementById("formk").addEventListener("change", function () {
    let result = currency.translateCurrency(
        ui.getOptions()[0],
        ui.getOptions()[1],
        ui.getAmout()
    );
    result.then((res) => ui.setResult(res.result));

    ui.setSpanUi(ui.getOptions()[0], ui.getOptions()[1]);
});
