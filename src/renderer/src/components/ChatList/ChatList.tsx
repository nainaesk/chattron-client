import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChatListItem } from './ChatListItem'

export const ChatList = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-col py-2 overflow-y-auto', className)} {...props}>
      {Array.from({ length: 60 }).map((_, index) => (
        <ChatListItem key={index} />
      ))}
    </div>
  )
}
