<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Head from "../Execom/Head.svelte";
    import { onMount } from 'svelte';
    import Saos from "saos";
    import './Style.scss'
    import Img1 from '../../Assets/Execom/ekas img - EKAS BHUI.jpg'
    import Img2 from '../../Assets/Execom/IMG-20231003-WA0016 - Navjyot Kaur.jpg'
    import Img3 from '../../Assets/Execom/Bhavika.png'
    import Img4 from '../../Assets/Execom/IMG_20240303_202736_489 - JAPJOT SINGH.jpg'
    import Img5 from '../../Assets/Execom/IMG20230921153253 - Eshaa Bhasin.jpg'
    import Img6 from '../../Assets/Execom/WhatsApp Image 2024-03-03 at 10.12.07 PM - Simar.jpeg'
    import Img7 from '../../Assets/Execom/cd1dca64-0a37-49f3-a323-ea68d5a84d5a - Tanya Bajwa.jpeg'
    import Img8 from '../../Assets/Execom/IMG_3239 - Tisha Kaur.jpeg'
    import Img9 from '../../Assets/Execom/GursimarKaur - Gursimar Sodhi.jpg'
    import Img10 from '../../Assets/Execom/IMG-20231023-WA0154 - Gurnoor Bindra.jpg'
    import Img11 from '../../Assets/Execom/IMG_20240305_214417 - Aryan Bains.jpg'
    import Img12 from '../../Assets/Execom/IMG_0380 - Birjyot Singh Sahiwal.jpeg'
    import Img13 from '../../Assets/Execom/B612_20240305_004810_549 - Sneha Singh.jpg'
    import Img14 from '../../Assets/Execom/1675938364269 - Anhad Singh.jpg'
    import Img15 from '../../Assets/Execom/PXL_20231123_083558103 - Prableen Singh.jpeg'
    import Img16 from '../../Assets/Execom/Clipped_image_20240304_103959 - Falkeet Singh.png'
    import Img17 from '../../Assets/Execom/WhatsApp Image 2023-12-12 at 20.54.47_31d98ee4 - shwetasingh rana.jpg'
    import Img18 from '../../Assets/Execom/IMG-20240301-WA0080 - Dhruv Chopra.jpg'
    import Img19 from '../../Assets/Execom/IMG20240301163444 - Paras Goel.jpg'
    import Img20 from '../../Assets/Execom/IMG-20240301-WA0016 - 10 Vinay Dhaka.jpg'
    import Img21 from '../../Assets/Execom/IMG-20240305-WA0015 - Vidit Dalmia.jpg'
    import Img22 from '../../Assets/Execom/IMG_20221216_145950~3 - Amitoj Singh.jpg'
    import Img23 from '../../Assets/Execom/PHOTO-2024-03-03-19-09-39 - gunisha kaur.jpg'
    import Img24 from '../../Assets/Execom/IMG_20240305_184613 - Harjas Singh.jpg'
    import Img25 from '../../Assets/Execom/20240304_175050 - IamDJ.jpg'   
    import Img26 from '../../Assets/Execom/IMG20240304162105 - Ashnoor Singh.jpg'
    import Img27 from '../../Assets/Execom/IMG_20240305_194331 - Supret Kaur.jpg'
    import Img28 from '../../Assets/Execom/IMG-20240117-WA0017 - Jastej Singh.jpg'
    import Img29 from '../../Assets/Execom/IMG_1658 - Gurleen Kaur.jpeg'
    import Img30 from '../../Assets/Execom/IMG_20240301_220200 - Gurmanpreet Singh.jpg'
    import Img31 from '../../Assets/Execom/IMG_20240207_220121_461 - Jasvinder “Acoustic” Singh.jpg'  
    import Img32 from '../../Assets/Execom/photo - Arshdeep Singh.jpg'
    import Img33 from '../../Assets/Execom/muskan - Dilpreet Singh.jpg'
    import Img34 from '../../Assets/Execom/IMG_3573 - Jaspreet Singh.jpg'
    import Img35 from '../../Assets/Execom/IMG_9954 - Gagandeep Kaur.jpeg'     
    import Img36 from '../../Assets/Execom/IMG_20240302_105544 - Prabhnoor Singh.jpg'    
    import Img37 from '../../Assets/Execom/IMG_20230716_160056_682-01 - Prajjwal Shekhar Gupta.jpeg'
    import Img38 from '../../Assets/Execom/20240301_162219 - Gurasees Singh.jpg'
    import Img39 from '../../Assets/Execom/IMG_20240303_224139 - Vishesh Vats.jpg'         
    import Img40 from '../../Assets/Execom/IMG-20240303-WA0027 - Tavleen Kaur.jpg'    
    import Img41 from '../../Assets/Execom/IMG_1322 - harman nanda.png'          
    import Img42 from '../../Assets/Execom/C612B505-4B70-410D-8E1E-04F886C60EB9 - Sahibnoor Singh.jpeg' 
    import Img43 from '../../Assets/Execom/PHOTO (2) - Kashish Chauhan.jpeg'   
    import Img44 from '../../Assets/Execom/20240304_140758 - Suchitra Sahoo.jpg'
    import Img45 from '../../Assets/Execom/IMG_20240304_211847_744 - Ishika Ahuja.jpg'
    import Img46 from '../../Assets/Execom/Photoroom-20240303_191037~2 - Devanshi Singh.png'  
    import Img47 from '../../Assets/Execom/1709472110490 - Ashmeet Kaur.jpg'
    import Img48 from '../../Assets/Execom/IMG_20231218_123807 - Arshpreet Singh.jpg'
    import Img49 from '../../Assets/Execom/IMG_6430 - Angaddeep Singh.jpg'
    import Img50 from '../../Assets/Execom/IMG_7602 - Nitish Kumar Mahto.jpg'
    import Img51 from '../../Assets/Execom/IMG-20240305-WA0001 - Agampreet Kaur.jpg'
    import Img52 from '../../Assets/Execom/005ba6b0-2631-448c-af3e-af606bd82923 - Reet kaur Ahuja.jpeg'
    import Img53 from '../../Assets/Execom/IMG_8901 - Arshpreet Singh.jpeg'
    import Img54 from '../../Assets/Execom/20240301_232007 - Ashmeet Kaur.jpg'
    import Img55 from '../../Assets/Execom/5262b6fb-e7f8-48c7-93ea-466df7e2ffd7 - ALISHA CHAUDHARY.jpeg'
    import Img56 from '../../Assets/Execom/IMG_2046 - Paras.jpg'  
    import Img57 from '../../Assets/Execom/20231008_180919 - Parneet Kaur.jpg' 
    import Img58 from '../../Assets/Execom/IMG-20230422-WA0010_Original - Avanji Jain.jpeg'                                                                                                                                                    
                                        

    let open = false
    export let data;
    let main=[];
    let execomRecords = [];
    let WIE=[];
    let CsChap=[];
    let Hack=[];
    let FSIG=[];
    let TN=[];
    let web=[];
    let branch=[];
    let HR=[];
    let EMT=[];
    let SMT=[];
    let CDC=[];
    let EC=[];


    onMount(() => {
        TN = data?.records.filter(record => record.Team === "T&N");
        branch =data?.records.filter(record => record.Team === "Branch");
        web=data?.records.filter(record => record.Team === "Webmaster");
        main = data?.records.filter(record => record.Team === "main");
        execomRecords = data?.records.filter(record => record.Team === "Execom");
        WIE=data?.records.filter(record => record.Team === "WIE");
        CsChap=data?.records.filter(record => record.Team === "CSChapter");
        Hack=data?.records.filter(record => record.Team === "HACKGTBIT");
        FSIG=data?.records.filter(record => record.Team === "FSIG");
        HR=data?.records.filter(record => record.Team === "HR");
        EMT=data?.records.filter(record => record.Team === "EMT");
        SMT=data?.records.filter(record => record.Team === "SMT");
        CDC=data?.records.filter(record => record.Team === "CDC");
        EC=data?.records.filter(record => record.Team === "EC");

    });
