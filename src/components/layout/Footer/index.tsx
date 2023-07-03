import { Layout } from 'antd'
import './styles.css'
import { data } from '../../../data'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    // ADD FOOTER FIX BUTTON
    <AntFooter className='footer'>
        {data.titleFooter}
    </AntFooter>
  )
}

export default Footer