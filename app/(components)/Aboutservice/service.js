import Image from "next/image"

export default function service() {
  return (
    <div className=" flex mx-2">
      <div className=" mx-3">
      <Image
              src="/images/check-img.png"
              alt="About Image"
              width={30}
              height={30}
            />
      </div>
      <div className=" mx-3 text-3xl">
        <h1>cljadchjld</h1>
      </div>
    </div>
  )
}
