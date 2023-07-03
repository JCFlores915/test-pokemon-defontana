import { Layout } from 'antd'
import './styles.css'
const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    // ADD FOOTER FIX BUTTON
    <AntFooter className='footer'>
        Ant Design ©2018 Created by Ant UED
    </AntFooter>
  )
}

export default Footer