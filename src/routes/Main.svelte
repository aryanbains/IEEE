<!doctypehtml>
<style>
	.container {
    position: relative;
    text-align: center;
    color: white;
}

.image, .image1, .image2 {
    width: 50%;
    border-radius: 30px;
}

.image {
    height: 79vh;
    margin-top: 4.4vh;
    margin-left: 24vw;
}

.image1, .image2 {
    height: auto;
    position: absolute;
    filter: blur(10px) brightness(-20);
    opacity: 0.3;
}

.image1 {
    margin-top: 2.5vh;
    margin-left: -27.5vw;
    margin-right: -30vw;
}

.image2 {
    margin-top: 2.5vh;
    margin-left: 74.5vw;
}

.container img {
    filter: blur(5px) brightness(-10);
    opacity: 0.3;
    z-index: -10;
}

.container h1 {
    font-size: 5vw;
}

.container h2 {
    font-size: 2vw;
}

.container:hover img {
    filter: blur(0px);
    opacity: 0.7;
    transition: ease-in-out 0.5s;
}

.container:hover h1,
.container:hover h2 {
    transform: translateX(-25%) translateY(-30vh);
    font-size: 2.5vw;
    font-weight: 700;
    text-align: left;
}

.container:hover button {
    display: none;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.h1 {
    font-size: 6vw;
    font-family: Stacker, sans-serif;
}

.h2 {
    font-size: 3vw;
    font-family: Stacker, sans-serif;
    margin-top: -5vh;
}


</style>
<img src="homepagebg.jpg" alt="" class="image1">
<img src="homepagebg.jpg" alt="" class="image2">

<div class="container">
	<img src="homepagebg.jpg" alt="" class="image">
		<div class="centered">
		<div class="pt-[100px] pb-[0px] relative ">
		
			<h1 class="h1">IEEE GTBIT</h1><br>
			<h2 class="h2">Student Branch</h2>
			<div class="z-[-40] join-now flex py-14 justify-center text-center">
				<!-- <p class="text-xl py-2 text-gray-500 dark:text-white lg:text-2xl">Join Our Team</p> -->
				<a href="https://www.ieee.org/" target="_blank" rel=”nooopener”>
					<button class=" text-black text-l lg:text-m bg-gradient-to-l from-cyan-200 to-green-200 mx-7  py-1 lg:py-4 px-6 rounded-[25px]  justify-center hover:animate-pulse dark:text-black cursor-pointer transition-all ease-in-out duration-[0.75s] font-final font-bold ">
					Join Now</button>
				</a>
			</div>	
	    </div>  
	</div>
</div>
</!doctypehtml>