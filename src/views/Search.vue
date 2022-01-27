<template>
  <div class="container">
    <mdb-container>
      <section class="preview">
        <mdb-input
          v-model="find"
          outline
          class="mt-0 mb-3 search"
          ariaLabel="Example text with button addon"
          ariaDescribedBy="button-addon1"
        >
          <mdb-btn color="ins" slot="append" group @click="runSearch"
            ><mdbIcon icon="search" id="search" />Найти</mdb-btn
          >
          <mdb-btn
            color="ins"
            slot="append"
            group
            @click="show_settings = !show_settings"
            ><mdb-icon icon="ellipsis-v"
          /></mdb-btn>
        </mdb-input>
      </section>

      <table class="setting_search" v-show="show_settings">
        <tr>
          <td>
            Дата поступления
          </td>
          <td>
            <date-picker
              v-model="doc_entry_date_start"
              :get-classes="getRangeClasses_entry"
              :default-value="doc_entry_date_end || new Date()"
              :disabled-date="disabledStartDate_entry"
              format="DD.MM.YYYY"
            ></date-picker>
            <span> - </span>
            <date-picker
              v-model="doc_entry_date_end"
              :get-classes="getRangeClasses_entry"
              :default-value="doc_entry_date_start || new Date()"
              :disabled-date="disabledEndDate_entry"
              format="DD.MM.YYYY"
            ></date-picker>
          </td>
          <td>
            <mdb-select
              disabled
              search
              outline
              v-model="labelOptions"
              label="Субъект РФ"
              placeholder="Выбирете субъект РФ"
            />
          </td>
        </tr>
        <tr>
          <td>Дата решения</td>
          <td>
            <date-picker
              v-model="doc_result_date_start"
              :get-classes="getRangeClasses_result"
              :default-value="doc_result_date_end || new Date()"
              :disabled-date="disabledStartDate_result"
              format="DD.MM.YYYY"
            ></date-picker>
            <span> - </span>
            <date-picker
              v-model="doc_result_date_end"
              :get-classes="getRangeClasses_result"
              :default-value="doc_result_date_start || new Date()"
              :disabled-date="disabledEndDate_result"
              format="DD.MM.YYYY"
            ></date-picker>
          </td>
          <td>
            <mdb-select
              disabled
              search
              outline
              v-model="labelOptions"
              label="Округ РФ"
              placeholder="Выбирете округ РФ"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <mdb-input
              type="checkbox"
              id="checkbox2"
              name="check2"
              v-model="is_act"
              label="Дела с текстом судебного акта"
            />
          </td>

          <td>
            <mdb-select
              disabled
              search
              outline
              v-model="labelOptions"
              label="Уровень суда"
              placeholder="Уровень суда"
            />
          </td>
        </tr>
      </table>

      <div>Найдено: {{ affairs.cnt }}</div>
      <mdb-pagination>
        <div @click="firstPage">
          <mdb-page-item :disabled="affairs.offset <= 0">First</mdb-page-item>
        </div>
        <div @click="prevPage">
          <mdb-page-item :disabled="affairs.offset <= 0"
            ><mdb-icon icon="angle-double-left" style="font-size: .5rem;"
          /></mdb-page-item>
        </div>
        <!-- <mdb-page-item :active="is_act" >1</mdb-page-item>
            <mdb-page-item v-for="item in affairs.data">2</mdb-page-item>
            <mdb-page-item>3</mdb-page-item>
            <mdb-page-item>4</mdb-page-item>
            <mdb-page-item>5</mdb-page-item> -->
        <div @click="nextPage">
          <mdb-page-item
            :disabled="affairs.offset + affairs.limit >= affairs.cnt"
            ><mdb-icon icon="angle-double-right" style="font-size: .5rem;"
          /></mdb-page-item>
        </div>
        <div @click="lastPage">
          <mdb-page-item
            :disabled="affairs.offset + affairs.limit >= affairs.cnt"
            >Last</mdb-page-item
          >
        </div>
      </mdb-pagination>

      <mdb-row>
        <mdb-col lg="10" md="12" class="mb-lg-0 mb-2">
          <mdb-list-group>
            <mdb-list-group-item v-for="item in affairs.data" :key="item.id">
              <div>
                <router-link
                  :to="{
                    name: 'affairs',
                    params: {
                      slug: item.id.toString()
                    }
                  }"
                  class="preview-link"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2 h5" v-text="item.name"></h5>
                  </div>
                </router-link>

                <p class="mb-2" v-show="item.case_document_articles">
                  {{ item.case_document_articles }}
                </p>
                <small
                  v-show="item.case_common_doc_result_date"
                  v-text="
                    'Дата решения: ' +
                      getFormatDate(item.case_common_doc_result_date)
                  "
                ></small>
                <small
                  v-show="item.case_common_doc_result_date"
                  v-text="
                    '   Дата поступления: ' +
                      getFormatDate(item.case_common_doc_result_date)
                  "
                >
                </small>
              </div>
            </mdb-list-group-item>
          </mdb-list-group>
        </mdb-col>
      </mdb-row>
      <mdb-row style="margin-top: 15px">
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-2"></mdb-col>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-pagination>
            <div @click="firstPage">
              <mdb-page-item :disabled="affairs.offset <= 0"
                >First</mdb-page-item
              >
            </div>
            <div @click="prevPage">
              <mdb-page-item :disabled="affairs.offset <= 0"
                ><mdb-icon icon="angle-double-left" style="font-size: .5rem;"
              /></mdb-page-item>
            </div>
            <!-- <mdb-page-item :active="is_act" >1</mdb-page-item>
            <mdb-page-item v-for="item in affairs.data">2</mdb-page-item>
            <mdb-page-item>3</mdb-page-item>
            <mdb-page-item>4</mdb-page-item>
            <mdb-page-item>5</mdb-page-item> -->
            <div @click="nextPage">
              <mdb-page-item
                :disabled="affairs.offset + affairs.limit >= affairs.cnt"
                ><mdb-icon icon="angle-double-right" style="font-size: .5rem;"
              /></mdb-page-item>
            </div>
            <div @click="lastPage">
              <mdb-page-item
                :disabled="affairs.offset + affairs.limit >= affairs.cnt"
                >Last</mdb-page-item
              >
            </div>
          </mdb-pagination>
        </mdb-col>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-2"></mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
