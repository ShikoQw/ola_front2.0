<script>
    import { Tabs, Tab } from 'svelte-materialify';
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte';

    let isAuth;

    function redirectTo(path){
        goto(path)
    }

    onMount(async () => {
        isAuth = localStorage.getItem('access_token') ? true : false;
    });
</script>

<header class="cd-header">
    <div class="mx-auto position-relative container">
        <form>
            <div class="row">
                <div><input class="form-control form-control-lg" placeholder="Search"></div>
            </div>
            <div class="col-12 col-md-9">
                <Tabs class="indigo-text">
                    <div slot="tabs">
                        <Tab><a class="btn" style="text-decoration: none;" href="/courses/allCourses/">All Courses</a></Tab>
                        <Tab><a class="btn" style="text-decoration: none;" href="/courses/market/">Market</a></Tab>
                        <Tab><a class="btn" style="text-decoration: none;" href="/courses/freeCourses/">Free courses</a></Tab>
                        {#if isAuth}
                            <Tab><a class="btn" style="text-decoration: none;" href="/courses/myCourses/">My courses</a></Tab>
                            <Tab><a class="btn" style="text-decoration: none;" href="/courses/marked/">Marked</a></Tab>
                        {/if}
                    </div>
                </Tabs>
            </div>
        </form>
    </div>
</header>

<!--<div class="card">-->
<!--    <img class="_img" src="http://www.kasparov.ru/content/materials/202012/5FDC9908CD6DB.jpg"/>-->
<!--    <div class="card-img-overlay">-->
<!--        w;jkdh;asjda-->
<!--    </div>-->
<!--</div>-->

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