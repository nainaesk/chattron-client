import { ComponentProps } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
export const SearchChatInput = ({ className, ...props }: ComponentProps<'form'>) => {
  return (
    <form className={twMerge('flex items-center w-full px-2', className)} {...props}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-border text-text text-sm rounded-full block w-full ps-10 p-2.5  dark:placeholder-gray-400 dark:text-white "
          placeholder="Search or start a new chat"
        />
      </div>
    </form>
  )
}