</script>
<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<div class="w-screen">
<Head></Head>
<!-- <Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title py-10 lg:py-20 flex justify-center text-center px-16  bg-cover font-final overflow-hidden lg:overflow-visible">
        
        <div>
            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Executive Committee</h1>
        </div>
    </div>
</Saos> -->

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>
    <div class="members-title flex justify-center text-center px-16 pt-[50px] pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div>

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-5xl select-none">Women in engineering AG</h1>
            <div class="container4">
                <img class="img1" src={Img3} alt="Chairperson">
                <p class="para1">Bhavika
				<br>
				Chairperson</p>
                </div>
        
                <div class="container4">
                    <img class="img2" src={Img4} alt="Vice-Chairperson">
                    <p class="para1">Japjot SIngh
                        <br>Vice Chairperson</p>
                    </div>

                    <div class="container4">
                        <img class="img2" src={Img5} alt="Vice-Chairperson">
                        <p class="para1">Eshaa Bhasin
                            <br>
                            General Secretary</p>
                        </div>
                    
                    <div class="container4">
                    <img class="img2" src={Img6} alt="Vice-Chairperson">
                    <p class="para1">Simar Kaur
                        <br>
                        Editorial Coordinator</p>
                    </div>

                    <div class="container4">
                        <img class="img2" src={Img7} alt="Vice-Chairperson">
                        <p class="para1">Tanya Kaur
                            <br>GD Coordinator</p>
                        </div>

                    <div class="container4">
                            <img class="img2" src={Img8} alt="Vice-Chairperson">
                            <p class="para1">Tisha kaur
                                <br>
                                NSM Coordinator</p>
                            </div>         
        </div>
    </div>
