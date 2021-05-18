<script>
    import Card from "../../../components/Card.svelte";
    import Filters from "../../../components/Filters.svelte";

</script>

<div class="container">
    <div class="row" >
        <div class="col-md-2">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <Filters/>
                    </div>
                </div>
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
    .card{
        width: 200px;
        height: auto;
        left: 27px;
        top: 150px;
        margin: 10px !important;
        position: inherit;
        display: inline-block;
        box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        transform: translateY(-.5%);
    }
</style>
