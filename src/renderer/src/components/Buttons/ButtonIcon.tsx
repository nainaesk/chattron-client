import { cn } from '@renderer/utils'
import React from 'react'

interface ButtonIconProps {
  className?: string
  ButtonIcon: React.ElementType
  noOfNotifications?: number
  isActive?: boolean
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  ButtonIcon,
  noOfNotifications = 0,
  isActive = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        'relative inline-flex items-center p-3 text-sm font-medium text-center text-stone-400 rounded-md focus:ring focus:outline-none hover:bg-stone-700 transition-colors duration-200 ease-in-out hover:text-accent',
        {
          'text-accent': isActive
        }
      )}
      {...props}
    >
      <ButtonIcon className="w-5 h-5" />

      <span className="sr-only">Notifications</span>

      {noOfNotifications > 0 && (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-white bg-accent-alt border border-bg-secondary rounded-full -top-2 -end-2">
          {noOfNotifications}
        </div>
      )}
    </button>
  )
}
