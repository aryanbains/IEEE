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
		targets: [".magazines-text"],
		translateY: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		});
    }
</script>

<div class="magazines-text pt-[170px]  flex justify-center text-center px-16  bg-cover font-final dark:bg-gray-950 z-[-199]">
    <div class="relative">
        <h2 class="bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text text-6xl lg:text-8xl select-none">MAGAZINE</h2>

    </div>
</div>