<script>
	import '../app.css';
	import NavTabs from "../components/NavTabs.svelte";

	let isAuth= false;

	function isAuthFun(event) {
		isAuth= event.detail.isAuthTab
	}

</script>


<main>
<!--	{#if isAuth === false}-->
		<NavTabs on:changeIsAuth={isAuthFun} />
<!--	{/if}-->
	<slot />
</main>

