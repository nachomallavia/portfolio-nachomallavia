<script>
    import {browser} from '$app/environment';
	import { lang, section, open } from "./configStore";
    import iconMenu from '$lib/images/icon_menu.svg';

    function openMobileMenu(){
		if(browser){
			$open = true;
		}
	}
    $: titleAr = function(){

        switch($section){
        case 'aboutme':
            return 'Acerca de mí'
            break
        case 'work':
            return 'Trabajos';
            break;
        case 'skills':
            return 'Habilidades';
            break;
        case 'experience':
            return 'Experiencia';
            break;
        case 'contact':
            return 'Contacto';
            break;
    }}
    $: titleUs = function(){switch($section){
        case 'aboutme':
            return 'About me'
            break
        case 'work':
            return 'Work';
            break;
        case 'skills':
            return 'Skills';
            break;
        case 'experience':
            return 'Experience';
            break;
        case 'contact':
            return 'Contact';
            break;
    }}
</script>

<div class="mobile-title-toggle">
    <h4>{$lang=="ES"?titleAr():titleUs()}</h4>
    <div class="mobile-menu-toggle" on:click={()=>{openMobileMenu()}}>
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