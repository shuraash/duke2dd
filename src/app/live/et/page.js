"use client"

import Script from 'next/script'

import {useEffect} from 'react';

export default function Live({})
{

	useEffect(() => {

		var video = document.getElementById('livideo');
		var hls = new Hls();
		hls.loadSource('https://trancescript.ddns.net/hls/et.m3u8');
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
			video.play();
		});

	}, []);

	return <div className={'w-[100vw] h-[100vh] fixed grid grid-cols-1'}>

		<div className={'text-white font-semibold bg-[#aa000088] border pt-2 px-4 rounded-xl overflow-y-hidden top-4 right-4 absolute z-10 h-fit w-fit flex items-center'}>
			<a href="https://t.me/psytrance_lu" target={'_blank'} className={''}>{'chat: t.me/psytrance_lu'}</a>
		</div>


		<Script
			src="https://cdn.jsdelivr.net/npm/hls.js@latest"
			strategy="beforeInteractive"
		/>

		<video
			id="livideo"
			controls
			muted
			className={'absolute w-full h-full object-contain'}
		/>

	</div>
}