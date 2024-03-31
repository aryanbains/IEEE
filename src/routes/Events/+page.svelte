<!-- App.svelte -->
<script>


    import Navbar from '../Navbar.svelte';
    import Saos from "saos";
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Headevent from "./Headevent.svelte";
    import Style from "./Style.scss"
    import Img1 from "../../Assets/Images/Event - 1 (1).jpeg"
    import Img2 from "../../Assets/Images/Event - 1 (2).jpeg"
    import Img3 from "../../Assets/Images/Event - 1 (3).jpeg"
    import Img4 from "../../Assets/Images/Event - 1 (4).jpeg"
    import Img5 from "../../Assets/Images/Event 2 - (1).jpeg"
    import Img6 from "../../Assets/Images/Event 2 - (2).jpeg"
    import Img7 from "../../Assets/Images/Event 2 - (3).jpeg"
    import Img8 from "../../Assets/Images/Event 2 - (4).jpeg"
    import Img9 from "../../Assets/Images/Event 3 - (1).jpeg"
    import Img10 from "../../Assets/Images/Event 3 - (2).jpeg"
    import Img11 from "../../Assets/Images/Event 3 - (3).jpeg"
    import Img12 from "../../Assets/Images/Event 3 - (4).jpeg"
    import Img13 from "../../Assets/Images/Event 4 - (1).jpg"
    import Img14 from "../../Assets/Images/Event 4 - (2).jpg"
    import Img15 from "../../Assets/Images/Event 4 - (3).jpg"
    import Img16 from "../../Assets/Images/Event 4 - (4).jpg"
    import Img17 from "../../Assets/Images/Event 5 - (1).jpg"
    import Img18 from "../../Assets/Images/Event 5 - (2).jpg"
    import Img19 from "../../Assets/Images/Event 5 - (3).jpg"
    import Img20 from "../../Assets/Images/Event 5 - (4).jpg"
     


    let open = false


</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Headevent/>

<div class="bg-black font-instrument overflow-hidden lg:pb-[50px]">
    <div class="px-[70px] grid lg:grid-cols-2 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[500px]">
<Saos animation="-global-from-right 1.2s cubic-bezier(.62,.04,.51,.98) 0.7" once={true}>
    <div class="Event1">
        <h1 class="h1">Jashan-E-Freshers</h1>
        <p class="Para1">IEEE GTBIT SB Successfully conducted all of its events on the occasion of Jashn-e-Freshers and fulfilled 
            the responsibility of all the stage hosting, management and backend on the 2nd day.</p>
        <img class="Img1" src={Img1} alt="Image1">
        <img class="Img2" src={Img2} alt="Image2">
        <img class="Img3" src={Img3} alt="Image3">
        <img class="Img4" src={Img4} alt="Image4">
    </div>
</Saos>

    <br>

<Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) 0.7" once={true}>
    <div class="Event2">
        <h1 class="h2">Code to Xtreme</h1>
        <p class="Para2">IEEE GTBIT SB event: Code to Xtreme'-a thrilling coding competition where IEEE members engaged 
            in a healthy and competitive environment. Participants went head-to-head 
            in a fierce coding contest, pushing their limits to secure victory.</p>
        <img class="Img5" src={Img5} alt="Image1">
        <img class="Img6" src={Img6} alt="Image2">
        <img class="Img7" src={Img7} alt="Image3">
        <img class="Img8" src={Img8} alt="Image4">
    </div>
</Saos>

    <br>

    <div class="Event1">
        <h1 class="h3">IEEE Day</h1>
        <p class="Para3">IEEE GTBIT and Delhi conclude their IEEE Day celebrations with over a combined 800+ 
            participants, fostering innovation and collaboration in the tech community across multiple events
            of various genres!</p>
        <img class="Img9" src={Img9} alt="Image1">
        <img class="Img10" src={Img10} alt="Image2">
        <img class="Img11" src={Img11} alt="Image3">
        <img class="Img12" src={Img12} alt="Image4">
    </div>

    <br>

    <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) 0.7" once={true}>
    <div class="Event4">
        <h1 class="h4">Design Thinking</h1>
        <p class="Para4">On October 16th, 2023, entrepreneurs and aspiring innovators gathered at
              BVS Block to delve deep into the world of entrepreneurship. With the guidance of our 
             esteemed speaker, Ramneek Kalra, an IEEE Impact Creator, attendees embarked on a journey to uncover
             the intricacies of entrepreneurial success.  
        </p>
        <img class="Img13" src={Img13} alt="Image13">
        <img class="Img14" src={Img14} alt="Image14">
        <img class="Img15" src={Img15} alt="Image15">
        <img class="Img16" src={Img16} alt="Image16">
    </div>
    </Saos>

    <br>

    <Saos animation="-global-from-right 1.2s cubic-bezier(.62,.04,.51,.98) 0.7" once={true}>
    <div class="Event5">
        <h1 class="h5">Mega Vega Workshop</h1>
        <p class="Para5">The DIR-V VEGA Nationwide Roadshow concluded at Guru Tegh Bahadur 
            Institute of Technology in New Delhi, marking a significant milestone in the Atmanirbhar Bharat microprocessors
             initiative. Organized by IEEE India Council, C-DAC, and MeitY, the event spanned 15 venues across India from November
              17-18, 2023.
        </p>
        <img class="Img17" src={Img17} alt="Image17">
        <img class="Img18" src={Img18} alt="Image18">
        <img class="Img19" src={Img19} alt="Image19">
        <img class="Img20" src={Img20} alt="Image20">
       
    </div>
    </Saos>
    </div>
</div>

<Footer/>

<style>
    :global(body) {
        padding: 0;
        background-color: black;
        overflow-x: hidden;
    }
</style>