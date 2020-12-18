<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <figure class="image is-64x64 m-1">
          <img class="is-rounded" :src="tonysLogo" />
        </figure>

        <a
          role="button"
          id="burger"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="burgerbtnTog"
        >
          <div class="m-3" style="color:white">
            <ion-icon
              class="m-1"
              id="burgericon"
              name="rocket-outline"
            ></ion-icon>
          </div>
        </a>
      </div>
      <div id="burgerbtnMenu" class="navbar-menu" role="menu">
        <div class="navbar-start">
          <a class="navbar-item" :href="homePage">
            <router-link to="/">Home</router-link>
          </a>

          <hr class="dropdown-divider" />
          <a class="navbar-item" :href="officalWebsite">
            Official Website
          </a>

          <hr class="dropdown-divider" />
          <a class="navbar-item">
            <router-link to="/order">Order</router-link>
          </a>

          <hr class="dropdown-divider" />
          <div
            role="button"
            id="socialBtn"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a class="navbar-link">
              Menus
            </a>
            <hr class="dropdown-divider" />
            <div id="smMenu" class="navbar-dropdown">
              <a class="navbar-item">
                <router-link to="/tmr">Tony's Mexican Restaurant</router-link>
              </a>
              <hr class="dropdown-divider" />
              <a class="navbar-item">
                <router-link to="/ttmx">Tony's Tex-Mex</router-link>
              </a>
            </div>
          </div>

          <hr class="dropdown-divider" />
          <div
            role="button"
            id="socialBtn"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a class="navbar-link">
              Follow Us!
            </a>

            <hr class="dropdown-divider" />
            <div id="smMenu" class="navbar-dropdown">
              <a class="navbar-item" :href="fb">
                <i class="fab fa-facebook-f mr-2"></i>
                Facebook
              </a>

              <hr class="dropdown-divider" />
              <a class="navbar-item" :href="igella">
                <i class="fab fa-instagram mr-2"></i>
                Instagram HTX
              </a>

              <hr class="dropdown-divider" />
              <a class="navbar-item" :href="igkaty">
                <i class="fab fa-instagram mr-2"></i>
                Instagram KTX
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      tonysLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuySKoLqPsH_XSitPTxr88W7kEWtmzooiwgw&usqp=CAU",
      homePage: "/",
      officalWebsite: "https://www.tonysmexrestaurant.com/",
      fb: "https://www.facebook.com/TonysMexRest/",
      igella: "https://www.instagram.com/tonysmexrestaurant/",
      igkaty: "https://www.instagram.com/tonystexmex/"
    };
  },
  methods: {
    burgerbtnTog() {
      const navbarMenu = document.querySelector(".navbar-menu");
      navbarMenu.classList.toggle("is-active");
      document.getElementsByClassName("navbar-menu");
    }
  }
};
</script>

<style>
.navbar {
  background-color: rgb(187, 122, 2);
}
#burgericon {
  width: 30px;
  height: 30px;
}
#smMenu {
  color: rgb(20, 29, 49);
}

@media only screen and (min-width: 1024px) {
  #burgerbtnMenu a {
    color: rgb(43, 59, 88);
  }
  #welcomecardContainer {
    margin-top: 7%;
    margin-left: 30%;
    margin-right: 30%;
  }
}
@media only screen and (max-width: 1024px) {
  /* NAVBAR */
  .navbar-menu {
    display: block;
    opacity: 0;

    position: absolute;
    left: 0;
    right: 0;
    margin-left: 50%;

    transform: translateY(-2%);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }
  #burgerbtnMenu,
  #burgerbtnMenu a {
    background-color: rgb(143, 93, 0);
    color: white;
  }
  .navbar-menu.is-active {
    opacity: 1;
    transform: none;
    pointer-events: auto;
    margin-left: 50%;
    border-radius: 5px 0px 0px 10px;
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #394461;
}

input:focus + .slider {
  box-shadow: 0 0 1px #394461;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

#darkMode {
  color: white;
}
</style>
