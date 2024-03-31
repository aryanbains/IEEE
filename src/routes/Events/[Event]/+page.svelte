<script>
    import Navbar from '../../Navbar.svelte'
    import Sidebar from '../../Sidebar.svelte'
    import Footer from "../../Footer.svelte";
    let open = false
    import { page } from '$app/stores';
    const Event =$page.params.Event;
    console.log(Event);
    export let data;
</script>


<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>


<Footer/>
<style>
    :global(body) {
        padding: 0;
        background-color:black;
    }
</style>

