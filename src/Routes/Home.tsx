import { useState } from "react";

function Home() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  const itemList = [
    {
      id: 1,
      name: "Tanis Shoes",
      price: 100000,
      src: "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 2,
      name: "Converse Shoes",
      price: 200000,
      src: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 3,
      name: "Nike Shoes",
      price: 300000,
      src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    },
  ];
  return (
    <div className="flex">
      <div>
        <img src={itemList[0].src} alt="" />
        <div>
          <h1>{itemList[0].name}</h1>
          <h3>{itemList[0].price}won</h3>
          <span>수량 :</span>
          <div className="inline-flex">
            <button
              className="bg-gray-300   font-bold py-2 px-4 rounded-l"
              onClick={onIncrease}
            >
              +
            </button>
            <span className="flex content-center bg-gray-300 items-center justy">
              {count}
            </span>
            <button
              className="bg-gray-300  font-bold py-2 px-4 rounded-r"
              onClick={onDecrease}
            >
              -
            </button>
          </div>
          <button className="bg-gray-300 0 font-bold py-2 px-4 rounded inline-flex items-center">
            장바구니에 담기
          </button>
        </div>
      </div>
      <div>
        <img src={itemList[1].src} alt="" />
      </div>
      <div>
        <img src={itemList[2].src} alt="" />
      </div>
    </div>
  );
}

export default Home;
