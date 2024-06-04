import parse, { domToReact } from 'html-react-parser';

const cleanHtml = (html) => {
  const options = {
    replace: ({ attribs, children }) => {
      if (attribs?.id==="1") {
        // If the node is a span, return only its children, effectively removing the span tag
        return domToReact(children);
      }
    }
  };
  return parse(html, options);
};




export default cleanHtml;