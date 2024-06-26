import React from 'react';
import './card.css'

interface LinkCardProps {
  href: string;
  title: string;
  body: string;
}

export const Card: React.FC<LinkCardProps> = ({ href, title, body }) => {
  return (
    <li className="link-card border drop-shadow-sm">
      <a href={href}>
        <h2 className='text-primary'>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
};
