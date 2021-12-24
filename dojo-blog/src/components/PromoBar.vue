<template>
	<a
		href="/safe-deals"
		:style="{ backgroundImage: `url(${bg})` }"
		class="block flex p-4 bg-center bg-no-repeat bg-cover w-full items-center justify-center flex-col font-black text-white text-xl text-center fixed top-0 z-50 hover:underline"
	>
		20% OFF - TOUCH-FREE DESIGN, ORDERING AND INSTALLATION
	</a>
</template>

<script>
import bg from '../assets/img/bkgr.jpg';

export default {
	setup() {
		return { bg };
	},
};
</script>

<style></style>
