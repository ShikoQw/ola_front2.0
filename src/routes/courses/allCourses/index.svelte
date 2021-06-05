<script>
    import Courses from "../../../components/Courses.svelte";

</script>


<Courses tabKey="allCourses"/>


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
