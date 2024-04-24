'use client'
import { useRouter } from "next/router"

function ActiveEvent() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>
        {id}
      </h1></>
  )
}

export default ActiveEvent;
