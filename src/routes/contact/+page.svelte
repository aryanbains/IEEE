<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Contact from "./Contact.svelte";
    let open = false
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Contact/>
<Footer/>


<style>
    :global(body) {
        padding: 0;
    }
</style>