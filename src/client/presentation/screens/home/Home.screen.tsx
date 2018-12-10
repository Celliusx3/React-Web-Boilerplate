import * as React from "react"
import { PokemonTCGSet } from "client/core/entities"
import { PokemonTCGSetCardView } from "client/presentation/components";
import metrics from "client/presentation/theme/base/metrics"
import { History } from "history";

export interface HomeScreenProps {
  pokemonTCGSets: PokemonTCGSet[]
  isLoading: boolean
  history: History
}

interface HomeScreenState {
  width: number
  height: number
}

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {

  constructor (props) {
    super(props)
    this.state = {width: document.body.clientWidth, height: document.body.clientHeight}
  }

  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount () { 
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({width: document.body.clientWidth, height: document.body.clientHeight});
  }

  private _onClick = (pokemonTCGSet: PokemonTCGSet) =>{
    const { history } = this.props
    history.push({
      pathname: `/sets/${encodeURIComponent(pokemonTCGSet.getName())}/${encodeURIComponent(pokemonTCGSet.getCode())}`
    })
  }

  private _getGridListCols = () => {
    const { width } = this.state
    if (width <= 480) {
      return 2
    } else if (width < 768) {
      return 4
    } else if (width < 1024) {
      return 6
    } else {
      return 8
    }
  }

  private _getCardViewWidth = (): number => {
    return (this.state.width)/this._getGridListCols() - (2 * metrics.margin.tiny)
  }

  private _renderListItem = (item: PokemonTCGSet) => {
    return (
      <PokemonTCGSetCardView
        width = {this._getCardViewWidth()}
        height = {this._getCardViewWidth() + 72}
        pokemonTCGSet = {item}
        onClick = {() => this._onClick(item)}
      />
    )
  }

  private _renderList = () => {
    const { pokemonTCGSets } = this.props

    if (!pokemonTCGSets || pokemonTCGSets.length <= 0)
      return null

    return (
      <div style = {{flex:"flexBox"}}>
        {pokemonTCGSets.map((pokemonTCGSet, index) => (
        this._renderListItem(pokemonTCGSet)))}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this._renderList()}
      </div>
    )
  }
}
