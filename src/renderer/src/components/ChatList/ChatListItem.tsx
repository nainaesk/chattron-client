import PersonImage from '@/assets/person.jpg'
export const ChatListItem = () => {
  return (
    <div className="py-2 px-2 flex gap-2 hover:bg-stone-100 cursor-pointer transition-all duration-200 rounded-md ease-in-out dark:hover:bg-border">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <img
          src={PersonImage}
          alt="User Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <div className="font-normal">Noel Augustin</div>
          <div className="text-xs text-gray-500">12:00 PM</div>
        </div>

        <span className="text-gray-500 text-sm">Last message preview...</span>
      </div>
    </div>
  )
}
