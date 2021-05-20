<script>
    import {goto} from '$app/navigation'
    import Card from "./Card.svelte";

    export let items=[];
    export let tabKey;

    let courseUid;
    let allCoursesItems = [
        {
            name: 'qwerty',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'asdfgn',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'zxcvbm',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'tyuioo',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'tyuioo',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'tyuioo',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'tyuioo',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
            name: 'tyuioo',
            description: "\"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
    ]
</script>

{#if tabKey === 'allCourses'}
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


