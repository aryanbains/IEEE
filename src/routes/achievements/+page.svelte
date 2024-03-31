    <!-- App.svelte -->
    <script>


        import Navbar from '../Navbar.svelte';
        import Sidebar from '../Sidebar.svelte';
        import Footer from "../Footer.svelte";
        import Headevent from "./Headevent.svelte";
        import Style from "./Style.scss"
        import Img2 from "../../Assets/Images/Achievement -1 (1).jpg"
        import Img3 from "../../Assets/Images/Achievement -1 (2).jpg"
        import Img7 from "../../Assets/Images/Vihaan 6.0(1).jpg"
        import Img6 from "../../Assets/Images/Vihaan6.0(2).jpg"
        import Img9 from "../../Assets/Images/Dssn1.jpg"
        import Img10 from "../../Assets/Images/Dssn2.jpg"
        import Img11 from "../../Assets/Images/Dssn3.jpg"
        import Img12 from "../../Assets/Images/Codetoextreme1.jpg"
        import Img13 from "../../Assets/Images/Codetoextreme2.jpg"
        import Img14 from "../../Assets/Images/Codetoextreme3.jpg"
        import Img15 from "../../Assets/Images/ieeextreme.png"
        import Img16 from "../../Assets/Images/dssnaward1.jpg"
        import Img17 from "../../Assets/Images/dssnaward2.jpg"
        import Img18 from "../../Assets/Images/dssnaward3.jpg"
        import Img19 from "../../Assets/Images/ieeecu1.png"
        let open = false


    </script>

    <Navbar bind:sidebar={open}/>
    <Sidebar bind:open/>
    <Headevent/>
    <div class="bg-black font-instrument overflow-hidden lg:pb-[4000px]">
        <div class="px-[70px] grid lg:grid-cols-2 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[180px]">
        <div class="Event1">
            <h1 class="h1">Ideathon WIE-Fest
            </h1>
            <p class="Para1">Sahib Preet Singh, Prabhjot Singh, Prabhleen Kaur and Gursimar Kaur won 2nd prize at ideathon WIE-Fest organized by GGSIPU main campus.</p>
            <img class="Img2" src={Img2} alt="Image2">
            <img class="Img3" src={Img3} alt="Image3">
        </div>

        <br>

        <div class="Event2">
            <h1 class="h2">Vihaan 6.0 Hackathon</h1>
            <p class="Para2">Sahib Preet Singh, Rohan Singh, and Prabhjot Singh secured the second prize in the Vihaan 6.0 Hackathon organized by DTU.<br>
                <br>
                Prabhleen Kaur, Gursimar Kaur, Tanu Jha and Avneet Kaur won the award of Best WIE Team at Vihaan DTU 6.0.
            </p>
            <img class="Img6" src={Img6} alt="Image2">
            <img class="Img7" src={Img7} alt="Image3">
        </div>
        

        <br>

        <div class="Event1">
            <h1 class="h3">IEEE Delhi Section</h1>
            <p class="Para3">Sahib Preet Singh has been appointed as the Editorial Coordinator for IEEE Delhi SSN for the year 2023-24.<br>
                <br>
                <br>
                Prabhjot Singh has been chosen for the TAC Committee at IEEE Delhi SSN for the term 2023-24.
                <br>
                <br>
                <br>
                Sneha Soniwal has been appointed as the WIE Lead at IEEE Delhi SSN for the year 2023-24.

            
            </p>
            <img class="Img9" src={Img9} alt="Image1">
            <img class="Img10" src={Img10} alt="Image2">
            <img class="Img11" src={Img11} alt="Image3">

        </div>

        <br>
        <div class="Event4">
            <h1 class="h4">Code To Xtreme</h1>
            <p class="Para4">Gursimar Kaur won 1st prize at Code To Xtreme organized by IEEE GTBIT.
                <br>
                <br>
                <br>
                Prabhleen Kaur won 2nd prize at Code To Xtreme organized by IEEE GTBIT.
                <br>
                <br>
                <br>
                Sneha Soniwal won 3rd prize at Code To Xtreme organized by IEEE GTBIT.

            </p>
            <img class="Img12" src={Img12} alt="Image1">
            <img class="Img13" src={Img13} alt="Image2">
            <img class="Img14" src={Img14} alt="Image3">
        </div>

        <div class="Event5">
            <h1 class="h5">IEEE Xtreme 17.0 </h1>
            <p class="Para5">Shubh Goel selected as IEEE Xtreme 17.0 Ambassador. 
                <br>            
            </p>
            <img class="Img15" src={Img15} alt="Image1">

        </div>
        <br>

        <div class="Event6">
            <h1 class="h6">IEEE Delhi Section Award Ceremony</h1>
            <p class="Para6">Rohan Singh was felicitated with IEEE Delhi Section Student Network Award
                <br>
                <br>
                <br>
                Himika Prabhat was felicitated with IEEE Delhi Section Outstanding Volunteer Award
                <br>
                <br>
                <br>
                Sneha Soniwal was felicitated with IEEE Delhi Section Outstanding WIE Volunteer Award


            </p>
            <img class="Img16" src={Img16} alt="Image1">
            <img class="Img17" src={Img17} alt="Image2">
            <img class="Img18" src={Img18} alt="Image3">
        </div>


        <div class="Event7">
            <h1 class="h7">IEEE CSIS 2023</h1>
            <p class="Para7">Sahib Preet Singh won the best Campus Ambassador Award at IEEE CSIS 2023 by IEEE CU.
                <br>            
            </p>
            <img class="Img19" src={Img19} alt="Image1">

        </div>



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