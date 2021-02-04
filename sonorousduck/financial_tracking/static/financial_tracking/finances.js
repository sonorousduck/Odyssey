const app = Vue.createApp({

    // Changes {{ }} to [% %] to prevent conflict between Django and Vue
    delimiters: [ '[%', '%]' ],



    data() {
        return {
            financesData: null,
            financesAPI: `http://${location.hostname}:8000/financial_tracking/data/`,
            indicator: 'YAY',
            dataList: [],
            dataLoading: true,
        };
    },


    created () {
        this.dataList = this.getExpenses(); 
        




    },

    
    methods: {
        
        getExpenses() {
            fetch(this.financesAPI)
                .then(response => response.json())
                .then(json => {
                    this.dataList = json;
                    this.dataLoading = false;
                });
        },

        addGoal() {
            console.log("This is filler text for now");
            let description = document.querySelector("#description").value;
            let price = document.querySelector("#price").value;
            let hostname = location.hostname;


            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Allow-Control-Allow-Origin": "*" },
                body: JSON.stringify({ description: description, price: price })
            };

            fetch("http://localhost:8000/financial_tracking/data/addTransaction/", requestOptions)
                .then(response => response.json())
                .then(json =>  {
                    console.log(data);
                });



                    //fetch(addURL) 
                    //  .then(response => response.json())
                    //.then(json => {
                    //  theData = json;
                    // Probably need to update the view if not an error"

                    //});

        },
    }
});

const vm = app.mount('#finances');
