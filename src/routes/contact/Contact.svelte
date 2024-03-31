<script>
    import { onMount } from 'svelte';
    import emailjs from '@emailjs/browser';

    onMount(() => {
        emailjs.init("m0p9F_YCUrUI94-Eb");
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_k1a7jve', 'template_7th8a0x', e.target)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
            }, (error) => {
                console.error('Error sending email:', error);
            });
    }
</script>

<style>
    :root {
        overflow-x: hidden;
    }
</style>

<div class="max-w-screen">
    <div class="pt-32 pb-8 flex justify-center items-center lg:flex-row flex-col ">
        <div class="md:col-span-4 p-10 text-white my-auto">
            <h3 class="text-5xl leading-normal bg-gradient-to-r  to-cyan-500 from-emerald-300 text-transparent bg-clip-text  select-none tracking-tight font-final">
                CONTACT US
            </h3>
            <p class="mt-4 leading-7 text-gray-200 xl:max-w-[550px] lg:max-w-[500px] max-w-[350px] text-justify">
                A non-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>

            <div class="flex items-center mt-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" fill="#ffffff" class="color000 svgShape"></path></svg>
                <span class="text-sm">G-8 Area, Rajouri Garden, New Delhi, Delhi 110064 </span>
            </div>
            <div class="flex items-center mt-5 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve" width="24" height="24"><path d="M5.661 23.339c4.882 4.882 12.796 4.882 17.678 0 4.882-4.882 4.882-12.796 0-17.678s-12.796-4.882-17.678 0C.78 10.543.78 18.457 5.661 23.339zm5.545-16.613l1.86 1.86c.372.372.451.947.193 1.406l-.699 1.241a.781.781 0 0 0 .129.937l4.141 4.141a.781.781 0 0 0 .937.128l1.241-.699a1.173 1.173 0 0 1 1.406.193l1.861 1.861a1.175 1.175 0 0 1 0 1.66l-.881.881a3.135 3.135 0 0 1-3.786.493l-.084-.048a24.54 24.54 0 0 1-8.868-8.681l-.423-.706a3.128 3.128 0 0 1 .469-3.823l.844-.844a1.173 1.173 0 0 1 1.66 0z" fill="#ffffff" class="color000 svgShape"></path></svg>
                <span class="text-sm">+91 97187 79910</span>
            </div>
        </div>
        <form on:submit={sendEmail} class="md:col-span-8 p-10 my-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="name">
                        First Name
                    </label>
                    <input type="text" name="name" class="appearance-none block w-full bg-gray-200 text-black rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <input type="email" name="email" class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="Message">
                        Your Message
                    </label>
                    <input name="message" type="text" class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                </div>
                <div class="flex justify-between w-full px-3 pt-6">
                    <button class="shadow hover:bg-gradient-to-tr from-teal-400 to-emerald-400 duration-700 ease-in-out transition-all bg-none hover:border-2 rounded-lg border-2 border-teal-400 text-white font-bold py-3 px-8" type="submit">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
