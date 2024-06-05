import { clsx } from 'clsx'

type ChatProps = {
    messages: string[]
    className: string
}

export const ChatBox: React.FC<ChatProps> = ({messages, className}) => {

    return (
      <ul role="list" className={`overflow-scroll w-1/2 ${className}`}>
        {messages.map((each, index) => {
          return (
            <li className="text-sm font-medium text-primary" key={index}>
              {each}
            </li>
          );
        })}
      </ul>
    ); 
    
}