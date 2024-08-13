import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}: {title:string; icon:React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string}) => {
  return (
    <button className="relative w-full rounded-lg inline-flex h-12 overflow-hidden  p-[2px] ">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_50%,#000319_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-900 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}       
        {title}
        {position === 'right' && icon}
    </span>
</button>
  )
}

export default MagicButton