<template>
  <div class="tmrMenu">
    <img :src="tmrmenu1" />
  </div>
  <div class="tmrMenu">
    <img :src="tmrmenu2" />
  </div>
  <div class="tmrMenu">
    <img :src="tmrmenu3" />
  </div>
  <div class="tmrMenu" style="margin-bottom: 2%;">
    <img :src="tmrmenu4" />
  </div>
</template>

<script>
export default {
  name: "Tonysmexrest",

  data() {
    return {
      tmrmenu1:
        "https://static.wixstatic.com/media/3ecb19_5ef803f035004503879b9298faefe1b5~mv2.png/v1/fill/w_1220,h_1994,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_5ef803f035004503879b9298faefe1b5~mv2.webp",
      tmrmenu2:
        "https://static.wixstatic.com/media/3ecb19_be47d86592b6410a80f477fddbbbb8d0~mv2.png/v1/fill/w_1220,h_1994,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_be47d86592b6410a80f477fddbbbb8d0~mv2.webp",
      tmrmenu3:
        "https://static.wixstatic.com/media/3ecb19_d67ed29d5fbb4f59a676f2a8666d3582~mv2.jpeg/v1/fill/w_1104,h_1706,al_c,q_85,usm_0.66_1.00_0.01/OverPage-0.webp",
      tmrmenu4:
        "https://static.wixstatic.com/media/3ecb19_7c620b3d2a9c43a49ba40fc081f28ea3~mv2.png/v1/fill/w_1224,h_1584,al_c,q_90,usm_0.66_1.00_0.01/OverPage-0%2011.webp"
    };
  }
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .tmrMenu {
    margin-top: 7%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media only screen and (max-width: 1024px) {
  .tmrMenu {
    margin-top: 7%;
    margin-left: 3%;
    margin-right: 3%;
  }
}
</style>
