<script>
	import Button from './Button.svelte';

	const src = '/gif/cat-dance.gif';
	let name = 'Cat Meme';
</script>

<section
	id="top"
	class="flex flex-col items-center justify-center w-full gap-4 p-8 border-y border-y-gray-200 md:flex-row bg-gradient-to-r from-brand-light to-brand-dark"
>
	<div class="md:w-1/2">
		<h1 class="font-bold text-[80px] leading-[1] text-text-light">
			Elevate Your Cat <br /> to the NEXT LEVEL
		</h1>
		<h3 class="text-2xl">Cat Influencer training</h3>

		<div class="flex gap-4 mt-8">
			<Button variant="primary"><span class="mr-2">💅</span>See Our Courses</Button>

			<Button variant="outline"><span class="mr-2">📅</span>Book an Appointment</Button>
		</div>
	</div>

	<div>
		<img {src} alt={name} />
	</div>
</section>
