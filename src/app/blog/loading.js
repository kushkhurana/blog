import Image from "next/image"

const loading = () => {
  return (
    <div className="page-body">
        <Image src={"loader.svg"} width={200} height={200} />
    </div>
  )
}

export default loading
