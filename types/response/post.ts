export interface IPostResponse {
  id: number
  date: string
  title: string
  previewText: string
}

export interface IPostResponseNetwork {
  id: number
  publication_date: string
  title: string
  preview_text: string
}

export interface IFullPostResponse {
  id: number
  title: string
  previewText: string
  text: string
  published: number
  date: string
}

export interface IFullPostResponseNetwork {
  id: number
  title: string
  preview_text: string
  text: string
  published: number
  publication_date: string
}
