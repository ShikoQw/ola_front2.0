<script context="module">
    export async function load(ctx){
        let slug = ctx.page.params.slug;
        let path = ctx.page.path;
        return { props: { slug, path } }
    }
    export let lecture;
    export let test;
</script>

<script>
    import {onMount} from 'svelte';
    import {Tabs, Tab, TabContent} from 'svelte-materialify';
    import {goto} from '$app/navigation'
    import Card from "../../components/Card.svelte";
    import {store} from '../../store.js'

    export let slug;
    let path;
    export let course = [];
    export let expCourse;
    let mySectionTest = [];
    let mySectionLecture = [];

    function redirectToLecture(o) {
        lecture = o;
        $store.cardLecture = course;
        goto('/course/lecture')
    }

    function redirectToTest(t) {
        $store.test = t;
        $store.cardLecture = course;
        goto('/course/test')
    }

    onMount(async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access_token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "courseId": slug
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        course = await fetch("http://yerasis.kz:8080/ola/rest/v2/services/ola_CourseService/getCourse", requestOptions)
            .then(response => response.json());
        expCourse = {
            image: course.image,
            name: course.name,
            description: course.description
        }
        mySectionTest = course.sectionList.filter(t => t.name.includes('Тест'));
        mySectionLecture = course.sectionList.filter(t => !t.name.includes('Тест'));

    });
</script>


<div class="container">
    <div class="row">
        <div class="col-md-10 col-lg-3 offset-md-1">
            <Card course={course}/>
        </div>
        <div class="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
            <header class="cd-header">
                <div class="mx-auto position-relative container">
                    <div class="container">
                        <Tabs class="indigo-text">
                            <div slot="tabs">
                                <Tab><a class="btn" style="text-decoration: none;">Lectures</a></Tab>
                                <Tab><a class="btn" style="text-decoration: none;">Tests</a></Tab>
                            </div>
                            <TabContent>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th><center>#</center></th>
                                            <th><center></center></th>
                                            <th>Name</th>
                                            <th><center>Action</center></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {#each mySectionLecture as section, i}
                                            <tr>
                                                <td><center>{i+1}</center></td>
                                                <td><center><i class="icon-book-open"></i></center></td>
                                                <td>{section._instanceName}</td>
                                                <td><center><button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;" on:click={redirectToLecture(section)}>Open</button></center></td>
                                            </tr>
                                        {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </TabContent>
                            <TabContent>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th><center>#</center></th>
                                            <th><center></center></th>
                                            <th>Name</th>
                                            <th><center>Action</center></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {#each mySectionTest as section, i}
                                            <tr>
                                                <td><center>{i+1}</center></td>
                                                <td><center><i class="icon-pencil"></i></center></td>
                                                <td>{section._instanceName}</td>
                                                <td><center><button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important; " on:click={redirectToTest(section)}>Open</button></center></td>
                                            </tr>
                                        {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </TabContent>
                        </Tabs>
                    </div>
                </div>
            </header>
        </div>
    </div>
</div>

