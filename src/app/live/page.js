"use client"

import Script from 'next/script'

import {useEffect} from 'react';

export default function Live({})
{

	useEffect(() => {

		var video = document.getElementById('livideo');
		var hls = new Hls();
		hls.loadSource('http://trancescript.ddns.net/hls/ash.m3u8');
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
			video.play();
		});

	}, []);

	return <div className={'w-full h-full max-w-[100vw] max-h-[100vh] relative grid grid-cols-1'}>

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