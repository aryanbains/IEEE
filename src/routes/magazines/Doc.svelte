<script>
    import anime from 'animejs';
    import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".pdf-container"],
		translateY: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    }
</script>

<div>
<div class="pdf-container ml-auto mr-auto dark:bg-gray-950 py-[100px]">
    <iframe src="IEEE_magazine_2023.pdf" title='Magazine 2022-23'
            width="600" height="800" class="mx-auto lg:w-[1200px] lg:h-[800px] w-80 h-80">
    </iframe>

</div>
</div>