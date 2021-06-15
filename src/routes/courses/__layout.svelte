<script>
    import CoursesNavTabs from "../../components/CoursesNavTabs.svelte";
</script>


<div class="container">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <CoursesNavTabs/>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <slot></slot>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>