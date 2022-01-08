import React, { useState } from 'react'
import type { ReactNode, FC } from 'react'
import type { WishlistInputType, VisitedInputType } from './Types'
import { Container, FormControl, FormLabel, Switch } from '@chakra-ui/react'

interface Props {
  name: string
  id: number
  country: string
  visited: boolean
  wishlist: boolean
  toggleVisited: (arg: VisitedInputType) => void
  toggleWishlist: (arg: WishlistInputType) => void
  children?: ReactNode
}

export const CitySearchResult: FC<Props> = props => {
  const [isVisited, setIsVisited] = useState<boolean>(props.visited)
  const [isWishlist, setWishlist] = useState<boolean>(props.wishlist)

  return (
    <>
      <Container>{`${props.name}, ${props.country}`}</Container>
      <Container width="fit-content">
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Visited?</FormLabel>
          <Switch
            id="city-visited"
            colorScheme="green"
            isChecked={isVisited}
            onChange={e => {
              setIsVisited(e.target.checked)
              props.toggleVisited({
                variables: { input: { id: props.id, visited: e.target.checked } },
              })
            }}
          />
        </FormControl>
      </Container>
      <Container width="fit-content">
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">In Wishlist?</FormLabel>
          <Switch
            id="city-wishlist"
            colorScheme="green"
            isChecked={isWishlist}
            onChange={e => {
              setWishlist(e.target.checked)
              props.toggleWishlist({
                variables: { input: { id: props.id, wishlist: e.target.checked } },
              })
            }}
          />
        </FormControl>
      </Container>
    </>
  )
}
