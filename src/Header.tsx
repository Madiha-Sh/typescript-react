import React from "react";

interface HeaderProps {
  buttonText: string;
}

interface Movie {
  title: string;
  date: string;
  rating: string;
  description: string;
}

export default function Header(props: HeaderProps) {

  const [count, setCount] = React.useState(0);
  const [movie, setMovie] = React.useState<Movie | null>(null);

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Header</h1>
      <button onClick={increment}>{props.buttonText}</button>

      <p>{count}</p>
    </div>
  )
}