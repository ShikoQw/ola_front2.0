<script>
	import '../app.css';
	import NavTabs from "../components/NavTabs.svelte";
	// import { ProgressLinear } from 'svelte-materialify';
</script>


<main>
<!--		<ProgressLinear indeterminate />-->
	<NavTabs/>
	<slot></slot>
</main>

