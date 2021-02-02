const app = Vue.createApp({

    // Changes {{ }} to [% %] to prevent conflict between Django and Vue
    delimiters: [ '[%', '%]' ],



    data() {
        return {
            financesData: null,
            financesAPI: `http://${location.hostname}:8000/financial_tracker/`,
            indicator: 'YAY',


        }
    },


    created () {
        console.log('This has been successfully created!')


    },

});

const vm = app.mount('#finances');
