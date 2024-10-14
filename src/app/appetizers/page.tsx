import FoodItem from '@/app/food_item'
import PageTitle from '@/app/page_title'


export default function Appetizers() {
  return (
    <div>
      <PageTitle text="Appetizers" />
      <p className="prompt-text">Check out our appetizers below!</p>
      <ul>
        <FoodItem name="Probably an Egg pun ch?" />
        <FoodItem name="Call it Marty" />
        <FoodItem name="Cheese sticks that someone fried" />
      </ul>
    </div>
  );
}
