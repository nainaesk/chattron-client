import PersonImage from '@/assets/person.jpg'
import { ChatListItemStatus } from '@shared/models'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { IoCheckmarkDone } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

interface ChatListItemProps extends ComponentProps<'div'> {
  senderName: string // Sender name
  lastMessageTime: string // Last message time
  unreadMessagesCount?: number // Number of new messages
  lastMessagestatus?: ChatListItemStatus // Message status
  previewMessage: string // Last message preview
}

export const ChatListItem = ({
  senderName,
  lastMessageTime,
  className,
  unreadMessagesCount = 0,
  lastMessagestatus = 'recieved',
  previewMessage,
  ...props
}: ChatListItemProps) => {
  return (
    <div
      className={twMerge(
        'py-2 px-2 flex gap-2 hover:bg-stone-100 cursor-pointer transition-all duration-200 rounded-md ease-in-out dark:hover:bg-border',
        className
      )}
      {...props}
    >
      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-200 flex">
        <img
          src={PersonImage}
          alt="User Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      {/* Message Content */}
      <div className="flex flex-col flex-1">
        {/* Header: Sender Name and Time */}
        <div className="flex justify-between items-center">
          <div className="font-normal">{senderName}</div>
          <div className="text-xs text-gray-500">{lastMessageTime}</div>
        </div>

        {/* Message Preview and Indicators */}
        <div className="flex justify-between items-center">
          {/* Message Preview */}
          <div
            className={clsx('text-sm truncate', {
              'text-gray-500': unreadMessagesCount === 0,
              'text-black dark:text-white': unreadMessagesCount > 0
            })}
          >
            {previewMessage}
          </div>

          {/* Message Status or New Messages Count */}
          {unreadMessagesCount === 0 && (
            <>
              {lastMessagestatus === 'sent' && <IoMdCheckmark className="text-gray-600 text-sm" />}
              {lastMessagestatus === 'delivered' && (
                <IoCheckmarkDone className="text-gray-500 text-sm" />
              )}
              {lastMessagestatus === 'seen' && (
                <IoCheckmarkDone className="text-green-600 text-sm" />
              )}
            </>
          )}

          {unreadMessagesCount > 0 && (
            <div className="flex items-center justify-center w-6 h-6 text-xs text-white bg-accent-alt border border-border rounded-full">
              {unreadMessagesCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
