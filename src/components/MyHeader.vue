<template>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top header">
    <div class="container-fluid">
      <router-link
        to="/kino_poisk/"
        class="navbar-brand"
        @click="cleanSearchInput"
      >
        <img src="../assets/logo_kinopoisk.png" alt="" />
      </router-link>
      <router-link
        to="/kino_poisk/"
        class="navbar-brand mylogo"
        @click="cleanSearchInput"
        >КиноПоиск</router-link
      >
      <button
        class="navbar-toggle navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMain"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link
              to="/kino_poisk/"
              class="nav-link"
              @click="cleanSearchInput"
              >Главная</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/kino_poisk/BookmarksEstimates"
              class="nav-link"
              @click="cleanSearchInput"
              >Закладки|Оценки</router-link
            >
          </li>
        </ul>
      </div>

      <div class="d-none d-md-block search-film">
        <FormSearch @search="getNameFilm" />
      </div>
    </div>
  </nav>
  <div class="d-block d-md-none search-film search-film-small">
    <FormSearch @search="getNameFilm" />
  </div>
</template>

<script>
import FormSearch from "@/components/FormSearch.vue";
export default {
  name: "MyHeader",
  components: {
    FormSearch,
  },
  methods: {
    getNameFilm(nameFilm) {
      this.$emit("searchFilms", nameFilm);
    },
    cleanSearchInput() {
      this.getNameFilm("");
      document.getElementById("search").value = "";
    },
  },
};
</script>

<style scoped lang="scss">
$bg: #022a37;
$bg2: #e58a00;
$fontNav: 16px;
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
nav.header {
  padding: 20px 30px !important;
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: $fontNav;
  a {
    color: #fff !important;
    font-size: 18px;
  }
  .mylogo {
    font-size: 22px;
    font-weight: bold;
    margin-right: 3%;
    margin-left: -5px;
  }
  button:focus {
    box-shadow: none;
    border: 1px solid $bg2;
  }
  @media screen and (min-width: $md) and (max-width: $xl) {
    a {
      font-size: 16px;
    }
    .mylogo {
      font-size: 20px;
    }
  }
}
.navbar-collapse {
  text-align: end;
}
// поиск
.search-film-small {
  padding: 20px 30px !important;
  margin: 0 auto;
  display: block;
  width: 100%;
  margin-bottom: -20px;
}
</style>