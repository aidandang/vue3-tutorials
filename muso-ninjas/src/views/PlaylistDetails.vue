<template>
	<div v-if="error" class="error">{{ error }}</div>
	<div v-if="document" class="playlist-details">
		<div class="playlist-info">
			<div class="cover">
				<img :src="document.coverUrl" alt="" />
			</div>
			<h2>{{ document.title }}</h2>
			<p class="username">Created by {{ document.userName }}</p>
			<p class="description">{{ document.description }}</p>
			<button v-if="ownership" @click.prevent="handleDelete">
				Delete Playlist
			</button>
		</div>
		<div class="song-list">
			<div v-if="!document.songs.length">
				No songs have been added to this playlist yet.
			</div>
			<div v-for="song in document.songs" :key="song.id" class="single-song">
				<div class="details">
					<h3>{{ song.title }}</h3>
					<p>{{ song.artist }}</p>
				</div>
				<button v-if="ownership" @click.prevent="handleClick(song.id)">
					Delete
				</button>
			</div>
			<AddSong v-if="ownership" :document="document" />
		</div>
	</div>
</template>

<script>
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import { computed } from '@vue/reactivity';
import useStorage from '@/composables/useStorage';
import { useRouter } from 'vue-router';
import AddSong from '../components/AddSong.vue';

export default {
	name: 'PlaylistDetails',
	props: ['id'],
	components: { AddSong },
	setup(props) {
		const { error, document } = getDocument('playlists', props.id);
		const { user } = getUser();
		const { deleteDoc, updateDoc } = useDocument('playlists', props.id);
		const { deleteImage } = useStorage();
		const router = useRouter();

		const ownership = computed(() => {
			return (
				document.value && user.value && user.value.uid == document.value.userId
			);
		});

		const handleDelete = async () => {
			await deleteImage(document.value.filePath);
			await deleteDoc();

			router.push({ name: 'Home' });
		};

		const handleClick = async (id) => {
			const songs = document.value.songs.filter((song) => song.id != id);

			await updateDoc({ songs });
		};

		return { document, error, ownership, handleDelete, handleClick };
	},
};
</script>

<style>
.playlist-details {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 80px;
}
.cover {
	overflow: hidden;
	border-radius: 20px;
	position: relative;
	padding: 160px;
}
.cover img {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100%;
	min-height: 100%;
	max-width: 100%;
	max-height: 100%;
}
.playlist-info {
	text-align: center;
}
.playlist-info h2 {
	text-transform: capitalize;
	font-size: 28px;
	margin-top: 20px;
}
.playlist-info p {
	margin-bottom: 20px;
}
.username {
	color: #999;
}
.description {
	text-align: left;
}
.single-song {
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-self: center;
	border-bottom: 1px dashed var(--secondary);
	margin-bottom: 20px;
}
</style>
