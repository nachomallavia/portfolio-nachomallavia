<script>
    import {browser} from '$app/environment';
	import { lang, section, open } from "./configStore.svelte.js";
    import iconMenu from '$lib/images/icon_menu.svg';

    function openMobileMenu(){
		if(browser){
			open.value = true;
		}
	}

    let titleAr = $derived(function(){
        switch(section.value){
        case 'aboutme':
            return 'Acerca de mí'
        case 'work':
            return 'Trabajos';
        case 'skills':
            return 'Habilidades';
        case 'experience':
            return 'Experiencia';
        case 'contact':
            return 'Contacto';
        default:
            return 'Acerca de mí';
    }});

    let titleUs = $derived(function(){
        switch(section.value){
        case 'aboutme':
            return 'About me'
        case 'work':
            return 'Work';
        case 'skills':
            return 'Skills';
        case 'experience':
            return 'Experience';
        case 'contact':
            return 'Contact';
        default:
            return 'About me';
    }});
</script>

<div class="mobile-title-toggle">
    <h4>{lang.value=="ES"?titleAr():titleUs()}</h4>
    <div class="mobile-menu-toggle" onclick={()=>{openMobileMenu()}}>
        <button><img src={iconMenu} alt="Menu"></button>
    </div>
</div>

<style>
    .mobile-title-toggle{
		position: fixed;
		top:0;
		left:0;
		z-index: 90;
		width: 100%;
		background: var(--gradient-fade-1);
		color: var(--text-color);
		display: flex;
		justify-content: space-between;
        align-items: center;
		padding-block:1rem;
		padding-inline: 1.5rem;

	}
    h4{
        z-index: 110;
        text-transform: uppercase;
        font-size: 1rem;
    }
	.mobile-menu-toggle > button{
		background: none;
		height: 100%;
		border: none;
		border-radius: 50%;
	}
	.mobile-menu-toggle > button:active{
		background-color: var(--background-color-2);
	}
	.mobile-menu-toggle > button > img{
		height: 40px;
	}
    @media screen and (min-width: 513px) {
		.mobile-title-toggle{
			display: none;
		}
	}
</style>
