const app = Vue.createApp({

    // Changes {{ }} to [% %] to prevent conflict between Django and Vue
    delimiters: [ '[%', '%]' ],



    data() {
        return {
            financesData: null,
            financesAPI: `http://${location.hostname}:8000/financial_tracking/data/`,
            indicator: 'YAY',
            data: [],

        };
    },


    created () {
        this.data = this.getExpenses(); 
        




    },

    
    methods: {
        
        getExpenses() {
            fetch(this.financesAPI)
                .then(response => response.json())
                .then(json => {
                    this.data = json;

                });
        }



    }


});

const vm = app.mount('#finances');
