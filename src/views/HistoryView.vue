<template>
  <div>
    <div class="page-title">
      <h3>{{ "Record_history" | localize }}</h3>
    </div>

    <div class="history-chart">
      <!-- <chart-component :chart-data="chartData" :chart-options="chartOptions" /> -->
      <canvas ref="canvas"></canvas>
    </div>
    <loader-component v-if="loading" />
    <p class="center" v-else-if="!records.length">
      {{ "Message_There_are_no_records_yet" | localize }}
    </p>
    <section v-else>
      <history-table-component :records="items" />
      <paginate-component
        v-model="page"
        :page-count="pageCount"
        :click-handler="PageChangeHandler"
        :prev-text="'&larr;'"
        :next-text="'&rarr;'"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      >
      </paginate-component>
    </section>
  </div>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
import HistoryTableComponent from "@/components/HistoryTableComponent.vue";
import { Pie } from "vue-chartjs";
export default {
  name: "HistoryView",
  extends: Pie,
  components: {
    HistoryTableComponent,
    //ChartComponent,
  },
  metaInfo() {
    return {
      title: this.$title("Menu_History"),
    };
  },
  mixins: [paginationMixin],
  data() {
    return {
      loading: true,
      records: [],
    };
  },
  async mounted() {
    this.records = await this.$store.dispatch("fetchRecords");
    const categories = await this.$store.dispatch("fetchCategories");
    this.setup(categories);
    this.loading = false;
  },
  methods: {
    setup(categories) {
      this.setupPagination(
        this.records.map((record) => {
          return {
            ...record,
            categoryName: categories.find((c) => c.id === record.categoryID)
              .title,
            typeClass: record.type === "income" ? "green" : "red",
            typeText: record.type === "income" ? "Доход" : "Расход",
          };
        })
      );
      this.renderChart({
        labels: categories.map((c) => c.title),
        datasets: [
          {
            label: "Расходы по категориям",
            data: categories.map((c) => {
              return this.records.reduce((total, r) => {
                if (r.categoryID === c.id && r.type === "outcome") {
                  total += +r.amount;
                }
                return total;
              }, 0);
            }),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    },
  },
  computed: {},
};
</script>

<style></style>
