<script>
    import {lang} from '../../configStore.svelte.js';    
    let { studies = false } = $props();
    let lineColor = $state('orange');
    let textColor = $state('orangeText');

    let studyExperience = [
        {   
            dateAr: "Noviembre 2020 - Junio 2021",
            dateUs: "November 2020 - June 2021",
            type: "Study",
            place: "Digital House",
            url:"https://www.digitalhouse.com",
            titleAr: "Programación Fullstack Jr.",
            titleUs: "Jr. Fullstack Development",
            detailAr: "Aprendí a programar en Javascript con NodeJS + Express en back-end y React en front-end.",
            detailUs: "I learned Javascript programming with NodeJS and Express on the back-end and React on the front-end."
        },
        {
            dateAr:'Febrero 2019 - Diciembre 2019',    
            dateUs:'February 2019 - December 2019',
            type: "Study",
            place:"Acámica",
            url:"https://www.acamica.com",
            titleAr:"Diseño UX/UI",
            titleUs:"UX/UI Design",
            detailAr: "Aprendí a de diseñar alrededor de las necesidades del Usuario y las ventajas de iterar en baja fidelidad. ",
            detailUs: "I learned the process of designing around Users needs and the advantages of iterating in low fidelity."
        },
        {
            dateAr:'Abril 2018 - Diciembre 2018',    
            dateUs:'April 2018 - December 2018',
            type: "Study",
            place:"Escuela Relacional",
            url:"https://www.escuelarelacional.com",
            titleAr:"Dirección de arte II",
            titleUs:"Art direction II",
            detailAr: "Aprendí a apoyarme en nociones de morfología, composición, teoría del color y tipografía en pos de comunicar mis ideas de manera efectiva. ",
            detailUs: "I learned to use morphology, composition, color theory and typography to communicate my own ideas effectively."
        },
        {
            dateAr:'Abril 2017 - Diciembre 2017',    
            dateUs:'April 2017 - December 2017',
            type: "Study",
            place:"Escuela Relacional",
            url:"https://www.escuelarelacional.com",
            titleAr:"Dirección de arte",
            titleUs:"Art direction",
            detailAr: "Aprendí conceptos de diseño como morfología, composición, teoría del color y tipografía. También estudié diferentes exponentes del diseño, la fotografía y la dirección de arte en todos sus ámbitos.",
            detailUs: "I learned design concepts such as morphology, composition, color theory and typography. I also studied different historical figures in the world of design, photography and art direction in all of its venues."
        },
    ]
    let workExperience = [
        
        {   
            dateAr : "Mayo 2020 - Actualmente",
            dateUs : "May 2020 - Currently",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director de Operaciones",
            titleUs: "Chief Operating Officer",
            detailAr: "Dirigí un equipo de 16 personas coordinando el desarrollo de features, supervisando la relación con clientes, ideando y optimizando el proceso de producción On-demand de Merchandise. ",
            detailUs: "I directed a team of 16 people, coordinating the development of new features, supervising customer relations, divising and improving the production process for On-demand Merchandise."
        },
        {
            dateAr : "Octubre 2019 - Mayo 2020",
            dateUs : "October 2019 - May 2020",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director de producto",
            titleUs: "Product Manager",
            detailAr: "Me enfoqué en el diseño y supervisión del desarrollo de una plataforma de E-commerce de On-demand Merchandise. Trabajé junto al equipo de desarrollo planificando features, diseñando experiencias de usuario y programando demos y bocetos de estos avances. ",
            detailUs: "I focused on designing and supervising the development of an e-commerce platform for On-demand Merchandise. I worked together with a team of developers, planning new features, designing the User Experience and coding demos and drafts of these improvements."
        },
        {
            dateAr : "Octubre 2018 - Octubre 2019",
            dateUs : "October 2018 - October 2019",
            type: "Work",
            place: "Flashcookie",
            url:"https://www.flashcookie.com",
            titleAr: "Director creativo",
            titleUs: "Creative Director",
            detailAr: "Lideré el equipo de diseño de la empresa, supervisando la creación de contenidos para la plataforma y sus redes sociales. También diseñé la primera iteración del front-end de Flashcookie.",
            detailUs: "I led the company's design team, supervising content creation for our platform and social networks. I also designed the first iteration of Flashcookie's front-end."
        },
        {
            dateAr : "Mayo 2015 - Septiembre 2019",
            dateUs : "May 2015 - September 2019",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            titleAr: "Director de arte Senior",
            titleUs: "Senior Art Director",
            detailAr: "Diseñé y produje piezas de comunicación gráfica para todo tipo de medios. Trabajé junto a diseñadores gráficos, fotógrafos y animadores en campañas publicitarias para diferentes clientes de la agencia.",
            detailUs: "I designed and produced communication pieces for every type of media. I worked together with graphic designers, photographers and animators on advertising campaigns for the agency's clients."
        },
        {
            dateAr : "Octubre 2013 - Mayo 2015",
            dateUs : "October 2013 - May 2015",
            type: "Work",
            place: "Coupé",
            url:"https://www.coupe.com.ar",
            titleAr: "Director de arte Junior",
            titleUs: "Junior Art Director",
            detailAr: "Diseñé piezas de comunicación digital para las marcas con las que trabajaba la agencia. Principalmente posteos para redes sociales, mailings y banners web.",
            detailUs: "I designed digital communication pieces for the brands that worked with our agency. I Mainly focused on social media posts, e-mail marketing and web banners."
        }
        ]

    let experience = $derived(studies ? studyExperience : workExperience);
   
    $effect(() => {
        if(studies){
            lineColor = 'blue';
            textColor = 'blueText';
        } else {
            lineColor = 'orange';
            textColor = 'orangeText';
        }
    });
