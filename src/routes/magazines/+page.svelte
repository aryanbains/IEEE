<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte'
    import Sidebar from '../Sidebar.svelte'

    import Footer from "../Footer.svelte";
    import Doc from "./Doc.svelte";
    import Mag from "./Mag.svelte";

    let open = false
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Mag/>
<Doc/>
<Footer/>

<style>
    :global(body) {
        padding: 0;
    }
</style>