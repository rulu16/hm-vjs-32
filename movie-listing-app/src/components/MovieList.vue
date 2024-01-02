<template>
  <div class="movie-list">
    <movie-item v-for="movie in movies" :key="movie.imdbID" :movie="movie"></movie-item>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  props: {
    movies: Array
  }
}
</script>

<style>
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 1200px;
  margin: auto;
}
</style>
