import React from 'react'
import type { FC } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CITIES_FILTERED } from './graphQL'
import { CityTable } from './CityTable'
import { VStack, Container, Heading, Spinner } from '@chakra-ui/react'

export const Visited: FC = () => {
  const { data, loading } = useQuery(GET_CITIES_FILTERED, {
    variables: { filter: { visited: true } },
  })

  return (
    <VStack spacing="8">
      <Heading as="h1">Visited</Heading>
      <Container centerContent maxW="container.md" flexDir="row">
        {loading && <Spinner />}
        {data?.cities?.cities.length > 0 && <CityTable cities={data.cities.cities} />}
      </Container>
    </VStack>
  )
}
