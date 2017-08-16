import { Component } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

// We use the gql tag to parse our query string into a query document
const posts = gql`
  {
    posts {
      id
      title
      votes
      createdAt
      author {
        id
        firstName
        lastName
        createdAt
      }
    }
  }
`

interface IPosts {
  posts: object[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  posts: object[]

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<IPosts>({ query: posts }).subscribe(({ data }) => {
      this.posts = data.posts
    })
  }
}
