import * as React from "react"
import { Footer, Header } from "client/presentation/commonComponents";

interface BaseContainerProps {
  title: string
  children: any
}

export class BaseContainer extends React.Component<BaseContainerProps> {
  render() {
    const {children, title} = this.props
    return (
      <div>
        <Header
          title = {title}
        />
        {children}
        <Footer
          title = {"All Guides © 2018 MGH. Disclaimer: We are NOT affiliated with this game, this is a fan site dedicated to the game."}
        />
      </div>
    )
  }
}
