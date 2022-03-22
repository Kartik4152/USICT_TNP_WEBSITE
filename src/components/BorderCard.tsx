import { FC } from 'react';

type variant = "primary" | "secondary" | "fill";

const BorderCard:FC<{title: string, content: string, variant: variant}> = ({title, content, variant}) => {
  return (
    <div className={`flex flex-col items-center card card-${variant} shadow-2xl`}>
        <div>{title}</div>
        <div className='font-bold text-2xl'>{content}</div>
    </div>
  )
}

export default BorderCard