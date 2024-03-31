<!-- App.svelte -->
<script>
    import Navbar from '../Navbar.svelte';
    import Sidebar from '../Sidebar.svelte';
    import Footer from "../Footer.svelte";
    import Blog from "./Blog.svelte";
    import Head from "./Head.svelte";
    import {writable} from "svelte/store";

    export let data;
    let open = false

</script>

<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
<Head/>
<div class="bg-black font-instrument overflow-hidden">
    <div class="px-[40px] grid lg:grid-cols-2 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[180px]">
        {#each data?.records as record}

            <article class="lg:flex bg-cyan-100 transition hover:shadow-xl dark:bg-gray-900 overflow-hidden">
                <div class="lg:block hidden rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 lg:text-xs text-xs font-bold uppercase text-gray-900 dark:text-white"
                    >
                        <span>{`${record.Year}`}</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>{`${record.Date}`}</span>
                    </time>
                </div>

                <div class="lg:block lg:basis-56">
                    <img
                            alt="Guitar"
                            src={`${record.Image_Link}`}
                            class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-lg lg:text-xl text-gray-900 dark:text-white">
                                {`${record.Head}`}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg text-gray-700 dark:text-white">
                            {`${record.Content}`}
                        </p>
                            <br><br>
                        <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg text-gray-700 dark:text-white">
                            By {`${record.blog_by}`}</p>
                    </div>
                    <!-- <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">By Chanpreet</div> -->
                    <div class="lg:flex lg:items-end lg:justify-end">
                        <a
                                href={`/Blog/${record.Link}`}
                                class="block bg-cyan-900 px-5 py-3 text-center lg:text-xs text-xs uppercase text-white transition hover:bg-cyan-700"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</div>
<Footer/>

<style>
    :global(body) {
        padding: 0;
        overflow-x: hidden;
    }
</style>