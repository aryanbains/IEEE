<script>
    let acceptTerms = false;
    import { Button, Dropdown, DropdownItem, Chevron,NavLi } from 'flowbite-svelte'

</script>

<nav id="Navbar" class="text-black uppercase font-instrument text-l text-bold w-[100%] lg:flex hidden justify-between">
    <img draggable="false" src="/logonew.webp" class="lg:h-16 h-28 block  " alt="logo" style="object-fit: cover">
    <div class="flex py-2 justify-center items-center">
    <a href="/"><h3 class="px-4 font-semibold cursor-pointer  ">Home</h3></a>
    <a href="/about"><h3 class="px-4 font-semibold cursor-pointer">About Us</h3></a>
    <a href="/Events"><h3 class="px-4 font-semibold cursor-pointer">Events</h3></a>
    <!-- <a href="/CSChapter" class="sigs"><h3 class="px-4 font-semibold cursor-pointer">CS CHAPTER</h3></a> -->
    <!-- <a href="/WIE" class="sigs"><h3 class="px-4 font-semibold cursor-pointer">WIE AG</h3></a> -->
    <div>
        <!----><div class="sigs px-1  cursor-pointer font-semibold">
           <!-- <Chevron aligned href="./SIG">Groups</Chevron>
        <Dropdown offset="18">
            <a href="/CSChapter" class="sigs"><DropdownItem>CS Chapter</DropdownItem></a>
            <a href="/WIE" class="sigs"><DropdownItem>WIE AG</DropdownItem></a>
            <a href="/SIG/HACKGTBIT" class="sigs"><DropdownItem>HackGTBIT</DropdownItem></a>
            <a href="/SIG/FSIG" class="sigs"><DropdownItem>FSIG</DropdownItem></a>
            
        </Dropdown>-->
    </div>
    </div>
    <a href="/Execom"><h3 class="px-4 font-semibold cursor-pointer">Execom</h3></a>
        <a href="/achievements"><h3 class="px-4 font-semibold cursor-pointer">Achievements</h3></a>
    <!--    <a href="/Internships"><h3 class="px-4 font-semibold cursor-pointer">Internships</h3></a>-->
    <a href="/Gallery"><h3 class="px-4 font-semibold cursor-pointer">Gallery</h3></a>
    <!--<a href="/Blog"><h3 class="px-4 font-semibold cursor-pointer">Blogs</h3></a>-->
    <a href="/magazines"><h3 class="px-4 font-semibold cursor-pointer">Magazine</h3></a>
    <a href="/contact"><h3 class="px-4 font-semibold cursor-pointer">Contact</h3></a>
    </div>
    <!-- <div class=" flex justify-center invisible lg:visible">
        <div class="flex py-6">
        <a href="https://www.facebook.com/ieeegtbit/"><img style="object-fit:cover" src="/fb.png" class=" px-2 h-6 block " alt="logo"></a>

        <a href="https://www.instagram.com/ieeegtbit/"><img style="object-fit:cover" src="/instagram.png" class=" px-2 h-6 block " alt="logo"></a>

        <a href="https://in.linkedin.com/company/ieee-student-branch-at-gtbit"><img style="object-fit:cover" src="/linkedin.png" class=" px-2 h-6 block " alt="logo"></a>

        <a href="https://in.linkedin.com/company/ieee-student-branch-at-gtbit"><img style="object-fit:cover" src="/email.png" class=" px-2 h-6 block " alt="logo"></a>
        </div>

    </div> -->
    <div class="flex  justify-end md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">
        <button class="text-white hover:text-gray-200 w-6"><a href="https://www.instagram.com/ieeegtbit/">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
        </button>
        <button class="text-white hover:text-gray-200 w-6"><a href="https://www.facebook.com/ieeegtbit">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></a>
        </button>
        <button class="text-white hover:text-gray-200 w-6">
            <a href="https://in.linkedin.com/company/ieee-student-branch-at-gtbit">

                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 100 100" id="linkedin"><path d="M95 59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.773-13.121-5.33 0-8.502 3.587-9.897 7.056-.509 1.241-.64 2.967-.64 4.704V93H36.104s.26-52.58 0-58.028h19.295v8.225c-.039.062-.09.128-.127.188h.127v-.188c2.563-3.948 7.141-9.588 17.388-9.588C85.483 33.609 95 41.903 95 59.727zM15.919 7C9.318 7 5 11.33 5 17.024c0 5.57 4.193 10.031 10.663 10.031h.129c6.729 0 10.914-4.46 10.914-10.031C26.579 11.33 22.521 7 15.919 7zM6.146 93h19.289V34.972H6.146V93z"></path></svg></a>

    </div>


</nav>

<style>

    #Navbar{
        border-radius: 30px;
    }

    h3 {
        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    h3:hover {
        /*text-decoration: underline;*/
        text-underline-offset: 4px;
        transform: scale(1.05);
    }
    .sigs {
        transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .sigs:hover {
        /*text-decoration: underline;
        text-underline-offset: 4px;*/
        color: hsl(225, 72%, 10%);
        transform: scale(1.05);
    }
</style>