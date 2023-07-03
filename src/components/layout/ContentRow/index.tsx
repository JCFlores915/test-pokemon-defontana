import { useState } from 'react'

import { Layout, Row, Col } from 'antd';
import PokemonList from '../../pokemon/PokemonList'
import PokemonDetails from '../../pokemon/PokemonDetails'
import PokemonCount from '../../pokemon/PokemonCount'
import { PokemonsResponse } from '../../../interface/Pokemon.Interface';
const { Content } = Layout

const ContentRow = () => {

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonsResponse>({} as PokemonsResponse)

  const handleSelectPokemon = (pokemon: PokemonsResponse) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <Content className="site-layout style-content">
        <Row>

          <Col xs={24} sm={24} md={16} lg={16} xl={18}>
            <PokemonList onSelectPokemon={handleSelectPokemon} />
          </Col>

          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <PokemonDetails selectedPokemon={selectedPokemon} />
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <PokemonCount />
          </Col>
        </Row>
      </Content>
  )
}

export default ContentRow