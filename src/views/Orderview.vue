<template>
  <div>
    <Order />
    <Menu1 />
    <Menu2 />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";
import Menu1 from "@/components/Menu1.vue";
import Menu2 from "@/components/Menu2.vue";

export default {
  name: "Orderview",
  components: {
    Order,
    Menu1,
    Menu2
  }
};
</script>

<style></style>
