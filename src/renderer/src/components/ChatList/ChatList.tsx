import { ChatListItem, LoadingSkeleton } from '@/components'
import { getChatListItems } from '@renderer/services/chat.service'
import { useAppStore } from '@renderer/store'
import { ChatListItemType } from '@shared/models'
import { ComponentProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const ChatList = ({ className, ...props }: ComponentProps<'div'>) => {
  const [chatList, setChatList] = useState<ChatListItemType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const setSelectedChatId = useAppStore((state) => state.setSelectedChatId)
  const selectedChatId = useAppStore((state) => state.selectedChatId)

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const data = await getChatListItems()
        setChatList(data)
      } catch (error: unknown) {
        setError(error + 'Failed to fetch chat list.')
      } finally {
        setLoading(false)
      }
    }

    fetchChatList()
  }, [])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <div className={twMerge('flex flex-col py-2 overflow-y-auto gap-1', className)} {...props}>
      {chatList.map((chat) => (
        <ChatListItem
          key={chat.senderName}
          onClick={() => setSelectedChatId(chat.id)}
          {...chat}
          isActive={selectedChatId === chat.id}
        />
      ))}
    </div>
  )
}
