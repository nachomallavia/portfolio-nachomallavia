<script>
	import { productIndex, designIndex, favList } from './productCardStore';
	$: favId = $productIndex.toString() + $designIndex.toString();
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import likeFull from '$lib/images/like-full.svg';
	import likeEmpty from '$lib/images/like-empty.svg';

	let liked = false;

	onMount(() => {
		if (browser) {
			let favCheck = $favList.indexOf(favId);
			if (favCheck != -1) {
				liked = true;
			}
		}
	});
	function toggleLike() {
		if (liked) {
			let newList = $favList.filter((id) => {
				id != favId;
			});
			$favList = newList;
		} else {
			$favList.push(favId);
		}

		console.log($favList);
		liked = !liked;
	}
</script>

<div
	class="like"
	on:click={() => {
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
