const vue = new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        url: 'https://www.google.com/',
        userName: '',
    },
    methods: {
        greet(name) {
            return `Welcome to my world ${name}`;
        }
    },
})