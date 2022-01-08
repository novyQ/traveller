import type { ReactNode, FC } from 'react'
import { GET_CITIES_FILTERED } from './graphQL'
import type { CityType, WishlistInputType, VisitedInputType } from './Types'
import { Container, FormControl, FormLabel, Switch } from '@chakra-ui/react'

interface Props extends CityType {
  toggleVisited: (arg: VisitedInputType) => void
  toggleWishlist: (arg: WishlistInputType) => void
  children?: ReactNode
}

export const CitySearchResult: FC<Props> = props => {
  return (
    <>
      <Container>{`${props.name}, ${props.country}`}</Container>
      <Container width="fit-content">
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Visited?</FormLabel>
          <Switch
            id="city-visited"
            colorScheme="green"
            isChecked={props.visited}
            onChange={e => {
              props.toggleVisited({
                variables: { input: { id: props.id, visited: e.target.checked } },
                refetchQueries: [{ query: GET_CITIES_FILTERED, variables: { filter: { name: props.name } } }],
              })
            }}
          />
        </FormControl>
      </Container>
      <Container width="fit-content">
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">In your wishlist?</FormLabel>
          <Switch
            id="city-wishlist"
            colorScheme="green"
            isChecked={props.wishlist}
            onChange={e => {
              props.toggleWishlist({
                variables: { input: { id: props.id, wishlist: e.target.checked } },
                refetchQueries: [{ query: GET_CITIES_FILTERED, variables: { filter: { name: props.name } } }],
              })
            }}
          />
        </FormControl>
      </Container>
    </>
  )
}
