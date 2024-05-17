
import Link from "next/link";

export default function About() {

	return (
		<>

		<div className={'fixed w-full h-full inset-0 details-bg z-[-1]'}/>

		<div className={'mt-[100px] w-full max-w-screen-sm mx-auto px-4 sm:px-0 py-10 rounded-xl border bg-neutral-600/50 text-center'}>

			<div className={'text-2xl'}>Free party</div>

			<br/>
			<br/>

			<div className={'text-xl'}>
				<a href={'https://maps.app.goo.gl/fiCzbZd4iYYzwX5h6'} target={'_blank'} >
					Place: GOOGLE MAPS LINK
				</a>
			</div>

			<br/>
			<br/>

			<p className={'text-xl'}>No any sales. Drinks and food bring with you.</p>


		</div>

		</>
	)

}