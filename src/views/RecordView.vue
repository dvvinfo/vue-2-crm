<template>
  <div>
    <div class="page-title">
      <h3>{{ "Menu_NewRecord" | localize }}</h3>
    </div>
    <loader-component v-if="loading" />
    <p v-else-if="!categories.length" class="center">
      {{ "Message_There_are_no_categories_yet" | localize }}.
      <router-link to="/category">
        {{ "Add_new_category" | localize }}</router-link
      >
    </p>

    <form class="form" v-else @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="select" v-model="category">
          <option v-for="c in categories" :key="c.id" :value="c.id">
            {{ c.title }}
          </option>
        </select>
        <label>{{ "Select_category" | localize }}</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>{{ "Income" | localize }}</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>{{ "Expenditure" | localize }}</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{ invalid: $v.amount.$dirty && !$v.amount.minValue }"
        />
        <label for="amount">{{ "Amount" | localize }}</label>
        <span
          v-if="$v.amount.$dirty && !$v.amount.minValue"
          class="helper-text invalid"
          >{{ "Message_Validation_Minimum_Value" | localize }}
          {{ $v.amount.$params.minValue.min }}
        </span>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{
            invalid: $v.description.$dirty && !$v.description.required,
          }"
        />
        <label for="description">{{ "Description" | localize }}</label>
        <span
          v-if="$v.description.$dirty && !$v.description.required"
          class="helper-text invalid"
          >{{ "Enter_a_description" | localize }}
        </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ "Create" | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  name: "RecordView",
  metaInfo() {
    return {
      title: this.$title("Menu_NewRecord"),
    };
  },
  data() {
    return {
      loading: true,
      select: null,
      categories: [],
      category: null,
      type: "outcome",
      amount: 1,
      description: "",
    };
  },
  validations: {
    amount: { minValue: minValue(1) },
    description: { required },
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
    if (this.categories.length) {
      this.category = this.categories[0].id;
    }
    setTimeout(() => {
      window.M.updateTextFields();
      this.select = window.M.FormSelect.init(this.$refs.select);
    }, 0);
  },
  computed: {
    ...mapGetters(["info"]),
    canCreateRecord() {
      if (this.type === "income") {
        return true;
      }
      return this.info.bill >= this.amount;
    },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch("createRecord", {
            categoryID: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            date: new Date().toJSON(),
          });
          const bill =
            this.type === "income"
              ? this.info.bill + this.amount
              : this.info.bill - this.amount;

          await this.$store.dispatch("updateInfo", { bill });
          this.$message("???????????? ?????????????? ??????????????");
          this.$v.$reset();
          (this.amount = 1), (this.description = "");
        } catch (error) {
          console.log(error);
        }
      } else {
        this.$message(
          `???????????????????????? ?????????????? ???? ?????????? (${this.amount - this.bill})`
        );
      }
    },
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>

<style></style>
