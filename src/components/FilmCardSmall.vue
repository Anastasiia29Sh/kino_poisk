<template>
  <div class="cardFilm" :id="film.id">
    <div class="card" @click="goInfoFilm(film.id)">
      <p class="rating">{{ film.rating.imdb }}</p>
      <img :src="film.poster.url" class="card-img-top" alt="" />
      <div class="card-body">
        <h5
          class="card-title"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :title="film.name"
        >
          {{ film.name }}
        </h5>
        <p class="card-text">{{ film.year }}, {{ film.movieLength }} мин</p>
      </div>
    </div>
    <div class="BookmarksEstimates">
      <p class="delete" @click="delBookmarks(film.id)">X</p>
      <p
        class="myEstimates"
        :class="{
          myEstimatesLike: allLikes.includes(film.id),
          myEstimatesDislike: allDislikes.includes(film.id),
        }"
      ></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FilmCardSmall",
  data() {
    return {
      isSearch: false,
    };
  },
  props: {
    film: Object,
  },
  computed: {
    ...mapState({
      allBookmarks: (state) => state.businessLogicBookmarks.bookmarks,
      allLikes: (state) => state.businessLogicLike.like,
      allDislikes: (state) => state.businessLogicDislike.dislike,
    }),
  },
  methods: {
    ...mapActions({
      deleteBookmarks: "deleteBookmarks",
    }),
    delBookmarks(idFilm) {
      this.deleteBookmarks(idFilm);
      document.getElementById(idFilm).style.display = "none";
    },
    goInfoFilm(idFilm) {
      this.isSearch = false;
      this.$root.searchNameFilm = "";
      document.getElementById("search").value = "";
      this.$router.push(`/kino_poisk/film/${idFilm}`);
    },
  },
};
</script>


<style scoped lang="scss">
$bg: #e58a00;
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;

.cardFilm {
  display: flex;
  flex-direction: column;
  position: relative;
}
.delete {
  display: none;
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: #00000083;
  border-radius: 15%;
  padding: 2px 7px;
  font-size: 14px;
  &:hover {
    background-color: #000000;
    border: 1px solid $bg;
  }
}
.myEstimates {
  display: none;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 25px;
  height: 25px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.myEstimatesLike {
  background-image: url(../assets/like1.png);
}
.myEstimatesDislike {
  background-image: url(../assets/dislike1.png);
}

.card:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(229, 138, 0, 1);
  -moz-box-shadow: 0px 0px 10px 5px rgba(229, 138, 0, 1);
  box-shadow: 0px 0px 10px 5px rgba(229, 138, 0, 1);
}
.card-body {
  padding: 5px;
  width: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
  h5 {
    color: #fff;
    font-size: 16px;
    cursor: default;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 14px;
    font-style: italic;
    color: #c5c5c5;
    margin-top: -5px;
  }
}
.card {
  border: none;
  .rating {
    position: absolute;
    padding: 2px 7px;
    font-size: 14px;
    color: #fff;
    background-color: $bg;
  }
}

@media screen and (max-width: $sm) {
  .card-body {
    h5 {
      font-size: 10px;
    }
    p {
      font-size: 8px;
    }
  }
  .card {
    .rating {
      font-size: 10px;
    }
  }
}

@media screen and (min-width: $sm) and (max-width: $md) {
  .card-body {
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
  .card {
    .rating {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: $md) and (max-width: $xl) {
  .card-body {
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>
