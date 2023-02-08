export default function FoodList({results}) {
    return (
        <section>
        {results &&
          results.foods.map((food) => (
            <article key={food.fdcId} className="mb-5">
              <div className="flex gap-2 justify-between">
                <p>{food.description} </p>
                <p>{food.brandName ? food.brandName : "N/A"}</p>
              </div>
              <ul>
                {food.foodNutrients
                  .filter(
                    (nutrient) =>
                      nutrient.nutrientId == 1003 ||
                      nutrient.nutrientId == 1004 ||
                      nutrient.nutrientId == 1005
                  )
                  .map((nutrient) => (
                    <li key={nutrient.foodNutrientId} className="flex gap-2">
                      <span>{nutrient.nutrientName}</span>
                      <span>{nutrient.value}g</span>
                    </li>
                  ))}
              </ul>
            </article>
          ))}
      </section>
    )
}