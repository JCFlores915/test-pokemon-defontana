import { Table as AntTable, TableProps } from "antd"
const Table = ({ ...props }: TableProps<any>) => {
    return (
        <AntTable
            {...props}
            pagination={{ pageSize: 10, position: ["bottomRight"] }}
        />
    )
}

export default Table