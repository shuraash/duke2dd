import Liver from '@src/app/live/[[...dj]]/live';


export default async function LivePage({params})
{
	params = await params

	return <div className={'w-[100vw] h-[100vh] fixed grid grid-cols-1'}>

		<div className={'text-white text-sm font-semibold bg-[#64067438]  border pt-2 px-4 rounded-xl overflow-y-hidden top-3 right-3 absolute z-10 h-fit w-fit flex items-center'}>
			<a href="https://t.me/psytrance_lu" target={'_blank'} className={''}>{'chat: t.me/psytrance.lu'}</a>
		</div>

		<Liver dj={params.dj}/>


	</div>
}