</Saos>


<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>
    <div class="members-title flex justify-center text-center px-16 pt-[50px] pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-5xl select-none">CS Chapter</h1>
            <div class="container4">
                <img class="img1" src={Img9} alt="Chairperson">
                <p class="para1">Gursimar Kaur Sodhi
                    <br>
                    Chairperson</p>
                </div>
        
                <div class="container4">
                    <img class="img2" src={Img10} alt="Vice-Chairperson">
                    <p class="para1">Gurnoor Kaur
                        <br>
                        Vice Chairperson</p>
                    </div>

                    <div class="container4">
                        <img class="img2" src={Img11} alt="Vice-Chairperson">
                        <p class="para1">Aryan Bains
                            <br>General Secretary</p>
                        </div>
                    
                    <div class="container4">
                    <img class="img2" src={Img12} alt="Vice-Chairperson">
                    <p class="para1">Birjyot Singh Sahiwal
                        <br>Editorial Coordinator</p>
                    </div>

                    <div class="container4">
                        <img class="img2" src={Img13} alt="Vice-Chairperson">
                        <p class="para1">Sneha Singh
                            <br>GD Coordinator</p>
                        </div>

                    <div class="container4">
                            <img class="img2" src={Img14} alt="Vice-Chairperson">
                            <p class="para1">Anhad Singh
                                <br>NSM Coordinator</p>
                            </div>  
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent pb-7 bg-clip-text text-4xl lg:text-5xl select-none">Human Resource</h1>
            <div class="container3">
                <img class="img1a" src={Img1} alt="Chairperson">
                <p class="para1">
                    Ekas Bhui
                    <br>
                    HR Lead</p>
                </div>
        
                <div class="container3">
                    <img class="img2a" src={Img2} alt="Vice-Chairperson">
                    <p class="para1">
                        Navjyot Kaur
                        <br>
                        HR Coordinator</p>
                    </div>

                    <div class="container3">
                        <img class="img2a" src={Img27} alt="Vice-Chairperson">
                        <p class="para1">
                            Supreet RJ Kaur
                            <br>
                            HR Coordinator</p>
                        </div>
        </div>

        </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>
    <div class="members-title flex justify-center text-center px-16 pt-[50px] pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-5xl select-none">HACKGTBIT SIG</h1>
            <div class="container5">
                <img class="img1" src={Img15} alt="Mentor">
                <p class="para1">Prableen Singh Matharu
                    <br>Lead</p>
                </div>
    
            <div class="container5">
                <img class="img1" src={Img16} alt="Mentor">
                <p class="para1">Falkeet Singh
                    <br>Co-Lead</p>
                </div>

            <div class="container5">
                <img class="img1" src={Img17} alt="Mentor">
                <p class="para1">Shweta Rana
                    <br>Coordinator</p>
                </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>
    <div class="members-title flex justify-center text-center px-16 pt-[50px] pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div>

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-5xl select-none">Circuitmasters SIG</h1>
            <div class="container5">
                <img class="img1" src={Img18} alt="Mentor">
                <p class="para1">Dhruv Chopra
                    <br>Lead</p>
                </div>
    
            <div class="container5">
                <img class="img1" src={Img19} alt="Mentor">
                <p class="para1">Paras Goel
                    <br>Co-Lead</p>
                </div>

            <div class="container5">
                <img class="img1" src={Img20} alt="Mentor">
                <p class="para1">Vinay Dhaka
                    <br>Coordinator</p>
                </div>
        </div>
    </div>
