<script>
    import {lang} from './configStore';
    import Config from './Config.svelte';
    import ScrollNav from './ScrollNav.svelte';
    import ContactData from './ContactData.svelte';
</script>

<div class="mobile-nav">
    <Config />
    <ScrollNav/>
    <ContactData/>
</div>

<style>
    .mobile-nav{
        background-color: var(--background-color-1);
        color: var(--text-color)
    }
    @media screen and (min-width: 513px){
        .mobile-nav{
            display: none;
        }
    }
</style>