<template>
  <div class="home">
    <h1> welcome to the gadgets world</h1>
    <p> here you can find all the cool stuff about the gadgets</p>
    <div id="App">
        <ul>
            <li v-for="item in items" :key="item.id">
                <img :src="item.img" :alt="item.names">
                <h3>{{ item.names }}</h3>
                <p>{{ item.d }}</p>
            </li>
        </ul>
        
    </div>
</div>
</template>

<script>
export default {
    data(){
            return{
                items: [
                    {names: 'earphone',img: 'assets/earphones.jpg',d:'these earphones can be easily connected to any device' ,  price: 500 ,id:1},
                    {names: 'airpods',img: 'assets/airpods.jpg',d:'these airpods are truelywireless and can be easily connected to any device', price: 22500,id:2 },
                    {names: 'headphones',img: 'assets/headphones.jpg',d:'these headphones have gaming compatibility', price: 2000,id:3 },
                    {names: 'pc',img: 'assets/pc.jpg',d:'these Xbox Conroller is higly recommended for bettergaming experience', price: 4000,id:4 },
                    {names: 'psp',img: 'psp.jpg',d:'these PS Conroller is higly recommended for bettergaming experience', price: 4500,id:5 },
                    {names: 'key',img: 'assets/key.jpg',d:'these keyboards can be easily connected to any device', price: 800,id:6 },
                    {names: 'smartwatchround',img: 'assets/smartwatchround.jpg',d:'these smartwatch can be easily connected to any device', price: 3500,id:7},
                    {names: 'smartwatchsquare',img: 'assets/smartwatchround.jpg',d:'these smartwatch can be easily connected to any device', price: 2700,id:8 },
                    {names: 'earbuds',img: 'assets/earbuds.jpg',d:'these earbuds can be easily connected to any device', price: 2500,id:9 },
                    {names: 'dslr',img: 'dslr.jpg',d:'this dslr contain modern features', price: 25000,id:10},   
                ],
                
            }
        },
  name: 'Productitem',
  props: ['product'],
}
</script>

<style>

</style>