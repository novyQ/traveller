export type VisitedInputType = {
  variables: {
    input: {
      id: number
      visited: boolean
    }
  }
  refetchQueries: any
}

export type WishlistInputType = {
  variables: {
    input: {
      id: number
      wishlist: boolean
    }
  }
  refetchQueries: any
}

export type CityType = {
  name: string
  id: number
  country: string
  visited: boolean
  wishlist: boolean
}
