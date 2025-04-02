"use client"

import Hls from "hls.js";

import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';

import {IconAudio, IconChevronDown, IconMuted} from '@src/components/psy.icons';
import {Dropdown, DropdownButton, DropdownItem, DropdownMenu} from '@src/components/catalyst/dropdown';

const

	recs = {

		ash: [
			['https://trancescript.ddns.net/video/zanzifun.mp4', 'Zanzibar funmix'],
			['https://trancescript.ddns.net/video/imperia_striked_by_psy.mp4', 'Imperia striked by PsY!'],
			['https://trancescript.ddns.net/video/duke4d.2024.mp4', 'Dukedelic Dukedance 2024'],
			['https://trancescript.ddns.net/video/OpDaKop_Shiva_ASH_mix.mp4', 'OpDaKop festival 2023'],
			['https://trancescript.ddns.net/video/Shiva Ash - Easter Frog.mp4', 'Easter Frog 2021'],
			['https://trancescript.ddns.net/video/ - last streams/ASH_in_ESCH_day.mp4', 'ASH in ESCH day'],
			['https://trancescript.ddns.net/video/ - last streams/ASH_in_ESCH_night.mp4', 'ASH in ESCH night'],
		],

		et: [],

		crystallvision: []


	}


function extractStreamsSimple(xmlString) {
	const streams = [];

	// Find all stream elements
	const streamRegex = /<stream>([\s\S]*?)<\/stream>/g;
	let match;

	while ((match = streamRegex.exec(xmlString)) !== null) {
		const streamContent = match[1];

		// Extract stream name
		const nameMatch = /<name>(.*?)<\/name>/.exec(streamContent);
		if (!nameMatch) continue;

		const name = nameMatch[1];

		// Count clients
		const clientRegex = /<client>([\s\S]*?)<\/client>/g;
		let clientMatch;
		const clients = [];
		let viewers = 0;

		while ((clientMatch = clientRegex.exec(streamContent)) !== null) {
			const clientContent = clientMatch[1];
			const isActive = clientContent.includes('<active/>');
			const isPublishing = clientContent.includes('<publishing/>');

			if (isActive && !isPublishing) {
				viewers++;
			}

			clients.push({
				active: isActive,
				publishing: isPublishing
			});
		}

		streams.push({
			name: name,
			active: streamContent.includes('<active/>'),
			clients: clients,
			viewers: viewers
		});
	}

	// Create a map to find the stream with max viewers for each unique name
	const uniqueStreamsMap = new Map();

	streams.forEach(stream => {
		const existing = uniqueStreamsMap.get(stream.name);

		// If this stream has more viewers than the existing one, or if it's the first one with this name
		if (!existing || stream.viewers > existing.viewers) {
			uniqueStreamsMap.set(stream.name, stream);
		}
	});

	// Convert map values back to array
	return Array.from(uniqueStreamsMap.values());
}

