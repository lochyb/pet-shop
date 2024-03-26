<script>
	import ServiceCard from './ServiceCard.svelte';

	let name = 'dance cat';
	let infos = [
		{
			imageUrl: '/gif/cat-dj.gif',
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
			imageUrl: '/gif/cat-typing.gif',
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
			imageUrl: '/gif/cat-work-out.gif',
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
			imageUrl: '/gif/cat-cool.gif',
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
	id="services"
	class="flex flex-col items-center justify-center gap-8 px-8 mt-24 scroll-m-36"
>
	<h2 class="text-4xl">Our Services</h2>

	<div class="flex flex-wrap justify-center gap-8">
		{#each infos as info}
			<ServiceCard src={info.imageUrl} imageAlt={name} {info} />
		{/each}
	</div>
</section>
