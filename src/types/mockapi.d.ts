export type Post = {
  id: string
  tag: string
  title: string
  delivery_time: number
  rating: number
  img_url: string
}

export type Posts = Post[]

export type Food = {
  id: string
  tag: string
  name: string
  price: string
  delivery_time: number
  rating: number
  img_url: string
}

export type Foods = Food[]
