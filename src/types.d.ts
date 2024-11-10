export interface Dokyfile {
  id?: string
  prompt: string
  dockerfile: string
  message?: string
}

export interface LocalDokyfile {
  id: string
  prompt: string
  dockerfile: string
}
