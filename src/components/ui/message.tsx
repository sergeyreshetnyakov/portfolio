import { Badge } from './badge'

interface MessageProps {
	text: string
	userName: string
	isCurrent: boolean
}

export default function Message({text, userName, isCurrent}: MessageProps){
	return(
		<div className={ isCurrent ? 'flex justify-end': 'flex'}>
			<div className="flex flex-col border shadow-md py-2 px-4 rounded-xl">
				<Badge variant={ isCurrent ? 'secondary': 'default'}>{userName}</Badge>
				<p className="max-w-64 break-words">
					{text}
				</p>
			</div>
		</div>
	)
}
