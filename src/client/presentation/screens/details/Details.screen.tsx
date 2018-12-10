import * as React from "react"
import { Fade, Typography, Paper } from "@material-ui/core";
import metrics from "client/presentation/theme/base/metrics";
import { PokemonTCGCard } from "client/core/entities";
import { PokemonTCGCardCardView } from "client/presentation/components/pokemonTCGCardCardView";

export interface DetailsScreenProps {
  isLoading: boolean
  title: string
  pokemonTCGCards: PokemonTCGCard[]
}

interface DetailsScreenState {
  width: number
  height: number
  modalVisible: boolean
  index: number
}

export class DetailsScreen extends React.Component<DetailsScreenProps, DetailsScreenState> {

  constructor (props) {
    super(props)
    this.state = {
      width: document.body.clientWidth, 
      height: document.body.clientHeight,
      modalVisible: false,
      index: 0
    }
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

  private _renderTitle = () =>{
    const { title } = this.props
    return (
      <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
      </Paper>
    )
  }

  private _renderListItem = (item: PokemonTCGCard) => {
    return (
      <PokemonTCGCardCardView
        width = {this._getCardViewWidth()}
        pokemonTCGCard = {item}
        onClick = {() => console.log("Dafaq")}
      />
    )
  }

  private _renderList = () => {
    const { pokemonTCGCards } = this.props
    console.log(pokemonTCGCards)

    if (!pokemonTCGCards || pokemonTCGCards.length <= 0)
      return null

    return (
      <div style = {{flex:"flexBox"}}>
        {pokemonTCGCards.map((pokemonTCGCard, index) => (
          this._renderListItem(pokemonTCGCard)
        ))}
      </div>)
  }

  // private _renderImageViewer = () => {
  //   const { pokemonTCGCards } = this.props
  //   const { index, modalVisible } = this.state

  //   if (!pokemonTCGCards || pokemonTCGCards.length <= 0)
  //     return null

  //   return (
  //     <Dialog open = {this.state.modalVisible}> 
       
  //     </Dialog>
  //   )
  // }

  render() {
    return (
      <Fade in = {true}>
        <div>
          {this._renderTitle()}
          <div style = {{flex:"flexBox"}}>
            {this._renderList()}
          </div>
        </div>
      </Fade>     
    )
  }
}
