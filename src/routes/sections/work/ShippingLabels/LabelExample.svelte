<script>
	import LabelTemplate from './LabelTemplate.svelte';
	import { lang } from '../../../configStore.svelte.js';

	let { label = {
		id: 100121,
		shippingTypeId: 1,
		customerName: 'Luis',
		customerLastName: 'Urrieta',
		customerId: 30289122,
		addressStreet: 'Av. Juan B. Justo',
		addressStreetNumber: 1536,
		addressFloor: '6',
		postalCode: '1216',
		neighbourhood: 'Palermo',
		city: 'Capital Federal',
		province: 'Buenos Aires'
	} } = $props();
</script>

<div class="label-container">
	{#if label != undefined}
		<div>
			<LabelTemplate />
		</div>
	{:else}
		<div class="frame">
			<h3>{lang.value === 'ES' ? 'Seleccioná un Id de orden' : 'Select an Order Id'}</h3>
		</div>
	{/if}
</div>
