//


import {IconChevronDown} from '@src/components/psy.icons';

export default function PsyLU()
{


	return <section className={'w-full max-w-screen-sm mx-auto  py-2 px-2 select-none relative  '}>


		<a className={'grid h-72 overflow-hidden  mx-auto max-w-full ohuevator px-4 relative  '} href={'/psylove'}>
			<img src={'/psylove/flyer1.png'} className={ 'object-contain h-full w-full object-center absolute left-0 top-0   drop-shadow-xl'} alt={'4d25'} />
		</a>


		<a className={'grid h-24 overflow-hidden  mx-auto max-w-full ohuevator px-4 relative mt-8 '} href={'/4D2025'}>
			<img src={'/4D2025/d4d2025_logo_01.png'} className={ 'object-contain h-full w-full object-center absolute left-0 top-0   drop-shadow-xl'} alt={'4d25'} />
		</a>


		{/*<a className={'w-full flex justify-center'} href={'/4D2024'}>*/}
		{/*	<img src={''} className={'h-24 w-auto'} alt={'4d25'} />*/}
		{/*</a>*/}


		<div className={'mt-12 pt-4 border-t pb-48'}>

			<div className={'text-center text-white text-base font-semibold'}>PARTY'S OVER: </div>

			<ol className={'px-4 mt-3 ohuevator'}>

				<li className={'pl-8 relative'}>
					<IconChevronDown className={'absolute -rotate-90 top-0 left-0 w-7'}/>
					<a href="/NY2025" className={'font-sans text-[#ffeb3b]'}  >
						New Year Eve 2025 micro-site
					</a>
				</li>


				<li className={'pl-8 relative mt-2'}>
					<IconChevronDown className={'absolute -rotate-90 top-0 left-0 w-7'}/>
					<a href="https://trancescript.ddns.net/video/NY2025/ny2025_tiago.mp4" className={'font-sans text-[#3bebff]'}  target={"_blank"}>
						New Year Eve 2025 after movie One
						<div className={'text-xs'}>Don't worry about 'privacy error' - just need new certificate. Will be done soon.</div>
					</a>
				</li>

				<li className={'pl-8 relative  mt-2'}>
					<IconChevronDown className={'absolute -rotate-90 top-0 left-0 w-7'}/>
					<a href="/4D2024" className={'font-sans text-[#ffa8c5]'}  >
						Dukedelik Dukedance 2024 micro-site
					</a>
				</li>

				<li className={'pl-8 relative  mt-2'}>
					<IconChevronDown className={'absolute -rotate-90 top-0 left-0 w-7'}/>
					<a href="https://trancescript.ddns.net/video/duke4d.2024.mp4" className={'font-sans text-[#ffeb3b]'}  target={'_blank'}>
						Dukedelik Dukedance 2024 after movie
						<div className={'text-xs'}>Don't worry about 'privacy error' - just need new certificate. Will be done soon.</div>
					</a>
				</li>

				{/*<li className={'pl-8 relative mt-2'}>*/}
				{/*	<IconChevronDown className={'absolute -rotate-90 top-0 left-0 w-7'}/>*/}
				{/*	<a href="" className={'font-sans text-[#ffa8c5]'}  >*/}
				{/*		New Year Eve 2025 movie media*/}
				{/*	</a>*/}
				{/*</li>*/}


			</ol>


		</div>



	  {/*<div className={'mt-12 mb-10 text-lg sm:text-xl text-white text-center pb-8'}>*/}
		<div className={'bg-black/70 fixed left-0 bottom-0 text-lg sm:text-xl text-white text-center pb-3 pt-2 grid w-full gap-x-3 justify-center grid-cols-1 sm:grid-cols-[auto_auto_auto] '}>
			<div>
				{/*<span>Our email </span>*/}
				<a href="mailto:psytrance.lux@gmail.com?subject=User from site&cc=shuraash@gmail.com,tiagooosimoes@gmail.com" className={'font-sans text-lime-100'}  >psytrance.lux@gmail.com</a>
			</div>
			<div>
				{/*<span>messenger </span>*/}
				<a href={'https://www.messenger.com/t/100001073395392/'}   className={'font-sans text-lime-100'}  target={"_blank"}>www.messenger.com/t/TiagoaPsy/</a>
			</div>

			<div>
				{/*<span>telegramm </span>*/}
				<a href={'https://t.me/shuraash'} className={'font-sans text-lime-100'}  target={"_blank"}>t.me/shuraash</a>
			</div>

		</div>

	</section>


}