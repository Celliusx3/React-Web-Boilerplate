import * as React from "react"
import { inject, observer } from "mobx-react"
import { DetailsStore } from "client/core/adapters"
import { DetailsScreen } from "./details.screen"
import { RouteComponentProps } from "react-router";

interface MatchParams {
  name: string
  code: string
}

export interface DetailsContainerProps extends RouteComponentProps<MatchParams> {
  detailsStore: DetailsStore
}

export interface DetailsContainerState {
  setCode: string
}

@inject("detailsStore")
@observer
export class DetailsContainer extends React.Component<DetailsContainerProps, DetailsContainerState> {

  constructor(props){
    super(props)
    this.state = {
      setCode: ""
    }
  }

  componentWillMount() {
    const { detailsStore, match } = this.props
    const setCode: string = match.params.code
    this.setState({
      setCode
    })
    detailsStore.reset()
    detailsStore.getPokemonTCGCards(setCode)
  }

  render() {
    const { detailsStore, match } = this.props
    const { isLoading, pokemonTCGCards } = detailsStore

    return <DetailsScreen 
    isLoading = {isLoading} 
    title = {match.params.name}
    pokemonTCGCards = {pokemonTCGCards}
    />
  }
}
