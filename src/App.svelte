<script lang="ts">
	import Bg from './Bg.svelte'
	import Section from './Section.svelte';
	import About from './section/About.svelte'
	import History from './section/History.svelte';
	import Works from './section/Works.svelte';
	import SectionTitle from './SectionTitle.svelte'
</script>

<Bg />
<main>
	<div class="hero-placeholder"></div>
	<div class="content">
		<Section>
			<About />
		</Section>
		<Section>
			<History />
		</Section>
		<Section>
			<Works />
		</Section>
	</div>
	<div class="hero-placeholder">
		<div class="footer">
			© rkun 2022
		</div>
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.hero-placeholder {
		position: relative;
		display: flex;
		justify-content: center;
		min-height: 100vh;
		.footer {
			position: absolute;
			bottom: 0;
			margin-bottom: 1rem;
			text-align: center;
		}
	}

	.content {
		padding: 3rem;
		min-height: 200vh;
	}
</style>