</Saos>


<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>
    <div class="members-title flex justify-center text-center px-16 pt-[50px] pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >
    
            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-5xl select-none">Research and Development SIG</h1>
            <div class="container5">
                <img class="img6" src={Img21} alt="Mentor">
                <p class="para1">Vidit Dalmia
                    <br>Lead</p>
                </div>
    
            <div class="container5">
                <img class="img6" src={Img22} alt="Mentor">
                <p class="para1">Amitoj Singh
                    <br>Co-Lead</p>
                </div>

            <div class="container5">
                <img class="img6" src={Img23} alt="Mentor">
                <p class="para1">Gunisha Kaur
                    <br>Coordinator</p>
                </div>
        </div>
    </div>
    </Saos>
    

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div>

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Machine learning Team</h1>
            <div class="container1b">
                <img class="img1" src={Img24} alt="Mentor">
                <p class="para1">Harjas Singh
                    <br>
                    Lead</p>
                </div>
    
            <div class="container1b">
                <img class="img1" src={Img25} alt="Mentor">
                <p class="para1">Dhairyajeet Singh
                    <br>Coordinator</p>
                </div>

            <div class="container1b">
                <img class="img1" src={Img26} alt="Mentor">
                <p class="para1">Ashnoor Singh
                    <br>Coordinator</p>
                </div>
        </div>
    </div>
</Saos>


<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">App Development Team</h1>
            <div class="container1a">
                <img class="img1a" src={Img28} alt="Chairperson">
                <p class="para1">
                    Jastej Singh
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1">
                    <img class="img2a" src={Img29} alt="Vice-Chairperson">
                    <p class="para1">
                        Gurleen Kaur Virdi
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1">
                            <img class="img3" src={Img30} alt="General Secretary">
                            <p class="para1">
                                Gurmanpreet Singh
                                <br>
                                Co-ordinator</p>
                            </div>
        
                            <div class="container1">
                                <img class="img4" src={Img31} alt="Technical Secretary">
                                <p class="para1">
                                    Jasvinder Singh
                                    <br>
                                    Co-ordinator</p>
                                </div>
        </div>
    </div>
</Saos>



<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Web Development Team</h1>
            <div class="container1a">
                <img class="img1a" src={Img32} alt="Chairperson">
                <p class="para1">
                    Arshdeep Singh
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1">
                    <img class="img2a" src={Img33} alt="Vice-Chairperson">
                    <p class="para1">
                        Muskan Kaur
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1">
                            <img class="img2a" src={Img34} alt="General Secretary">
                            <p class="para1">
                                Jaspreet Singh
                                <br>
                                Co-ordinator</p>
                            </div>
        
                            <div class="container1">
                                <img class="img2a" src={Img35} alt="Technical Secretary">
                                <p class="para1">
                                    Gagandeep Kaur
                                    <br>
                                    Co-ordinator</p>
                                </div>
        </div>
    </div>
</Saos>



