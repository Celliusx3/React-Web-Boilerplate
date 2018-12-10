import * as React from "react"
import { inject, observer } from "mobx-react"
import { RouteComponentProps } from "react-router-dom"
import { HomeStore } from "client/core/adapters"
import { HomeScreen } from "./Home.screen"

export interface HomeContainerProps extends RouteComponentProps {
  homeStore: HomeStore
}

export interface HomeContainerState {}

@inject("homeStore")
@observer
export class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState> {

  componentWillMount() {
    const { homeStore } = this.props
    homeStore.getAllPokemonTCGSets()
  }

  render() {
    const { homeStore, history } = this.props
    const { isLoading, pokemonTCGSets } = homeStore

    return <HomeScreen 
    isLoading = {isLoading} 
    pokemonTCGSets = {pokemonTCGSets}
    history = {history}/>
  }
}