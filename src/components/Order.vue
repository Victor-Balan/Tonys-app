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
      <!-- Place order -->
      <div class="buttons mt-6">
        <button id="ordertoReivew" class="button" @click="orderReviewBtn">
          Order!
        </button>
      </div>
      <!-- Review Order -->
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card" id="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Order Review, Everything look good?</p>
            <button
              class="delete"
              aria-label="close"
              @click="changeOrderBtn"
            ></button>
          </header>
          <section class="modal-card-body">
            <figure class="image is-64x64 ">
              <img class="is-rounded" :src="tonysLogo" />
            </figure>
            <div class="mt-4 ml-4">
              <ul class="modalreviewBody">
                <li class="has-text-weight-bold">
                  Name:
                </li>
                <a>{{ User.firstname }}</a>
                <hr class="dropdown-divider" />

                <li class="has-text-weight-bold">
                  Number:
                </li>
                <a>{{ User.number }}</a>
                <hr class="dropdown-divider" />

                <li class="has-text-weight-bold">
                  Food:
                </li>
                <a>{{ User.lunch }}</a>
                <hr class="dropdown-divider" />

                <li class="has-text-weight-bold">
                  Drink:
                </li>
                <a>{{ User.drink }}</a>
                <hr class="dropdown-divider" />
              </ul>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button id="orderSubmit" class="button" style="color: white">
              <router-link to="/orderplaced" style="color: white"
                >Place Order</router-link
              >
            </button>
            <button id="changeOrder" class="button" @click="changeOrderBtn">
              Change
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      tonysLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuySKoLqPsH_XSitPTxr88W7kEWtmzooiwgw&usqp=CAU",
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
    orderReviewBtn() {
      const customer = {
        firstname: this.User.firstname,
        number: this.User.number,
        lunch: this.User.lunch,
        drink: this.User.drink
      };
      const reviewbtn = document.querySelector(".modal");
      reviewbtn.classList.toggle("is-active");
      document.getElementsByClassName("modal");

      console.log(customer, "the modal works");
    },
    changeOrderBtn() {
      const reviewbtn = document.querySelector(".modal");
      reviewbtn.classList.toggle("is-active");
      document.getElementsByClassName("modal");

      console.log("button works, changing order...");
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
#ordertoReivew,
#orderSubmit {
  background-color: rgb(235, 189, 130);
  border-width: 0px;
}
#ordertoReivew:hover,
#orderSubmit:hover {
  background-color: rgb(199, 130, 3);
  border-width: 0px;
}
.modalreviewBody a {
  color: rgb(187, 122, 2);
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
  .modal {
    margin: 5%;
  }
  .modal-background {
    background-color: rgba(128, 128, 128, 0);
  }
  .modal-card-head p {
    font-size: 17px;
  }
}
</style>
