<template>
	<div class="container">
		<Navbar />
	</div>
</template>

<script>
import { watch } from 'vue';

import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';

export default {
	name: 'Chatroom',
	components: { Navbar },
	setup() {
		const { user } = getUser();
		const router = useRouter();

		watch(user, () => {
			if (!user.value) {
				router.push({ name: 'Welcome' });
			}
		});
	},
};
</script>

<style></style>
