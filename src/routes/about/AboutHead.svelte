<script>
    let acceptTerms = false;
    let open = false;
    let showThumbs=false
    let showCaptions=false
    let darkMode = true;
    import { Carousel, CarouselTransition } from 'flowbite-svelte';
    import Saos from 'saos';
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
		targets: [".about-us"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		});
		anime({
		targets: [ ".create"],
		translateX: ['-150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1000,
		delay: 700,
		});
		anime({
		targets: [".carousel-container"],
		translateX: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    };

    export const images = [
        {
            id: 0,
            name: "Cosmic timetraveler",
            imgurl: "1.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 1,
            name: "Cristina Gottardi",
            imgurl: "2.jpg",
            attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
        },
        {
            id: 2,
            name: "Jonatan Pie",
            imgurl: "3.jpg",
            attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
        },
        {
            id: 3,
            name: "Mark Harpur",
            imgurl: "4.jpg",
            attribution: "mark-harpur-K2s_YE031CA-unsplash",
        },
        {
            id: 4,
            name: "Pietro De Grandi",
            imgurl: "5.jpg",
            attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
        },
        {
            id: 5,
            name: "Sergey Pesterev",
            imgurl: "6.jpg",
            attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
        },
        {
            id: 7,
            name: "Sergey Pesterev",
            imgurl: "7.JPG",
            attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
        },
    ];
</script>

<div class="dark:bg-gray-950 flex xl:flex-row flex-col lg:pr-16 pt-[150px] justify-center overflow-hidden">
    <div class="">
        <h1>About Us</h1>
    </div>
</div>

<style>
    div.carousel-container > div > div {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
    @media screen and (min-width: 480px) { 
        .main-container > * > img {
            width: 450px !important;
            height: auto !important; 
        }
    }

    h1{
        color: beige;
        font-family: Stacker , sans-serif;
        text-align: center;
        font-size: 6rem;
        background: linear-gradient(90deg, rgb(108, 255, 248) 0%, rgba(29,168,240,1) 80%, rgb(3, 213, 255) 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;   
        line-height: -5; 
}
    

</style>