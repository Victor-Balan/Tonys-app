<template>
  <div>
    <!-- User info -->
    <div id="userInput">
      <form>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Name"
              @keydown.enter="focusNext"
              v-model="User.firstname"
            />
            <span class="icon is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field mt-6">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Number"
              v-model="User.number"
            />
            <span class="icon is-medium is-left">
              <i class="fas fa-lg fa-phone-volume"></i>
            </span>
          </p>
        </div>
      </form>
      <!-- Menu Select  -->
      <div class="mt-6 is-size-4" style="color: white">Lunch Menu</div>
      <div class="field">
        <div class="control">
          <div class="select mt-2">
            <select class="lunchSelect" v-model="User.lunch">
              <option value="Tony's Nachos">Tony's Nachos</option>
              <option>Tacos Al Carbon</option>
              <option>Numero 1</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mt-4 is-size-4" style="color: white">Drinks</div>
      <div class="field">
        <div class="control">
          <div class="select mt-2">
            <select class="drinkSelect" v-model="User.drink">
              <option>Coke 12oz</option>
              <option>Sprite 12oz</option>
              <option>Dr. Pepper</option>
            </select>
          </div>
        </div>
      </div>
      <!-- PLace order -->
      <div class="buttons mt-6">
        <button id="orderSubmit" class="button" @click="usertoMongo">
          Order!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      User: {
        firstname: "",
        number: "",
        lunch: "",
        drink: ""
      }
    };
  },
  methods: {
    focusNext(event) {
      if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
        var form = event.target.form;
        var index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
      }
    },
    usertoMongo() {
      const customer = {
        firstname: this.User.firstname,
        number: this.User.number,
        lunch: this.User.lunch,
        drink: this.User.drink
      };
      console.log(customer);
    }
  }
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
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: gray;
  opacity: 1;
  /* Firefox */
}
.lunchSelect,
.drinkSelect {
  background-color: rgb(20, 29, 49);
  color: white;
  border-width: 2px;
  border-color: rgb(235, 189, 130);
}
#orderSubmit {
  background-color: rgb(235, 189, 130);
  border-width: 0px;
}
@media only screen and (min-width: 1024px) {
  #userInput {
    margin: 12%;
    margin-left: 40%;
    margin-right: 40%;
  }
}
@media only screen and (max-width: 1024px) {
  #userInput {
    margin-top: 20%;
    margin-left: 12%;
    margin-right: 20%;
  }
}
</style>
