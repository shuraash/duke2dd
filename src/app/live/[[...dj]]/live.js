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

export default function Liver({dj})
{
		dj = dj ? dj : 'ash'

		const
			[nenavist, setNenavist] = useState(null),
			[nenavist2, setNenavist2] = useState([]),
			[nenavist3, setNenavist3] = useState(true),
			[nenavist4, setNenavist4] = useState(0),
			lvref = useRef()

		useEffect(() => {

			let pls = gsap.utils.shuffle(  recs?.[dj ? dj : 'ash'] ?? [])

			console.log(`pizdosuka `, window.recs = recs, window.pls = pls)

			setNenavist2( [...pls] )
			//setNenavist4()

			var video = lvref.current // document.getElementById('livideo');
			var hls = new Hls();
			hls.loadSource('https://trancescript.ddns.net/hls/' + `${dj}.m3u8`);
			// hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED,function()
			{
				setNenavist(true)
				hls.attachMedia(video);
				video.play();
			});

			hls.on(Hls.Events.MEDIA_ENDED,function()
			{
				setNenavist(false)
			})

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


		{nenavist &&
			<div className={'text-white text-sm font-semibold bg-[#64067438] border pt-2 px-4 rounded-xl overflow-y-hidden absolute z-10 h-fit w-fit flex items-center' +
				' top-14 right-3 '}>
				{/*City's MAD is active*/}
				{dj2} is live now
			</div>
		}

		{!nenavist && nenavist2?.length > 0 &&


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

		{!nenavist && nenavist2?.length < 1 &&

			<div className={'absolute left-1/2 top-1/2  translate-y-[-300%] -translate-x-1/2 font-sans text-xl text-white text-center z-10 '}>
				waiting for stream ...
			</div>
		}

		<video
			ref={lvref}
			controls
			muted={nenavist3}
			className={'absolute w-full h-full object-contain'}
			src={nenavist ? undefined : nenavist2?.[nenavist4]?.[0]}
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