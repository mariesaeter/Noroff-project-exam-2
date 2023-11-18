export const inputClass =
  " w-full  py-2 pl-7 pr-3 border-2 border-fantasy-blue/0 focus:border-fantasy-blue-active focus:border-2 rounded-lg outline-none h-11 focus:text-fantasy-blue";

export const textareaClass =
  " w-full  py-2 pl-7 pr-3 border-2 border-fantasy-blue/0 focus:border-fantasy-blue-active focus:border-2 rounded-lg outline-none focus:text-fantasy-blue";

export const linkClass =
  "text-fantasy-blue hover:text-fantasy-blue-active underline transition duration-300";
// export const inputContainer = "flex";

// https://codepen.io/artilishes/pen/ZOQWZe
export const checkboxClass =
  "border-2 border-fantasy-blue cursor-pointer rounded appearance-none relative after:opacity-0 checked:after:opacity-100 after:absolute after:top-[3px] after:left-[3px] after:w-[10px]  after:h-[10px] after:rounded-sm after:block after:bg-earth-brown h-[20px] w-[20px] mt-1 shrink-0 ";

export const radioClass =
  "border-2 border-fantasy-blue cursor-pointer rounded-full appearance-none relative after:opacity-0 checked:after:opacity-100 after:absolute after:top-[3px] after:left-[3px] after:w-[10px]  after:h-[10px] after:rounded-full after:block after:bg-earth-brown h-[20px] w-[20px] mt-1 shrink-0 ";

export const iconClass = (icon) => {
  return `${icon} fa-solid absolute  ml-2 top-1/2 translate-x-0 translate-y-[-50%] `;
};
