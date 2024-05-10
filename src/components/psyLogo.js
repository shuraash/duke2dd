import Link from "next/link";

export default function PsyLogo({}) {

	return (
		<Link href={'/'} rel="nofollow noopener" className={'z-50 grid relative w-fit h-fit grid-cols-[max-content_max-content] gap-x-2 p-1 items-center cursor-pointer select-none drop-shadow-xl'}>
			<img id={'psy-logo'} className={'w-16 h-16'} src={`/psytrance_lu.png`} alt={'PSYTRANCE.LU'} />
			<div className={'uppercase font-[Audiowide]  -translate-y-1'}>
				<h1 className={'text-[18px] font-bold tracking-[3px]'}>PSYTRANCE.LU</h1>
				<h3 className={'text-[10px] tracking-[0px]'}>Non-profit cultural society</h3>
			</div>
		</Link>
	)

}
