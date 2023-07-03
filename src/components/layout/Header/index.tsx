import { Layout } from 'antd'
import './styles.css'

const { Header: AntHeader } = Layout

const Header = () => {
  return (
    <AntHeader className='header'>

        {/* // ADD TITLE HERE */}
        <h1>Test Pokemon</h1>


    </AntHeader>
  )
}

export default Header