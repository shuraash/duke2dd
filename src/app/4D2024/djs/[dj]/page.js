import Djs from '@/app/4D2024/djs/[dj]/djpage'


export default async function Djsp({params})
{
	 params = await params

	return <Djs dja={params.dj}/>
	// return <div> dj: {params.dj}</div>
}