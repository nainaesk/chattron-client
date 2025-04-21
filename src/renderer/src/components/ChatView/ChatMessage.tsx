import PersonImage from '@/assets/person.jpg'
import { cn } from '@renderer/utils'
import { ChatListItemStatus } from '@shared/models'
import { ComponentProps } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface ChatMessageProps extends ComponentProps<'div'> {
  message: string
  messageTime: string
  messageStatus: ChatListItemStatus
  senderName: string
  senderImage: string
  isSenderUser: boolean
}

export const ChatMessage = ({
  isSenderUser = true,
  message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam. ',
  messageTime = '12:00 PM',
  ...props
}: ChatMessageProps) => {
  return (
    <div
      className={cn('flex items-start gap-2.5 group', {
        'self-end': isSenderUser,
        'self-start': !isSenderUser,
        'flex-row-reverse': isSenderUser,
        'flex-row': !isSenderUser
      })}
      {...props}
    >
      <img
        className={cn('w-8 h-8 rounded-full object-cover', {
          hidden: isSenderUser,
          block: !isSenderUser
        })}
        src={PersonImage}
        alt="Jese image"
      />

      <div
        className={cn(
          'flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 bg-border',
          {
            'rounded-e-xl rounded-es-xl ': !isSenderUser,
            'rounded-s-xl rounded-ee-xl ': isSenderUser
          }
        )}
      >
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
            Bonnie Green
          </div>
          <MdKeyboardArrowDown
            className={cn(
              'absolute  text-md h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition rounded-full bg-border/50',
              {
                'right-0': !isSenderUser,
                'left-0 -top-1.5 backdrop-blur-sm': isSenderUser
              }
            )}
          />
        </div>
        <p
          className={cn('text-sm font-normal py-2.5 text-gray-900  dark:text-white mb-0', {
            'text-right pl-1': isSenderUser
          })}
        >
          {message}
        </p>
        <span
          className={cn('text-xs font-normal  text-gray-500 dark:text-gray-400 -mt-2', {
            'text-left': isSenderUser,
            'text-right': !isSenderUser
          })}
        >
          {messageTime}
        </span>
      </div>
      <div
        id="dropdownDots"
        className="z-10 hidden relative bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
// cpy forward delete
