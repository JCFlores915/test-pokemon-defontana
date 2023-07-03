import { useState } from 'react'
import { box, centerDataColumn, btnDetail } from './styles';
import Table from "../shared/Table"
import { usePokemonList } from "../../hooks/usePokemonList"
import { Button, Space, Tooltip, Row, Col } from "antd"
import { EyeFilled } from "@ant-design/icons"
import { ColumnType } from 'antd/lib/table';
import { PokemonsResponse, DataSourceType } from '../../interface/Pokemon.Interface';
import SearchInput from '../shared/Search';
import { cardBox } from '../../data';

const PokemonList = ({ onSelectPokemon }: any) => {

    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState<any[]>([]);


    const { isLoading, pokemonsList } = usePokemonList();

    //Header de la tabla de pokemons
    const columns: ColumnType<DataSourceType>[] = [
        {
            title: "Imagen",
            dataIndex: "image",
            key: "image",
            align: 'center',
            render: (image: string) => (
                <div style={centerDataColumn}>
                    <img src={image} alt="pokemon" width={50} height={50} />
                </div>
            ),
            responsive: ['xs', 'md', 'sm', 'lg', 'xl', 'xxl'],
        },
        {
            title: "Nombre",
            dataIndex: "name",
            key: "name",
            align: 'center',

            render: (name: string) => (
                <Space style={centerDataColumn}>
                    <strong>{name}</strong>
                </Space>
            ),
            responsive: ['xs', 'md', 'sm', 'lg', 'xl', 'xxl'],
        },
        {
            title: "Opciones",
            dataIndex: "options",
            key: "options",
            align: 'center',
            render: (
                _: any,
                pokemon: PokemonsResponse
            ) => (
                <div>
                    <Tooltip title="Ver detalle">
                        <Button
                            shape='circle'
                            size='large'
                            style={btnDetail}
                            onClick={() => onSelectPokemon(pokemon)}
                        >
                            <EyeFilled />
                        </Button>
                    </Tooltip>
                </div>
            ),
            responsive: ['xs', 'md', 'sm', 'lg', 'xl', 'xxl'],
        }
    ]

    const handleSearch = (value: string) => {
        setSearchText(value);
        if (value) {
            const filteredOptions = pokemonsList
                .map((item) => item.name)
                .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
                .map((name) => ({ value: name }));
            setOptions(filteredOptions);
        } else {
            setOptions([]);
        }
    };

    const handleSelect = (value: string) => {
        setSearchText(value);
    };

    const filteredData = pokemonsList.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div style={box}>
            <Row>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <h3>{cardBox.listTitle}</h3>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <SearchInput
                        value={searchText}
                        options={options}
                        onSelect={handleSelect}
                        onChange={handleSearch}
                        placeholder="Escribe el nombre del pokemon ej: pikachu"
                        style={{ width: '100%', marginBottom: 16 }}
                        allowClear
                    />
                </Col>
            </Row>



            <hr />
            <Table
                columns={columns}
                dataSource={filteredData}
                loading={isLoading}
            />
        </div>
    )
}

export default PokemonList