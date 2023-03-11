<template>
  <main class="home">
    <h1> Welcome to the gadgets world</h1>
    <p> Here you can find all the cool stuff about the gadgets</p>
    <div id="App">
        
                <ul v-for="item in items" :key="item.id" class="item">
                <img :src="item.img" :alt="item.names">
                <h2>{{ item.names }}
                    RS {{ item.price }} /-
                    <p>ProductID: {{ item.id }}</p>
               </h2>
                <button :click="productis"> Click here to know more</button>
                  <p v-if="productis">{{ item.d }}</p>  
                </ul>
              
       
        
    </div>
  </main>
</template>
<script>

export default {
  productis: true,
  data(){
            return{
                items: [
                    {names: 'Earphone',img: 'earphones.jpg',d:'these earphones can be easily connected to any device' ,  price: 500 ,id:'a12'},
                    {names: 'Airpods',img: 'airpods.jpg',d:'these airpods are truelywireless and can be easily connected to any device', price: 22500,id:'a23' },
                    {names: 'Headphones',img: 'headphones.jpg',d:'these headphones have gaming compatibility', price: 2000,id:'a34' },
                    {names: 'Pc Controller',img: 'pc.jpg',d:'these Xbox Conroller is higly recommended for bettergaming experience', price: 4000,id:'a45' },
                    {names: 'Play Station Controller',img: 'psp.jpg',d:'these PS Conroller is higly recommended for bettergaming experience', price: 4500,id:'a56' },
                    {names: 'Keyboard',img: 'key.jpg',d:'these keyboards can be easily connected to any device', price: 800,id:'a65' },
                    {names: 'Smartwatchround',img: 'smartwatchround.jpg',d:'these smartwatch can be easily connected to any device', price: 3500,id:'a67'},
                    {names: 'Smartwatchsquare',img: 'smartwatchround.jpg',d:'these smartwatch can be easily connected to any device', price: 2700,id: 'a78' },
                    {names: 'Earbuds',img: 'earbuds.jpg',d:'these earbuds can be easily connected to any device', price: 2500,id:'a89' },
                    {names: 'Dslr',img: 'dslr.jpg',d:'this dslr contain modern features', price: 25000,id:10},   
                ],
            }
        },
  
}
</script>
<style >
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
button{
    background: #19a603;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

</style>
