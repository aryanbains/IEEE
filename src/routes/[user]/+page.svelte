<!-- App.svelte -->
<script>

    import Side from "./Side.svelte";
    import { page } from '$app/stores';
    const user =$page.params.user;
    import Footer from "../Footer.svelte";
    let open = false;
    import Navbar from "../Navbar.svelte";
    import Sidebar from "../Sidebar.svelte";
    import Login from "../login/login.svelte";

    export let data;
</script>
<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>

{#each data?.records as record}
    {#if user===record.username}
        <Side/>
        {/if}
{/each}
<Footer/>

