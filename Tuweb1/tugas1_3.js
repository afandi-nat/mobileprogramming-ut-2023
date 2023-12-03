new Vue({
    el: '#app',
    data: {
        numbers: []
    },
    mounted() {
        for (let i = 1; i <= 50; i++) {
            this.numbers.push(i);
        }
    }
});