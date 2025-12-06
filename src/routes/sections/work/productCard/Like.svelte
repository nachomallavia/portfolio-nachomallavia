<script>
	import { productIndex, designIndex, favList } from './productCardStore.svelte.js';
	import { browser } from '$app/environment';

	import likeFull from '$lib/images/like-full.svg';
	import likeEmpty from '$lib/images/like-empty.svg';

	let liked = $state(false);
	let favId = $derived(productIndex.value.toString() + designIndex.value.toString());

	$effect(() => {
		if (browser) {
			let favCheck = favList.value.indexOf(favId);
			if (favCheck != -1) {
				liked = true;
			}
		}
	});

	function toggleLike() {
		if (liked) {
			let newList = favList.value.filter((id) => id != favId);
			favList.value = newList;
		} else {
			favList.value = [...favList.value, favId];
		}

		console.log(favList.value);
		liked = !liked;
	}
</script>

<div
	class="like"
	onclick={() => {
		toggleLike();
	}}
>
	<img src={liked ? likeFull : likeEmpty} alt="like" />
</div>

<style>
	div.like {
		cursor: pointer;
	}
	div.like > img {
		width: 40px;
	}
</style>
