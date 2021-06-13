<script>
    import { goto } from '$app/navigation'
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
    import * as cookie from 'cookie'

    export let activeTabValue = 1;
    // let isAuthTab: false
    const dispatch = createEventDispatcher();
    let isAuth;

    let items = [
        { label: "Home",
            value: '/home',
        },
        { label: "Courses",
            value: '/courses',
        },
        { label: "Profile",
            value: '/profile',
        },
        { label: "Help",
            value: '/help',
        }
    ];

    //funstions
    const handleClick = tabValue => () => (goto(tabValue) );

    function changeIsAuthTab(){
        dispatch('changeIsAuth', {
            isAuthTab: true
        });
    };

    async function singOut(){
        document.cookie = "access_token= ;"
        localStorage.removeItem('access_token');
        localStorage.setItem('isReload', true);
        goto('/home');
    }

    onMount(async () => {
        isAuth = localStorage.getItem('access_token') ? true : false;
    });

</script>

<nav class="navbar navbar-light navbar-expand bg-light navigation-clean">.
    <div class="container" style="padding-left: 2px !important;"><a class="navbar-brand" href="/home">OLA</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"></button>
        <ul>
            {#each items as item}
                <li class={activeTabValue === item.value ? 'active' : ''}>
                    <span on:click={handleClick(item.value)}>{item.label}</span>
                </li>
            {/each}
        </ul>
        <div class="collapse navbar-collapse" id="navcol-1">
            {#if !isAuth}
                <a class="btn btn-primary ms-auto" role="button" href="/auth/login" style="background: transparent !important; border-color: var(--bs-indigo) !important; color: var(--bs-indigo); margin: 7px" on:click={changeIsAuthTab}>Sign In</a>
                <div>
                    <a class="btn btn-primary ms-auto text-white" role="button" href="/auth/register" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;" on:click={changeIsAuthTab}>Sign Up</a>
                </div>
            {:else}
                <a class="btn btn-primary ms-auto" role="button" style="background: transparent !important; border-color: var(--bs-indigo) !important; color: var(--bs-indigo); margin: 7px" on:click={singOut}>Sign out</a>
            {/if}
        </div>
    </div>
</nav>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        border-bottom: 1px solid #dee2e6;
    }
    li {
        margin-bottom: -1px;
    }

    span {
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        display: block;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    span:hover {
        border-color: #e9ecef #e9ecef #dee2e6;
    }

    li.active > span {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
</style>
