/* eslint-disable react/prop-types */


const WorkItem = ({year, title, company, duration, details}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-400">
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white"/>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e]">{year}</span>
                <span className="text-lg text-[#001b5e] font-semibold">{company}</span>
                <span className="text-lg text-stone-800 font-semibold">{title}</span>
                <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
            </p>
                <p className="my-2 text-base text-stone-600 font-normal">{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem
