import { gql } from '@apollo/client'

export const GET_CITIES_FILTERED = gql`
  query Cities($filter: CitiesFilters) {
    cities(filter: $filter) {
      cities {
        country
        id
        name
        visited
        wishlist
      }
    }
  }
`
export const TOGGLE_VISITED = gql`
  mutation ($input: CitiesMutationInput) {
    updateCity(input: $input) {
      visited
    }
  }
`

export const TOGGLE_WISHLIST = gql`
  mutation ($input: CitiesMutationInput) {
    updateCity(input: $input) {
      wishlist
    }
  }
`
