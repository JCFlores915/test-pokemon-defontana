import { box } from "./styles"
import Table from "../shared/Table"
import { usePokemonList } from "../../hooks/usePokemonList"
import { ColumnType } from "antd/es/table"
import { DataSourceType } from "../../interface/Pokemon.Interface"
import { cardBox } from "../../data"

const PokemonCount = () => {
    const { pokemonsList, isLoading } = usePokemonList();

    // Funcion para contar el numero de pokemon por cada letra
  const getPokemonCountByLetter = () => {

    const letterCountMap: any = {};

    // Cuenta el numero de pokemon por cada letra
    pokemonsList.forEach((pokemon) => {
      const firstLetter = pokemon.name.charAt(0).toUpperCase();
      if (letterCountMap[firstLetter]) {
        letterCountMap[firstLetter] += 1;
      } else {
        letterCountMap[firstLetter] = 1;
      }
    });

    // Crear la matriz dataSource para la tabla
    const dataSource = Object.keys(letterCountMap).map((letter) => ({
      key: letter,
      letter,
      count: letterCountMap[letter],
    }))
    .sort((a, b) => a.letter.localeCompare(b.letter));

    return dataSource;
  };


    // Crear las columnas de la tabla Letras del abecedario y cantidad de pokemons
    const columns:ColumnType<DataSourceType>[]= [
        {
            title: 'Letra',
            dataIndex: 'letter',
            key: 'letter',
            align: 'center'
        },
        {
            title: 'Cantidad',
            dataIndex: 'count',
            key: 'count',
            align: 'center'
        },
    ]

    return (
        <div style={box}>
            <h3>{cardBox.countTitle}</h3>
            <hr />

            <Table
                columns={columns}
                dataSource={getPokemonCountByLetter()}
                loading={isLoading}
            />
        </div>
    )
}

export default PokemonCount