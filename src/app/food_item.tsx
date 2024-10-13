type PropsType = {name: string}
export default function FoodItem({ name }: PropsType) {
  // Could include images or other elements in the future.
  return (
    <div>{name}</div>
  );
}
