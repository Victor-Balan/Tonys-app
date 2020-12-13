<template>
  <div>
  <!-- User info -->
   <div id="userInput" class="mt-6">

     <div class="field">
       <p class="control has-icons-left has-icons-right">
         <input class="input" type="text">
         <span class="icon is-left">
           <i class="fas fa-user"></i>
         </span>
       </p>
     </div>
     <div class="field mt-6">
       <p class="control has-icons-left">
         <input class="input" type="tel">
         <span class="icon is-medium is-left">
          <i class="fas fa-lg fa-phone-volume"></i>
         </span>
       </p>
     </div>

   </div>


  </div>
</template>

<script>
export default {
  name: "Order"
};
</script>


<style scoped>

.input {
    background-color: rgb(20, 29, 49);
    color: white;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-radius: 0px;
  }
  
@media only screen and (min-width: 1024px) {
  #userInput {
    margin-top: 2%;
    margin-left: 40%;
    margin-right: 40%;
  }
}
@media only screen and (max-width: 1024px) {
   #userInput {
    margin-top: 2%;
    margin-left: 12%;
    margin-right: 20%;
  }
}

</style>
