const MyNameApp = { 
    data() { 
        return{ 
            name:"",
            input_name: ""
        }
    }, 
    methods: {
        submitForm(e) { 
            e.preventDefault();
            this.name = this.input_name;
            
            
        },saveName(name) {
            // Recupera nomes existentes do armazenamento local ou cria um array vazio
            const storedNames = JSON.parse(localStorage.getItem("storedNames")) || [];
            // Adiciona o novo nome ao array
            storedNames.push(name);
            // Armazena o array atualizado de nomes de volta no armazenamento local
            localStorage.setItem("storedNames", JSON.stringify(storedNames));
          }
     } 
}

Vue.createApp(MyNameApp).mount("#app")