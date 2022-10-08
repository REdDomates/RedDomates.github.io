class Currency {
    translateCurrency(currentUnit, toUnit, amount) {
        return new Promise((resolve) => {
            const url = `https://api.exchangerate.host/convert?from=${currentUnit}&to=${toUnit}&amount=${amount}`;
            const xhr = new XMLHttpRequest();

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(JSON.parse(xhr.response));
                }
            };

            xhr.open("GET", url);
            xhr.send();
        });
    }
}
