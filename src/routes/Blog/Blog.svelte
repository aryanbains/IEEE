<script>
    import anime from "animejs";
    import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".blogs2"],
		translateY: ['100%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    };

</script>


<section class="blogs2 text-gray-100 pt-[50px] select-none">
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

        <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden	">
            <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 rounded-[20px] overflow-hidden hidden sm:block">
                <img draggable="false" role="presentation" class="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?6">
                <div class="p-6 space-y-2">
                    <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                    <span class="text-xs text-gray-400">January 26, 2021</span>
                    <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>

                </div>
            </a>
        </div>

    </div>
</section>


<style>
    :global(body) {
        padding: 0;
        background-color:black;
    }
</style>