import { Card } from "~/components/molecues/Card";
import { MenuIcon } from "~/components/icons/menu-icons";
import { SendIcon } from "~/components/icons/send-icon";
import { SERVER_URL } from "~/config";
import type { MouseEventHandler } from "react";


export const MainPage = () => {

  function onSendClick() {
  
    console.log("On Send Click")

    const request_url = SERVER_URL + "/gpt";

    fetch(request_url, { method: "POST" })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log("Body", body);
      });

  }

  const listStyle = {
    display: 'grid',
    gap: '1rem',
    padding: '-1',
    gridTemplateColumns: 'repeat(auto-fit, minmax(23ch, 1fr))' // Corrected property name
  };

  return <div
    className="w-full h-full flex flex-col items-streach justify-between p-8 bg-gray-800"
  >
    <MenuIcon className="absolute left-4 top-4 sm:hidden" />
    <div className="flex justify-between">
      <button className="btn-secondary font-semibold">Sign up</button>
      <img alt="Logo" src="/logo.webp" width={45} height={45} />
    </div>
    <div className="flex gap-4 flex-col items-center">
      <img alt="Logo" src="/logo.webp" width={45} height={45} />
      <p className="font-semibold">How can i help you today?</p>
      <button className="btn-secondary px-16 font-bold">Log In </button>
    </div>
    <div
      className="flex flex-col h-auto mx-auto w-full sm:w-1/2 justify-center gap-4"
    >
      <ul role="list" style={listStyle}>
        <Card
          href="https://docs.astro.build/"
          title="Give me a summary"
          body="of TSLA's 2023 earning report."
        />
        <Card
          href="https://docs.astro.build/"
          title="Show me the top gainers"
          body="in the tech sector this month."
        />
        <Card
          href="https://docs.astro.build/"
          title="Give me a list of top-performing"
          body="A.I related stocks in a table"
        />
        <Card
          href="https://docs.astro.build/"
          title="What is the premium  for SPY call"
          body="expiring next Friday, strike price between 450 to 500?"
        />
      </ul>
      <div className="gap-2 relative flex justify-center items-center">
        <textarea
          className="w-full h-full rounded-xl text-gray-700 p-4 text-sm font-bold"
          placeholder="Type your message..."
        >
        </textarea>
        <button
          onClick={onSendClick}
          className="btn p-2 text-gray-200 hover:text-gray-800 absolute right-2 bg-gray-700 dark:gray-200"
        >
          <SendIcon classString="w-5 h-5 " />
        </button>
      </div>
    </div>
  </div>

}

