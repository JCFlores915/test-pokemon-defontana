import { Layout } from 'antd'
import './styles.css'
import { data } from '../../../data'

const { Header: AntHeader } = Layout

const Header = () => {
  return (
    <AntHeader className='header'>

        {/* // ADD TITLE HERE */}
        <h1>{data.titleHeader}</h1>


    </AntHeader>
  )
}

export default Header