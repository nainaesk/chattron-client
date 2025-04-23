import PersonImage from '@/assets/person.jpg'
import { ChatMessageMenu } from '@/components'
import { useAppStore } from '@renderer/store'
import { cn } from '@renderer/utils'
import {
  ComponentProps,
  // useEffect,
  useRef
  // useState
} from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

type ChatMessageProps = {
  id: string
  message: string
  messageTime: string
  senderName: string
  isSenderUser: boolean
} & ComponentProps<'div'>

export const ChatMessage = ({
  id,
  senderName,
  isSenderUser,
  message,
  messageTime,
  ...props
}: ChatMessageProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  const openChatBubbleMenuId = useAppStore((state) => state.openChatBubbleMenuId)
  const setOpenChatBubbleMenuId = useAppStore((state) => state.setOpenChatBubbleMenuId)

  const handleOpenMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    const newMenuId = openChatBubbleMenuId === id ? null : id
    setOpenChatBubbleMenuId(newMenuId)
  }

  return (
    <div
      className={cn('flex items-start gap-1 group', {
        'self-end': isSenderUser,
        'self-start': !isSenderUser,
        'flex-row-reverse': isSenderUser,
        'flex-row': !isSenderUser
      })}
      {...props}
    >
      <img
        className={cn('w-6 h-6 rounded-full object-cover', {
          hidden: isSenderUser,
          block: !isSenderUser
        })}
        src={PersonImage}
        alt="Jese image"
      />

      {/* Chat bubble */}
      <div
        className={cn(
          'flex flex-col w-full max-w-[320px] leading-1.5 px-3 py-2 border-gray-200 bg-border',
          {
            'rounded-e-xl rounded-es-xl ': !isSenderUser,
            'rounded-s-xl rounded-ee-xl ': isSenderUser
          }
        )}
      >
        {/* User name */}
        <div
          className={cn('flex items-center justify-between w-full  relative', {
            'flex-row-reverse': isSenderUser
          })}
        >
          <div
            className={cn('text-sm font-semibold text-gray-900 dark:text-white w-full', {
              'text-right': isSenderUser,
              hidden: isSenderUser
            })}
          >
            {senderName}
          </div>
          <div ref={arrowRef} className="relative">
            <MdKeyboardArrowDown
              onClick={handleOpenMenuClick}
              className={cn(
                'absolute  text-md h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition rounded-full bg-border/50 right-0',
                {
                  '-top-0.5 -right-3': isSenderUser,
                  '-top-2.5 -right-2': !isSenderUser
                }
              )}
            />
          </div>
          {/* Dropdown menu */}
          {openChatBubbleMenuId === id && <ChatMessageMenu ref={menuRef} isOpen />}
        </div>
        {/* Message content */}
        <span
          className={cn('text-sm font-normal pb-2.5 text-gray-900  dark:text-white mb-0', {
            'pr-1': isSenderUser
          })}
        >
          {message}
        </span>
        {/* Message recieved time */}
        <span
          className={cn('text-xs font-normal  text-gray-500 dark:text-gray-400 -mt-2', {
            'text-left': isSenderUser,
            'text-right': !isSenderUser
          })}
        >
          {messageTime}
        </span>
      </div>
    </div>
  )
}
// cpy forward delete
