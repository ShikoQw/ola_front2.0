<script>
    import {goto} from '$app/navigation'
    import Card from "./Card.svelte";
    import {store} from "../store";
    import { onMount } from 'svelte';

    export let items=[];
    export let tabKey;

    let courseUid;
    let allCoursesItems = [
        {
            name: 'Английский язык Past tense',
            image: 'https://habrastorage.org/webt/ng/4m/kg/ng4mkgjfsqoc1_edoejigner-4g.jpeg',
            description: "\"Времена группы Past в английском языке необходимы для описания действий, произошедших в прошлом. В статье разберем случаи и примеры использования Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous и конструкцию used to do smth."
        },
        {
            name: 'Английский язык Present tense',
            image: 'https://habrastorage.org/webt/ng/4m/kg/ng4mkgjfsqoc1_edoejigner-4g.jpeg',
            description: "\"Настоящее время описывает действие, которые происходит сейчас или каким-то образом связано с настоящим моментом. В английском языке существует четыре формы настоящего времени — Present Simple, Present Continuous, Present Perfect и Present Perfect Continuous."
        },
        {
            name: 'История древнего Рима',
            image: 'https://italy4.me/wp-content/uploads/2017/04/colosseum-in-rome_cr.jpg',
            description: "\"История Рима охватывает 2800 лет существования города, который вырос из маленькой итальянской деревни, появившейся в IX веке до н. э. Сегодня это столица Италии, международный политический и культурный центр, считающийся одним из красивейших городов мира."
        },
        {
            name: 'История древней  Греции',
            image: 'https://lh3.googleusercontent.com/proxy/qe1a0oZglIRNIdsVek5Cl9og_hbFdgtvWmpveFCGRCA8BHfMdJCzCcQwCP_JWk3npDFeGfe8vJUsNTAIjMBqCY0sk7YIZZKMSZ5ggyV0j-vMnVYSFDiwgX65iTFZJuhWduHy0IQoINwIX49AxJzty8lBrRlUMA',
            description: "\"Древняя Греция занимает важное место во всемирно-историческом процессе. Её достижения во многом легли в основу европейской культуры. Многие отрасли современной науки выросли на базе трудов древнегреческих ученых и философов. "
        },
        {
            name: 'Ме́неджмент ',
            image: 'https://guu.ru/wp-content/uploads/Fotolia_105930722_Subscription_Monthly_M.jpg',
            description: "\"Управление, руководство, администрирование, умение распоряжаться, владеть, правлять все это касается разработки и создания (организация), максимально эффективного использования (управление) и контроля социально-экономических систем."
        },
        {
            name: 'Финансовая политика',
            image: 'https://www.gov.kz/uploads/2021/1/15/1a8660d10486b2cac032592f09c05fca_original.440285.png',
            description: "\"Экономисты определяют финансовую политику как «совокупность мероприятий государства, проявляемых в системе форм и методов мобилизации финансовых ресурсов, их распределения и использование для осуществления своих функций и задач»."
        },
        {
            name: 'Экономика продаж',
            image: 'https://cdnimg.rg.ru/img/content/189/88/50/iStock-1090046326_d_850.jpg',
            description: "\"Конечно же, экономика несколько иная наука, но как нам известно, маркетинг - наше всё и аналитика оборачиваемости складских запасов и коэффициент оборачиваемости дебиторской задолженности, это и многое другое - предмет неусыпной заботы маркетинга."
        },
        {
            name: 'Инженерная графика',
            image: 'https://okean.org/uploads/images/articles/4457/RJBnH3sLBUKcjaDWCFheB0s09VvSMjNTYiZdlAjs.jpeg',
            description: "\"Основными принципами развития представлений об окружающем человека мире, с древнейших времён и до современности, являются геометризация и координатизация окружающего пространства и его объектов."
        },
    ]

    onMount(async () => {
        $store.coursesType = (tabKey === 'allCourses' || tabKey === 'freeCourses' ) ? 'allCourses' : '';
    });

</script>

{#if tabKey === 'allCourses'}
    <div class="container">
        {#each allCoursesItems as item}
            <Card course={item}/>
        {/each}
    </div>
{:else if tabKey === 'freeCourses'}
    <div class="container">
        {#each allCoursesItems as item}
            <Card course={item}/>
        {/each}
    </div>
{:else if tabKey === 'myCourses'}
    <div class="container">
        {#each items as item}
            <Card course={item}/>
        {/each}
    </div>
{/if}


