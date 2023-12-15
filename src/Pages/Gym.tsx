import { useParams } from "react-router-dom"

export default function Gym() {

    const { id } = useParams()

  return (
    <div>Gym {id}</div>
  )
}

