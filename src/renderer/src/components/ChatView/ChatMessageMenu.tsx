import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ChatMessageMenuProps = {
  isOpen: boolean
  positionY: 'top' | 'bottom'
  positionX: 'left' | 'right'
} & ComponentProps<'div'>

export const ChatMessageMenu = ({
  isOpen = false,
  positionY = 'bottom',
  positionX = 'right',
  className,
  ...props
}: ChatMessageMenuProps) => {
  return (
    <div
      className={cn(
        twMerge(
          'z-10 absolute bg-gray-200 dark:bg-zinc-800 border-border divide-y divide-gray-100 rounded-lg shadow-sm  transition-all duration-200 right-0 transform ',
          className
        ),
        {
          'opacity-0 pointer-events-none scale-50': !isOpen, // Hide the menu
          'opacity-100 pointer-events-auto visibility-visible scale-100': isOpen, // Show the menu
          'top-4 -right-0.5': positionY === 'bottom' && positionX === 'right',
          'top-5 ': positionY === 'bottom' && positionX === 'left',
          'bottom-4': positionY === 'top' && positionX === 'left',
          'bottom-0': positionY === 'top' && positionX === 'right',
          'origin-top-right': positionY === 'bottom',
          'origin-bottom-right': positionY === 'top'
        }
      )}
      {...props}
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconButton"
        aria-hidden={!isOpen}
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
