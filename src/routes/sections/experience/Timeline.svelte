<script>
    import {lang} from '../../configStore';
    import logoFlashcookie from '../../../lib/images/timeline/flashcookie.webp'
    import logoCoupe from '../../../lib/images/timeline/coupe.webp'
    export let studies = false;
    
    
    let studyExperience = [
        {   
            date : "Nov. 2020 - Jun. 2021",
            type: "Study",
            place: "Digital House",
            url:"https://www.digitalhouse.com",
            titleAr: "Programador Fullstack Jr.",
            titleUs: "Jr. Fullstack Developer",
            detailAr: "Aprendí a programar en Javascript con NodeJS + Express en back-end y React en front-end",
            detailUs: "I learned Javascript programming with NodeJS and Express on the back-end and React on the front-end"
        }
    ]
    let workExperience = [
        
        {   
            date : "May. 2020 - Jul. 2023",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director de Operaciones",
            titleUs: "Chief Operating Officer",
            detailAr: "Lideré un equipo de 16 personas coordinando el desarrollo de features, supervisando la relación con clientes, ideando y optimizando el proceso de producción On-demand de Merchandise. ",
            detailUs: "I led a team of 16 people, coordinating the development of new features, supervising customer relations, divising and improving the production process for On-demand Merchandise."
        },
        {
            date : "Oct. 2019 - May. 2020",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director de producto",
            titleUs: "Product Manager",
            detailAr: "Me enfoqué en el diseño y supervisión del desarrollo de una plataforma de E-commerce de On-demand Merchandise. Trabajé junto al equipo de desarrollo planificando features, diseñando experiencias de usuario y programando demos y bocetos de estos avances. ",
            detailUs: "I focused on designing and supervising the development of an e-commerce platform for On-demand Merchandise. I worked together with a team of developers, planning new features, designing the User Experience and coding demos and drafts of these improvements."
        },
        {
            date : "Oct. 2018 - Oct. 2019",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director creativo",
            titleUs: "Creative Director",
            detailAr: "Lideré el equipo de diseño de la empresa, supervisando la creación de contenidos para la plataforma y sus redes sociales. También diseñé la primera iteración del front-end de Flashcookie",
            detailUs: "I led the company's design team, supervising content creation for our platform and social networks. I also designed the first iteration of Flashcookie's front-end "
        },
        {
            date : "May. 2015 - Sept. 2019",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            titleAr: "Director de arte Senior",
            titleUs: "Senior Art Director",
            detailAr: "Diseñé y produje piezas de comunicación gráfica para todo tipo de medios. Trabajé junto a diseñadores gráficos, fotógrafos y animadores en campañas publicitarias para diferentes clientes de la agencia.",
            detailUs: "I designed and produced communication pieces for every type of media. I worked together with graphic designers, photographers and animators on advertising campaigns for the agency's clients"
        },
        {
            date : "Oct. 2013 - May. 2015",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            titleAr: "Director de arte Junior",
            titleUs: "Junior Art Director",
            detailAr: "Diseñé piezas de comunicación digital para las marcas con las que trabajaba la agencia. Principalmente posteos para redes sociales, mailings y banners web.",
            detailUs: "I designed digital communication pieces for the brands that worked with our agency. I Mainly focused on social media posts, e-mail marketing and web banners."
        }
        ]
    let experience = workExperience;
   
    $:if(studies){
            experience = studyExperience;
        } else {
            experience = workExperience;
        }
    ;
</script>

