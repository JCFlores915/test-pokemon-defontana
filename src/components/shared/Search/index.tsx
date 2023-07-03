import { AutoComplete, AutoCompleteProps } from 'antd';


const SearchInput = ({ ...props }: AutoCompleteProps<any>) => {
    return (
        <AutoComplete
            {...props}
        />
    )
}


export default SearchInput