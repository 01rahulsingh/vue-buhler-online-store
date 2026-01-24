<template>
  <header class="header-container">
    <div class="left" @click="goToHome">
      <img src="/logo-buhler.svg" alt="Bühler" class="header-logo" />
    </div>

    <div class="header-date">
      {{ formattedDateTime }}
    </div>

    <div class="header-cart-details" @click="goToCheckout">
      <img src="/cart.svg" alt="Cart" class="cart-icon" />
      <span>Cart ({{ cartCount }})</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",

  data() {
    return {
      currentDateAndTime: new Date(),
      setTimer: null 
    };
  },

  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
    formattedDateTime() {
      const formatted = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(this.currentDateAndTime);

      return formatted.replace(", ", "/").replace(",", "");
    },
  },

  mounted() {
    // Update time every second
    this.setTimer = setInterval(() => {
      this.currentDateAndTime = new Date();
    }, 1000);
  },

  beforeDestroy() {
    if(this.setTimer) {
        clearInterval(this.setTimer);
    }
  },

  methods: {
    goToHome() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    goToCheckout() {
      if (this.$route.path !== "/checkout") {
        this.$router.push("/checkout");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 2px solid #008c7e;
}

.header-logo {
  height: 32px;
  cursor: pointer;
}

.header-date {
  text-align: center;
  color: #008c7e;
  font-size: 14px;
}

.header-cart-details {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #008c7e;
  cursor: pointer;
  font-size: 14px;
}
</style>