// import RwvArticleList from "@/components/ArticleList";
import {
  mdbSelect,
  mdbIcon,
  mdbFormInline,
  mdbInput,
  mdbContainer,
  mdbBtn,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbPagination,
  mdbPageItem,
  mdbPageNav,
  mdbListGroup,
  mdbListGroupItem,
  mdbRow,
  mdbVol,
  mdbCol
} from "mdbvue";

import moment from "moment";
import { mapGetters } from "vuex";
// import marked from "marked";
import store from "@/store";
// import RwvArticleMeta from "@/components/ArticleMeta";
// import RwvComment from "@/components/Comment";
// import RwvCommentEditor from "@/components/CommentEditor";
// import RwvTag from "@/components/VTag";
import { FETCH_AFFAIRS, FETCH_AFFAIR_FIELDS } from "@/store/actions.type";

export default {
  name: "rwv-search",
  components: {
    // RwvArticleList
    mdbSelect,
    mdbIcon,
    mdbFormInline,
    mdbInput,
    mdbContainer,
    mdbBtn,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    mdbListGroup,
    mdbListGroupItem,
    mdbRow,
    mdbVol,
    mdbCol
  },
  computed: {
    ...mapGetters(["affairs", "fields"])
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_AFFAIRS, to.query),
      store.dispatch(FETCH_AFFAIR_FIELDS)
    ]).then(() => {
      next();
    });
  },
  mounted() {
    // let query = { ...this.$route.query };
    // query["offset"] = this.affairs.offset;
    // this.$router.push({
    //   path: "search",
    //   query
    // });
  },
  data() {
    return {
      find: this.$route.query["find"],
      is_act: this.$route.query["is_act"] == "true",
      doc_entry_date_start: moment(
        this.$route.query["doc_entry_date_start"],
        "DD.MM.YYYY",
        true
      ).isValid()
        ? new Date(
            moment(
              this.$route.query["doc_entry_date_start"],
              "DD.MM.YYYY"
            ).format("MM-DD-YYYY")
          )
        : null,
      doc_entry_date_end: moment(
        this.$route.query["doc_entry_date_end"],
        "DD.MM.YYYY",
        true
      ).isValid()
        ? new Date(
            moment(
              this.$route.query["doc_entry_date_end"],
              "DD.MM.YYYY"
            ).format("MM-DD-YYYY")
          )
        : null,
      doc_result_date_start: moment(
        this.$route.query["doc_result_date_start"],
        "DD.MM.YYYY",
        true
      ).isValid()
        ? new Date(
            moment(
              this.$route.query["doc_result_date_start"],
              "DD.MM.YYYY"
            ).format("MM-DD-YYYY")
          )
        : null,
      doc_result_date_end: moment(
        this.$route.query["doc_result_date_end"],
        "DD.MM.YYYY",
        true
      ).isValid()
        ? new Date(
            moment(
              this.$route.query["doc_result_date_end"],
              "DD.MM.YYYY"
            ).format("MM-DD-YYYY")
          )
        : null,
      show_settings: Object.keys(this.$route.query).length > 0,
      labelOptions: [{ text: "Option nr 1", value: "Option 1" }]
    };
  },
  watch: {
    find: function(v) {
      let query = { ...this.$route.query };

      if (v && v.length > 0) {
        query["find"] = v;
      } else {
        delete query["find"];
      }
      this.$router.push({
        path: "search",
        query
      });
    },
    is_act: function(v) {
      let query = { ...this.$route.query, is_act: v };
      this.$router.push({
        path: "search",
        query
      });
    },
    doc_entry_date_start: function(v) {
      let query = { ...this.$route.query };

      if (v) {
        query["doc_entry_date_start"] = moment(v).format("DD.MM.YYYY");
      } else {
        delete query["doc_entry_date_start"];
      }

      this.$router.push({
        path: "search",
        query
      });
    },
    doc_entry_date_end: function(v) {
      let query = { ...this.$route.query };

      if (v) {
        query["doc_entry_date_end"] = moment(v).format("DD.MM.YYYY");
      } else {
        delete query["doc_entry_date_end"];
      }
      this.$router.push({
        path: "search",
        query
      });
    },
    doc_result_date_start: function(v) {
      let query = { ...this.$route.query };

      if (v) {
        query["doc_result_date_start"] = moment(v).format("DD.MM.YYYY");
      } else {
        delete query["doc_result_date_start"];
      }
      this.$router.push({
        path: "search",
        query
      });
    },
    doc_result_date_end: function(v) {
      let query = { ...this.$route.query };

      if (v) {
        query["doc_result_date_end"] = moment(v).format("DD.MM.YYYY");
      } else {
        delete query["doc_result_date_end"];
      }
      this.$router.push({
        path: "search",
        query
      });
    }
  },
  methods: {
    firstPage() {
      console.log("firstPage");
      let query = { ...this.$route.query };

      if (this.affairs.offset <= 0) return;

      query["offset"] = 0;
      this.$router.push({
        path: "search",
        query
      });
      store.dispatch(FETCH_AFFAIRS, { ...query });
    },
    prevPage() {
      console.log("prevPage");
      let deff = this.affairs.offset - this.affairs.limit;
      if (deff < 0) return;
      let query = { ...this.$route.query };

      query["offset"] = deff;
      this.$router.push({
        path: "search",
        query
      });
      store.dispatch(FETCH_AFFAIRS, { ...query });
    },
    nextPage() {
      console.log("nextPage");
      let query = { ...this.$route.query };
      let deff = this.affairs.offset + this.affairs.limit;
      if (deff >= this.affairs.cnt) return;

      query["offset"] = deff;
      this.$router.push({
        path: "search",
        query
      });
      store.dispatch(FETCH_AFFAIRS, { ...query });
    },
    lastPage() {
      console.log("lastPage");
      let query = { ...this.$route.query };

      if (this.affairs.offset + this.affairs.limit >= this.affairs.cnt) return;

      query["offset"] = this.affairs.cnt - this.affairs.limit;
      this.$router.push({
        path: "search",
        query
      });
      store.dispatch(FETCH_AFFAIRS, { ...query });
    },
    getFormatDate(v) {
      return moment(v, "YYYY-MM-DD").format("DD.MM.YYYY");
    },
    goToSearch(id) {
      this.$router.push("/affairs" + id);
    },
    runSearch() {
      let query = { ...this.$route.query };
      query["offset"] = 0;
      this.$router.push({
        path: "search",
        query
      });
      store.dispatch(FETCH_AFFAIRS, query);
    },
    getRangeClasses_entry(cellDate, currentDates, classnames) {
      const classes = [];
      const start =
        this.doc_entry_date_start &&
        new Date(this.doc_entry_date_start).setHours(0, 0, 0, 0);
      const end =
        this.doc_entry_date_end &&
        new Date(this.doc_entry_date_end).setHours(0, 0, 0, 0);
      if (
        !/disabled|active|not-current-month/.test(classnames) &&
        start &&
        end &&
        cellDate.getTime() >= start &&
        cellDate.getTime() <= end
      ) {
        classes.push("in-range");
      }
      return classes;
    },
    disabledStartDate_entry(date) {
      return (
        this.doc_entry_date_end &&
        new Date(date).setHours(0, 0, 0, 0) >
          new Date(this.doc_entry_date_end).setHours(0, 0, 0, 0)
      );
    },
    disabledEndDate_entry(date) {
      return (
        this.doc_entry_date_start &&
        new Date(date).setHours(0, 0, 0, 0) <
          new Date(this.doc_entry_date_start).setHours(0, 0, 0, 0)
      );
    },
    getRangeClasses_result(cellDate, currentDates, classnames) {
      const classes = [];
      const start =
        this.doc_result_date_start &&
        new Date(this.doc_result_date_start).setHours(0, 0, 0, 0);
      const end =
        this.doc_result_date_end &&
        new Date(this.doc_result_date_end).setHours(0, 0, 0, 0);
      if (
        !/disabled|active|not-current-month/.test(classnames) &&
        start &&
        end &&
        cellDate.getTime() >= start &&
        cellDate.getTime() <= end
      ) {
        classes.push("in-range");
      }
      return classes;
    },
    disabledStartDate_result(date) {
      return (
        this.doc_result_date_end &&
        new Date(date).setHours(0, 0, 0, 0) >
          new Date(this.doc_result_date_end).setHours(0, 0, 0, 0)
      );
    },
    disabledEndDate_result(date) {
      return (
        this.doc_result_date_start &&
        new Date(date).setHours(0, 0, 0, 0) <
          new Date(this.doc_result_date_start).setHours(0, 0, 0, 0)
      );
    }
  }
};
</script>

<style>
#search {
  margin-right: 10px;
}

/* .search input[type="text"] {
  border-top: 1px solid #4dd0e1;
  border-left: 1px solid #4dd0e1;
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 1px 1px 0 0 #4dd0e1;
} */

/* .active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa,
.active-cyan-2 .fa {
  color: #4dd0e1;
} */
</style>
