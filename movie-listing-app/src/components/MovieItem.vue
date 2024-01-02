<template>
    <div class="movie-item">
        <img :src="movie.Poster" alt="Movie Poster" v-if="movie.Poster !== 'N/A'" />
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object
    }
}
</script>
  
<style>
.movie-item {
    /* Add styles for individual movie items */
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}
</style>
  