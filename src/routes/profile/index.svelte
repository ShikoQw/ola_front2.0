<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'
    import Cookies from 'js-cookie';


    export let user = {};
    let isAuth;

    onMount(async () => {
        // isAuth = localStorage.getItem('access_token') ? true : false;
        isAuth = Cookies.get('access_token') !== '' ? true : false;
        if (!isAuth) {
            goto('/auth/login');
        } else {
            if(localStorage.getItem('isReload') !== 'false'){
                localStorage.setItem('isReload', false)
                window.location.reload();
            }

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + Cookies.get('access_token'));

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const res = await fetch("http://yerasis.kz:8080/ola/rest/v2/userInfo", requestOptions)
                    .then(response => response.json());
            if(res) user = res;
        }
        })

</script>

<div class="profile-card">
    <div class="profile-back"></div>
    <div class="row gutters-sm">
        <div class="container">
            <div class="col-md-4 mb-3">
                <img class="rounded-circle profile-pic" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png">
                <h3 class="profile-name">{user.name}</h3>
<!--                <h3 class="profile-name">Халмов Никита</h3>-->
            </div>
            <div class="container">
                <div class="card">
                    <div class="card-body">
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Last name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {user.lastName ? user.lastName : ''}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">First name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {user.firstName ? user.firstName : ''}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Middle name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {user.middleName ? user.middleName : ''}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Login</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {user.login ? user.login : ''}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {user.email ? user.email : ''}
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
         </div>
    </div>
</div>


<style>
    .profile-card {
        text-align: center;
        margin-bottom: 15px;
        border: 1px solid var(--bs-indigo);
    }
    .profile-back {
        background-color: var(--bs-indigo);
        height: 150px;
        margin-bottom: -75px;
    }
    .profile-pic {
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
    }
    .rounded-circle {
        border-radius: 50%!important;
    }
    img, svg {
        vertical-align: middle;
    }

    .profile-name {
        background-color:  var(--bs-indigo);
        color: #fff;
        font-family: 'Actor', sans-serif;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 0;
        border-radius: 100px;
        max-width: 300px;
        margin: 0 auto 10px auto;
    }






</style>