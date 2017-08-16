import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { ApolloClient, createNetworkInterface } from 'apollo-client'
import { ApolloModule } from 'apollo-angular'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4020/graphql'
  }),
  ssrForceFetchDelay: 100,
  connectToDevTools: true
})

export function provideClient(): ApolloClient {
  return client
}

@NgModule({
  imports: [BrowserModule, ApolloModule.forRoot(provideClient)],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
