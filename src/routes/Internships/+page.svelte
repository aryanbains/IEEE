<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte'
    import Sidebar from '../Sidebar.svelte'
    import Footer from "../Footer.svelte";
    import Saos from 'saos';
    let open = false
    export let data;
    
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<div class="w-screen justify-center items-center py-[150px]">
    <Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0s" once={true}>
        <h1 class="font-final bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text text-4xl lg:text-7xl text-center select-none pb-[50px]">
            INTERNSHIPS
        </h1>
    </Saos>
    <Saos animation="-global-blur-fade-in 0.9s cubic-bezier(.62,.04,.51,.98) both 0.8s" once={true}>
    <div class="internships-container w-screen flex justify-center flex-wrap items-center lg:p-6 p-4 gap-12">
        <!-- { console.log(data?.records.sort()) } -->


    </div>
    </Saos>
</div>
<Footer/>
<style>
    :global(body) {
        padding: 0;
    }
</style>