<script>
	import { browser } from '$app/environment';
	import { beforeUpdate, onMount } from 'svelte';
	import { labelList } from './labelList.js';
	import { lang, currentLabelId } from '../../../configStore';
	$: label = labelList.find((order) => order.id === $currentLabelId);

	export let runLabelUpdate = false;

	$: if (runLabelUpdate) {
		setupLabel();
		fetchLabel(fullLabel);
	}

	let labelHeader = ``;
	let labelCode = ``;
	let labelDetail = ``;
	let labelCustomer = ``;
	let labelClose = `^XZ`;
	let fullLabel = ``;
	let loading = true;

	onMount(() => {
		setupLabel();
		fetchLabel(fullLabel);
	});
	beforeUpdate(() => {
		setupLabel();
		fetchLabel(fullLabel);
	});

	export function setupLabel() {
		if (label != undefined) {
			if (label.shippingTypeId === 1) {
				labelHeader = `^XA^ll800 ^CF0,48,55 ^FO20,30^FD^FDshipnow^FS ^BY2,3,80 ^CF0,22 ^FO20,100^FDDireccion: ^FS
                ^CFA,22 ^FO120, 102^FDAv. Constituyentes 2995, Deposito J2^FS ^FO20,140^FDCiudad de Buenos Aires
                - CP 1427^FS^CFP ^FO0,220^GB1000,0,2^FS ^CF0,22 ^FO20,250^FDRemitente:^FS ^CFA,22
                ^FO130,252^FDFlashcookie^FS ^CF0,22 ^FO20,300^FDTienda:^FS ^CFA,22 ^FO100,302^FDPedidos
                Manuales^FS `;
				labelDetail = `^CF0,25 ^FO20,380^FDOrder ${label.id}^FS ^CF0,22
                ^FO20,460^FDBultos:^FS ^CFA,22 ^FO90,462^FD1/1^FS ^CF0,22 ^FO260,460^FDPeso:^FS ^CFA,22
                ^FO320,462^FD180 grs^FS ^CF0,22 ^FO520,460^FDEnvio puerta a puerta^FS`;
				labelCode = `^CF0,100 ^FO0,580^FB815,1,0,C^FH_\^FDSN-N-${
					label.id.toString()[label.id.toString().length - 1]
				}^FS ^CFR
                ^FO0,700^FB815,1,0,C^FH\\^FDSHIPNOW^FS ^FO166 ,750^BC^FD5e1e48c48812660f-1^FS
                ^FO0,900^GB1000,0,2^FS `;
			} else if (label.shippingTypeId === 2) {
				labelHeader = `^XA^ll800 ^CF0,60,72 ^FO20,30^FD^FDENVIO FLASHMOTO^FS ^BY2,3,80 ^CF0,22 ^FO20,100^FDDireccion: ^FS
                ^CFA,22 ^FO120, 102^FDCalifornia 2082, 116D ^FS ^FO20,140^FDCiudad de Buenos Aires 
                - CP 1289^FS^CFP ^FO0,220^GB1000,0,2^FS `;
				labelDetail = `^CF0,55 ^FO225,250^FDOrder ${label.id}^FS `;
				labelCode = `^FO210,350^BQN,2,10^FDhttps://admin.flashcookieapi.com/orders/${label.id}^FS`;
			} else if (label.shippingTypeId === 3) {
				labelHeader = `^XA^ll800 ^CF0,48,55 ^FO20,30^FD^FDRETIRO X FLASHCOOKIE^FS ^BY2,3,80 ^CF0,22 ^FO20,100^FDDireccion: ^FS
                ^CFA,22 ^FO120, 102^FDCalifornia 2082, 116D ^FS ^FO20,140^FDCiudad de Buenos Aires 
                - CP 1289^FS^CFP ^FO0,220^GB1000,0,2^FS `;
				labelDetail = `^CF0,55 ^FO225,250^FDOrder ${label.id}^FS `;
				labelCode = `^FO210,350^BQN,2,10^FDhttps://admin.flashcookieapi.com/orders/${label.id}^FS`;
			}
			labelCustomer = `^CF0,22^FO20,940^FDDestinatario:^FS ^CFA,28 ^CFA,22
            ^FO140,942^FD${label.customerName} ${
				label.customerLastName
			}^FS ^CF0, 30 ^CF0,22 ^FO20,990^FDSucursal:^FS ^CFA,28 ^CFA,22
            ^FO120,992^FD${
							label.shippingTypeId === 3 ? 'Barracas' : '-'
						}^FS ^CF0, 30 ^CF0,22 ^FO520,940^FDTelefono:^FS ^CFA,28 ^CFA,22
            ^FO610,942^FD${
							label.customerPhone
						}^FS ^CF0,30 ^CF0,22 ^FO20,1040^FDDireccion:^FS ^CFA,28 ^CFA,22
            ^FO120,1042^FD${label.addressStreet} ${label.addressStreetNumber}, ${
				label.addressFloor
			}^FS ^CF0,22 ^FO20,1090^FDCiudad:^FS ^CFA,22
            ^FO100,1092^FD${label.city || 'Buenos Aires'} - ${
				label.postalCode || 1289
			}^FS ^CF0,22 ^FO20,1140^FDReferencia:^FS
            ^CFA,22 ^FO140,1142^FD-^FS`;
		}
		fullLabel = labelHeader + labelDetail + labelCode + labelCustomer + labelClose;
		return fullLabel;
	}
	export async function test() {
		setTimeout(() => {
			console.log('async component tested');
		}, 1500);
	}
	export async function fetchLabel(fullLabel = '') {
		try {
			loading = true;
			let res = await fetch('https://label-api-proxy.onrender.com/label', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: fullLabel
			});
			let labelImageBlob = await res.json();
			console.log(labelImageBlob);
			if (browser) {
				let newImg = document.createElement('img');
				newImg.src = URL.createObjectURL(labelImageBlob);
				newImg.style['maxWidth'] = '400px';
				document.querySelector(`#label-text`).replaceChildren(newImg);
				loading = false;
				runLabelUpdate = false;
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<style>
</style>
