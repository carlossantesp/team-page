<template>
	<footer class="footer">
		<p class="footer__copy animate__animated animate__fadeIn">
			{{ footer.name }} &copy; {{ footer.challenges }}
		</p>
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