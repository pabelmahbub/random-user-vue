const app = Vue.createApp({
    data(){
        return {
            firstName:'Rakin',
            lastName:'Rahman',
            email:'ra98@gmail.com',
            gender: 'male',
            location: 'Tokyo',
            phone:'0123456',
            image:'https://randomuser.me/api/portraits/men/3.jpg'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json();
            console.log(results);

            
            this.firstName= results[0].name.first
            this.lastName=results[0].name.last
            this.email=results[0].email
            this.location=results[0].location.country
            this.phone=results[0].phone
            this.gender=results[0].gender
            this.image=results[0].picture.large
        
        }
    }
})

app.mount('#app')