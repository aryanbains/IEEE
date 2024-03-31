<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'

	import autoAnimate from '@formkit/auto-animate';

	function onWindowClick(e) {
			open = false;
	}

	export let sidebar = false
</script>

<svelte:window on:click={onWindowClick} />


<header id="Nav" class="z-[100] flex fixed justify-between px-7 w-[98%] h-20 bg-gradient-to-r from-blue-200 via-cyan-200 to-green-200 items-center text-gray-600">
	<nav class="flex lg:hidden visible select-none ">
		<Logo/>
	</nav>
	<nav class=" lg:hidden visible">
		<Hamburger />
	</nav>
	<nav class="w-full hidden lg:flex">
		<Menu/>
	</nav>
</header>



<style>
	:global(body) {
        padding: 0;
    }

	#Nav{
		border-radius: 30px;
		margin: 2vh;
		background: linear-gradient(90deg, rgba(167, 242, 247, 0.795) 0%, rgba(0, 226, 215, 0.76) 80%, rgba(1, 196, 154, 0.678) 100%);
	    backdrop-filter: blur(100px);
    	-webkit-backdrop-filter: blur(100px);
    	z-index: 10;
		position: sticky;

	}

</style>