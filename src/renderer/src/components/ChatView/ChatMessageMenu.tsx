import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ChatMessageMenuProps = { isOpen: boolean } & ComponentProps<'div'>

export const ChatMessageMenu = ({ isOpen = false, className, ...props }: ChatMessageMenuProps) => {
  return (
    <div
      className={cn(
        twMerge(
          'z-10 absolute top-2 left-100% bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-700 dark:divide-gray-600 opacity-100 transition-all duration-200',
          className
        ),
        { 'opacity-0': !isOpen }
      )}
      {...props}
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconButton"
      >
        <li>
          <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Copy
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Forward
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Delete
          </button>
        </li>
      </ul>
    </div>
  )
}
