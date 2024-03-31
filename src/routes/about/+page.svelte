<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import AboutIEEE from "./AboutIEEE.svelte";
    import AboutHead from "./AboutHead.svelte";

    let open = false
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<AboutHead/>
<AboutIEEE/>
<Footer/>

<style>
    :global(body) {
        padding: 0;
        background-color: black;
    }
</style>