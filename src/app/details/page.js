
import Link from "next/link";

export default function About() {

	return (
		<>

		<div className={'fixed w-full h-full inset-0 details-bg z-[-1]'}/>

		<div className={'mt-[100px] w-full max-w-screen-sm mx-auto px-4 sm:px-0 py-5 rounded-xl border bg-neutral-600/50 text-center'}>

			<div className={'text-xl'}>Free party</div>
			<div className={'text-xl text-rose-400'}>FULL TRUE LOVE AND HAPPINESS!</div>

			<div className={'text-xl'}>
				<a href={'https://maps.app.goo.gl/fiCzbZd4iYYzwX5h6'} target={'_blank'} >
					<div className={'w-fit mx-auto text-sm uppercase'}>Place</div>
					<img src={'/gmapsc.png'} className={'w-[180px] p-1 border rounded-xl h-auto mx-auto'}/>
				</a>
			</div>

			<br/>
			<br/>


<div>
			WE DO NOT ALLOW:

			<ul className={"text-left pl-12 w-fit mx-auto text-sm"}>
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