export default function Liver({dj})
{
		dj = 'ash' // dj == 'et' ? dj : 'ash'

		const

			[nenavist2, setNenavist2] = useState([]),
			[nenavist3, setNenavist3] = useState(true),
			[nenavist4, setNenavist4] = useState(0),


			lvref = useRef(),
			hlsref = useRef(),

			padloRef = useRef(null),

			[nenavist, setNenavistA] = useState(padloRef.current),

			setNenavist = (v) => {
				padloRef.current = v
				setNenavistA( padloRef.current )
			},

			livePlay = () => 	{
				// hls.attachMedia(video);
				//hlsref.current.off(Hls.Events.MANIFEST_PARSED, livePlay)
				try
				{
					lvref.current.play();
				}
				catch (e)
				{
					console.log(e.message)
				}

				// window.setTimeout( e => livePool(), 3000)

			},

			startLive = () => {

				//alert('starta liva!~')
				hlsref.current = new Hls()

				hlsref.current.loadSource('https://trancescript.ddns.net/hls/' + `${dj}.m3u8`);
				hlsref.current.attachMedia(lvref.current);
				hlsref.current.once(Hls.Events.MANIFEST_PARSED, livePlay)

				window.setTimeout( e => livePool(), 1000)

				// NAHUYYYYYNETOT REACT!!!!@
				//location.reload()
				padloRef.current = true
				setNenavist(true)

			},

			stopLive = () => {

				//alert('stopa liva!~')

				hlsref.current.removeAllListeners()
				hlsref.current.detachMedia()

				hlsref.current = null

				let pls = gsap.utils.shuffle(  recs?.[dj ? dj : 'ash'] ?? [])

				setNenavist2( [...pls] )

				padloRef.current = false
				setNenavist(false)

				window.setTimeout( e => livePool(), 1000)

				// NAHUYYYYYNETOT REACT!!!!@
				//location.reload()

			}



			async function livePool()
			{

				try
				{
					let
						xml = await fetch(`https://trancescript.ddns.net/stats`).then(r => r.text(), e => console.log('suka ', e)),

					    stm = extractStreamsSimple(xml).find(s => s.name == dj)

					if(stm?.active)
					{
						if(!padloRef.current)
						{
							setNenavist(true)
							window.requestAnimationFrame( e => startLive() )
							return
						}

					}
					else
					{
						if(padloRef.current || padloRef.current === null)
						{
							setNenavist(false)
							window.requestAnimationFrame( e => stopLive() )
							return
						}
					}

				}
				catch (e)
				{
					console.log(e.message)
					stopLive()
				}

				window.setTimeout( e => livePool(), 1000)

			}

		useEffect(() => {

			livePool()

			//console.log(`pizdosuka `,  )

			return () => {

				if(hlsref.current)
				{
					hlsref.current.removeAllListeners()
					hlsref.current.detachMedia()
					hlsref.current = null
				}

			}

		}, [dj]);

		let dj2 = dj && dj != 'ash'
			? dj == 'et'
				? 'ET'
				: 'Crytall Vision'
			: 'Shiva ASH'


		const upVolCh = () => {
			setNenavist3(!lvref.current.volume || lvref.current.muted)
		}

		const setSukoid = (n) => {
			//lvref.current.src = nenavist2[n]
			setNenavist4(n)
		}

	return <div className={'w-[100vw] h-[100vh] fixed grid grid-cols-1'}>


		{padloRef.current &&
			<div className={'text-white text-sm font-semibold bg-[#64067438] border pt-2 px-4 rounded-xl overflow-y-hidden absolute z-10 h-fit w-fit flex items-center' +
				' top-14 right-3 '}>
				{/*City's MAD is active*/}
				{dj2} is live now
			</div>
		}

		{!padloRef.current && nenavist2?.length > 0 &&


				<Dropdown>
					<DropdownButton  as={'div'} className={'top-3 left-2 font-sans text-white font-light text-sm bg-[#64067438]  py-1  px-1.5 rounded-xl z-10 text-white w-fit absolute !grid grid-cols-[auto_max-content] items-center gap-x-1.5 '} >
						<div className={'shrink-0'}> Recorded</div>
						<IconChevronDown className={'w-6 h-auto  '}/>
					</DropdownButton>
					<DropdownMenu className={'font-sans ml-4'} anchor={'bottom start'}>
						{/*<DropdownItem href="/users/1">View</DropdownItem>*/}
						{/*<DropdownItem href="/users/1/edit">Edit</DropdownItem>*/}
						{/*<DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>*/}


						{nenavist2.map( (pe, ii) =>

							<DropdownItem
								key={ii}
								className={`  ${nenavist4 === ii ? ' text-red-500 font-semibold' : 'cursor-pointer '}`}
								onClick={e => setSukoid(ii)}
							>
								{pe?.[1]}
							</DropdownItem>

						)}

					</DropdownMenu>
				</Dropdown>

		}

		{!padloRef.current && nenavist2?.length < 1 &&

			<div className={'absolute left-1/2 top-1/2  translate-y-[-300%] -translate-x-1/2 font-sans text-xl text-white text-center z-10 '}>
				waiting for stream ...
			</div>
		}

		<video
			ref={lvref}
			controls
			muted={nenavist3}
			className={'absolute w-full h-full object-contain'}
			src={padloRef.current ? undefined : nenavist2?.[nenavist4]?.[0]}
			autoPlay={true}
			loop={true}
			onVolumeChange={e => upVolCh()}
		/>


		{nenavist3 &&

			<div
				className={'abs-center w-fit h-fit cursor-pointer  p-1 rounded-full border drop-shadow-[0px_0px_3px_1px_#000000]'}
				onClick={e => lvref.current.muted = false}
			>
				<IconMuted className={'w-12 h-auto text-white'}/>
			</div>
		}

	</div>
}