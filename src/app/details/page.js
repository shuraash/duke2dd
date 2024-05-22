
import Link from "next/link";

export default function About() {

	return (
		<>

		<div className={'fixed w-full h-full inset-0 details-bg z-[-1]'}/>

		<div className={'mt-[100px] w-full max-w-screen-sm mx-auto px-4 sm:px-0 py-10 rounded-xl border bg-neutral-600/50 text-center'}>

			<div className={'text-2xl'}>Free party</div>
			<div className={'text-2xl'}>FULL TRUE LOVE AND HAPPINESS!</div>

			<br/>
			<br/>

			<div className={'text-xl'}>
				<a href={'https://maps.app.goo.gl/fiCzbZd4iYYzwX5h6'} target={'_blank'} >
					Place: GOOGLE MAPS LINK
				</a>
			</div>

			<br/>
			<br/>


<div>
			WE DO NOT ALLOW:

			<ul>
				<li>BAD VIBES</li>
				<li>BAD ATTITUDES</li>
				<li>DRUGS</li>
				<li>PUBLICITY OF ANY KIND</li>
				<li>LACK OF RESPECT to nature or persons</li>
				<li>FIRE (we will provide our own firecamp for your pleasure)</li>
				<li>CAMPING OUT OF THE CAMPING PLACE</li>
			</ul>
</div>

			<p className={'text-xl'}>No any sales. Drinks and food bring with you.</p>


		</div>

		</>
	)

}