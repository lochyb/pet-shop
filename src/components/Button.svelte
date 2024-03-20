<script>
	let variant = $$restProps.variant;
	let size = $$restProps.size;
</script>

<button
	data-variant={variant}
	data-size={size}
	class="p-4 rounded-lg border-2 border-text-dark data-[variant=primary]:bg-text-dark data-[variant=primary]:hover:bg-brand-dark data-[variant=primary]:text-white data-[variant=outline]:bg-transparent data-[variant=outline]:hover:bg-brand-dark data-[variant=outline]:hover:text-white data-[size=full]:w-full hover:drop-shadow-md"
>
	<slot />
</button>
