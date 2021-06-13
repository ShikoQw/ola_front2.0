<script>
    import {goto} from '$app/navigation'
    import Cookies from 'js-cookie';
    import localize from "../cas/localize";
    import {store} from "../store";

    export let course = undefined;
    export let path = undefined;
</script>

<div class="card">
    {#if course.image}
        {#if $store.coursesType === 'allCourses'}
            <img class="_img" src={course.image}>
        {:else}
            <img class="_img" src={course.image + Cookies.get('access_token')}>
        {/if}
    {/if}
    <div class="card-body">
        <h4 class="card-title">{course.name}</h4>
        {#if course.description}
            <p class="card-text truncate">{course.description}</p>
        {/if}
        {#if course.description}
            <button class="btn btn-primary text-white" type="button" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;"
                    on:click={goto('/course/' + course.id)}>{localize("More detail")}</button>
        {/if}
    </div>
</div>


<style>
    @media (max-width:767px) {
        .contact-clean {
            padding: 20px 0;
        }
    }

    .contact-clean form {
        max-width: 480px;
        width: 90%;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 4px;
        color: #505e6c;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    }

    @media (max-width:767px) {
        .contact-clean form {
            padding: 30px;
        }
    }

    .contact-clean h2 {
        margin-top: 5px;
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 36px;
        color: inherit;
    }

    .contact-clean form .form-control {
        background: #fff;
        border-radius: 2px;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.05);
        outline: none;
        color: inherit;
        padding-left: 12px;
        height: 42px;
    }

    .contact-clean form .form-control:focus {
        border: 1px solid #b2b2b2;
    }

    .contact-clean form textarea.form-control {
        min-height: 100px;
        max-height: 260px;
        padding-top: 10px;
        resize: vertical;
    }

    .contact-clean form .btn {
        padding: 16px 32px;
        border: none;
        background: none;
        box-shadow: none;
        text-shadow: none;
        opacity: 0.9;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.4px;
        line-height: 1;
        outline: none !important;
    }

    .contact-clean form .btn:hover {
        opacity: 1;
    }

    .contact-clean form .btn:active {
        transform: translateY(1px);
    }

    .contact-clean form .btn-primary {
        background-color: #055ada !important;
        margin-top: 15px;
        color: #fff;
    }

    .card {
        width: 235px;
        height: auto;
        left: 27px;
        top: 150px;
        margin: 10px !important;
        position: inherit;
        display: inline-block;
        box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        transform: translateY(-.5%);
    }

    /*.myContainter{*/
    /*    display: grid;*/
    /*    grid-template-columns: repeat(auto-fit, minmax(300px, 100fr));*/
    /*}*/

    ._img {
        display: block;
        width: 100%;
        max-height: 5rem;
        object-fit: cover;
    }


    .truncate {
        display: -webkit-box;
        -webkit-line-clamp:5;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

</style>