<script>
	import CustomerTestamony from '../components/CustomerTestamony.svelte';
	import Hero from '../components/Hero.svelte';
	import LocationsHours from '../components/LocationsHours.svelte';
	import Services from '../components/Services.svelte';
	import Stats from '../components/Stats.svelte';
</script>

<Hero />

<Stats />

<Services />

<CustomerTestamony />

<LocationsHours />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
