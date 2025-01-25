import { twMerge } from "tailwind-merge"

const Title = ({ text1, text2, className }) => {
  return (
    <div className={twMerge("inline-flex gap-2 items-center mb-3", className)}>
      <p className="text-gray-500">{ text1 } <span className="text-gray-700 font-medium">{ text2 }</span></p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title
