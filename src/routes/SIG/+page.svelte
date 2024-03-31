<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Head from "./Head.svelte";
    import Sigs from "../Events/Sigs.svelte";
    let open = false
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Head/>
<Sigs/>
<Footer/>

<style>
    :global(body) {
        padding: 0;
        background-color: black;
        overflow-x: hidden;
    }
</style>