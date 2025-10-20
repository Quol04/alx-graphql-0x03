export interface Info {
  pages: number
  next: number | null
  prev: number | null
  count: number
}

interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name'| 'air_date' | "episode">

export interface EpisodesData {
  episodes: {
    info: Info
    results: EpisodeCardProps[]
  }
}