<template>
  <div :class="['film-id-page', isSearch ? 'block-none' : '']">
    <FilmCardBig :infoFilmId="infoFilmId" />
    <RecommendationFilms />
  </div>

  <MyMain
    :allFilms="allFilms"
    ref="main"
    :class="{
      'block-none': !isSearch,
    }"
  />
</template>

<script>
import MyMain from "@/pages/MainPage.vue";
import FilmCardBig from "@/components/FilmCardBig.vue";
import FilmCardSmall from "@/components/FilmCardSmall.vue";
import RecommendationFilms from "@/components/recommendationSimilarFilms.vue";
export default {
  components: {
    MyMain,
    FilmCardBig,
    FilmCardSmall,
    RecommendationFilms,
  },
  data() {
    return {
      infoFilmId: {},
      filmId: this.$route.params.id,
      isSearch: false,
    };
  },
  props: {
    allFilms: {
      type: Array,
      default: () => [],
    },
    searchNameFilm: String,
  },
  methods: {
    getInfoFilm() {
      this.infoFilmId = this.allFilms.filter(
        (f) => f.id === parseInt(this.filmId)
      )[0];
    },
  },
  watch: {
    allFilms() {
      this.getInfoFilm();
    },
    $route(to, from) {
      this.filmId = this.$route.params.id;
      this.getInfoFilm();
      // window.location.reload();
    },
    searchNameFilm() {
      let searchNameFilm = this.searchNameFilm;
      searchNameFilm = searchNameFilm.trim();
      searchNameFilm = searchNameFilm.toLowerCase();
      if (searchNameFilm !== "") {
        this.isSearch = true;
        this.$refs.main.searchFilms(searchNameFilm);
      } else this.isSearch = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
.film-id-page {
  padding: 50px 30px !important;
  width: 100%;
}
.block-none {
  display: none;
}
</style>