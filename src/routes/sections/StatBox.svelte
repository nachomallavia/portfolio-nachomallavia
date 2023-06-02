<script>
	export let icon;
	export let alt = '';
	export let title = '';
	export let stat = '';
</script>

<div class="stat-container">
	<img src={icon} {alt} />
	<div class="stat-box">
		<span class="title">{title}</span>
		<h3>{stat}</h3>
	</div>
</div>

<style>
	.stat-container {
		display: flex;
	}
	.stat-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
	}
	span {
		font-size: 1rem;
	}
	h3 {
		font-size: 1.5rem;
	}
</style>
