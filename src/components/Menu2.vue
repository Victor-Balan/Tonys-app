<template>
  <div class="buttons mt-6 is-flex-direction-column">
    <button class="button is-medium" id="Menu2" @click="toggleMenu2">
      Tony's Tex-mex
    </button>
  </div>
  <!-- Modal Menus -->
  <div class="modal" id="ttmxModal">
    <div class="modal-background"></div>
    <div class="m-5">
      <div class="modal-card" id="ttmxModalCard">
        <header
          class="modal-card-head"
          style="background-color: rgb(187, 122, 2)"
        >
          <p class="modal-card-title"></p>
        </header>
        <section class="modal-card-body">
          <div>
            <!-- Tony's Tex-mex menu -->
            <div id="showMenus2">
              <div class="ttmxMenu">
                <img :src="ttmxMenu1" />
              </div>
              <div class="ttmxMenu">
                <img :src="ttmxMenu2" />
              </div>
              <div class="ttmxMenu">
                <img :src="ttmxMenu3" />
              </div>
              <div class="ttmxMenu">
                <img :src="ttmxMenu4" />
              </div>
            </div>
          </div>
        </section>
        <footer
          class="modal-card-foot p-1"
          style=" border-width: 0px; background-color: rgb(187, 122, 2)"
        >
          <button class="button" id="closeMenu2" @click="toggleMenu2">
            Close
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu2",

  data() {
    return {
      // Tony's Tex-mex
      ttmxMenu1:
        "https://static.wixstatic.com/media/3ecb19_7007c1c8d2a04b1d813fb411120244bc~mv2.jpeg/v1/fill/w_1198,h_2129,al_c,q_90,usm_0.66_1.00_0.01/3ecb19_7007c1c8d2a04b1d813fb411120244bc~mv2.webp",
      ttmxMenu2:
        "https://static.wixstatic.com/media/3ecb19_c2267d9d97a247baa1f1cc47fdf63402~mv2.png/v1/fill/w_1198,h_2129,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_c2267d9d97a247baa1f1cc47fdf63402~mv2.webp",
      ttmxMenu3:
        "https://static.wixstatic.com/media/3ecb19_af008d8951854fd2828af4e215e3cc8d~mv2.jpeg/v1/fill/w_1198,h_1801,al_c,q_90,usm_0.66_1.00_0.01/3ecb19_af008d8951854fd2828af4e215e3cc8d~mv2.webp",
      ttmxMenu4:
        "https://static.wixstatic.com/media/3ecb19_d2b0d2eb393e45d5b0938ce6dbb03caa~mv2.png/v1/fill/w_1198,h_1893,al_c,q_95,usm_0.66_1.00_0.01/3ecb19_d2b0d2eb393e45d5b0938ce6dbb03caa~mv2.webp"
    };
  },
  methods: {
    toggleMenu2() {
      const ttmxModal = document.getElementById("ttmxModal");

      if (ttmxModal.style.display === "none") {
        ttmxModal.style.display = "block";
      } else {
        ttmxModal.style.display = "none";
      }
      console.log("the menu modal works");
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .ttmxMenu {
    margin-top: -1%;
  }
  #ttmxModalCard {
    width: 80%;
  }
}
@media only screen and (max-width: 770px) {
  .ttmxMenu {
    margin-top: -1%;
    margin-left: -4%;
    margin-right: -4%;
  }
  #ttmxModalCard {
    margin-top: 3%;
    margin-left: 0%;
    padding-bottom: 20%;
  }
}
</style>
