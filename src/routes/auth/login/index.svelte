<script>
    import { goto } from '$app/navigation';
    import * as cookie from 'cookie';
    import Cookies from 'js-cookie';
    import localize from "../../../cas/localize";


    let email= '';
    let password= '';
    let token;

    const register = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic b2xhLWNsaWVudDozZjFlMmVjMmY5MjQ0NTNmZmFlOTVhMDQ5Mjg3ZGIyNmMxMzZkOTBmMDEwYTgzOGYxNWVmNjgyOTcyYjE3YzU0");

        var formdata = new FormData();
        formdata.append("grant_type", "password");
        formdata.append("username", email);
        formdata.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let response = await fetch("http://91.135.203.14:8080/ola/rest/v2/oauth/token", requestOptions)
            .then(response => response.json())
            .then(result => token= result);

        if(response){
            // document.cookie = "access_token=" + token.access_token + "; Max-age=" + token.expires_in + "; path=/";
            // localStorage.setItem('access_token', token.access_token);
            Cookies.set('access_token', token.access_token);
            localStorage.setItem('isReload', true);
            redirectToProfile();
        }else{
            alert("неверный логин или пароль")
        }
    }
    function redirectToProfile(){
        goto('/profile')
    }
</script>

<div calss="back-img">
    <section class="login-clean">
        <form on:submit|preventDefault={register}>
            <!--            <div class="illustration"><a href="#">OLA</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"></button>-->
            <div class="illustration" style="color: var(--bs-indigo) !important;"><a class = "icon-book-open" style="text-decoration: none;" href="/">{"   OLA"}</a></div>
            <h2></h2>
            <div class="mb-3"><input bind:value={email} class="form-control" type="text" name="email" placeholder="Email"></div>
            <div class="mb-3"><input bind:value={password} class="form-control" type="password" name="password" placeholder={localize("Password")}></div>
            <div class="mb-3">
                <button class="btn btn-primary d-block w-100" style="background: var(--bs-indigo); border-color: var(--bs-indigo) !important;" type="submit">{localize("Sign In")}</button>
            </div>
            <a class="forgot" href="#">{localize("Forgot your email or password?")}</a>
        </form>
    </section>
</div>