<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">iot Team</h1>
            <div class="container1a">
                <img class="img1a" src={Img36} alt="Chairperson">
                <p class="para1">
                    Prabhnoor Singh
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1">
                    <img class="img2a" src={Img37} alt="Vice-Chairperson">
                    <p class="para1">
                        Prajjwal Shekhar
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1">
                            <img class="img2a" src={Img38} alt="General Secretary">
                            <p class="para1">
                                Gurasees Singh
                                <br>
                                Co-ordinator</p>
                            </div>
        
                            <div class="container1">
                                <img class="img2a" src={Img39} alt="Technical Secretary">
                                <p class="para1">
                                    Vishesh Vats
                                    <br>
                                    Co-ordinator</p>
                                </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">DSA team</h1>
            <div class="container1a">
                <img class="img1a" src={Img40} alt="Chairperson">
                <p class="para1">
                    Tavleen Kaur 
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1">
                    <img class="img2a" src={Img41} alt="Vice-Chairperson">
                    <p class="para1">
                        Harmanjot Singh
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1">
                            <img class="img2a" src={Img42} alt="General Secretary">
                            <p class="para1">
                                Sahibnoor Singh
                                <br>
                                Co-ordinator</p>
                            </div>
        
                            <div class="container1">
                                <img class="img2a" src={Img43} alt="Technical Secretary">
                                <p class="para1">
                                    Kashish Chauhan
                                    <br>
                                    Co-ordinator</p>
                                </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Editorial team</h1>
            <div class="container1b">
                <img class="img1" src={Img44} alt="Chairperson">
                <p class="para1">
                    Suchitra Sahoo 
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1b">
                    <img class="img2" src={Img45} alt="Vice-Chairperson">
                    <p class="para1">
                        Ishika Ahuja
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1b">
                            <img class="img2" src={Img46} alt="General Secretary">
                            <p class="para1">
                                Devanshi Singh
                                <br>
                                Co-ordinator</p>
                            </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Graphic Design team</h1>
            <div class="container1c">
                <img class="img1" src={Img47} alt="Chairperson">
                <p class="para1">
                    Ashmeet kaur
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1c">
                    <img class="img2" src={Img48} alt="Vice-Chairperson">
                    <p class="para1">
                        Arshpreet Singh
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1c">
                            <img class="img2" src={Img49} alt="General Secretary">
                            <p class="para1">
                                Angaddeep Singh
                                <br>
                                Co-ordinator</p>
                            </div>

                            <div class="container1c">
                                <img class="img2" src={Img50} alt="General Secretary">
                                <p class="para1">
                                    Nitish Mahto
                                    <br>
                                    Co-ordinator</p>
                                </div>

                                <div class="container1c">
                                    <img class="img2" src={Img51} alt="General Secretary">
                                    <p class="para1">
                                        Agampreet Kaur
                                        <br>
                                        Co-ordinator</p>
                                    </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Networking and Social Media team</h1>
            <div class="container1a">
                <img class="img1a" src={Img52} alt="Chairperson">
                <p class="para1">
                    Kulreet Kaur 
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1">
                    <img class="img2a" src={Img53} alt="Vice-Chairperson">
                    <p class="para1">
                        Arshpreet Singh
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1">
                            <img class="img2a" src={Img54} alt="General Secretary">
                            <p class="para1">
                                Ashmeet Kaur
                                <br>
                                Co-ordinator</p>
                            </div>
        
                            <div class="container1">
                                <img class="img2a" src={Img55} alt="Technical Secretary">
                                <p class="para1">
                                    Alisha Chaudhary
                                    <br>
                                    Co-ordinator</p>
                                </div>
        </div>
    </div>
</Saos>

<Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.3s" once={true}>

    <div class="members-title flex justify-center text-center px-16 pb-[80px]  bg-cover font-final overflow-hidden lg:overflow-visible">
        <div >

            <h1 class=" bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-5xl lg:text-6xl select-none">Datamaster and photography team</h1>
            <div class="container1c">
                <img class="img1" src={Img56} alt="Chairperson">
                <p class="para1">
                    Paras
                    <br>
                    Lead</p>
                </div>
        
                <div class="container1c">
                    <img class="img2" src={Img57} alt="Vice-Chairperson">
                    <p class="para1">
                        Parneet Kaur
                        <br>
                        Co-ordinator</p>
                    </div>
        
                        <div class="container1c">
                            <img class="img2" src={Img58} alt="General Secretary">
                            <p class="para1">
                                Avanji Jain
                                <br>
                                Co-ordinator</p>
                            </div>
        </div>
    </div>
</Saos>

</div>


<Footer/>

<style>
    body {
        overflow-x: hidden !important
    }
</style>