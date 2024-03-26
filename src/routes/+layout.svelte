<script>
	import '../app.css';
</script>

<header
	class="sticky z-30 flex flex-col items-center h-24 text-xl bg-white border-b border-b-gray-300 header-outer -top-8"
>
	<div class="w-full h-8 px-4 text-center header-banner bg-brand-dark text-text-dark">
		Mid Week Sales Happeing Now!
	</div>
	<div class="sticky top-0 flex flex-col items-center w-full h-16 px-4 header-inner">
		<div class="flex justify-between items-center flex-1 w-full gap-4 max-w-[1000px]">
			<div>🐈 CatFluencer</div>
			<div class="ml-auto">search</div>
			<div>cart</div>
		</div>
		<nav aria-label="top-navigation" class="flex-1 hidden px-4 md:block">
			<ul class="flex justify-between gap-4">
				<li>
					<a href="" class="main-link"> Services </a>
				</li>
				<li>
					<a href="" class="main-link"> Locations & Hours </a>
				</li>
				<li>
					<a href="" class="main-link"> About Us </a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<slot />

<footer class="px-4 py-12 mt-12 text-white bg-text-dark">
	<nav>
		<div class="flex flex-wrap justify-around gap-12">
			<div class="">
				<h3 class="text-xl">Services</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#mythical-page-content" class="main-link"> Dance Lessons </a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Programming Lessons</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Personal Training</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Influencer Lessons</a>
					</li>
				</ul>
			</div>
			<div class="">
				<h3 class="text-xl">Locations</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#mythical-page-content" class="main-link">Tokyo, Japan</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Sydney, Australia</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Seattle, United States</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">All Locations</a>
					</li>
				</ul>
			</div>
			<div class="">
				<h3 class="text-xl">Company</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#mythical-page-content" class="main-link">About Us</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">FAQ</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Privacy Policy</a>
					</li>
					<li>
						<a href="#mythical-page-content" class="main-link">Tradmark</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<p class="mt-6 text-center">Trademark CatFluencer .INC | A terrible joke made by @lochyb</p>
</footer>
