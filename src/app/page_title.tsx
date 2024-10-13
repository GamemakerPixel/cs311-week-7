interface PropType {
  text: string
}


export default function PageTitle({ text }: PropType) {
  // Not sure if there is a way to get the innerHTML passed to this
  // component - I think that would be a better choice than a prop
  // but I can't find a way to do that.
  return (
    <h1 className="text-center font-sans text-4xl font-bold m-6 text-text">
      {text}
    </h1>
  );
}
