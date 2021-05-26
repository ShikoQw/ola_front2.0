<script>
    import { lecture } from '../[slug].svelte'
    import { corLecture } from '../[slug].svelte'
    import {onMount} from 'svelte';
    import Card from "../../../components/Card.svelte";
</script>

<section class="article-dual-column">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">{lecture.name}</h2>
        </div>
        <br>
        <div class="row">
            <div class="col-md-10 col-lg-3 offset-md-1">
                <Card course={corLecture}/>
            </div>
            <div class="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
                <div class="text">
                    {@html lecture.content}
                </div>
            </div>
        </div>
    </div>
</section>