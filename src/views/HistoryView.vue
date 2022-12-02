<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>
    <loader-component v-if="loading" />
    <p class="center" v-else-if="!records.length">Записей пока нет</p>
    <section v-else>
      <history-table-component :records="items" />
      <paginate-component
        v-model="page"
        :page-count="pageCount"
        :click-handler="PageChangeHandler"
        :prev-text="'Назад'"
        :next-text="'Вперед'"
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
export default {
  name: "HistoryView",
  components: { HistoryTableComponent },
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
    this.loading = false;
  },
};
</script>

<style></style>
