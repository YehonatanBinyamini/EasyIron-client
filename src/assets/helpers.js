export function parseHTMLString(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const elements = Array.from(doc.body.childNodes);
    return elements.map((element, index) => (
      <div key={index}>{element.outerHTML}</div>
    ));
  }

  const urlServer = "http://localhost:5000";
  export { urlServer };