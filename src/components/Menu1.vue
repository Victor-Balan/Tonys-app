<template>
  <div class="buttons mt-6 is-flex-direction-column">
    <button class="button is-medium" id="tmrButton" @click="toggleMenu1">
      Tony's Mexican Restaurant
    </button>
  </div>
  <!-- Modal Menus -->
  <div class="modal" id="tmrModal">
    <div class="modal-background"></div>
    <div class="m-5">
      <div class="modal-card" id="tmrModalCard">
        <header class="modal-card-head">
          <p class="modal-card-title"></p>
        </header>
        <section class="modal-card-body">
          <div>
            <!-- Tony's Mexican Restaurant menu -->
            <div id="showMenus1">
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
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggleMenu1">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu1",

  data() {
    return {
      // Tony's Mexican Restaurant
      tmrmenu1:
        "https://static.wixstatic.com/media/3ecb19_5ef803f035004503879b9298faefe1b5~mv2.png/v1/fill/w_1220,h_1994,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_5ef803f035004503879b9298faefe1b5~mv2.webp",
      tmrmenu2:
        "https://static.wixstatic.com/media/3ecb19_be47d86592b6410a80f477fddbbbb8d0~mv2.png/v1/fill/w_1220,h_1994,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_be47d86592b6410a80f477fddbbbb8d0~mv2.webp",
      tmrmenu3:
        "https://static.wixstatic.com/media/3ecb19_d67ed29d5fbb4f59a676f2a8666d3582~mv2.jpeg/v1/fill/w_1104,h_1706,al_c,q_85,usm_0.66_1.00_0.01/OverPage-0.webp",
      tmrmenu4:
        "https://static.wixstatic.com/media/3ecb19_7c620b3d2a9c43a49ba40fc081f28ea3~mv2.png/v1/fill/w_1224,h_1584,al_c,q_90,usm_0.66_1.00_0.01/OverPage-0%2011.webp"
    };
  },
  methods: {
    toggleMenu1() {
      const tmrModal = document.getElementById("tmrModal");

      if (tmrModal.style.display === "none") {
        tmrModal.style.display = "block";
      } else {
        tmrModal.style.display = "none";
      }
      console.log("the menu modal works");
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .tmrMenu {
    margin-top: -1%;
    margin-left: 1%;
    margin-right: 1%;
  }
  #tmrModalCard {
    width: 90%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
}
@media only screen and (max-width: 770px) {
  .tmrMenu {
    margin-top: -1%;
    margin-left: 1%;
    margin-right: 1%;
  }
  #tmrModalCard {
    margin-top: 3%;
    margin-left: 0%;
  }
}
</style>
