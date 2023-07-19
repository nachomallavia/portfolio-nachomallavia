<script>
    import {lang, open} from './configStore';
    import MobileConfig from './MobileConfig.svelte';
    import MobileScrollNav from './MobileScrollNav.svelte';
    import MobileContactData from './MobileContactData.svelte';

</script>

<div id="mobile-menu" data-open={$open}>

    <MobileConfig />
    <MobileScrollNav/>
    <MobileContactData/>
</div>

<style>
    #mobile-menu{
        background-color: var(--background-color-1);
        opacity: 96%;
        
        color: var(--text-color);
        width: 100%;
        min-height: 100dvh;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2.5rem;
        position: fixed;
        bottom:100%;
        left:0%;
        z-index: 2500;
        transition: bottom .5s;
    }
    #mobile-menu[data-open="true"]{
        bottom:0;
    }
    /* #mobile-menu::before{
        backdrop-filter: blur(10px);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 50;
    } */
    @media screen and (min-width: 513px){
        #mobile-menu{
            display: none;
        }
        
    }
</style>