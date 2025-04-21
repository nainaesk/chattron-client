import { ButtonIcon } from '@/components/Buttons'
import { FaRegMessage } from 'react-icons/fa6'
import { GoHash } from 'react-icons/go'
import { GrGroup } from 'react-icons/gr'
export const SideTabs = () => {
  return (
    <>
      <ButtonIcon ButtonIcon={FaRegMessage} />
      <ButtonIcon ButtonIcon={GrGroup} isActive />
      <ButtonIcon ButtonIcon={GoHash} noOfNotifications={3} />
    </>
  )
}
