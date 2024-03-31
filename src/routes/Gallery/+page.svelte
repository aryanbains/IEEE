
<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte'
    import Sidebar from '../Sidebar.svelte'
    import anime from "animejs";
    import { afterUpdate, onMount } from 'svelte';
    import Footer from "../Footer.svelte";
    import { slide } from 'svelte/transition';
    import Style from './Style.scss'
    import Img1 from '../../Assets/Gallery/IMG-20240305-WA0021.jpg'
    import Img2 from '../../Assets/Gallery/IMG-20240305-WA0071.jpg'
    import Img3 from '../../Assets/Gallery/IMG_2406.jpg'
    import Img4 from '../../Assets/Gallery/IMG_4059.jpg'
    import Img5 from '../../Assets/Gallery/IMG_4199.jpg'
    /*import Img6 from '../../Assets/Gallery/IMG_4860.JPG'
    import Img7 from '../../Assets/Gallery/IMG_4903.JPG'*/
    import Img8 from '../../Assets/Gallery/IMG_7192.jpg'
    import Img9 from '../../Assets/Gallery/IMG_9644.jpg'
    import Img10 from '../../Assets/Gallery/P1260893.png'
    import Img11 from '../../Assets/Gallery/WhatsApp Image 2024-03-15 at 22.11.37_056e1b65.jpg'
    import Img12 from '../../Assets/Gallery/Sports meet.jpeg'

    let acceptTerms = false;
    let open = false;
    let showThumbs=false
    let showCaptions=false
    let darkMode = true;
    /*import { Carousel, CarouselTransition } from 'flowbite-svelte'
    
    
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".gallery-title"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		});
        anime({
		targets: [".gallery-text"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
        delay: 700,
		});
        anime({
		targets: [".carousel-container2"],
		translateX: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
        delay: 700,
		});
        
    };*/
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>

<div class=" flex justify-center items-center pb-24 pt-[150px] lg:flex-row flex-col dark:bg-gray-950 overflow-hidden">
    <div class="lg:w-1/3 flex flex-col justify-center items-center">
        <!--<h1 class="p-4 gallery-title text-6xl tracking-[0.05em] lg:leading-8 font-final leading-[150px] lg:text-7xl select-none bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text">
            GALLERY
        </h1>-->
    </div>
</div>
   <div class="slider">
        <div class="slide-track">
            <div class="slide1">
                <img src={Img1}  alt="" />
            </div>
            <div class="slide2">
                <img src={Img2} alt="" />
            </div>
            <div class="slide3">
                <img src={Img3} alt="" />
            </div>
            <div class="slide4">
                <img class="" src={Img4}  alt="" />
            </div>
            <div class="slide4">
                <img src={Img5}  alt="" />
            </div>
            <div class="slide4">
                <img src={Img9} alt="" />
            </div>
            <div class="slide4">
                <img src={Img10} alt="" />
            </div>
            <div class="slide4">
                <img class="" src={Img8}  alt="" />
        </div>
        <div class="slide4">
            <img class="" src={Img11}  alt="" />
        </div>
        <div class="slide4">
            <img class="" src={Img12}  alt="" />
        </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>

<style>
    :global(body) {
        padding: 0;
        background-color:black;
    }

</style>

<Footer/>
