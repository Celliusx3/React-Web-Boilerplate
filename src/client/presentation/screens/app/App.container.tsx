import { Provider } from "mobx-react"
import { Dependency } from "client/core/commons"
import { RootStore } from "client/core/adapters"
import { StoreService, StoreServiceSymbol } from "client/core/services/store"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import { HomeContainer } from "../home";
import { DetailsContainer } from "../details";
import React, { Suspense, lazy } from 'react';
import { BaseContainer } from "../base";

// const HomeContainer = lazy(() => import ("../home"));
// const DetailsContainer = lazy(() => import("../details"));

interface RootComponentState {
  rootStore ?: RootStore
}

export class AppContainer extends React.Component<{}, RootComponentState> {

  async componentDidMount(){
    Dependency.setup()

    // Init
    const storeService = Dependency.get<StoreService>(StoreServiceSymbol)

    // Setup services
    await storeService.setup()

    this.setState({
      rootStore: storeService.getRootStore()
    })
  }

  render() {
    const rootStore = this.state && this.state.rootStore

    if (!rootStore)
      return null

      return (
        <Provider rootStore={rootStore} {...rootStore}>
          <BaseContainer title = {"Pokemon TCG"}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component = {HomeContainer} />
                  <Route path="/sets/:name/:code" component={DetailsContainer} />
                  <Route component={() => <span>NotFound</span>} />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </BaseContainer>
          
        </Provider>
      )
  }
}
