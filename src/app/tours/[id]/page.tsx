export interface PageTourParams {
  params: {
    id: string
  }
}

export default function Tour({ params: { id } }: PageTourParams) {
  return <>Tour {id}</>
}
