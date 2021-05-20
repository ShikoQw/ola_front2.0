<script context="module">
    export async function load(ctx){
        let slug = ctx.page.params.slug;
        return { props: { slug } }
    }
    export let lecture;
</script>
<script>
    import {onMount} from 'svelte';
    import {Tabs, Tab, TabContent} from 'svelte-materialify';
    import {goto} from '$app/navigation'
    import Card from "../../components/Card.svelte";

    export let slug;
    export let course;
    let mySectionTest = [];
    let mySectionLecture = [];

    function redurectToLecture(o) {
        lecture = o;
        goto('/course/lecture')
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
                .then(response => response.json())
        console.log(course)
        mySectionTest = course.sectionList.filter(t => t.test);
        mySectionLecture = course.sectionList.filter(t => !t.test);
    });
</script>


    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-2 offset-md-1">
                <div class="text">
                    <Card course={course}/>
                </div>
            </div>
            <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-0">
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
                                                    <th><center>Icon</center></th>
                                                    <th>Name</th>
                                                    <th><center>Action</center></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {#each mySectionLecture as section, i}
                                                    <tr>
                                                        <td><center>{i+1}</center></td>
                                                        <td><center>icon</center></td>
                                                        <td>{section._instanceName}</td>
                                                        <td><center><button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;" on:click={redurectToLecture(section)}>Open</button></center></td>
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
                                                <th><center>Icon</center></th>
                                                <th>Name</th>
                                                <th><center>Action</center></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {#each mySectionTest as section, i}
                                                <tr>
                                                    <td><center>{i+1}</center></td>
                                                    <td><center>icon</center></td>
                                                    <td>{section._instanceName}</td>
                                                    <td><center><button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important; ">More detail</button></center></td>
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

