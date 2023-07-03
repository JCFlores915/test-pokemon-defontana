import { usePokemonDetails } from "../../hooks/usePokemonDetails"
import { box } from "./styles"
import { Avatar, Row, Skeleton } from "antd";
import { WarningFilled } from "@ant-design/icons";
import { center, spacebetween } from "./styles";
const PokemonDetails = ({ selectedPokemon }: any) => {
    // hacer que el name sea todo en minuscula
    let name = selectedPokemon?.name?.toLowerCase();
    if (name) {

        const { isLoading, pokemonDetails } = usePokemonDetails(name);

        return (
            <div style={box}>
                <h3>Detalle del pokemon</h3>
                <hr />

                <div>
                    <div style={center}>

                        {isLoading ? <Skeleton.Image active />
                            : <Avatar
                                size={{ xs: 40, sm: 60, md: 100, lg: 100, xl: 120, xxl: 140 }}
                                src={selectedPokemon?.image} />}

                    </div>



                    <Skeleton loading={isLoading} active>
                        <div style={center}>
                            <h3>{selectedPokemon?.name}</h3>

                        </div>

                        <h3>Tipos: </h3>
                        <Row>
                            {pokemonDetails?.types?.map((type: any) => (
                                <p style={{ marginRight: 10 }} key={type?.type?.name}>
                                    {type?.type?.name.charAt(0).toUpperCase() + type?.type?.name.slice(1)}
                                </p>
                            ))}
                        </Row>

                        <h3>Habilidades: </h3>
                        <Row>
                            {pokemonDetails?.abilities?.map((ability: any) => (
                                <p style={{ marginRight: 10 }} key={ability?.ability?.name}>{ability?.ability?.name.charAt(0).toUpperCase() + ability?.ability?.name.slice(1)}</p>
                            ))}
                        </Row>
                        <h3>Estadisticas: </h3>
                        <Row>
                            {pokemonDetails?.stats?.map((stat: any) => (
                                <p style={{ marginRight: 10 }} key={stat?.stat?.name}>
                                    {stat?.stat?.name.charAt(0).toUpperCase() + stat?.stat?.name.slice(1)}: {stat?.base_stat + stat?.base_stat}
                                </p>
                            ))}
                        </Row>
                        <h3>Formas: </h3>
                        <Row>
                            {pokemonDetails?.forms?.map((form: any) => (
                                <p style={{ marginRight: 10 }} key={form?.name}> {form?.name.charAt(0).toUpperCase() + form?.name.slice(1)}</p>
                            ))}
                        </Row>
                        <Row style={spacebetween}>
                            <h4>Altura: {pokemonDetails?.height} </h4>
                            <h4>Peso: {pokemonDetails?.weight}</h4>
                            <h4>Experiencia base: {pokemonDetails?.base_experience}</h4>
                        </Row>

                        {/* ADD SPITRES AND MORE DETAILS */}
                        <h4>Imagenes: </h4>

                        <Row style={spacebetween}>
                         
                                {pokemonDetails?.sprites?.front_default && <img src={pokemonDetails?.sprites?.front_default} alt="pokemon" width={100} height={100} /> }
                                {pokemonDetails?.sprites?.back_default && <img src={pokemonDetails?.sprites?.back_default} alt="pokemon" width={100} height={100} />}
                                {pokemonDetails?.sprites?.front_shiny && <img src={pokemonDetails?.sprites?.front_shiny} alt="pokemon" width={100} height={100} />}
                                {pokemonDetails?.sprites?.back_shiny && <img src={pokemonDetails?.sprites?.back_shiny} alt="pokemon" width={100} height={100} />}
                        </Row>

                    </Skeleton>
                </div>






            </div>
        )
    } else {
        return (
            <div style={box}>
                <h3>Detalle del pokemon</h3>
                <hr />

                {/* SHOW MESSAGE TO SELECT A POKEMON AND CENTER MIDDLE */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '100px'

                }}>
                    <WarningFilled style={{
                        fontSize: '100px',
                        color: '#ff4d4f'
                    }} />
                    <h4>Seleccione un pokemon</h4>

                </div>
            </div>
        )
    }


}

export default PokemonDetails