<script>
    import { onMount } from 'svelte';
    import localize from "../../cas/localize";
    import { goto } from '$app/navigation'

    onMount(async () => {
        if(localStorage.getItem('isReload') !== 'false'){
           localStorage.setItem('isReload', false);
           window.location.reload();
        }
    })
</script>

<header class="text-center text-white masthead" style="background: url('../../../static/assets/img/library.jpg')no-repeat center center;background-size: cover;">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto position-relative">
                <h1 class="mb-5">{localize("Welcome to cloud-based online learning platform")}</h1>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                <form>
                    <div class="row">
                        <div class="col-12 col-md-9 mb-2 mb-md-0"><input class="form-control form-control-lg" type="email" placeholder={localize("Enter your email...")}></div>
                        <div class="col-12 col-md-3"><button class="btn btn-primary btn-lg" type="submit" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;">{localize("Sign Up")}</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</header>
<section class="text-center bg-light features-icons" style="border-right-color: var(--bs-blue);">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                    <div class="d-flex features-icons-icon" style="color: var(--bs-blue);"><i class="icon-social-soundcloud m-auto text-primary" data-bss-hover-animate="pulse" style="/*border-color: var(--bs-blue);*//*border-right-color: var(--bs-purple);*/border-bottom-color: var(--bs-indigo);color: #BA55D3 !important;"></i></div>
                    <h3>{localize("Fully on cloud")}</h3>
                    <p class="lead mb-0">{localize("The platform works comfortably on the cloud!")}</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                    <div class="d-flex features-icons-icon"><i class="icon-book-open m-auto text-primary" data-bss-hover-animate="pulse" style="color: #BA55D3 !important;"></i></div>
                    <h3>{localize("Free and private courses")}</h3>
                    <p class="lead mb-0">{localize("You can study both public and private courses!")}</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                    <div class="d-flex features-icons-icon"><i class="icon-check m-auto text-primary" data-bss-hover-animate="pulse" style="color: #BA55D3 !important;border-style: none;border-color: var(--bs-indigo);"></i></div>
                    <h3>{localize("Easy to Use")}</h3>
                    <p class="lead mb-0">{localize("Ready to use and learning!")}</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="showcase">
<div class="container-fluid p-0">
    <div class="row g-0">
        <div class="col-lg-6 text-white order-lg-2 showcase-img" style="background-image: url(&quot;assets/img/cloud.jpg&quot;);"><span></span></div>
        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
            <h2>{localize("Fully on cloud")}</h2>
            <p class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sem nec sem imperdiet rhoncus. Integer at aliquam erat, id tincidunt nulla.&nbsp;<br></p>
        </div>
    </div>
    <div class="row g-0">
        <div class="col-lg-6 text-white showcase-img" style="background-image: url(&quot;assets/img/courses.jpg&quot;);"><span></span></div>
        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
            <h2>{localize("Free and private courses")}</h2>
            <p class="lead mb-0"><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sem nec sem imperdiet rhoncus. Integer at aliquam erat, id tincidunt nulla.<br><br></p>
        </div>
    </div>
    <div class="row g-0">
        <div class="col-lg-6 text-white order-lg-2 showcase-img" style="background-image: url(&quot;assets/img/macbook.jpg&quot;);"><span></span></div>
        <div class="col-lg-6 my-auto order-lg-1 showcase-text">
            <h2>{localize("Easy to Use")}&nbsp;</h2>
            <p class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sem nec sem imperdiet rhoncus. Integer at aliquam erat, id tincidunt nulla.&nbsp;<br></p>
        </div>
    </div>
</div>
</section>
<section class="text-center bg-light testimonials">
    <div class="container">
        <h2 class="mb-5">{localize("What people are saying...")}</h2>
        <div class="row">
            <div class="col-lg-4">
                <div class="mx-auto testimonial-item mb-5 mb-lg-0"><img class="rounded-circle img-fluid mb-3" src="assets/img/testimonials-1.jpg">
                    <h5>Margaret E.</h5>
                    <p class="font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br><br></p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto testimonial-item mb-5 mb-lg-0"><img class="rounded-circle img-fluid mb-3" src="assets/img/testimonials-2.jpg">
                    <h5>Fred S.</h5>
                    <p class="font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mx-auto testimonial-item mb-5 mb-lg-0"><img class="rounded-circle img-fluid mb-3" src="assets/img/testimonials-3.jpg">
                    <h5>Sarah W.</h5>
                    <p class="font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="text-center text-white call-to-action" style="background: url(&quot;assets/img/building.jpg&quot;) no-repeat center center;background-size: cover;">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-9 mx-auto position-relative">
                <h2 class="mb-4">{localize("Ready to get started? Sign up now!")}</h2>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                <form>
                    <div class="row">
                        <div class="col-12 col-md-9 mb-2 mb-md-0"><input class="form-control form-control-lg" type="email" placeholder={localize("Enter your email...")}></div>
                        <div class="col-12 col-md-3"><button class="btn btn-primary btn-lg" type="submit" style="background: var(--bs-indigo);border-color: var(--bs-indigo) !important;">{localize("Sign Up")}</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<footer class="bg-light footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 text-center text-lg-start my-auto h-100">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item"><a href="#">{localize("About")}</a></li>
                    <li class="list-inline-item"><span>⋅</span></li>
                    <li class="list-inline-item"><a href="#">{localize("Contact")}</a></li>
                    <li class="list-inline-item"><span>⋅</span></li>
                    <li class="list-inline-item"><a href="#">{localize("Privacy Policy")}</a></li>
                </ul>
                <p class="text-muted small mb-4 mb-lg-0">© OLA 2021. All Rights Reserved.</p>
            </div>
            <div class="col-lg-6 text-center text-lg-end my-auto h-100">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item"><a href="#"><i class="fa fa-facebook fa-2x fa-fw"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-twitter fa-2x fa-fw"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-instagram fa-2x fa-fw"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>