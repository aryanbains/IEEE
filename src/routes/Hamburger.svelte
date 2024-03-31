<script>

	import ClickOutside from 'svelte-click-outside';

	import {
		Drawer,
		Button,
		CloseButton,
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		DropdownItem
	} from 'flowbite-svelte';
	export let open = false
	function hidePanel() {
		open = false;
	}
	let triggerEl;
	let visible = true;

	function toggleVissible() {
		visible = !visible
	}
	let site = {
		href: '/',
		img: 'logonew-1.webp'
	};
</script>
<button class="fixed right-0 mt-[-10px] pr-8 text-black cursor-pointer mr-4 border-none focus:outline-none" class:open bind:this={triggerEl} on:click={() => open = !open} on:click={() => visible = false} >

	<svg width=32 height=24>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=24 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>

</button>
{#if open}
	<ClickOutside on:clickoutside={hidePanel} exclude={[triggerEl]} }>
		<Sidebar divClass="gap-2">
			<SidebarWrapper divClass='fixed  bg-[#1c1c1c] left-0 z-[99] pt-4 mt-[-40px] fixed overflow-y-auto w-2/3 px-3 rounded h-screen' >
				<SidebarGroup aclass="">
					<SidebarItem href="./" class="hover:!bg-[#1c1c1c] text-white" spanClass="text-white"  >
						<svelte:fragment slot="icon">
							<img alt="" src="logonew-1.webp" class="w-2/3">
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarItem label="Home" href="/" class="text-white active:border-white active:border-l-4	hover:!bg-[#1c1c1c]">
						<svelte:fragment slot="icon" >
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path></g></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="About" href="/about" class="hover:!bg-[#1c1c1c] text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.703,0 -23,10.297 -23,23c0,12.703 10.297,23 23,23c12.703,0 23,-10.297 23,-23c0,-12.703 -10.297,-23 -23,-23zM25,11c1.657,0 3,1.343 3,3c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3zM29,38h-2h-4h-2v-2h2v-13h-2v-2h2h4v2v13h2z"></path></g></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Events" href="/Events" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="CS Chapter" href="/CSChapter" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 15C15.7165 15 16.5 15.7835 16.5 16.75L16.4989 17.7121C16.6156 19.9012 14.9879 21.009 12.0668 21.009C9.15786 21.009 7.5 19.9192 7.5 17.75V16.75C7.5 15.7835 8.2835 15 9.25 15H14.75ZM3.75 10L8.126 10.0001C8.04375 10.3197 8 10.6547 8 11C8 12.1155 8.45665 13.1244 9.1932 13.8499L9.35526 14.001L9.25 14C8.94865 14 8.65863 14.0485 8.38729 14.138C7.52255 14.4235 6.84765 15.1264 6.60122 16.0082L6.56679 16.009C3.65786 16.009 2 14.9192 2 12.75V11.75C2 10.7835 2.7835 10 3.75 10ZM20.25 10C21.2165 10 22 10.7835 22 11.75L21.9989 12.7121C22.1156 14.9012 20.4879 16.009 17.5668 16.009L17.3985 16.0073C17.1596 15.1534 16.5188 14.4673 15.6929 14.1659C15.4576 14.08 15.2073 14.0254 14.947 14.0069L14.75 14L14.6447 14.001C15.4758 13.268 16 12.1952 16 11C16 10.6547 15.9563 10.3197 15.874 10.0001L20.25 10ZM12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8ZM6.5 3C8.15685 3 9.5 4.34315 9.5 6C9.5 7.65685 8.15685 9 6.5 9C4.84315 9 3.5 7.65685 3.5 6C3.5 4.34315 4.84315 3 6.5 3ZM17.5 3C19.1569 3 20.5 4.34315 20.5 6C20.5 7.65685 19.1569 9 17.5 9C15.8431 9 14.5 7.65685 14.5 6C14.5 4.34315 15.8431 3 17.5 3Z" fill="#ffffff"/></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="WIE AG" href="/WIE" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 15C15.7165 15 16.5 15.7835 16.5 16.75L16.4989 17.7121C16.6156 19.9012 14.9879 21.009 12.0668 21.009C9.15786 21.009 7.5 19.9192 7.5 17.75V16.75C7.5 15.7835 8.2835 15 9.25 15H14.75ZM3.75 10L8.126 10.0001C8.04375 10.3197 8 10.6547 8 11C8 12.1155 8.45665 13.1244 9.1932 13.8499L9.35526 14.001L9.25 14C8.94865 14 8.65863 14.0485 8.38729 14.138C7.52255 14.4235 6.84765 15.1264 6.60122 16.0082L6.56679 16.009C3.65786 16.009 2 14.9192 2 12.75V11.75C2 10.7835 2.7835 10 3.75 10ZM20.25 10C21.2165 10 22 10.7835 22 11.75L21.9989 12.7121C22.1156 14.9012 20.4879 16.009 17.5668 16.009L17.3985 16.0073C17.1596 15.1534 16.5188 14.4673 15.6929 14.1659C15.4576 14.08 15.2073 14.0254 14.947 14.0069L14.75 14L14.6447 14.001C15.4758 13.268 16 12.1952 16 11C16 10.6547 15.9563 10.3197 15.874 10.0001L20.25 10ZM12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8ZM6.5 3C8.15685 3 9.5 4.34315 9.5 6C9.5 7.65685 8.15685 9 6.5 9C4.84315 9 3.5 7.65685 3.5 6C3.5 4.34315 4.84315 3 6.5 3ZM17.5 3C19.1569 3 20.5 4.34315 20.5 6C20.5 7.65685 19.1569 9 17.5 9C15.8431 9 14.5 7.65685 14.5 6C14.5 4.34315 15.8431 3 17.5 3Z" fill="#ffffff"/></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarDropdownWrapper label="SIGS" class="text-white hover:!bg-[#1c1c1c]">
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
						</svelte:fragment>
						<SidebarDropdownItem href="/SIG/HACKGTBIT" label="HACKGTBIT" class="text-white hover:!bg-[#1c1c1c]" />
						<SidebarDropdownItem href="/SIG/FSIG" label="FSIG" class="text-white hover:!bg-[#1c1c1c]" />

					</SidebarDropdownWrapper>
					
					<SidebarItem label="Members" href="/Members" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><g data-name="Layer 2" fill="#ffffff" class="color000 svgShape"><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm8 2a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm4 7a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1" data-name="people" fill="#ffffff" class="color000 svgShape"></path></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Gallery" href="/Gallery"  class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white"  >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><g fill="none" fill-rule="evenodd" stroke="#ffffff" class="colorStroke4A4A4A svgStroke"><rect width="19" height="19" x="2.5" y="2.5" rx="2" fill="#2f2f2f" class="color000 svgShape"></rect><path stroke-linejoin="round" d="m4.868 19 3.766-9.048 4.23 7.436 2.404-4.007L19.062 19z" fill="#2f2f2f" class="color000 svgShape"></path><circle cx="16" cy="7.133" r="2.133" fill="#2f2f2f" class="color000 svgShape"></circle></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Achievements" href="/achievements"  class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white"  >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" width="24" height="24"><g transform="translate(0 .003)" fill="#ffffff" class="color000 svgShape"><rect width="32" height="32" fill="none"></rect><path d="M61.937,277.539L64.705,280.294C64.967,280.554 65.064,280.938 64.957,281.291C64.851,281.645 64.558,281.911 64.196,281.983C64.196,281.983 61.985,282.425 60.504,282.722C60.108,282.801 59.798,283.11 59.719,283.506C59.423,284.988 58.981,287.199 58.981,287.199C58.908,287.56 58.643,287.853 58.29,287.96C57.937,288.067 57.554,287.971 57.293,287.71L52.938,283.355L54.014,282.752L55.787,282.73C56.832,282.717 57.795,282.161 58.329,281.262L59.235,279.738L60.759,278.832C61.28,278.523 61.686,278.069 61.937,277.539ZM40.058,277.53C40.31,278.064 40.717,278.521 41.241,278.832L42.765,279.738L43.671,281.262C44.205,282.161 45.168,282.717 46.213,282.73L47.986,282.752L49.062,283.355L44.707,287.71C44.446,287.971 44.063,288.067 43.71,287.96C43.357,287.853 43.092,287.56 43.019,287.199C43.019,287.199 42.577,284.988 42.281,283.506C42.202,283.11 41.892,282.801 41.496,282.722C40.015,282.425 37.804,281.983 37.804,281.983C37.442,281.911 37.15,281.645 37.043,281.292C36.936,280.939 37.032,280.556 37.293,280.296L40.058,277.53ZM48.52,262.247L50.511,261.131C50.815,260.96 51.185,260.96 51.489,261.131L53.48,262.247L55.762,262.276C56.111,262.28 56.432,262.465 56.61,262.765L57.775,264.727L59.738,265.893C60.037,266.071 60.223,266.392 60.227,266.74L60.255,269.023L61.372,271.013C61.543,271.317 61.543,271.688 61.372,271.992L60.255,273.983L60.227,276.265C60.223,276.613 60.037,276.935 59.738,277.112L57.775,278.278L56.61,280.241C56.432,280.54 56.111,280.726 55.762,280.73L53.48,280.758L51.489,281.875C51.185,282.045 50.815,282.045 50.511,281.875L48.52,280.758L46.238,280.73C45.889,280.726 45.568,280.54 45.39,280.241L44.225,278.278L42.262,277.112C41.963,276.935 41.777,276.613 41.773,276.265L41.745,273.983L40.628,271.992C40.457,271.688 40.457,271.317 40.628,271.013L41.745,269.023L41.773,266.74C41.777,266.392 41.963,266.071 42.262,265.893L44.225,264.727L45.39,262.765C45.568,262.465 45.889,262.28 46.238,262.276L48.52,262.247ZM48.86,268.521L50.116,266.141C50.289,265.813 50.629,265.607 51,265.607C51.371,265.607 51.711,265.813 51.884,266.141L53.14,268.521L55.792,268.98C56.158,269.043 56.458,269.303 56.573,269.656C56.687,270.009 56.597,270.396 56.339,270.662L54.463,272.592L54.846,275.256C54.899,275.623 54.744,275.989 54.444,276.207C54.144,276.425 53.748,276.459 53.415,276.295L51,275.108L48.585,276.295C48.252,276.459 47.856,276.425 47.556,276.207C47.256,275.989 47.101,275.623 47.154,275.256L47.537,272.592L45.661,270.662C45.403,270.396 45.313,270.009 45.427,269.656C45.542,269.303 45.842,269.043 46.208,268.98L48.86,268.521Z" transform="translate(-35 -258.003)" fill="#ffffff" class="color000 svgShape"></path></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Internships" href="/Internships"  class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white"  >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="#ffffff" fill-rule="evenodd" d="M5.108 4.867c.717-.097 1.595-.114 2.651-.116A3.25 3.25 0 0 1 11 1.75h2a3.25 3.25 0 0 1 3.24 3c1.057.003 1.935.02 2.652.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-7.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981Zm9.624-.117H9.268A1.75 1.75 0 0 1 11 3.25h2a1.75 1.75 0 0 1 1.732 1.5ZM5.308 20.647c-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191v-3.37c3.688 1.548 5.842 2.394 8.11 2.5.426.02.854.02 1.28 0 2.268-.106 4.422-.952 8.11-2.5v3.37c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103h-7c-1.435 0-2.437-.002-3.192-.103Zm15.44-10.144c-4.125 1.735-6.109 2.532-8.178 2.628-.38.018-.76.018-1.14 0-2.07-.096-4.053-.893-8.178-2.628.005-.923.025-1.628.101-2.195.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h7c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.076.566.096 1.27.101 2.194Z" clip-rule="evenodd" class="color292D32 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Blog" href="/Blog" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px"><g data-name="blog blogger blogspot post web" fill="#ffffff" class="color000 svgShape"><path d="M26 12h-2V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v12a1 1 0 0 0 2 0V8a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3 1 1 0 0 0-2 0 5 5 0 0 0 5 5h16a5 5 0 0 0 5-5v-9a3 3 0 0 0-3-3Z" fill="#ffffff" class="color000 svgShape"></path><path d="M11.5 14h4a2.5 2.5 0 0 0 0-5h-4a2.5 2.5 0 0 0 0 5zm0-3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0 12h9a2.5 2.5 0 0 0 0-5h-9a2.5 2.5 0 0 0 0 5zm0-3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" fill="#ffffff" class="color000 svgShape"></path></g></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Magazines" href="/magazines" class="hover:!bg-[#1c1c1c] space-x-3 "  spanClass="text-white" >
						<svelte:fragment slot="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="24px" height="24px"><path d="M14 8c-3.307 0-6 2.693-6 6v32c0 3.307 2.693 6 6 6h32c3.307 0 6-2.693 6-6V22c0-3.307-2.693-6-6-6h-9v-2c0-3.307-2.693-6-6-6zm0 2v40a3.97 3.97 0 0 1-4-4V14c0-2.233 1.767-4 4-4zm2 0h15c2.233 0 4 1.767 4 4v2h-2c-3.307 0-6 2.693-6 6v24a5.97 5.97 0 0 0 1.541 4H16zm17 8h13c2.233 0 4 1.767 4 4v24c0 2.233-1.767 4-4 4H33a3.97 3.97 0 0 1-4-4V22c0-2.233 1.767-4 4-4z" color="#000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none" fill="#ffffff" class="color000 svgShape"></path><path d="M34 33a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H34zm0-8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H34zm0 16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H34z" color="#000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem label="Contact Us" href="/contact" class="hover:!bg-[#1c1c1c] space-x-3" spanClass="text-white" >
						<svelte:fragment slot="icon" >
							<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve" width="24px" height="24px"><path d="M5.661 23.339c4.882 4.882 12.796 4.882 17.678 0 4.882-4.882 4.882-12.796 0-17.678s-12.796-4.882-17.678 0C.78 10.543.78 18.457 5.661 23.339zm5.545-16.613l1.86 1.86c.372.372.451.947.193 1.406l-.699 1.241a.781.781 0 0 0 .129.937l4.141 4.141a.781.781 0 0 0 .937.128l1.241-.699a1.173 1.173 0 0 1 1.406.193l1.861 1.861a1.175 1.175 0 0 1 0 1.66l-.881.881a3.135 3.135 0 0 1-3.786.493l-.084-.048a24.54 24.54 0 0 1-8.868-8.681l-.423-.706a3.128 3.128 0 0 1 .469-3.823l.844-.844a1.173 1.173 0 0 1 1.66 0z" fill="#ffffff" class="color000 svgShape"></path></svg>
						</svelte:fragment>
					</SidebarItem>
				</SidebarGroup>

			</SidebarWrapper>
		</Sidebar>
	</ClickOutside>

{/if}

<style>
	svg {
		min-height: 24px;
		transition: transform 0.2s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.2s ease-in-out;
	}

	button {
		z-index: 20;
	}
	button:active{
		opacity: 0;
	}

	.open svg {
		transform: scale(0.7);

	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}

	.open #middle {
		opacity: 0;
	}

  .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}

</style>