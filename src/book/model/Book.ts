export interface Book {
  readonly title: string
  readonly authors: {
    primary?: object
  }
  readonly isbn?: string
  readonly year?: string
}
