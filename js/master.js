(() => {
    // Rework with vue instance
    const vm = new Vue({
        el : "#app",

        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : ""
        },

        mounted : function() {
            console.log('viewis ready to go on the page');
            
            // trigger an ajax call with mocked click event
            document.querySelector('#F55').click();
        },

        beforeUpdate : function() {
            console.log('things are going to change...');
        },

        updated : function() {
            console.log('things are different now');
        },

        methods : {
            fetchData(e) {
                // debugger;
                let targetURL = e.currentTarget.id;

                fetch(`./includes/connect.php?modelNo=${targetURL}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const { modelName, pricing, modelDetails } = data[0];

                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing = pricing;
        
                    // showCarData(data[0]);
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });



    // function getData() {

    //    let targetURL = `./includes/connect.php?modelNo=${this.id}`; // Whenever we click on a thumbnail, pass its id to the php query

    //     fetch(targetURL)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);

    //         showCarData(data[0]);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // }

    // function showCarData(data) {
    //     const { modelName, pricing, modelDetails } = data; // reference: mdn js destructuring

    //     document.querySelector('.modelName').textContent = modelName;
    //     document.querySelector('.priceInfo').textContent = `$ ${pricing}.00`;
    //     document.querySelector('.modelDetails').textContent = modelDetails;
    // }




})();