<div class="timeline-container">
    
    <div class="timeline">
        {#if studies == false}
            <div class=" spot orange"></div>
            {#each experience as item, index}
            
                <div class="line-segment"></div>
                <div class="relative-container">            
                    {#if index%2!=0 }                    
                        <div class="timeline-item right big-offset-left">
                            <div class="timeline-pointer">
                                <div class="spot orange">
                                    <!-- {#if item.place == "Flashcookie"}
                                    <img src={logoFlashcookie} alt="logo Flashcookie">
                                    {:else if item.place == "Coupé"}
                                    <img src={logoCoupe} alt="logo Coupé" class="bigger">
                                    {/if} -->
                                </div>
                                <div class="tiny-line orange"></div>
                            </div>
                            <div class="item-description">
                                <h4>{item.date}</h4>
                                <p class="experience-title"><a href={item.url} target="blank" class="work">{item.place}</a> - {$lang == "ES"?item.titleAr:item.titleUs}</p>
                                <p class="detail">{$lang == "ES"?item.detailAr:item.detailUs}</p>
                            </div>
                        </div>
                    {:else}
                        <div class="timeline-item left big-offset-right">
                            <div class="timeline-pointer">
                                <div class=" spot orange">
                                    <!-- {#if item.place == "Flashcookie"}
                                    <img src={logoFlashcookie} alt="logo Flashcookie">
                                    {:else if item.place == "Coupé"}
                                    <img src={logoCoupe} alt="logo Coupé" class="bigger">
                                    {/if} -->
                                </div>
                                <div class="tiny-line orange"></div>
                            </div>
                            <div class="item-description">
                                <h4>{item.date}</h4>
                                <p class="experience-title"><a href={item.url} target="blank" class="work">{item.place}</a> - {$lang == "ES"?item.titleAr:item.titleUs}</p>
                                <p class="detail">{$lang == "ES"?item.detailAr:item.detailUs}</p>
                            </div>
                        </div>
                    {/if}
                    
                </div>
                {/each}
            {:else}
            {#each studyExperience as item, index}
            
            <div class="line-segment"></div>
            <div class="relative-container">            
                {#if index%2!=0 }                    
                    <div class="timeline-item right big-offset-left">
                        <div class="timeline-pointer">
                            <div class="spot blue">
                                <!-- {#if item.place == "Flashcookie"}
                                <img src={logoFlashcookie} alt="logo Flashcookie">
                                {:else if item.place == "Coupé"}
                                <img src={logoCoupe} alt="logo Coupé" class="bigger">
                                {/if} -->
                            </div>
                            <div class="tiny-line blue"></div>
                        </div>
                        <div class="item-description">
                            <h4>{item.date}</h4>
                            <p class="experience-title"><a href={item.url} target="blank" class="study">{item.place}</a> - {$lang == "ES"?item.titleAr:item.titleUs}</p>
                            <p class="detail">{$lang == "ES"?item.detailAr:item.detailUs}</p>
                        </div>
                    </div>
                {:else}
                    <div class="timeline-item left big-offset-right">
                        <div class="timeline-pointer">
                            <div class=" spot blue">
                                <!-- {#if item.place == "Flashcookie"}
                                <img src={logoFlashcookie} alt="logo Flashcookie">
                                {:else if item.place == "Coupé"}
                                <img src={logoCoupe} alt="logo Coupé" class="bigger">
                                {/if} -->
                            </div>
                            <div class="tiny-line blue"></div>
                        </div>
                        <div class="item-description">
                            <h4>{item.date}</h4>
                            <p class="experience-title"><a href={item.url} target="blank" class="study">{item.place}</a> - {$lang == "ES"?item.titleAr:item.titleUs}</p>
                            <p class="detail">{$lang == "ES"?item.detailAr:item.detailUs}</p>
                        </div>
                    </div>
                {/if}
                
            </div>
            {/each}
                
            {/if}
    </div>
</div>

            

    



<style>
    
    .timeline-container{
        
        background-color: var(--background-color);
     
    }
    .timeline{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        padding-block:1rem;
        padding-left: 4rem;
    }
    .data-labels > button {
        display: flex;
        gap: .75rem;
        padding-inline: .75rem;
        padding-block:.5rem;
        border: none;
        border-bottom: 1px solid var(--background-color-3);
        /* border-radius: .5rem; */
        background-color: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
    }
    button.selected{
        border-bottom: 1px solid var(--accent-color);
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
        width:80%;
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
        margin-left: calc(50% + .75rem);
    }

    .left{
        flex-direction: row-reverse;  

    }
    
    .big-offset-right{
        margin-right: calc(50% + .5rem);
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
    .item-description > h4{
        font-size: 1.25rem;
    }
    .experience-title{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;

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