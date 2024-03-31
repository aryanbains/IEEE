<!-- App.svelte -->
<script>
    import Navbar from './Navbar.svelte'
    import Sidebar from './Sidebar.svelte'
    import Main from './Main.svelte'
    import About from "./About.svelte";
    /*import Events from "./Events.svelte";*/
    import Footer from "./Footer.svelte";
    import Theme from "./Theme/Theme.svelte";
    import Saos from "saos";
    import { browser } from '$app/environment';
    import {onMount} from "svelte";
    let acceptTerms = false;
    let open = false;
let id = 0;
             
if (browser)
  id = parseInt(new URLSearchParams(window.location.search).get('id')) - 1
</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Main/>
<About/>
<nav class="overflow-hidden">
    <div class="py-20 lg:flex dark:bg-gray-950 overflow-hidden">
        <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) both" once={true}>
            <!--<h1 class="text-6xl text-center justify-center lg:text-7xl lg:p-20 font-final text-white select-none pb-12">EVENTS</h1>-->
        </Saos>
    </div>
</nav>
<Footer/>

<style>
    :global(body) {
        padding: 0;
        background-color:black;
    }
</style>
