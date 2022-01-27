<template>
  <div class="container">
    <mdb-masonry horizontal>
      <mdb-masonry-item
        :itemStyle="{ width: '40%', padding: '5px' }"
        v-for="(v, i) in get_text(affair, fields)"
        :key="i"
      >
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title tag="h6">{{ i }}</mdb-card-title>
            <mdb-card-text>{{ v }}</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </mdb-masonry-item>

      <mdb-masonry-item
        :itemStyle="{ width: '60%', padding: '10px' }"
        v-for="(v, i) in get_array(affair, fields)"
        :key="i"
      >
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>{{ i }}</mdb-card-title>
          </mdb-card-body>
          <mdb-list-group>
            <mdb-list-group-item v-for="(val, idx) in v" :key="idx">{{
              val
            }}</mdb-list-group-item>
          </mdb-list-group>
        </mdb-card>
      </mdb-masonry-item>

      <mdb-masonry-item
        :itemStyle="{ width: '100%', padding: '10px' }"
        v-for="(v, i) in get_acts(affair, fields)"
        :key="i"
      >
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title>{{ i }}</mdb-card-title>
            <mdb-card-text v-html="v"></mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </mdb-masonry-item>
    </mdb-masonry>
  </div>
</template>

<script>
import {
  mdbMasonry,
  mdbMasonryItem,
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbCardHeader,
  mdbCardFooter,
  mdbListGroup,
  mdbListGroupItem
} from "mdbvue";
import { mapGetters } from "vuex";
// import marked from "marked";
import store from "@/store";
// import RwvArticleMeta from "@/components/ArticleMeta";
// import RwvComment from "@/components/Comment";
// import RwvCommentEditor from "@/components/CommentEditor";
// import RwvTag from "@/components/VTag";
import { FETCH_AFFAIR, FETCH_AFFAIR_FIELDS } from "@/store/actions.type";

export default {
  name: "rwv-article",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    mdbMasonry,
    mdbMasonryItem,
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbCardHeader,
    mdbCardFooter,
    mdbListGroup,
    mdbListGroupItem
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_AFFAIR, to.params.slug),
      store.dispatch(FETCH_AFFAIR_FIELDS)
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["affair", "fields", "currentUser", "isAuthenticated"])
  },
  methods: {
    get_text(content, fields) {
      let res = {};

      for (const key in content) {
        if (
          content[key] &&
          fields[key] &&
          !Array.isArray(content[key]) &&
          content[key].length < 200
        ) {
          res[fields[key]] = content[key];
        }
      }

      return res;
    },
    get_array(content, fields) {
      let res = {};

      for (const key in content) {
        if (
          content[key] &&
          fields[key] &&
          Array.isArray(content[key]) &&
          content[key].length > 0
        ) {
          res[fields[key]] = content[key];
        }
      }

      return res;
    },
    get_acts(content, fields) {
      let res = {};

      for (const key in content) {
        if (
          content[key] &&
          fields[key] &&
          !Array.isArray(content[key]) &&
          content[key].length >= 200
        ) {
          res[fields[key]] = content[key];
        }
      }

      return res;
    }
  }
};

// <template>
//   <div class="container">
//     <mdb-container>
//     <div class="home-tag">{{ slug }}</div>

//     <div class="home-tag">affair :{{ affair }}</div>

//     <div class="home-tag">fields :{{ fields }}</div>
//   </mdb-container>
//   </div>
// </template>
</script>
