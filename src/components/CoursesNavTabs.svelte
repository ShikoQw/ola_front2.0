<script>
    import { Tabs, Tab } from 'svelte-materialify';
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte';
    import localize from "../cas/localize";
    import Cookies from 'js-cookie';
    let isAuth;

    function redirectTo(path){
        goto(path)
    }

    onMount(async () => {
        isAuth = Cookies.get('access_token') !== '' ? true : false;
    });
</script>


<form>
    <div><input class="form-control form-control-lg" placeholder={localize("Search")}></div>
    <Tabs class="indigo-text">
        <div slot="tabs">
            <Tab><a class="btn" style="text-decoration: none;" href="/courses/allCourses/">{localize("All Courses")}</a></Tab>
            <Tab><a class="btn" style="text-decoration: none;" href="/courses/market/">{localize("Market")}</a></Tab>
            <Tab><a class="btn" style="text-decoration: none;" href="/courses/freeCourses/">{localize("Free courses")}</a></Tab>
            {#if isAuth}
                <Tab><a class="btn" style="text-decoration: none;" href="/courses/myCourses/">{localize("My courses")}</a></Tab>
            {/if}
        </div>
    </Tabs>
</form>


<style>
    ._img {
        display: block;
        width: 100%;
        max-height: 5rem;
        object-fit: cover;
    }
    @media only screen and (min-width: 1170px) {
        .cd-header {
            height: 180px;
        }
    }

    .cd-header {
        position: relative;
        height: 110px;
        background-color: #F5F5F5;
    }


</style>