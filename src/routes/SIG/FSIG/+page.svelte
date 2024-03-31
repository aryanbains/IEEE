<script>
    import { onMount } from 'svelte';
    let open = false
    export let data;
    import Footer from '../footer.svelte';
    import Navbar from '../../Navbar.svelte';
    let FSIG=[];
    onMount(() => {
        FSIG=data?.records.filter(record => record.Team === "FSIG");
    });
</script>

<Navbar/>
<div class="members-title flex justify-center text-center px-16 pt-[220px] pb-[60px]  bg-cover  overflow-hidden lg:overflow-visible">
    <div >

        <h1 class=" bg-gradient-to-r from-cyan-500 to-emerald-300 font-final text-transparent bg-clip-text text-6xl lg:text-8xl select-none">IEEE GTBIT FSIG</h1><br><br>
        <p class="text-white lg:text-[22px] text-[16px] lg:max-w-[1100px] select-none">
            IEEE FSIG, stands for Fintech SIG of IEEE GTBIT, is one of the latest SIGs of IEEE GTBIT SB. It was established in early 2022 to deal with matters revolving around Financial Technology, Financial Literacy rates, and Financial Independence at a young age. FSIG believes in the principle of mutual growth at same rates for everyone, the extensively curated and out of the box open mic podcasts will be informative, communal, and beneficial for our students. Every member that joins the SIG guarantees themselves a sure shot chance to enter a world which has a plethora of opportunities in the fields of Finance and Technology.
        </p>
        <h1 class=" bg-gradient-to-r to-cyan-500 from-emerald-300 pt-24 font-final text-transparent bg-clip-text text-4xl lg:text-7xl select-none">TEAM MEMBERS</h1>
    </div>
</div>

<div class="dark:bg-gray-950 members justify-between">
    <div class="container pb-8 mx-auto lg:px-10 ">
        <!-- Section: Design Block -->
        <section class=" pt-24 text-center ">
            <div class="flex flex-wrap justify-center items-center lg:px-4 px-2 md:gap-x-6 lg:gap-x-12">

                {#each FSIG as record}

                    <div class="pb-[150px] justify-center itmes-center xl:min-w-[375px] md:min-w-[275px] min-w-full">


                        <div
                                class="block rounded-[20px]  bg-gradient-to-r from-blue-200 via-cyan-200 to-green-200">
                            <div class="flex justify-center">
                                <div class="flex justify-center -mt-[75px]">
                                    <img draggable="false" src={`${record.Image_Link}`}
                                         class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                                </div>
                            </div>
                            <div class="p-6">

                                <h5 class="select-none mb-4 text-lg font-bold">{`${record.Name}`}</h5>

                                <p class="mb-6 select-none">{`${record.Role}`}</p>
                                <ul class="mx-auto flex list-inside justify-center">
                                    <a href='{`${record.Instagram}`}' class="px-2">
                                        <!-- GitHub -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" id="instagram"><path d="M12 6.865A5.135 5.135 0 1 0 17.135 12 5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12 3.334 3.334 0 0 1 12 15.334Zm6.539-8.672a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Zm2.937-1.212a4.917 4.917 0 0 0-1.154-1.772 4.894 4.894 0 0 0-1.77-1.153 7.318 7.318 0 0 0-2.428-.464C15.058 2.012 14.717 2 12 2s-3.057.011-4.124.061a7.326 7.326 0 0 0-2.427.464 4.9 4.9 0 0 0-1.77 1.153A4.882 4.882 0 0 0 2.525 5.45a7.332 7.332 0 0 0-.464 2.427C2.011 8.943 2 9.284 2 12s.011 3.057.061 4.123a7.332 7.332 0 0 0 .464 2.427 4.882 4.882 0 0 0 1.154 1.772 4.915 4.915 0 0 0 1.771 1.153 7.337 7.337 0 0 0 2.427.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.061a7.333 7.333 0 0 0 2.428-.464 5.113 5.113 0 0 0 2.925-2.925 7.306 7.306 0 0 0 .464-2.427c.049-1.067.06-1.407.06-4.123s-.011-3.057-.06-4.123a7.326 7.326 0 0 0-.464-2.427Zm-1.335 10.591A5.52 5.52 0 0 1 19.8 17.9a3.31 3.31 0 0 1-1.9 1.9 5.546 5.546 0 0 1-1.857.344c-1.054.048-1.371.058-4.042.058s-2.986-.01-4.04-.058A5.546 5.546 0 0 1 6.1 19.8a3.1 3.1 0 0 1-1.15-.748 3.092 3.092 0 0 1-.748-1.15 5.494 5.494 0 0 1-.344-1.857C3.812 14.987 3.8 14.671 3.8 12s.01-2.986.058-4.041A5.552 5.552 0 0 1 4.205 6.1a3.1 3.1 0 0 1 .748-1.15A3.072 3.072 0 0 1 6.1 4.2a5.494 5.494 0 0 1 1.86-.34C9.014 3.811 9.331 3.8 12 3.8s2.987.011 4.042.059A5.552 5.552 0 0 1 17.9 4.2a3.31 3.31 0 0 1 1.9 1.9 5.494 5.494 0 0 1 .344 1.857C20.19 9.014 20.2 9.33 20.2 12s-.01 2.986-.059 4.041Z"></path></svg>                                        </a>

                                    <a href={`${record.LinkedIn}`} class="px-2">
                                        <!-- Linkedin -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" id="linkedin"><path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path><circle cx="1.75" cy="1.75" r="1.75"></circle></svg>

                                    </a>
                                </ul>
                            </div>

                        </div>

                    </div>
                {/each}
            </div>


        </section>
        <!-- Section: Design Block -->
    </div>
</div>
<Footer/>