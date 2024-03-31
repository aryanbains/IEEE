<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Login from "./login.svelte";
    let open = false
</script>
<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Login/>
<Footer/>