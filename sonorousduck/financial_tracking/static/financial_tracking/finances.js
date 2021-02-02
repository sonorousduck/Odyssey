const app = Vue.createApp({

    // Changes {{ }} to [% %] to prevent conflict between Django and Vue
    delimiters: [ '[%', '%]' ],



    data() {
        return {
            financesData: null,
            financesAPI: `http://${location.hostname}:8000/financial_tracking/`,
            indicator: 'YAY',
            data: false,

        }
    },


    created () {
        
        fetch(this.financesAPI + `data/`)
            .then(response => response.json())
            .then(json => {
                this.data = json;
            });
        
        




    },

});

const vm = app.mount('#finances');
