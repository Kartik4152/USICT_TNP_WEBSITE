import React, { FC } from 'react';

type Ivariant = 'primary' | 'secondary' | 'fill';

const BorderCard:FC<{title: string, content: string, variant: Ivariant}> = ({ title, content, variant }) => (
  <div className={`flex flex-col items-center card card-${variant} shadow-2xl`}>
    <div className="">{title}</div>
    <div className="font-bold md:text-2xl text-lg">{content}</div>
  </div>
);

export default BorderCard;
