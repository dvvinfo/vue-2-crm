<template>
  <div>
    <div class="page-title">
      <h3>{{ "Categories" | localize }}</h3>
    </div>
    <section>
      <loader-component v-if="loading" />
      <div class="row" v-else>
        <create-component @created="addNewCategory" />
        <edit-component
          v-if="categories.length"
          :categories="categories"
          @updated="updateCategories"
          :key="categories.length + updateCount"
        />
        <p v-else class="center">
          {{ "Message_There_are_no_categories_yet" | localize }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import CreateComponent from "@/components/category/CreateComponent.vue";
import EditComponent from "@/components/category/EditComponent.vue";
export default {
  name: "CategoriesView",
  metaInfo() {
    return {
      title: this.$title("Menu_Categories"),
    };
  },
  data() {
    return {
      categories: [],
      loading: true,
      updateCount: 0,
    };
  },
  components: {
    CreateComponent,
    EditComponent,
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    console.log(this.categories);
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    },
  },
};
</script>

<style></style>
