<script>
    import {lang} from '../../configStore';
    import logoFlashcookie from '../../../lib/images/timeline/flashcookie.webp'
    import logoCoupe from '../../../lib/images/timeline/coupe.webp'
    let experience = [
        {   
            date : "May. 2020 - Jul. 2023",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            detailAr: "Director de Operaciones",
            detailUs: "Chief Operating Officer"
        },
        {
            date : "Oct. 2019 - May. 2020",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            detailAr: "Director de producto",
            detailUs: "Product Manager"
        },
        {
            date : "Oct. 2018 - Oct. 2019",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            detailAr: "Director creativo",
            detailUs: "Creative Director"
        },
        {
            date : "May. 2015 - Sept. 2019",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            detailAr: "Director de arte Senior",
            detailUs: "Senior Art Director"
        },
        {
            date : "Oct. 2013 - May. 2015",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            detailAr: "Director de arte Junior",
            detailUs: "Junior Art Director"
        }
        ]
</script>
<div class="data-labels">
    <div class="spot orange"></div><span>{$lang=="ES"?"Trabajo":"Work"}</span>
    <div class="spot blue"></div><span>{$lang=="ES"?"Estudios":"Studies"}</span>
</div>
<div class="timeline-container">
    <div class="timeline">
        <div class=" spot orange"></div>
        {#each experience as item, index}
        <div class="line-segment"></div>
        <div class="relative-container">
            {#if item.type == "Work"}
            {#if index%2!=0 }
                
                <div class="timeline-item right big-offset-left">
                    <div class="timeline-pointer">
                        <div class="big spot orange">
                            {#if item.place == "Flashcookie"}
                            <img src={logoFlashcookie} alt="logo Flashcookie">
                            {:else if item.place == "Coupé"}
                            <img src={logoCoupe} alt="logo Coupé" class="bigger">
                            {/if}
                        </div>
                        <div class="tiny-line orange"></div>
                    </div>
                    <div class="item-description">
                        <h4>{item.date}</h4>
                        <p><a href={item.url} target="blank" class="work">{item.place}</a> - {$lang == "ES"?item.detailAr:item.detailUs}</p>
                    </div>
                </div>
                {:else}
                <div class="timeline-item left big-offset-right">
                    <div class="timeline-pointer">
                        <div class="big spot orange">
                            {#if item.place == "Flashcookie"}
                            <img src={logoFlashcookie} alt="logo Flashcookie">
                            {:else if item.place == "Coupé"}
                            <img src={logoCoupe} alt="logo Coupé" class="bigger">
                            {/if}
                        </div>
                        <div class="tiny-line orange">

                        </div>
                    </div>
                    <div class="item-description">
                        <h4>{item.date}</h4>
                        <p><a href={item.url} target="blank" class="work">{item.place}</a> - {$lang == "ES"?item.detailAr:item.detailUs}</p>
                    </div>
                </div>
                {/if}
            {/if}
        </div>
        {/each}
    </div>

</div>

<style>
    .timeline-container{
        display: flex;
        width: 100%;
        min-height: 100%;
        background-color: var(--background-color);
        align-items: center;
        justify-content: center;
    }
    .timeline{
        width: 100%;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        gap:.25rem;
    }
    .line-segment{
        height: 4rem;
        width:2px;
        background-color: var(--background-color-3);
    }
    
    .data-labels{
        display: flex;
        gap:1rem;
        padding-left: 4rem;
    }
    .spot{
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;

    }
    .big{
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .spot > img{
        width:1.75rem;
    }
    .spot > img.bigger{
        width:2rem;
    }
    .orange{
        background-color: var(--accent-color);
    }
    .blue{
        background-color: var(--secondary-color);
    }
    .tiny-line{
        width: 2rem;
        height: 2px;
    }
    .relative-container{
        width:50%;
    }
    .timeline-item{
        display: flex;
        align-items: center;
        gap:1rem;
    }
    .right{
        flex-direction: row;
        
    }
    .big-offset-left{
        margin-left:50%;
    }

    .left{
        flex-direction: row-reverse;
        

    }
    
    .big-offset-right{
        margin-right:50%;
    }
    .timeline-pointer{
        display: flex;
        align-items: center;
        margin-left:-1.2rem;
    }
    .left > .timeline-pointer{
        flex-direction: row-reverse;
        margin-left:0;
        margin-right: -1.2rem;
    }

    .item-description > p > a{
        text-decoration: none;
        font-weight: 600;
    }
    .left > .item-description{
        text-align: right;
    }
    a.work{
        color:var(--accent-color);
    }
    a.study{
        color: var(--secondary-color)
    }
</style>