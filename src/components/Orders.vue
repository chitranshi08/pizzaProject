<template>
  <div>
    <h1>Orders List</h1>
 <table>
 <thead>
  <tr>
   <th>Pizza</th>
   <th>No. of items</th>
   <th>Total Price</th>
   <th>Customer Name</th>
   <th>Delivery Address</th>
   <th>Status</th>
   <th></th>
  </tr>
 </thead>
 <tbody>
 <tr v-for="(item,i) in items" :key="item.pizzaName">
  <td>{{item.pizzaName}}</td>
  <td>{{item.number}}</td>
  <td>{{item.amountOrder}}</td>
  <td>{{item.customer}}</td>
  <td>{{item.address}}</td>
  <td>{{item.status}}</td>
  <td><button v-if="item.status != 'Ready To Serve'" @click="updateStatus(i)">Change Status</button></td>
 </tr>
 </tbody>
</table>
</div>
</template>

<script>
export default {
  name: 'Orders',
   data(){
      return{
    items: [
      { "pizzaName": 'Cheese and Corn',"number":8,"customer":"Roshini","amountOrder":200,"address":"Vijayant Khand","status":"Order Recieved" },
      { "pizzaName": 'Margherita',"number":4,"customer":"Priya","amountOrder":270,"address":"Hazrat Ganj","status":"Order Recieved" },
      { "pizzaName": 'Mexican Green Wave',"number":6,"customer":"Swati","amountOrder":250,"address":"Ring Road","status":" Order Recieved" },
      { "pizzaName": 'Peppy Paneer',"number":6,"customer":"Shona","amountOrder":300,"address":"Nishantganj","status":" Order Recieved" },
      { "pizzaName": 'Spicy Desi',"number":6,"customer":"Anamika","amountOrder":350,"address":"Rajajipurum","status":" Order Recieved" },
      { "pizzaName": 'Delux Veggie',"number":6,"customer":"Pihu","amountOrder":200,"address":"Daliganj","status":" Order Recieved" },
    ]
  };
  },
  methods:{
    updateStatus(i){
      if(this.items[i].status == "Order Recieved"){
        this.items[i].status = "Preparing"
      }
      else if(this.items[i].status == "Preparing"){
        this.items[i].status = "Ready To Serve"
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px;
}
button {
  background-color:#008CBA; /* Green */
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}


</style>
