<template>

  <div>

    <nav class="navbar" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">

          <figure class="image is-64x64 m-1">
            <img class="is-rounded" :src="tonysLogo">
          </figure>

          <a role="button" id="burger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="burgerbtnTog">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
                
        </div>
        <!-- <a id="darkMode" class="mt-2 mr-4">
                   <h2>Try dark mode!</h2>
                </a>

                <a class="mt-2 mr-4">
                  <label class="switch">
                      <input type="checkbox">
                      <span class="slider round" v-on:click="darkMode" ></span>
                  </label>
                </a> -->
                 <div id="burgerbtnMenu" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item" :href="homePage">
                      Home
                    </a>

                    <a class="navbar-item" :href="officalWebsite">
                      Official Website
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                        Follow Us!
                      </a>

                      <div id="smMenu" class="navbar-dropdown">
                        <a class="navbar-item" :href="fb">
                          Facebook
                        </a>
                        <a class="navbar-item" :href="igella">
                          Instagram HTX
                        </a>
                        <a class="navbar-item" :href="igkaty">
                          Instagram KTX
                        </a>

                      </div>
                    </div>
                  </div>

                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-primary">
                          <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
    </nav>

    <div id="welcomecardContainer">
      <div id="welcomeCard" class="card">
        <header class="card-header">
          <p class="card-header-title is-justify-content-center is-size-1-desktop is-size-4-mobile">
            Welcome to Tony's Web-App!
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-centered is-size-4-desktop">
            This is a web app where you can order from the menu! Just type your name, number, and your order!
          </div>
        </div>
      </div>
   </div>
   <!-- Customer info -->
   <div id="welcomecardContainer" class="mb-3">
     <div class="field">
       <label class="label" style="color: rgb(187, 122, 2)">Name</label>
       <div class="control">
         <input class="input" type="text" placeholder="Text input">
       </div>
     </div>

     <div class="field">
       <label class="label" style="color: rgb(187, 122, 2)">Number</label>
       <div class="control">
         <input class="input" type="text" placeholder="Text input">
       </div>
     </div>

   </div>

    
  </div>

</template>

<script>

export default {
  data() {
    return {
      tonysLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuySKoLqPsH_XSitPTxr88W7kEWtmzooiwgw&usqp=CAU',
      homePage: 'http://localhost:8080',
      officalWebsite: 'https://www.tonysmexrestaurant.com/',
      fb: 'https://www.facebook.com/TonysMexRest/',
      igella: 'https://www.instagram.com/tonysmexrestaurant/',
      igkaty: 'https://www.instagram.com/tonystexmex/'

    }
  },
    methods: {
        burgerbtnTog() {
           const navbarMenu = document.querySelector('#burgerbtnMenu');

            navbarMenu.classList.toggle('is-active')
            document.getElementById("burgerbtnMenu")

        }
    }
}

</script>

<style>

html {
  background-color: rgb(20, 29, 49);
}

.navbar {
  background-color: rgb(187, 122, 2);
}

#smMenu {
  color: rgb(20, 29, 49) ;
}



@media only screen and (min-width: 1024px) {
  #welcomecardContainer {
    margin-top: 7%;
    margin-left: 30%;
    margin-right: 30%;
  }
}

@media only screen and (max-width: 1024px) {
  #welcomecardContainer {
    margin-top: 7%;
    margin-left: 12%;
    margin-right: 12%;
  }
}

#burgerbtnMenu a {
  color: rgb(32, 47, 78);
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
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