</script>

<div class="timeline-container">
    
    <div class="timeline">
        {#if studies == false}

            {#each experience as item, index}
                
                <div class="relative-container">            
                    {#if index%2!=0 }                    
                        <div class="timeline-item right big-offset-left">
                            <div class="timeline-pointer">
                                <div class="spot orange">
                                </div>
                                <div class="tiny-line orange"></div>
                            </div>
                            <div class="item-description">
                                <h4>{lang.value=="ES"?item.dateAr:item.dateUs}</h4>
                                <p class="experience-title"><a href={item.url} target="blank" class="work">{item.place}</a> - <em class={textColor}>{lang.value == "ES"?item.titleAr:item.titleUs}</em></p>
                                <p class="detail">{lang.value == "ES"?item.detailAr:item.detailUs}</p>
                            </div>
                        </div>
                    {:else}
                        <div class="timeline-item left big-offset-right">
                            <div class="timeline-pointer">
                                <div class=" spot orange">
                                </div>
                                <div class="tiny-line orange"></div>
                            </div>
                            <div class="item-description">
                                <h4>{lang.value=="ES"?item.dateAr:item.dateUs}</h4>
                                <p class="experience-title"><a href={item.url} target="blank" class="work">{item.place}</a> - <em class={textColor}>{lang.value == "ES"?item.titleAr:item.titleUs}</em></p>
                                <p class="detail">{lang.value == "ES"?item.detailAr:item.detailUs}</p>
                            </div>
                        </div>
                    {/if}
                    
                </div>
                {/each}
            {:else}
            {#each studyExperience as item, index}
            
            
            <div class="relative-container">            
                {#if index%2!=0 }                    
                    <div class="timeline-item right big-offset-left">
                        <div class="timeline-pointer">
                            <div class="spot blue">
                            </div>
                            <div class="tiny-line blue"></div>
                        </div>
                        <div class="item-description">
                            <h4>{lang.value=="ES"?item.dateAr:item.dateUs}</h4>
                            <p class="experience-title"><a href={item.url} target="blank" class="study">{item.place}</a> - <em class={textColor}>{lang.value == "ES"?item.titleAr:item.titleUs}</em></p>
                            <p class="detail">{lang.value == "ES"?item.detailAr:item.detailUs}</p>
                        </div>
                    </div>
                {:else}
                    <div class="timeline-item left big-offset-right">
                        <div class="timeline-pointer">
                            <div class=" spot blue">
                            </div>
                            <div class="tiny-line blue"></div>
                        </div>
                        <div class="item-description">
                            <h4>{lang.value=="ES"?item.dateAr:item.dateUs}</h4>
                            <p class="experience-title"><a href={item.url} target="blank" class="study">{item.place}</a> - <em class={textColor}>{lang.value == "ES"?item.titleAr:item.titleUs}</em></p>
                            <p class="detail">{lang.value == "ES"?item.detailAr:item.detailUs}</p>
                        </div>
                    </div>
                {/if}
                
            </div>
            {/each}
                
            {/if}
    </div>
    <div id="line"class={lineColor}></div>
</div>

            

    



<style>
    
    .timeline-container{
        
        background-color: var(--background-color);
        position: relative;
     
    }
    #line{
        width: 2px;
        height:100%;
        position: absolute;
        left: 50%;
        top:0;

    }
    .timeline{
        padding-block: 4rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:4rem;

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
    .item-description > p{
        font-size: var(--font-size);
        line-height:var(--font-line-height);
        max-width: 22rem;
    }
    .item-description > p > a{
        text-decoration: none;
        font-weight: 600;
    }
    .item-description > h4{
        font-size: 1.4rem;
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
        color:var(--text-color);
    }
    a.study{
        color: var(--text-color)
    }
    .orange{
        background-color: var(--accent-color);
        
    }
    .blue{
        background-color: var(--secondary-color);

    }
    .orangeText{
        color: var(--accent-color);
    }
    .blueText{
        color: var(--secondary-color);
    }
   @media screen and (max-width:512px){
    #line{
        /* display: none; */
        left:1rem;
    }
    .item-description > h4{
        font-size: 1.1rem;
    }
    .big-offset-left{
        margin-left: 0;
    }
    .big-offset-right{
        margin-right: 0;
    }

    .left{
        flex-direction: row;
        text-align: left;
    }
    .left > .item-description{
        text-align: left;

    }
    .left > .timeline-pointer{
        flex-direction: row;
        margin-left:-1.75rem;
        margin-right: 0rem;
    }
    .tiny-line{
        width: 1.25rem;
        height: 2px;
    }
    .right > .timeline-pointer{
        margin-left:-1.75rem;
    }
    .item-description{
        text-align: left;
    }
    .item-description > p{
        font-size: var(--font-size);
        line-height:var(--font-line-height);
        max-width: 30rem;
    }
   }
</style>
