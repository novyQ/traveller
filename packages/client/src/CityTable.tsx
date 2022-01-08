import React from 'react'
import type { FC } from 'react'
import type { CityType } from './Types'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

interface Props {
  cities: CityType[]
}
export const CityTable: FC<Props> = props => (
  <Table>
    <Thead>
      <Tr>
        <Th>No.</Th>
        <Th>City</Th>
        <Th>Country</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.cities.map((city: CityType, index: number) => (
        <Tr>
          <Td>{index + 1}</Td>
          <Td>{city.name}</Td>
          <Td>{city.country}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)
