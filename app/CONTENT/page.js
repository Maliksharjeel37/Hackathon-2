import Input from "./../(components)/input/input"

export default function page() {
  return (
    <div className=" flex">
      <div>
      <img
              class="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src="/images/service-1.png"
            />
      </div>
      <div>
        <Input placeholder={"ks"} style={{}}/>
      </div>
    </div>
  )
}
