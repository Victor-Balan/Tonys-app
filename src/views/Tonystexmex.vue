<template>
  <div class="ttmxMenu">
    <img :src="ttmxMenu1">
  </div>
  <div class="ttmxMenu">
    <img :src="ttmxMenu2">
  </div>
  <div class="ttmxMenu">
    <img :src="ttmxMenu3">
  </div>
  <div class="ttmxMenu" style="margin-bottom: 2%;">
    <img :src="ttmxMenu4">
  </div>
</template>

<script>

export default {
  name: "Tonystexmex",

  data(){
    return {
        ttmxMenu1: "https://static.wixstatic.com/media/3ecb19_7007c1c8d2a04b1d813fb411120244bc~mv2.jpeg/v1/fill/w_1198,h_2129,al_c,q_90,usm_0.66_1.00_0.01/3ecb19_7007c1c8d2a04b1d813fb411120244bc~mv2.webp",
        ttmxMenu2: "https://static.wixstatic.com/media/3ecb19_c2267d9d97a247baa1f1cc47fdf63402~mv2.png/v1/fill/w_1198,h_2129,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_c2267d9d97a247baa1f1cc47fdf63402~mv2.webp",
        ttmxMenu3: "https://static.wixstatic.com/media/3ecb19_af008d8951854fd2828af4e215e3cc8d~mv2.jpeg/v1/fill/w_1198,h_1801,al_c,q_90,usm_0.66_1.00_0.01/3ecb19_af008d8951854fd2828af4e215e3cc8d~mv2.webp",
        ttmxMenu4: "https://static.wixstatic.com/media/3ecb19_d2b0d2eb393e45d5b0938ce6dbb03caa~mv2.png/v1/fill/w_1198,h_1893,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_d2b0d2eb393e45d5b0938ce6dbb03caa~mv2.webp"
    }
  }
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .ttmxMenu{
      margin-top: 7%;
      margin-left: 20%;
      margin-right: 20%;
    }
}
@media only screen and (max-width: 1024px) {
  .ttmxMenu{
    margin-top: 7%;
    margin-left: 3%;
    margin-right: 3%;
    }
  }

</style>