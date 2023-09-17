<script>
	import { lang } from '../../../configStore';
	import { labelList } from './labelList.js';
	import { currentLabelId } from '../../../configStore';

	$: label = labelList.find((label) => label.id === $currentLabelId);
	$: currentShippingType = label.shippingTypeId;
</script>

<div id="form-container">
	<form action="?/label" method="POST">
		<div class="field-group">
			<div id="main-select-group">
				<label for="select-id" id="main-label"
					>{$lang === 'ES' ? 'Seleccionar Orden:' : 'Select Order:'}</label
				>
				<select name="OrderID" id="select-id" bind:value={$currentLabelId}>
					{#each labelList as label}
						<option value={label.id}>{label.id}</option>
					{/each}
				</select>
			</div>

			<!-- <label for="select-shipping">{$lang==="ES"?"Tipo de entrega:":"Shipping type:"}</label>
            <select name="shipping-type" id="select-shipping" bind:value={label.shippingTypeId}>
             <option value="1" >Shipnow</option>
             <option value="2" >Flashmoto</option>
             <option value="3" >{$lang==="ES"?"Retiro por Flashcookie":"Store Pickup"}</option>
            </select> -->
		</div>

		<div class="field-group">			
			<div class="field">
				<label for="name">{$lang === 'ES' ? 'Nombre' : 'First name'}</label>
				<input type="text" name="name" bind:value={label.customerName} autocomplete="given-name"/>
			</div>
			<div class="field">
				<label for="last_name">{$lang === 'ES' ? 'Apellido' : 'Last name'}</label>
				<input type="text" name="last_name" bind:value={label.customerLastName} autocomplete="family-name" />
			</div>
			<div class="field phonenumber">
				<label for="phone_number">{$lang === 'ES' ? 'Teléfono' : 'Phone number'}</label>
				<input type="number" name="phone_number" bind:value={label.customerPhone} autocomplete="tel"/>
			</div>
		</div>
		<div class="field-group">
			<div class="field street">
				<label for="address_street_name">{$lang === 'ES' ? 'Calle' : 'Street'}</label>
				<input type="text" name="address_street_name" bind:value={label.addressStreet} autocomplete="street-address"/>
			</div>
			<div class="field number">
				<label for="address_street_number">{$lang === 'ES' ? 'Número' : 'Number'}</label>
				<input type="number" name="address_street_number" bind:value={label.addressStreetNumber} autocomplete="address-line2"/>
			</div>
			<div class="field floor">
				<label for="address_street">{$lang === 'ES' ? 'Depto' : 'floor'}</label>
				<input type="text" name="address_floor" bind:value={label.addressFloor} autocomplete="address-line3" />
			</div>
		</div>
		<div class="field-group">
			<div class="field neighbourhood">
				<label for="address_neighbourhood">{$lang === 'ES' ? 'Localidad' : 'Neighbourhood'}</label>
				<input type="text" name="address_neighbourhood" bind:value={label.neighbourhood} autocomplete="address-level4" />
			</div>
			<div class="field postcode">
				<label for="address_street">{$lang === 'ES' ? 'CP' : 'PC'}</label>
				<input type="number" name="address_postcode" bind:value={label.postalCode} autocomplete="postal-code" />
			</div>
			<div class="field city">
				<label for="address_city">{$lang === 'ES' ? 'Ciudad' : 'city'} </label>
				<input type="text" name="address_city" bind:value={label.city} autocomplete=""/>
			</div>
		</div>
	</form>
</div>

<style>
	
	#main-select-group {
		display: flex;
		gap: 2rem;
		align-items: baseline;
		
	}
	#form-container{
		max-width: 400px;
	}
	label {
		margin-top: 1rem;
		font-size: 0.8rem;
	}
	#main-label {
		font-size: 1rem;
	}
	.field-group {
		display: flex;
		gap: 1rem;
	}
	.field {
		display: flex;
		flex-direction: column;
		width: 30%;
	}
	input {
		/* max-width: 20rem; */
		margin-top: 0.25rem;
		padding: 0.5rem;
		padding-bottom: 0.25rem;
		font-size: 1rem;
		border: 0px solid var(--background-color-3);
		border-bottom: 1px solid var(--background-color-3);
		background-color: var(--background-color-1);
		color: var(--text-color);
	}
	select {
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--background-color);
		border: 1px solid var(--background-color-3);
		color: var(--text-color);
		font-size: 1rem;
		overflow: hidden;
		/* width: 9rem; */
	}
	@media screen and (max-width:512px){
		#form-container{
			width: 100%;	
					
		}
		.field-group {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: .25rem;
		}
		.field{
			/* flex-basis: 100px; */
		}
		 .field.street{
			min-width: 140px;			
		}
		
		.field.number{
			max-width: 60px;
			flex-shrink: 10;
		}
		.field.floor{
			max-width: 40px;
			flex-shrink: 10;
		}
		.field.neighbourhood{
			min-width: 80px;
		}
		.field.postcode{
			max-width: 40px;
			flex-shrink: 10;
		}
		.field.city{
			min-width: 120px;
		}
		input{
			padding:0;
		}
		label{
			font-size: .75rem;
		}
		
	}
</style>
