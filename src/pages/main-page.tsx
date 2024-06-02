import { Card } from "~/components/molecues/Card";
import { MenuIcon } from "~/components/icons/menu-icons";
import { SendIcon } from "~/components/icons/send-icon";
import { SERVER_URL } from "~/config";
import { useState, type MouseEventHandler } from "react";
import { ChatBox } from "~/components/organisms/chatbox";


export const MainPage = () => {


  const [results, setResults] = useState<Array<string>>( 
    [
      // "loremipmsum her;akwljsd;faskdlj a;sldkjasdfasdfasdf",
      // "Congested Name of thema of there paper",
      // "loremipmsum her;akwljsd;faskdlj a;sldkjasdfasdfasdf Congested Name of thema of there paper asfd quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione",
      // "loremipmsum her;akwljsd;faskdlj a;sldkjasdfasdfasdf Congested Name of thema of there paper asfd quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione",
    ])

  const [ currentText, setCurrentText ] = useState<string>("")

  function resetField() {
    setCurrentText('')
  }

  function onSendClick(e: any) {
    e.preventDefault()
    
    setResults((old) => {
      return [...old, currentText]
    })
    resetField()

    const request_url = SERVER_URL + "/gpt";

    fetch(request_url) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((body: any) => {
        console.log("Body", body);

        setResults((old) => {
          return [...old, ...body.map((each: any) => each.body)]
        })
        
      });
  }

  const listStyle = {
    display: 'grid',
    gap: '1rem',
    padding: '-1',
    gridTemplateColumns: 'repeat(auto-fit, minmax(23ch, 1fr))' // Corrected property name
  };

  return (
    <div className="relative gap-4 w-full h-full flex flex-col items-center justify-between p-8 bg-page">
      {/* flex item */}
      <MenuIcon className="absolute left-4 top-4 sm:hidden" />
      {/* flex Item */}
      <div className="w-full flex justify-between">
        <button className="btn-secondary font-semibold">Sign up</button>
        <img alt="Logo" src="/logo.webp" width={45} height={45} />
      </div>
      {/* flex Item */}
      {results.length < 1 && (
        <div className="my-auto flex gap-4 flex-col items-center">
          <img alt="Logo" src="/logo.webp" width={45} height={45} />
          <p className="font-semibold">How can i help you today?</p>
          <button className="btn-secondary px-16 font-bold">Log In </button>
        </div>
      )}
      {/* flex Item */}
      {results.length < 1 && (
        <ul role="list" className="mt-auto w-1/2" style={listStyle}>
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
      )}
      { results.length > 0 && <ChatBox className={`mb-auto`} messages={results} />}
      {/* Fixed Item Not flex element */}
      <div className="w-2/4 gap-2 flex justify-center items-center">
        <form onSubmit={onSendClick} className="w-full h-full">
          <input
            type="text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            className="w-full h-full rounded-xl text-gray-700 p-4 text-sm font-bold"
            placeholder="Type your message..."
          />
          <button
            onClick={onSendClick}
            className="btn p-2 border-0 text-gray-800 absolute right-3 top-1/2 -translate-y-1/2 dark:gray-200"
          >
            <SendIcon classString="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );

}
