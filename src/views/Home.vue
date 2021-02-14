<template>
  <div class="homepage">
    <div id="welcomecardContainer">
      <div id="welcomeCard" class="card">
        <header class="card-header">
          <p
            class="card-header-title is-justify-content-center is-size-1-desktop is-size-4-mobile"
          >
            Welcome to Tony's Web-App!
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-centered is-size-4-desktop">
            <div>
              Let's start building your order! Simply click on the "Order" page!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>

<style>
html {
  background-color: rgb(20, 29, 49);
}
@media only screen and (min-width: 1024px) {
  #welcomecardContainer {
    margin-top: 7%;
    margin-left: 15%;
    margin-right: 15%;
  }
}
@media only screen and (max-width: 1024px) {
  #welcomecardContainer {
    margin-top: 7%;
    margin-left: 12%;
    margin-right: 12%;
  }
}
</style>
