<script>
	const src = '/chipi-chipi-chapa-chapa-transparent-background.gif';
	let name = 'Cat Meme';

	import Button from '../components/Button.svelte';
</script>

<section
	id="hero"
	class="border-y border-y-gray-200 flex gap-4 items-center justify-center aspect-[3/2] max-h-[500px] p-8 w-full bg-brand-light font-base"
>
	<div class="w-1/2">
		<h1 class="font-bold text-[80px] leading-[1] text-text-light">
			A Place For All Pets<br /> Big and Small
		</h1>

		<div class="flex gap-4 mt-8">
			<Button variant="primary"><span class="mr-2">🎾</span>See Our Catalog</Button>

			<Button variant="outline"><span class="mr-2">📅</span>Book an Appointment</Button>
		</div>
	</div>

	<div class="clip-heart">
		<img {src} alt={name} />
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
