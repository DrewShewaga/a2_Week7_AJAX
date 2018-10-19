(() => {
    function getData() {
        let targetURL = "./includes/connect.php?modelNo=R58";

        fetch(targetURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            showCarData(data[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    function showCarData(data) {
        const { modelName, pricing, modelDetails } = data; // reference: mdn js destructuring

        document.querySelector('.modelName').textContent = modelName;
        document.querySelector('.priceInfo').textContent = `$ ${pricing}.00`;
        document.querySelector('.modelDetails').textContent = modelDetails;
    }

    getData();

})();