<template>
	<header class="header">
		<h1 class="header__title animate__animated animate__fadeIn">
			{{ titleHeader }}
		</h1>
		<div class="header__description animate__animated animate__fadeIn">
			<h2 class="header__description__title">
				{{ title }}
			</h2>
			<p class="header__description__info">
				{{ description }}
			</p>
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