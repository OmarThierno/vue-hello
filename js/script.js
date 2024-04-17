const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'hello Vue',
      img: 'img/groot.jpg',
      name: '',
    }
  },
  methods: {
    iAmGroot: function() {
      if (this.name.toLowerCase() === 'groot') {
        alert(`Ciao Groot`);
      } else {
        alert(`Hai sbagliato! :(`);
      }
    }
  }
}).mount('#app')