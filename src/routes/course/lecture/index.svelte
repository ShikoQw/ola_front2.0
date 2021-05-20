<script>
    import { lecture } from '../[slug].svelte'
</script>
<section class="article-dual-column">
    <div class="container">
        <div class="intro">
            <h2 class="text-center">{lecture.name}</h2>
        </div>
        <br>
        <div class="row">
            <div class="col-md-10 col-lg-2 offset-md-1">
                qwerty
            </div>
            <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-0">
                <div class="text">
                    {@html lecture.content}
                </div>
            </div>
        </div>
    </div>
</section>