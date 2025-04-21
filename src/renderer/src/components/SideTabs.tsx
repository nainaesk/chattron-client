import { ButtonIcon } from '@/components/Buttons'

import { useAppStore } from '@renderer/store'
import { FaRegMessage } from 'react-icons/fa6'
import { GoHash } from 'react-icons/go'
import { GrGroup } from 'react-icons/gr'

export const SideTabs = () => {
  const setActiveTab = useAppStore((state) => state.changeActiveTab)
  const activeTab = useAppStore((state) => state.activeTab)

  return (
    <>
      <ButtonIcon
        onClick={() => setActiveTab('dm')}
        ButtonIcon={FaRegMessage}
        isActive={activeTab === 'dm'}
        aria-label="direct messages"
      />
      <ButtonIcon
        onClick={() => setActiveTab('group')}
        ButtonIcon={GrGroup}
        isActive={activeTab === 'group'}
        aria-label="group-messages"
      />
      <ButtonIcon
        onClick={() => setActiveTab('channel')}
        ButtonIcon={GoHash}
        isActive={activeTab === 'channel'}
        noOfNotifications={3}
        aria-label="channels"
      />
    </>
  )
}
