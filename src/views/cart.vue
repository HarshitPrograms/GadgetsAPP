<template>
    <h1> Order Confirmation page </h1>
    <form>
    <label> Name: </label>
    <input type= "name" required v-model="name">
    <label> Number: </label>
    <input type= "number" required v-model="number">
    <label> Address: </label>
    <input type= "address" required v-model="address"> 
    <label> Product Id: </label>
    <input type= "productid" required v-model="productid"> 
    <label> Email: </label>
    <input type= "email" required v-model="email">    
    <div>
        <input type="checkbox" v-model="terms" required/>
        <label>terms and conditions</label>
    </div>
    <div class="submit">
        <button>Submit the details</button>
    </div>
    </form>
    
    
</template>

<script>
export default {
 data(){
    return{
        name: '',
        email: '',
        terms: false,
        number: '',
        address: '',
        productid: '',
    }
 },
}
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0 ;
        position: relative;
        top: 2px;
}
.pill{
    display: inline-border;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color:#777;
    cursor: pointer; 
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color:#ff0062;
    margin-top: 10ox;
    font-size: 0.8em;
    font-weight:bold;
}
</style>