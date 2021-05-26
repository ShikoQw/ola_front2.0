<script>
    import {onMount} from 'svelte';
    import Courses from "../../../components/Courses.svelte";

    let items;

    onMount(async () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('access_token')
            },
            redirect: 'follow'
        };
        items = await fetch("http://91.135.203.14:8080/ola/rest/v2/services/ola_CourseService/getPublicCourses", requestOptions)
                .then(response => response.json());

    });
</script>

<div class="container">
    <div class="myGrid">
        <Courses tabKey="myCourses" items={items}/>
    </div>
</div>

<style>
    .filterCard {
        border: 2px;
        width: 225px;
        height: auto;
        left: 27px;
        top: 150px;
        margin: 10px !important;
        position: inherit;
        display: inline-block;
        box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        transform: translateY(-.5%);
    }

    .myGrid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }
</style>
