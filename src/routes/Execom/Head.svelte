<script>
    import anime from "animejs";
	import Style from './Style.scss'
    import { afterUpdate, onMount } from 'svelte';
	import Img1 from '../../Assets/Execom/Sahibpreet Singh.jpg'
	import Img2 from '../../Assets/Execom/IMG_20240303_192636 - Yash Pandey.jpg'
	import Img3 from '../../Assets/Execom/73EE910F-83A4-407E-8755-9EDD6CD1645C.jpg'
	import Img4 from '../../Assets/Execom/IMG_8447_-_Prabhjot_Singh.jpg'
	import Img5 from '../../Assets/Execom/Shubh_2IMG_8853.jpg'
	import Img6 from '../../Assets/Execom/Mohan Kaushik.png'
	import Img7 from '../../Assets/Execom/Rohan Kumar.png'
	import Img8 from '../../Assets/Execom/Mukesh Sahu.png'

	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".members-heading"],
		translateY: ['-100%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 800,
		});
    };
	

</script>

<style>
	:root {
		overflow-x: hidden;
	}
</style>

<div class="members-heading flexbox justify-center text-center px-5 pt-[200px] pb-28  bg-cover font-final overflow-hidden lg:overflow-visible">
    <div class="Main" >

        <h1 class=" bg-gradient-to-r from-cyan-500 to-emerald-300 text-transparent bg-clip-text text-5xl lg:text-7xl select-none px-2">Executive Committee</h1><br>
		
		<div class="container">
			<img class="img1" src={Img8} alt="Mentor">
			<p class="para1">
				Mukesh Sahu
				<br>
				Councellor</p>
			</div>

			<br>

		<div class="container">
			<img class="img1" src={Img7} alt="Mentor">
			<p class="para1">
				Rohan Kumar Singh
				<br>
				Mentor</p>
			</div>

		<div class="container">
			<img class="img1" src={Img6} alt="Mentor">
			<p class="para1">
				Mohan Kaushik
				<br>
				Mentor</p>
			</div>

			<br>

		<div class="container1">
		<img class="img1a" src={Img1} alt="Chairperson">
		<p class="para1">
			Sahibpreet Singh
			<br>
			Chairperson</p>
		</div>

		<div class="container1">
			<img class="img2a" src={Img2} alt="Vice-Chairperson">
			<p class="para1">
				Yash Pandey
				<br>
				Vice-Chairperson</p>
			</div>

				<div class="container1">
					<img class="img3" src={Img3} alt="General Secretary">
					<p class="para1">
						Diya Sehgal
						<br>
						General Secretary</p>
					</div>

					<div class="container1">
						<img class="img4" src={Img4} alt="Technical Secretary">
						<p class="para1">
							Prabhjot Singh
							<br>
							Technical Secretary</p>
						</div>

						<div class="container1">
							<img class="img5" src={Img5} alt="Treasurer">
							<p class="para1">
								Shubh Goel
								<br>
								Treasurer</p>
							</div>
    </div>
</div>