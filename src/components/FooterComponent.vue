<template>
	<footer class="footer">
		<div class="container">
			<p class="footer__copy">
				{{ footer.name }} &copy; {{ footer.challenges }}
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterComponent',
	props:[
		'footer'
	]
}
</script>