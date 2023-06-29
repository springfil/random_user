const app = Vue.createApp({
  //template: '<h2>Hi {{firstName}}</h2>',
  //данные должны быть ф-цией , которая возвращает обьект
  data() {
    return {
        firstName: 'Timur',
        lastName: 'Kenzhaev',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
        const response = await fetch('https://randomuser.me/api');
        const {results} = await response.json();
        console.log(results)
        //console.log(this.firstName);
        this.firstName = results[0].name.first;
        this.lastName = results[0].name.last;
        this.gender = results[0].gender;
        this.picture = results[0].picture.large
    }
  }
});

//mount - точечное монтирование приложения

app.mount("#app");
