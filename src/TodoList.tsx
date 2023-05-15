import React, { useState } from "react";
interface item {
  id: number;
  text: string;
  completed: boolean; //Boolean（ブール）は、真偽値を表すデータ型で、値はtrue（真）またはfalse（偽
}
export const TodoList = () => {
  const [todos, setTodos] = useState<item[]>([
    //Reactフレームワークでの状態管理のために、useStateフックを使用しています。useStateフックは、Reactコンポーネント内で状態を管理するために使用され、配列の形式で状態と状態を更新するための関数が返されます。
    { id: 1, text: "Learn Typescript", completed: false },
    { id: 2, text: "Build Todo List App", completed: false },
  ]);
  //この特定のコードでは、todosという名前の状態を宣言しています。todosは、現在のTodoリストを表すオブジェクトの配列です。配列の各要素は、id、text、completedの3つのプロパティを持つitemオブジェクトです。
  //

  const [input, setInput] = useState<string>(""); //inputは、Todoリストに追加する新しいタスクのテキストを表す文字列setInputは、input状態を更新するための関数です。
  const handleClick = () => {
    //handleClick関数を定義しています。この関数は、ボタンがクリックされたときに実行されます。handleClick関数は、新しいTodoを作成してTodoリストに追加するために使用されます。
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    //Date.now()を使用して新しいTodoのidを生成します。次に、input状態からテキストを取得し、新しいTodoのtextプロパティに設定します。completedプロパティはfalseで初期化されます。
    setTodos([...todos, newTodo]);
    //新しいTodoオブジェクトを作成したら、setTodos関数を使用してtodos状態を更新します。配列のスプレッド構文を使用して、現在のTodoリストの末尾に新しいTodoを追加します。これにより、新しいTodoがTodoリストに追加されます。
  };
  //handleToggle関数は、idを引数として受け取り、現在のtodos状態を更新するためにsetTodos関数を使用します。
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        //map関数内のコールバック関数で実行される条件分岐の部分
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
          //現在反復中のTodoアイテムのidが、引数として渡されたidと一致する場合に実行この場合、新しいオブジェクトが返されます
        }
        return todo;
      })
    );
  };
  return (
    <div className="main-container">
      <h1>TodoList</h1>
      <ul>
        {todos.map(
          (
            todo //map関数を使用して、todos配列内の各Todoアイテムに対して、それぞれ1つのli要素を生成
          ) => (
            <li
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          )
        )}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}></button>
    </div>
  );
};
