import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className="flex flex-row h-screen" {...props}>
      {children}
    </main>
  )
}

export const TabContainer = ({ children, className, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[70px] flex flex-col border-r border-border', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
export const Sidebar = ({ children, className, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[320px] flex flex-col border-r border-border', className)}
      {...props}
    >
      {children}
    </aside>
  )
}
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
