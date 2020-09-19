<template>
	<header class="header">
		<div class="container">
			<h1 class="header__title">
				{{ titleHeader }}
			</h1>
			<div class="header__description">
				<h2 class="header__description__title">
					{{ title }}
				</h2>
				<p class="header__description__info">
					{{ description }}
				</p>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data(){
		return {
			titleHeader: "The creative crew",
			title: "WHO WE ARE",
			description: "We are team of creatively diverse. driven. innovative individuals working in various locations from the world."
		}
	}
}
</script>