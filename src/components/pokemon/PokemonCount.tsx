import { box } from "./styles"
import Table from "../shared/Table"

const PokemonCount = () => {
    return (
        <div style={box}>
            <h3>Conteo de Pokemons</h3>
            <hr />

            <Table
                columns={[]}
                dataSource={[]}
                loading={false}
            />
        </div>
    )
}

export default PokemonCount