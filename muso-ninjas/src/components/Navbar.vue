<template>
	<div class="navbar">
		<nav>
			<img src="@/assets/ninja.png" alt="logo" />
			<h1>
				<router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
			</h1>
			<div class="links">
				<div v-if="user">
					<router-link :to="{ name: 'CreatePlaylist' }"
						>Create Playlist</router-link
					>
					<router-link :to="{ name: 'UserPlaylists' }"
						>My Playlists</router-link
					>
					<button @click="handleLogout">Log Out</button>
				</div>
				<div v-if="!user">
					<router-link class="btn" :to="{ name: 'Login' }">Log In</router-link>
					<router-link class="btn" :to="{ name: 'Signup' }"
						>Sign Up</router-link
					>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';

export default {
	setup() {
		const router = useRouter();
		const { logout } = useLogout();
		const { user } = getUser();

		const handleLogout = async () => {
			await logout();
			router.push({ name: 'Login' });
		};

		return { handleLogout, user };
	},
};
</script>

<style scoped>
.navbar {
	padding: 16px 10px;
	margin-bottom: 60px;
	background: white;
}
nav {
	display: flex;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}
nav h1 {
	margin-left: 20px;
}
nav .links {
	margin-left: auto;
}
nav .links a,
button {
	margin-left: 16px;
	font-size: 14px;
}
nav img {
	max-width: 60px;
}
</style>
