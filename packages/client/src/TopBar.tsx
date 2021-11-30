import { Box, Image, useColorMode } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import React from 'react'
export const TopBar: React.FC = () => {
  const { colorMode } = useColorMode()
  const image = colorMode === 'light' ? 'smart-logo.svg' : 'smart-logo-contrast.svg'
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Image src={image} alt="smart logo" maxHeight="7" />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
  )
}
