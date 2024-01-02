<template>
  <div id="app">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <movie-list v-if="movies" :movies="movies"></movie-list>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    MovieList
  },
  setup() {
    const movies = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchMovies = async () => {
      loading.value = true;
      const apiUrl = 'http://www.omdbapi.com/?s=Batman&apikey=206d3762';

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        movies.value = data.Search;
      } catch (err) {
        error.value = err.message;
        console.error('Error fetching movies:', err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchMovies);

    return { movies, error, loading };
  }
}
</script>

<style>
/* App component styling goes here */
</style>
