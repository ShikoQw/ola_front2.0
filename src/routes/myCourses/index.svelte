<script>
    import Card from "../../components/Card.svelte";

</script>

<div class="container">
    <div class="row">
        <div class="col-md-2">
            <div class="container">
                qwerty
            </div>
        </div>
        <div class="col-md-10">
            <div class="myGrid">
                <Card/>
            </div>
        </div>
    </div>
</div>

<style>
    .myGrid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }
</style>
