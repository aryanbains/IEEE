<script>
    import Navbar from '../../Navbar.svelte'
    import Sidebar from '../../Sidebar.svelte'
    import Footer from "../../Footer.svelte";
    let open = false
    import { page } from '$app/stores';
    const Blog =$page.params.Blog;
    console.log(Blog);
    export let data;
    function splitContent(content) {
        return content.split("#");
    }
    function removeHead(word) {
        return word.replace(/\bheading\b|head2|head3/gi, ''); // The 'gi' flag makes it case-insensitive
    }
</script>


<Navbar bind:sidebar={open}/>
<Sidebar bind:open/>
{#each data?.records as record}
    {#if Blog===record.Link}
        <article class=" px-6 py-24 space-y-12 bg-gray-950 text-white">
            <div class="w-full mx-auto space-y-4 text-center">
                <h1 class="text-4xl font-bold font-instrument md:text-5xl">{`${record.Head}`}</h1>
                <img class="mx-auto pt-20"
                     src={`${record.Image_Link}`}
                >
                <h5><b>By {`${record.blog_by}`}</b></h5>
            </div>
            <div class="dark:text-gray-100 lg:px-[20%] px-8">
                {#each splitContent(record.Content) as paragraph}
                    <br>
                    <p class:head-text={paragraph.includes("heading")}
                       class:paragraph5-text={paragraph.includes("head2")}
                       class:head3={paragraph.includes("head3")}

                    >
                        {removeHead(paragraph)}
                    </p>
                {/each}
            </div>
        </article>
    {/if}
{/each}
<Footer/>
<style>
    :global(body) {
        padding: 0;
        background-color: black;
    }
    .head-text{
        font-size: 1.6em; /* You can adjust the font size as per your requirement */
        font-weight: bold; /* Optional: Add other desired styles */
    }
    .paragraph5-text {
        font-size: 1.2em; /* Adjust the font size as per your requirement */
        font-weight: bold; /* Optional: Add other desired styles */
    }
    .head3 {
        font-size: 1em; /* Adjust the font size as per your requirement */
        font-weight: bold; /* Optional: Add other desired styles */
    }
</style>