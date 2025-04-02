

export default function DJLiver({src, menu, live})
{

	return <div>



		<video
			ref={lvref}
			controls
			muted={nenavist3}
			className={'absolute w-full h-full object-contain'}
			src={src}
			autoPlay
			loop={'loop'}
			onVolumeChange={e => upVolCh()}
		/>


	</div>

}