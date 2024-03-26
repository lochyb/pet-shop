<script>
	let variant = $$restProps.variant;
	let size = $$restProps.size;
	let src = $$restProps.src;
	let imageAlt = $$restProps.imageAlt;

	import Button from './Button.svelte';

	let info = $$restProps.info;
</script>

<div
	data-variant={variant}
	data-size={size}
	class="flex flex-col gap-2 overflow-hidden bg-white max-w-[350px] min-w-[240px] rounded-xl shadow-lg"
>
	<div class="flex items-center justify-center">
		<img class="object-contain w-full max-h-[300px]" {src} alt={imageAlt} />
	</div>
	<div class="flex flex-col gap-4 p-4 flex-2">
		<h3 class="text-3xl">{info.title}</h3>

		<p class="text-xl">{info.subtitle}</p>

		<ul class="space-y-6">
			{#each info.menu as service}
				<li class="flex justify-between">
					{service.name}
					<span>{service.price}</span>
				</li>
			{/each}
		</ul>

		<div class="flex self-end flex-1 mt-12 place-items-end pt-auto">
			<Button variant="primary">{info.linkText}</Button>
		</div>
	</div>
</div>
