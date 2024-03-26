<script>
	import Button from './Button.svelte';
</script>

<section
	id="locations"
	class="scroll-m-36 flex flex-col items-center gap-4 justify-center px-4 py-12 mx-auto mt-32 max-w-[90%] bg-brand-dark rounded-xl drop-shadow-lg"
>
	<h2 class="text-4xl">Locations and Hours</h2>
	<p>
		Stop by one of our brick and mortar shops for a consolation on how we can improve your cats
		social influence.
	</p>

	<div class="flex gap-4 pt-4">
		<Button variant="primary"><span class="mr-2">📍</span>See Our Locations</Button>

		<Button variant="outline"><span class="mr-2">📞</span>Contact Us</Button>
	</div>
</section>
