<script>
    import {lang} from './configStore';
    import MobileConfig from './MobileConfig.svelte';
    import MobileScrollNav from './MobileScrollNav.svelte';
    import MobileContactData from './MobileContactData.svelte';
    export let open = true;
</script>

<div id="mobile-menu" data-open={open}>

    <MobileConfig />
    <MobileScrollNav/>
    <MobileContactData/>
</div>

<style>
    #mobile-menu{
        background-color: var(--background-color-1);
        opacity: 94%;
        backdrop-filter: blur(100px);
        color: var(--text-color);
        width: 100%;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2.5rem;
        position: fixed;
        bottom:100%;
        left:0%;
        z-index: 100;
        transition: bottom .5s;
    }
    #mobile-menu[data-open="true"]{
        bottom:0;
    }
    @media screen and (min-width: 513px){
        #mobile-menu{
            display: none;
        }
        
    }
</style>