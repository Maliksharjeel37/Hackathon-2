export default function button(props) {
  return (
    <div>
      <button class=" text-center , bg-blue-500 , text-gray-50 , w-36 , h-10 mb-10 rounded-3xl hover:bg-white hover:text-black">{props.text}</button>
    </div>
  );
}
