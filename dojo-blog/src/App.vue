<template>
	<PromoBar />
	<Navbar />
	<router-view />
</template>

<script>
import PromoBar from './components/PromoBar.vue';
import Navbar from './components/Navbar.vue';

export default {
	name: 'App',
	components: { PromoBar, Navbar },
	setup() {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
