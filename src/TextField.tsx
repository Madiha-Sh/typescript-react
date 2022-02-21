import React from "react";

// // props --> properties
// // hooks
// // render props

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Props {
//   text: string;
//   ok?: boolean;
//   i?: number;
//   fn?: (bob: string) => string;
//   person: Person;
//   handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface TextNode {
//   text: string;
// }

// export const TextField: React.FC<Props> = ({handleChange}) => {
//   const [count, setCount] = React.useState<TextNode>({text: 'hello'});
//   const inputRef = React.useRef<HTMLInputElement>(null);
//   const divRef = React.useRef<HTMLDivElement>(null);

//   // setCount({text:'hello'});
//   return (<div ref={divRef}>
//     <input ref={inputRef} onChange={handleChange} />
//   </div>
//   );
// };
