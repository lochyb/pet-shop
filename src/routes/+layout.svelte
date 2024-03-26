<script>
	import '../app.css';
</script>

<header class="sticky z-30 flex flex-col text-xl bg-white border-b border-b-gray-300 -top-8">
	<div class="w-full h-8 px-4 text-center header-banner bg-brand-dark text-text-dark">
		Mid Week Sales Happening Now!
	</div>
	<div class="sticky top-0 w-full h-full p-4">
		<nav aria-label="top-navigation" class="h-full max-w-3xl px-4 mx-auto">
			<ul class="flex flex-wrap items-center justify-between h-full gap-4">
				<li class="flex-1">
					<a href="#top" class="underline whitespace-nowrap"> 🐈 CatFluencer </a>
				</li>
				<li>
					<a href="#services" class="underline"> Services </a>
				</li>
				<li>
					<a href="#locations" class="underline"> Locations & Hours </a>
				</li>
				<li>
					<a href="#testamony" class="underline"> Testamony </a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<slot />

<footer class="px-4 py-12 mt-24 text-white bg-text-dark">
	<nav>
		<div class="flex flex-wrap justify-around gap-12">
			<div class="">
				<h3 class="text-xl">Services</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#home" class="main-link"> Dance Lessons </a>
					</li>
					<li>
						<a href="#home" class="main-link">Programming Lessons</a>
					</li>
					<li>
						<a href="#home" class="main-link">Personal Training</a>
					</li>
					<li>
						<a href="#home" class="main-link">Influencer Lessons</a>
					</li>
				</ul>
			</div>
			<div class="">
				<h3 class="text-xl">Locations</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#home" class="main-link">Tokyo, Japan</a>
					</li>
					<li>
						<a href="#home" class="main-link">Sydney, Australia</a>
					</li>
					<li>
						<a href="#home" class="main-link">Seattle, United States</a>
					</li>
					<li>
						<a href="#home" class="main-link">All Locations</a>
					</li>
				</ul>
			</div>
			<div class="">
				<h3 class="text-xl">Company</h3>
				<ul class="flex flex-col justify-between gap-4 mt-4">
					<li>
						<a href="#home" class="main-link">About Us</a>
					</li>
					<li>
						<a href="#home" class="main-link">FAQ</a>
					</li>
					<li>
						<a href="#home" class="main-link">Privacy Policy</a>
					</li>
					<li>
						<a href="#home" class="main-link">Tradmark</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<p class="mt-6 text-center">Trademark CatFluencer .INC | A terrible joke made by @lochyb</p>
</footer>
