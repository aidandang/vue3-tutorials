<template>
	<div class="home">
		<h1>Home</h1>
		<PostList v-if="showPosts" :posts="posts" />
		<button @click="showPosts = !showPosts">toggle posts</button>
		<button @click="posts.pop()">delete a post</button>
	</div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { ref } from 'vue';

export default {
	name: 'Home',
	components: { PostList },
	setup() {
		const posts = ref([
			{
				title: 'Welcome to the blog',
				body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, reiciendis ullam. Id tempore libero, nisi molestiae ipsa deserunt, eos iure architecto odio voluptatibus accusantium ea amet? Exercitationem saepe magni in.',
				id: 1,
			},
			{
				title: 'Top 5 CSS tips',
				body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, reiciendis ullam. Id tempore libero, nisi molestiae ipsa deserunt, eos iure architecto odio voluptatibus accusantium ea amet? Exercitationem saepe magni in.',
				id: 2,
			},
		]);

		const showPosts = ref(true);
		return { posts, showPosts };
	},
};
</script>
