<script>
	const src = '/cat-dance.gif';
	let name = 'Cat Meme';

	import Button from '../components/Button.svelte';
	import ServiceCard from '../components/ServiceCard.svelte';

	let infos = [
		{
			imageUrl: '/cat-dj.gif',
			title: 'Dance Lessons',
			subtitle: 'Any pet can be fabulous with the right teacher',
			menu: [
				{ name: 'Group Lessons', price: '$60pp' },
				{ name: '1on1 Lesson', price: '$120' }
			],
			link: '/menu',
			linkText: 'Start Dancing Now'
		},

		{
			imageUrl: '/cat-typing.gif',
			title: 'Programming Lessons',
			subtitle: 'Take our course to become a certified Cat Software Engineer',
			menu: [
				{ name: '4 week frontend course', price: '$400' },
				{ name: '12 week full stack', price: '$1200' }
			],
			link: '/menu',
			linkText: 'Start Learning Now'
		},
		{
			imageUrl: '/cat-work-out.gif',
			title: 'Personal Training',
			subtitle: 'Get that beach body ready',
			menu: [
				{ name: '12 week diet course', price: '$99' },
				{ name: 'Personal Trainer', price: '$70 per hour' }
			],
			link: '/menu',
			linkText: 'Start Training Now'
		},
		{
			imageUrl: '/cat-cool.gif',
			title: 'Influencer Lessons',
			subtitle: 'Learn the skills to build your own brand',
			menu: [
				{ name: 'Instgrams Basics Course', price: '$9' },
				{ name: 'Finding Trends Course', price: '$7' }
			],
			link: '/menu',
			linkText: 'Start Trending Now'
		}
	];
</script>

<section
	id="hero"
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

<section class="flex flex-col items-center justify-center gap-8 p-8 mt-24">
	<h2 class="text-4xl">Our Services</h2>

	<div class="flex flex-wrap justify-center gap-8">
		{#each infos as info}
			<ServiceCard src={info.imageUrl} imageAlt={name} {info} />
		{/each}
	</div>
</section>

<section
	class="max-w-[90%] items-center justify-center px-4 py-12 flex flex-col mx-auto bg-brand-dark mt-12 rounded-xl drop-shadow-lg"
>
	<h2 class="text-4xl">Locations and Hours</h2>
	<p>
		Stop by one of our brick and mortar shops for a consolation on how we can improve your cats
		social influence.
	</p>

	<div class="flex gap-4 mt-8">
		<Button variant="primary"><span class="mr-2">📍</span>See Our Locations</Button>

		<Button variant="outline"><span class="mr-2">📞</span>Contact Us</Button>
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
