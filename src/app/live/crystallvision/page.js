"use client"

import Hls from "hls.js";

import {useEffect} from 'react';

export default function Live({})
{

	useEffect(() => {

		var video = document.getElementById('livideo');
		var hls = new Hls();
		hls.loadSource('https://trancescript.ddns.net/hls/crystallvision.m3u8');
		//hls.loadSource('https://live-lon2-ovh.mixcloud.com/hls/10E248A3D150/1743464144/QtHz-RhtnE93mmYc608jyQ/1af5339d-c74b-477c-b60a-5832cccb603b/index-720p.m3u8');
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
			video.play();
		});

	}, []);

	return <div className={'w-[100vw] h-[100vh] fixed grid grid-cols-1'}>

		<div className={'text-white font-semibold bg-[#aa000088] border pt-2 px-4 rounded-xl overflow-y-hidden top-4 right-4 absolute z-10 h-fit w-fit flex items-center'}>
			<a href="https://t.me/psytrance_lu" target={'_blank'} className={''}>{'chat: t.me/psytrance_lu'}</a>
		</div>


		<video
			id="livideo"
			controls
			muted
			className={'absolute w-full h-full object-contain'}
		/>

	</div>
}