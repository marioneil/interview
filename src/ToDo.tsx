import React from "react";

export const withHigherOrderComponent =
  (Component: React.ComponentType<P>) => (props: any) =>
    <Component {...props} />;

// function withHigherOrderComponent1(Component) {
//   return function (props: any) {
//     return <Component {...props} />;
//   };
// }

// const App = () => {
//   const { data, isLoading } = fetchData();

//   if (isLoading) return <div>Loading data.</div>;
//   if (!data) return <div>No data loaded yet.</div>;
//   if (!data.length) return <div>Data is empty.</div>;

//   return <TodoList data={data} />;
// };

// const BaseTodoList = ({ data }) => {
//   return (
//     <ul>
//       {data.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };

// const TodoList = withHigherOrderComponent(BaseTodoList);
