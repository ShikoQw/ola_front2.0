<script>
    import localize from "../../../cas/localize";
</script>

<div>
    <section class="login-clean">
        <form method="post">
            <div class="illustration" style="color: var(--bs-indigo) !important;"><a class = "icon-book-open" style="text-decoration: none;" href="/">{"   OLA"}</a></div>
            <h2></h2>
            <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email"></div>
            <div class="mb-3"><input class="form-control" type="password" name="password" placeholder={localize("Password")}></div>
            <div class="mb-3"><input class="form-control" type="password" name="password" placeholder={localize("Repeat password")}></div>
            <div class="mb-3">
                <button class="btn btn-primary d-block w-100" style="background: var(--bs-indigo); border-color: var(--bs-indigo) !important;" type="submit">{localize("Sign Up")}</button>
            </div>
            <a class="forgot" href="login">{localize("Already registered?")}</a>
        </form>
    </section>
</div>