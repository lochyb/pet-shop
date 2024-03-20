<script>
	import '../app.css';
</script>

<header class="sticky z-30 flex flex-col items-center h-24 text-xl bg-gray-100 header-outer -top-8">
	<div class="w-full h-8 px-4 text-center header-banner bg-brand-dark text-text-dark">
		Get free delivery on orders over $80
	</div>
	<div class="sticky top-0 flex flex-col items-center w-full h-16 px-4 header-inner">
		<div class="flex justify-between flex-1 w-full gap-4 max-w-[1000px]">
			<div>Logo</div>
			<div class="ml-auto">search</div>
			<div>cart</div>
		</div>
		<nav aria-label="Mythical University" class="flex-1 px-4">
			<ul id="exTest" class="flex justify-between gap-4 disclosure-nav">
				<li>
					<a href="#mythical-page-content" class="main-link"> Products </a>
				</li>
				<li>
					<a href="#mythical-page-content" class="main-link"> Services </a>
				</li>
				<li>
					<a href="#mythical-page-content" class="main-link"> Locations & Hours </a>
				</li>
				<li>
					<a href="#mythical-page-content" class="main-link"> About Us </a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<slot />
