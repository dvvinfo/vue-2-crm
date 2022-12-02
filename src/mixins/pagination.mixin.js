import _ from "lodash";
export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSIze: 5,
      pageCount: 0,
      allItems: [],
      items: [],
    };
  },
  methods: {
    setupPagination(alignItems) {
      this.alignItems = _.chunk(alignItems, this.pageSIze);
      this.pageCount = _.size(this.alignItems);
      this.items = this.alignItems[this.page - 1] || this.alignItems[0];
    },
    PageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.items = this.alignItems[page - 1] || this.alignItems[0];
    },
  },
};
