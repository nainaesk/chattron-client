import PersonImage from '@/assets/person.jpg'
export const ChatHeader = () => {
  return (
    <header className=" py-4 flex items-center justify-between bg-bg w-full z-50">
      <div className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex ">
          <img
            src={PersonImage}
            alt="User Avatar"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold mb-0">Alice Benham</h3>
          <p className="text-xs text-gray-500 mb-0">Online</p>
        </div>
      </div>
    </header>
  )
}
