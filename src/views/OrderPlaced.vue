<template>
  <div>
    <div class="homepage">
      <div id="welcomecardContainer">
        <div id="welcomeCard" class="card">
          <header class="card-header">
            <p
              class="card-header-title is-justify-content-center is-size-1-desktop is-size-4-mobile"
            >
              Your order has been placed!
            </p>
          </header>
          <div class="card-content">
            <div class="content has-text-centered is-size-4-desktop">
              You will recieve a receipt and order details text momentarily.
              Thank you for ordering with us!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPlaced",

  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@media only screen and (min-width: 1024px) {
}
@media only screen and (max-width: 1024px) {
}
</style>
