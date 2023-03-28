const BasketItem = ({ item }) => {
  return (
    <li>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.title}</p>
    </li>
  );
};

export default BasketItem;
