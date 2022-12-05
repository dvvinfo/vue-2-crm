<template>
  <div>
    <div class="page-title">
      <h3>{{ "Menu_Bill" | localize }}</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <loader-component v-if="loading" />
    <div class="row" v-else>
      <home-bill-component :rates="currency.rates" />
      <home-currency-component :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBillComponent from "@/components/HomeBillComponent.vue";
import HomeCurrencyComponent from "@/components/HomeCurrencyComponent.vue";
import LoaderComponent from "@/components/app/LoaderComponent.vue";
export default {
  name: "HomeView",
  components: {
    HomeBillComponent,
    HomeCurrencyComponent,
    LoaderComponent,
  },
  data() {
    return {
      loading: true,
      currency: null,
    };
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    console.log(this.currency);

    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.loading = false;
    },
  },
};
</script>
