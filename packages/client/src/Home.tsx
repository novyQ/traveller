import React, { useState } from 'react'
import type { FC } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_CITIES_FILTERED, TOGGLE_VISITED, TOGGLE_WISHLIST } from './graphQL'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { CitySearchResult } from './CitySearchResult'
import { Search2Icon } from '@chakra-ui/icons'

export const Home: FC = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) =>
    setInputValue(event.target.value)

  const [getCities, { loading, data }] = useLazyQuery(GET_CITIES_FILTERED)

  const [toggleVisited] = useMutation(TOGGLE_VISITED)

  const [toggleWishlist] = useMutation(TOGGLE_WISHLIST)

  console.log('data', data)

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <InputGroup>
          <Input onChange={handleInputChange} value={inputValue} />
          <InputRightElement
            children={
              <IconButton
                isLoading={loading}
                aria-label=""
                icon={<Search2Icon />}
                onClick={() => {
                  getCities({
                    variables: { filter: { name: inputValue } },
                  })
                  setInputValue('')
                }}
              />
            }
          />
        </InputGroup>
      </Container>
      {data?.cities?.cities.length > 0 && (
        <CitySearchResult {...data.cities.cities[0]} toggleVisited={toggleVisited} toggleWishlist={toggleWishlist} />
      )}
    </VStack>
  )
}
