<script>
    import Card from "../../../components/Card.svelte";
    import {store} from '../../../store.js'
    import localize from "../../../cas/localize";
    import Cookies from 'js-cookie';
    import { goto } from '$app/navigation'



    async function completeTest(test) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + Cookies.get('access_token'));

        var raw = JSON.stringify({
            "courseSectionId": $store.test.id,
            "test": test.test,
            "courseId": $store.cardLecture.id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://91.135.203.14:8080/ola/rest/v2/services/ola_CourseService/setTest", requestOptions)
            .then(response => response.json())
            .then(window.history.back())
    }

</script>



<section class="article-dual-column">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">{$store.test.name}</h2>
        </div>
        <br>
        <div class="row">
            <div class="col-md-10 col-lg-3 offset-md-1">
                <Card course={$store.cardLecture}/>
            </div>
            <div class="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
                <div class="text">
                    {#each $store.test.test.questions as question, i}
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {question._instanceName}
                                </h5>
                                <form>
                                    {#each question.answers as answer, j}
                                        <div class="card-text">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" style="border-color: var(--bs-indigo);" name="exampleRadios" bind:checked={answer.isSelected}>
                                                {answer.text}
                                            </div>
                                        </div>
                                    {/each}
                                </form>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="d-flex flex-column align-items-center text-center">
                    <button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo); border-color: var(--bs-indigo); margin-bottom: 25px" on:click={completeTest($store.test)}>{localize("Finish")}</button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .card{
        margin: 10px;
    }
</style>