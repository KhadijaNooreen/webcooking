const recipes = [
    {
        title: "Apple Pie",
        description: "A classic dessert made with apples and a flaky crust.",
        ingredients: [
            "2 1/2 cups all-purpose flour",
            "1 cup unsalted butter, chilled",
            "1/4 cup granulated sugar",
            "1/4 cup brown sugar",
            "1/2 teaspoon salt",
            "6 cups peeled and sliced apples",
            "3/4 cup granulated sugar",
            "2 tablespoons all-purpose flour",
            "1 teaspoon ground cinnamon",
            "1/4 teaspoon ground nutmeg",
            "1 tablespoon lemon juice",
            "1 egg, beaten"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "In a large bowl, mix flour and salt. Cut in butter until mixture resembles coarse crumbs.",
            "Add water, a tablespoon at a time, until dough comes together. Roll out half of dough and fit into pie pan.",
            "In a separate bowl, toss apples with sugars, flour, cinnamon, nutmeg, and lemon juice.",
            "Pour apple mixture into pie crust. Roll out remaining dough and place over apples. Trim and crimp edges.",
            "Brush top with beaten egg and cut slits for steam to escape.",
            "Bake for 45-50 minutes until crust is golden and filling is bubbly. Cool before serving."
        ],
        image: "images/apple_pie.jpg"
    },

    {
        title: "Banana Bread",
        description: "A moist and delicious bread made with ripe bananas.",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "1 teaspoon baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "1/2 cup unsalted butter, softened",
            "1 cup granulated sugar",
            "2 large eggs",
            "1 teaspoon vanilla extract",
            "1 cup mashed ripe bananas",
            "1/2 cup chopped walnuts (optional)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a loaf pan.",
            "In a bowl, whisk together flour, baking powder, baking soda, and salt.",
            "In another bowl, cream butter and sugar until light and fluffy. Beat in eggs one at a time.",
            "Mix in vanilla and bananas. Gradually add dry ingredients. Fold in walnuts.",
            "Pour batter into prepared loaf pan and bake for 60-70 minutes, or until a toothpick inserted comes out clean.",
            "Cool before slicing."
        ],
        image: "images/bananabread.jpg"
    },
    {
        title: "Caesar Salad",
        description: "A classic Caesar salad with crisp romaine and creamy dressing.",
        ingredients: [
            "1 large head of romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/2 cup grated Parmesan cheese",
            "1 cup croutons",
            "1 tablespoon lemon juice",
            "1 clove garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, toss chopped lettuce with Caesar dressing.",
            "Add Parmesan cheese, croutons, garlic, and lemon juice. Toss until evenly coated.",
            "Season with salt and pepper to taste. Serve immediately."
        ],
        image: "images/caesar.jpg"
    },
    {
        title: "Dal Tadka",
        description: "A flavorful Indian dal made with yellow lentils and tempered spices.",
        ingredients: [
            "1 cup yellow lentils (toor dal)",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon mustard seeds",
            "1 teaspoon turmeric powder",
            "1 teaspoon chili powder",
            "1 teaspoon garam masala",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander for garnish"
        ],
        instructions: [
            "Rinse lentils and cook in a pot with enough water until soft.",
            "In a separate pan, heat oil and add cumin and mustard seeds. Once they splutter, add onions and sauté until golden brown.",
            "Add tomatoes and cook until soft. Stir in turmeric, chili powder, and salt.",
            "Add cooked lentils to the pan and mix well. Simmer for 10 minutes.",
            "Stir in garam masala and garnish with coriander leaves. Serve with rice or naan."
        ],
        image: "images/daltadka.jpg"
    },
    {
        title: "Eggplant Parmesan",
        description: "A comforting Italian dish with layers of breaded eggplant and marinara sauce.",
        ingredients: [
            "2 large eggplants, sliced into 1/2 inch rounds",
            "1 cup all-purpose flour",
            "2 cups breadcrumbs",
            "1/2 cup grated Parmesan cheese",
            "2 cups marinara sauce",
            "2 cups shredded mozzarella cheese",
            "2 large eggs",
            "Salt and pepper to taste",
            "Olive oil for frying"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Set up a breading station with flour, beaten eggs, and breadcrumbs mixed with Parmesan.",
            "Dredge eggplant slices in flour, dip in eggs, and coat with breadcrumbs.",
            "Fry in olive oil until golden brown on both sides. Drain on paper towels.",
            "In a baking dish, layer eggplant slices, marinara sauce, and mozzarella cheese.",
            "Bake for 25-30 minutes until cheese is melted and bubbly. Serve hot."
        ],
        image: "images/eggplant.jpg"
    },
    {
        title: "French Toast",
        description: "A classic breakfast dish made from bread soaked in a mixture of eggs, milk, and cinnamon.",
        ingredients: [
            "4 slices of bread",
            "2 large eggs",
            "1/2 cup milk",
            "1 teaspoon vanilla extract",
            "1/2 teaspoon ground cinnamon",
            "1 tablespoon butter",
            "Maple syrup and powdered sugar for serving"
        ],
        instructions: [
            "In a bowl, whisk together eggs, milk, vanilla extract, and cinnamon.",
            "Heat butter in a skillet over medium heat.",
            "Dip bread slices in egg mixture and cook in skillet until golden brown on both sides.",
            "Serve with maple syrup and powdered sugar."
        ],
        image: "images/frenchtoast.jpg"
    },
    {
        title: "Guacamole",
        description: "A creamy avocado dip with lime and cilantro.",
        ingredients: [
            "3 ripe avocados",
            "1 small onion, finely chopped",
            "2 tomatoes, diced",
            "1 jalapeño, seeded and chopped",
            "2 tablespoons lime juice",
            "1/4 cup chopped fresh cilantro",
            "Salt to taste"
        ],
        instructions: [
            "In a bowl, mash avocados with a fork.",
            "Add onion, tomatoes, jalapeño, lime juice, and cilantro. Mix well.",
            "Season with salt to taste. Serve with tortilla chips or as a topping for tacos."
        ],
        image: "images/guacamole.jpg"
    },
    {
        title: "Honey Garlic Chicken",
        description: "Tender chicken coated in a sweet and savory honey garlic sauce.",
        ingredients: [
            "4 boneless chicken thighs",
            "1/4 cup honey",
            "2 tablespoons soy sauce",
            "2 cloves garlic, minced",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
            "Chopped green onions for garnish"
        ],
        instructions: [
            "Season chicken thighs with salt and pepper.",
            "Heat olive oil in a skillet over medium heat. Cook chicken until browned on both sides.",
            "In a bowl, mix honey, soy sauce, and garlic. Pour over chicken.",
            "Simmer until sauce thickens and chicken is cooked through.",
            "Garnish with green onions and serve with rice or vegetables."
        ],
        image: "images/honey_garlic_chicken.jpg"
    },
    {
        title: "Italian Meatballs",
        description: "Savory meatballs seasoned with herbs and baked in marinara sauce.",
        ingredients: [
            "1 pound ground beef",
            "1/2 cup breadcrumbs",
            "1/4 cup grated Parmesan cheese",
            "1/4 cup chopped parsley",
            "1 egg",
            "2 cloves garlic, minced",
            "1 teaspoon dried oregano",
            "1/2 teaspoon salt",
            "1/2 teaspoon black pepper",
            "2 cups marinara sauce"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, combine ground beef, breadcrumbs, Parmesan, parsley, egg, garlic, oregano, salt, and pepper. Mix well.",
            "Shape mixture into meatballs and place on a baking sheet.",
            "Bake for 20-25 minutes until cooked through.",
            "Heat marinara sauce in a pan and add meatballs. Simmer for 10 minutes.",
            "Serve with pasta or as a sub sandwich filling."
        ],
        image: "images/italian_meatballs.jpg"
    },
    {
        title: "Jalapeño Poppers",
        description: "Spicy jalapeños stuffed with cheese and baked until crispy.",
        ingredients: [
            "12 jalapeño peppers, halved and seeded",
            "8 ounces cream cheese, softened",
            "1 cup shredded cheddar cheese",
            "1/2 cup breadcrumbs",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix cream cheese and cheddar cheese together.",
            "Fill each jalapeño half with the cheese mixture.",
            "Place breadcrumbs on a plate and press each stuffed jalapeño into the breadcrumbs.",
            "Place on a baking sheet, drizzle with olive oil, and bake for 20 minutes or until golden brown.",
            "Serve hot."
        ],
        image: "images/jalapeno_poppers.jpg"
    },
    {
        title: "Aloo Gobi",
        description: "A flavorful vegetarian dish made with potatoes and cauliflower, seasoned with spices.",
        ingredients: [
            "1 large potato, peeled and cubed",
            "1 small cauliflower, cut into florets",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 teaspoon cumin seeds",
            "1 teaspoon turmeric powder",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon chili powder (optional)",
            "1/2 cup diced tomatoes",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Heat oil in a large pan over medium heat. Add cumin seeds and let them sizzle.",
            "Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Stir in turmeric, coriander, garam masala, and chili powder (if using). Cook for 1 minute.",
            "Add tomatoes and cook until they break down and blend into the spices.",
            "Add potatoes and cauliflower. Mix well to coat with spices.",
            "Cover and cook on low heat for 20-25 minutes, stirring occasionally, until vegetables are tender.",
            "Season with salt and garnish with fresh cilantro before serving."
        ],
        image: "images/aloo_gobi.jpg"
    },
    {
        title: "Aloo Matar",
        description: "A comforting curry made with potatoes and green peas, spiced to perfection.",
        ingredients: [
            "2 large potatoes, peeled and cubed",
            "1 cup green peas (fresh or frozen)",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 teaspoon cumin seeds",
            "1 teaspoon turmeric powder",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon chili powder (optional)",
            "1 cup diced tomatoes",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Heat oil in a pan over medium heat. Add cumin seeds and let them sizzle.",
            "Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Stir in turmeric, coriander, garam masala, and chili powder (if using). Cook for 1 minute.",
            "Add tomatoes and cook until they break down and blend into the spices.",
            "Add potatoes and green peas. Mix well to coat with spices.",
            "Cover and cook on low heat for 20-25 minutes, stirring occasionally, until potatoes are tender.",
            "Season with salt and garnish with fresh cilantro before serving."
        ],
        image: "images/aloo_matar.jpg"
    },
    {
        title: "Biryani",
        description: "A fragrant and flavorful rice dish layered with marinated meat and spices.",
        ingredients: [
            "2 cups basmati rice",
            "1 lb chicken or lamb, cut into pieces",
            "1/2 cup plain yogurt",
            "2 tablespoons biryani masala",
            "1 teaspoon turmeric powder",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1/2 teaspoon chili powder (optional)",
            "2 tablespoons vegetable oil",
            "2 onions, thinly sliced",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 cup diced tomatoes",
            "1/2 cup chopped cilantro",
            "1/2 cup chopped mint leaves",
            "4 cups water",
            "Salt to taste"
        ],
        instructions: [
            "Wash and soak rice in water for 30 minutes. Drain.",
            "Mix yogurt, biryani masala, turmeric, cumin, coriander, and chili powder (if using) in a bowl. Marinate the meat in this mixture for at least 1 hour.",
            "Heat oil in a large pot over medium heat. Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add marinated meat and cook until browned on all sides.",
            "Add tomatoes and cook until they break down and blend into the spices.",
            "Add water and bring to a boil. Reduce heat and simmer for 20 minutes until meat is cooked.",
            "In a separate pot, bring water to a boil. Add rice and cook until it is 70% done. Drain the rice.",
            "Layer partially cooked rice over the meat mixture in the pot. Sprinkle with cilantro and mint leaves.",
            "Cover tightly and cook on low heat for 20-25 minutes, allowing flavors to meld.",
            "Fluff rice and serve hot."
        ],
        image: "images/biryani.jpg"
    },
    {
        title: "Butter Chicken",
        description: "A rich and creamy chicken curry cooked in a spiced tomato sauce with butter and cream.",
        ingredients: [
            "1 lb chicken, cut into pieces",
            "1/2 cup plain yogurt",
            "1 tablespoon lemon juice",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder (optional)",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 cup diced tomatoes",
            "1/2 cup heavy cream",
            "2 tablespoons butter",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Marinate chicken in yogurt, lemon juice, cumin, coriander, garam masala, turmeric, and chili powder (if using) for at least 1 hour.",
            "Heat oil in a large pan over medium heat. Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add marinated chicken and cook until browned on all sides.",
            "Add tomatoes and cook until they break down and blend into the sauce.",
            "Reduce heat and stir in heavy cream and butter. Simmer for 10-15 minutes, until chicken is cooked through and sauce is creamy.",
            "Season with salt and garnish with fresh cilantro before serving."
        ],
        image: "images/butter_chicken.jpg"
    },
    {
        title: "Kofta Curry",
        description: "Spiced meatballs simmered in a rich and flavorful curry sauce.",
        ingredients: [
            "1 pound ground lamb or beef",
            "1/2 cup breadcrumbs",
            "1/4 cup chopped onion",
            "1/4 cup chopped fresh coriander",
            "1 egg",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1/2 teaspoon turmeric",
            "1/2 teaspoon chili powder",
            "2 tablespoons oil",
            "1 cup onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "1 cup tomato puree",
            "1 cup coconut milk",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix ground meat with breadcrumbs, onion, coriander, egg, cumin, coriander, turmeric, and chili powder. Shape into meatballs.",
            "Place meatballs on a baking sheet and bake for 20-25 minutes until cooked through.",
            "In a large pan, heat oil and sauté onion, garlic, and ginger until softened.",
            "Add tomato puree and cook for 5 minutes.",
            "Add coconut milk and season with salt and pepper. Simmer for 10 minutes.",
            "Add baked meatballs and simmer for another 10 minutes.",
            "Serve with rice or naan."
        ],
        image: "images/kofta_curry.jpg"
    },
    {
        title: "Lemon Meringue Pie",
        description: "A tangy lemon filling topped with fluffy meringue.",
        ingredients: [
            "1 pie crust, pre-baked",
            "1 cup granulated sugar",
            "1/4 cup cornstarch",
            "1/4 teaspoon salt",
            "1 1/2 cups water",
            "3 large egg yolks",
            "1/4 cup lemon juice",
            "2 tablespoons butter",
            "3 large egg whites",
            "1/2 teaspoon cream of tartar",
            "1/4 cup granulated sugar"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "In a saucepan, mix sugar, cornstarch, and salt. Gradually stir in water.",
            "Cook over medium heat until mixture thickens and comes to a boil. Remove from heat.",
            "Whisk egg yolks in a bowl and slowly add a small amount of hot mixture to temper them.",
            "Stir egg yolk mixture back into saucepan and cook for 2 minutes.",
            "Remove from heat and stir in lemon juice and butter. Pour filling into pie crust.",
            "Beat egg whites and cream of tartar until soft peaks form. Gradually add sugar and beat until stiff peaks form.",
            "Spread meringue over pie filling and bake for 10-15 minutes until meringue is golden.",
            "Cool before serving."
        ],
        image: "images/lemon_meringue_pie.jpg"
    },
    {
        title: "Mango Smoothie",
        description: "A refreshing smoothie made with ripe mangoes and yogurt.",
        ingredients: [
            "1 cup chopped ripe mango",
            "1/2 cup plain yogurt",
            "1/2 cup milk",
            "1 tablespoon honey",
            "1/2 teaspoon vanilla extract",
            "Ice cubes (optional)"
        ],
        instructions: [
            "In a blender, combine mango, yogurt, milk, honey, and vanilla extract.",
            "Blend until smooth. Add ice cubes if desired and blend again.",
            "Pour into glasses and serve immediately."
        ],
        image: "images/mango_smoothie.jpg"
    },
    {
        title: "Naan Bread",
        description: "Soft and fluffy Indian flatbread perfect for scooping up curries.",
        ingredients: [
            "2 cups all-purpose flour",
            "1 teaspoon sugar",
            "1 teaspoon salt",
            "1/2 teaspoon baking powder",
            "1/2 cup plain yogurt",
            "1/4 cup milk",
            "2 tablespoons melted butter",
            "1/4 cup warm water",
            "1 teaspoon active dry yeast"
        ],
        instructions: [
            "In a small bowl, dissolve yeast and sugar in warm water. Let it sit for 5 minutes until frothy.",
            "In a large bowl, mix flour, salt, and baking powder. Make a well in the center and add yogurt, milk, melted butter, and yeast mixture.",
            "Mix until dough comes together. Knead on a floured surface for 5 minutes.",
            "Place dough in a greased bowl, cover, and let rise in a warm place for 1-2 hours.",
            "Divide dough into balls and roll out into naan shapes.",
            "Cook in a hot skillet or tandoor until puffed and browned on both sides.",
            "Brush with melted butter and serve warm."
        ],
        image: "images/naan_bread.jpg"
    },
    {
        title: "Omelette",
        description: "A simple and versatile egg dish that can be customized with various fillings.",
        ingredients: [
            "2 large eggs",
            "1 tablespoon milk",
            "Salt and pepper to taste",
            "1 tablespoon butter",
            "Fillings of choice (cheese, ham, vegetables)"
        ],
        instructions: [
            "In a bowl, whisk eggs with milk, salt, and pepper.",
            "Heat butter in a skillet over medium heat.",
            "Pour egg mixture into the skillet and cook until edges start to set.",
            "Add desired fillings to one side of the omelette.",
            "Fold omelette in half and cook until fully set.",
            "Slide onto a plate and serve hot."
        ],
        image: "images/omlette.jpg"
    },
    {
        title: "Coffee",
        description: "A classic hot beverage made with brewed coffee beans.",
        ingredients: [
            "1 cup water",
            "2 tablespoons ground coffee",
            "Sugar to taste",
            "Milk or cream (optional)"
        ],
        instructions: [
            "Heat water to just below boiling.",
            "Place ground coffee in a coffee maker or filter.",
            "Pour hot water over the coffee grounds.",
            "Allow coffee to brew for 4-5 minutes.",
            "Serve with sugar and milk or cream if desired."
        ],
        image: "images/coffee.jpg"
    },
    {
        title: "Tea",
        description: "A soothing hot beverage made by steeping tea leaves.",
        ingredients: [
            "1 cup water",
            "1 tea bag or 1 tablespoon loose tea leaves",
            "Sugar or honey to taste",
            "Milk or lemon (optional)"
        ],
        instructions: [
            "Boil water and pour it into a cup.",
            "Add tea bag or loose tea leaves.",
            "Steep for 3-5 minutes.",
            "Remove tea bag or strain leaves.",
            "Add sugar, honey, milk, or lemon if desired."
        ],
        image: "images/tea.jpeg"
    },
    {
        title: "Lemon Juice",
        description: "A refreshing drink made with freshly squeezed lemons.",
        ingredients: [
            "1 cup freshly squeezed lemon juice",
            "1/2 cup sugar",
            "2 cups cold water",
            "Ice cubes"
        ],
        instructions: [
            "Mix lemon juice and sugar in a pitcher until sugar is dissolved.",
            "Add cold water and stir well.",
            "Serve over ice cubes."
        ],
        image: "images/lemon_juice.jpg"
    },
    {
        title: "Orange Juice",
        description: "A sweet and tangy drink made from fresh oranges.",
        ingredients: [
            "4-5 oranges, peeled",
            "Sugar to taste (optional)",
            "Ice cubes"
        ],
        instructions: [
            "Juice the oranges using a juicer.",
            "If desired, add sugar to taste.",
            "Serve over ice cubes."
        ],
        image: "images/orange_juice.jpg"
    },
    {
        title: "Iced Tea",
        description: "A chilled tea drink served over ice with a hint of lemon.",
        ingredients: [
            "4 tea bags",
            "4 cups water",
            "1/4 cup sugar (optional)",
            "Lemon slices (for garnish)",
            "Ice cubes"
        ],
        instructions: [
            "Boil water and pour over tea bags in a heatproof pitcher.",
            "Steep for 5-7 minutes.",
            "Remove tea bags and stir in sugar if using.",
            "Allow tea to cool, then refrigerate until cold.",
            "Serve over ice cubes with lemon slices."
        ],
        image: "images/iced_tea.jpg"
    },
    {
        title: "Iced Coffee",
        description: "A chilled coffee drink served over ice, perfect for hot days.",
        ingredients: [
            "1 cup brewed coffee, cooled",
            "1/4 cup milk or cream",
            "1-2 tablespoons sugar (optional)",
            "Ice cubes"
        ],
        instructions: [
            "Combine brewed coffee, milk, and sugar in a glass.",
            "Stir until well mixed.",
            "Serve over ice cubes."
        ],
        image: "images/iced_coffee.jpg"
    },
    {
        title: "Hot Chocolate",
        description: "A rich and creamy chocolate drink that's perfect for a cozy day.",
        ingredients: [
            "2 cups milk",
            "1/4 cup cocoa powder",
            "1/4 cup sugar",
            "1/4 cup water",
            "1/2 teaspoon vanilla extract",
            "Whipped cream (optional)"
        ],
        instructions: [
            "In a saucepan, combine cocoa powder, sugar, and water. Heat until the mixture is bubbling and thickened.",
            "Slowly add milk and heat until hot but not boiling.",
            "Stir in vanilla extract.",
            "Serve topped with whipped cream if desired."
        ],
        image: "images/hot_chocolate.jpg"
    },
    {
        title: "Paneer Butter Masala",
        description: "A creamy and rich paneer curry cooked in a spiced tomato gravy.",
        ingredients: [
            "250 grams paneer, cubed",
            "2 tablespoons butter",
            "1 tablespoon vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 cup tomato puree",
            "1/2 cup heavy cream",
            "1 tablespoon kasuri methi (dried fenugreek leaves)",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Heat butter and oil in a pan over medium heat. Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add tomato puree and cook for 5-7 minutes, until the oil separates.",
            "Stir in cumin, coriander, garam masala, chili powder, and kasuri methi. Cook for 2 minutes.",
            "Add paneer cubes and mix well.",
            "Pour in heavy cream and simmer for 5 minutes.",
            "Season with salt and garnish with fresh cilantro before serving."
        ],
        image: "images/masala_paneer.jpg"
    },
    {
        title: "Chole Bhature",
        description: "A popular North Indian dish consisting of spicy chickpeas served with deep-fried bread.",
        ingredients: [
            "For Chole:",
            "1 cup chickpeas, soaked overnight",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "2 tomatoes, chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1 teaspoon ground cumin",
            "1 teaspoon garam masala",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)",
            "For Bhature:",
            "2 cups all-purpose flour",
            "1/2 teaspoon baking powder",
            "1/2 teaspoon salt",
            "2 tablespoons yogurt",
            "1/4 cup water (or as needed)",
            "Oil for deep frying"
        ],
        instructions: [
            "For Chole: Heat oil in a pan, add cumin seeds, onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add tomatoes and cook until they break down.",
            "Stir in coriander, cumin, garam masala, turmeric, and chili powder. Cook for 2 minutes.",
            "Add soaked chickpeas and enough water to cover them. Simmer for 30-40 minutes, until chickpeas are tender.",
            "Season with salt and garnish with fresh cilantro.",
            "For Bhature: Mix flour, baking powder, and salt in a bowl. Add yogurt and mix.",
            "Gradually add water and knead to a soft dough. Let it rest for 1 hour.",
            "Divide dough into balls and roll out into discs.",
            "Heat oil in a deep pan and fry bhature until puffed and golden brown.",
            "Serve chole with hot bhature."
        ],
        image: "images/chole_bhature.jpg"
    },
    {
        title: "Aloo Paratha",
        description: "A stuffed flatbread filled with spiced mashed potatoes, commonly enjoyed with yogurt or pickle.",
        ingredients: [
            "For the Filling:",
            "2 large potatoes, boiled and mashed",
            "1 green chili, finely chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "Fresh cilantro, chopped",
            "For the Dough:",
            "2 cups whole wheat flour",
            "1/2 teaspoon salt",
            "1 tablespoon oil",
            "Water as needed",
            "Oil or ghee for frying"
        ],
        instructions: [
            "For the Filling: Mix all filling ingredients together in a bowl.",
            "For the Dough: Mix flour and salt in a bowl. Add oil and mix.",
            "Gradually add water and knead to a soft dough. Let it rest for 30 minutes.",
            "Divide dough and filling into equal portions.",
            "Roll out a dough ball into a small circle. Place a portion of filling in the center and fold edges over the filling.",
            "Roll out the stuffed dough ball into a flatbread.",
            "Heat oil or ghee in a pan and cook paratha until golden brown on both sides.",
            "Serve hot with yogurt or pickle."
        ],
        image: "images/aloo_paratha.jpg"
    },
    {
        title: "Chicken Curry",
        description: "A spicy and flavorful chicken dish cooked in a rich gravy.",
        ingredients: [
            "500 grams chicken, cut into pieces",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "2 tomatoes, chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1 teaspoon ground cumin",
            "1 teaspoon garam masala",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Heat oil in a pan over medium heat. Add cumin seeds and cook until they sizzle.",
            "Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add tomatoes and cook until they break down.",
            "Stir in coriander, cumin, garam masala, turmeric, and chili powder. Cook for 2 minutes.",
            "Add chicken pieces and cook until browned on all sides.",
            "Add water to cover the chicken and simmer for 20-25 minutes, until chicken is cooked through.",
            "Season with salt and garnish with fresh cilantro before serving."
        ],
        image: "images/chicken_curry.jpg"
    },
    {
        title: "Palak Paneer",
        description: "A vegetarian dish made with paneer (Indian cheese) cooked in a spiced spinach gravy.",
        ingredients: [
            "250 grams paneer, cubed",
            "1 bunch spinach, washed and chopped",
            "2 tablespoons vegetable oil",
            "1 onion, finely chopped",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "2 tomatoes, chopped",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "Fresh cream (optional)"
        ],
        instructions: [
            "Blanch spinach in boiling water for 2 minutes. Drain and blend into a smooth puree.",
            "Heat oil in a pan over medium heat. Add cumin seeds and cook until they sizzle.",
            "Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add tomatoes and cook until they break down.",
            "Stir in coriander, garam masala, turmeric, and chili powder. Cook for 2 minutes.",
            "Add spinach puree and cook for 5 minutes.",
            "Add paneer cubes and simmer for 5 minutes.",
            "Season with salt and stir in fresh cream if desired before serving."
        ],
        image: "images/palak_paneer.jpg"
    },
    {
        title: "Vegetable Rice",
        description: "A fragrant rice dish cooked with mixed vegetables and spices.",
        ingredients: [
            "2 cups basmati rice",
            "1 cup mixed vegetables (carrots, peas, potatoes, etc.)",
            "1 onion, thinly sliced",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 cup yogurt",
            "2 tablespoons biryani masala",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "2 tablespoons vegetable oil",
            "4 cups water",
            "Salt to taste",
            "Fresh cilantro and mint leaves, chopped (for garnish)"
        ],
        instructions: [
            "Wash and soak rice for 30 minutes. Drain.",
            "Heat oil in a pot over medium heat. Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add mixed vegetables and cook for 5 minutes.",
            "Stir in biryani masala, cumin, coriander, turmeric, and chili powder. Cook for 2 minutes.",
            "Add yogurt and mix well.",
            "Add rice and water. Bring to a boil, then reduce heat and cover. Cook for 20 minutes, until rice is tender.",
            "Garnish with fresh cilantro and mint leaves before serving."
        ],
        image: "images/veg_rice.JPG"
    },
    {
        title: "Raita",
        description: "A cooling yogurt-based side dish with vegetables and spices.",
        ingredients: [
            "1 cup plain yogurt",
            "1 cucumber, grated",
            "1/2 cup chopped tomatoes",
            "1/4 cup chopped onions",
            "1/4 cup chopped cilantro",
            "1/2 teaspoon roasted cumin powder",
            "1/4 teaspoon chili powder",
            "Salt to taste"
        ],
        instructions: [
            "In a bowl, whisk yogurt until smooth.",
            "Add cucumber, tomatoes, onions, and cilantro. Mix well.",
            "Stir in cumin powder, chili powder, and salt.",
            "Chill in the refrigerator before serving."
        ],
        image: "images/raita.jpg"
    },
    {
        title: "Samosa",
        description: "A popular Indian snack consisting of spiced potato filling wrapped in a crispy pastry.",
        ingredients: [
            "For the Filling:",
            "2 large potatoes, boiled and mashed",
            "1/2 cup peas",
            "1 onion, finely chopped",
            "1 tablespoon ginger, minced",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1 teaspoon garam masala",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "Salt to taste",
            "2 tablespoons chopped cilantro",
            "For the Pastry:",
            "2 cups all-purpose flour",
            "1/2 teaspoon salt",
            "1/4 cup vegetable oil",
            "Water as needed",
            "Oil for deep frying"
        ],
        instructions: [
            "For the Filling: Heat oil in a pan, add cumin seeds, onions, and ginger. Cook until onions are golden brown.",
            "Add peas and spices. Cook for 5 minutes.",
            "Mix in mashed potatoes and cilantro. Cool the filling.",
            "For the Pastry: Mix flour and salt in a bowl. Add oil and mix.",
            "Gradually add water and knead to a smooth dough. Let it rest for 30 minutes.",
            "Roll out dough into thin circles. Cut each circle in half and form a cone shape with one half.",
            "Fill the cone with potato filling and seal the edges.",
            "Heat oil in a pan and fry samosas until golden brown.",
            "Serve hot with chutney."
        ],
        image: "images/samosa.jpg"
    },
    {
        title: "Pulao",
        description: "A simple and fragrant rice dish cooked with vegetables and spices.",
        ingredients: [
            "1 cup basmati rice",
            "1 cup mixed vegetables (carrots, peas, beans, etc.)",
            "1 onion, thinly sliced",
            "2 garlic cloves, minced",
            "1 tablespoon ginger, minced",
            "1 bay leaf",
            "1 cinnamon stick",
            "2-3 cloves",
            "1 teaspoon cumin seeds",
            "1 teaspoon ground coriander",
            "1/2 teaspoon turmeric powder",
            "1/2 teaspoon chili powder",
            "2 tablespoons vegetable oil",
            "2 cups water",
            "Salt to taste",
            "Fresh cilantro, chopped (for garnish)"
        ],
        instructions: [
            "Wash and soak rice for 30 minutes. Drain.",
            "Heat oil in a pan over medium heat. Add bay leaf, cinnamon, cloves, and cumin seeds.",
            "Add onions, garlic, and ginger. Cook until onions are golden brown.",
            "Add mixed vegetables and cook for 5 minutes.",
            "Stir in coriander, turmeric, and chili powder.",
            "Add rice and water. Bring to a boil, then reduce heat and cover.",
            "Cook for 15-20 minutes, until rice is tender and water is absorbed.",
            "Garnish with fresh cilantro before serving."
        ],
        image: "images/pulao.JPG"
    },
    {
        title: "Smoothie",
        description: "A blended fruit drink that can be customized with your favorite fruits.",
        ingredients: [
            "1 banana",
            "1 cup frozen berries",
            "1/2 cup yogurt",
            "1/2 cup juice or milk",
            "Honey or sugar to taste (optional)"
        ],
        instructions: [
            "Place banana, frozen berries, yogurt, and juice or milk in a blender.",
            "Blend until smooth.",
            "Add honey or sugar if desired and blend again.",
            "Serve immediately."
        ],
        image: "images/smoothie.jpg"
    },
    {
        title: "Lemonade",
        description: "A classic refreshing drink made with lemon juice and sugar.",
        ingredients: [
            "1 cup freshly squeezed lemon juice",
            "1 cup sugar",
            "4 cups cold water",
            "Ice cubes"
        ],
        instructions: [
            "Mix lemon juice and sugar in a pitcher until sugar is dissolved.",
            "Add cold water and stir well.",
            "Serve over ice cubes."
        ],
        image: "images/lemonade.jpeg"
    },
    {
        title: "Mint Mojito",
        description: "A refreshing minty drink perfect for summer.",
        ingredients: [
            "1/2 cup fresh mint leaves",
            "1/4 cup sugar",
            "1/2 cup lime juice",
            "1 cup soda water",
            "Ice cubes"
        ],
        instructions: [
            "Muddle mint leaves and sugar in a glass.",
            "Add lime juice and stir well.",
            "Fill the glass with ice cubes and top with soda water.",
            "Stir gently and serve."
        ],
        image: "images/mint_mojito.jpg"
    },
    {
        title: "Chai Latte",
        description: "A spiced tea drink with steamed milk and a hint of sweetness.",
        ingredients: [
            "1 cup water",
            "1 cup milk",
            "2 tea bags of chai tea",
            "2 tablespoons sugar or honey",
            "Spices like cinnamon, cardamom, and cloves (optional)"
        ],
        instructions: [
            "Boil water and steep chai tea bags in it for 5 minutes.",
            "Heat milk in a saucepan until steaming.",
            "Remove tea bags and stir in sugar or honey.",
            "Froth the milk and pour it into the tea.",
            "Add spices if desired."
        ],
        image: "images/chai_latte.jpg"
    },
    {
        title: "Pancakes",
        description: "Fluffy and delicious pancakes perfect for breakfast or brunch.",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons melted butter",
            "Butter or oil for cooking"
        ],
        instructions: [
            "In a bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, mix milk, egg, and melted butter.",
            "Pour wet ingredients into dry ingredients and stir until just combined.",
            "Heat a skillet or griddle over medium heat and grease with butter or oil.",
            "Pour batter onto skillet and cook until bubbles form on the surface. Flip and cook until golden brown.",
            "Serve with maple syrup or your favorite toppings."
        ],
        image: "images/pancakes.jpg"
    },
    {
        title: "Quiche Lorraine",
        description: "A savory quiche with bacon, cheese, and a creamy custard filling.",
        ingredients: [
            "1 pie crust, pre-baked",
            "6 slices bacon, cooked and crumbled",
            "1 cup shredded Swiss cheese",
            "4 large eggs",
            "1 cup heavy cream",
            "1 cup milk",
            "1/4 teaspoon salt",
            "1/4 teaspoon black pepper",
            "1/4 teaspoon ground nutmeg"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sprinkle bacon and cheese evenly over the pre-baked pie crust.",
            "In a bowl, whisk together eggs, cream, milk, salt, pepper, and nutmeg.",
            "Pour egg mixture over bacon and cheese in the pie crust.",
            "Bake for 35-40 minutes until custard is set and top is golden brown.",
            "Cool slightly before slicing and serving."
        ],
        image: "images/quiche_loraine.jpg"
    },
    {
        title: "Ratatouille",
        description: "A French vegetable stew made with zucchini, eggplant, and tomatoes.",
        ingredients: [
            "1 eggplant, diced",
            "2 zucchini, sliced",
            "1 bell pepper, chopped",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 cup tomato sauce",
            "1/4 cup olive oil",
            "1 teaspoon dried thyme",
            "1 teaspoon dried basil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a large skillet, heat olive oil and sauté onion, garlic, and bell pepper until softened.",
            "Add eggplant and zucchini and cook for another 5 minutes.",
            "Stir in tomato sauce, thyme, basil, salt, and pepper.",
            "Transfer mixture to a baking dish and bake for 30-40 minutes until vegetables are tender.",
            "Serve warm as a main or side dish."
        ],
        image: "images/ratatoille.jpg"
    },
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with a creamy egg and cheese sauce.",
        ingredients: [
            "12 ounces spaghetti",
            "4 ounces pancetta or bacon, diced",
            "2 large eggs",
            "1 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Chopped parsley for garnish"
        ],
        instructions: [
            "Cook spaghetti according to package instructions. Reserve 1 cup of pasta water and drain.",
            "In a skillet, cook pancetta or bacon until crispy. Add garlic and cook for another minute.",
            "In a bowl, whisk together eggs and Parmesan cheese.",
            "Add hot pasta to the skillet with pancetta. Remove from heat and quickly stir in egg mixture, adding reserved pasta water as needed to create a creamy sauce.",
            "Season with salt and pepper. Garnish with parsley and serve immediately."
        ],
        image: "images/speghetti_carbonara.jpg"
    },
    {
        title: "Tacos",
        description: "Delicious tacos with seasoned ground beef and your favorite toppings.",
        ingredients: [
            "1 pound ground beef",
            "1 packet taco seasoning",
            "1/2 cup water",
            "Taco shells or tortillas",
            "Shredded lettuce",
            "Chopped tomatoes",
            "Shredded cheese",
            "Sour cream",
            "Salsa"
        ],
        instructions: [
            "In a skillet, cook ground beef until browned. Drain excess fat.",
            "Add taco seasoning and water to the beef. Simmer until thickened.",
            "Warm taco shells or tortillas according to package instructions.",
            "Fill tacos with seasoned beef and top with lettuce, tomatoes, cheese, sour cream, and salsa."
        ],
        image: "images/tacos.jpg"
    },
    {
        title: "Udon Noodles",
        description: "Thick and chewy Japanese noodles served in a savory broth.",
        ingredients: [
            "8 ounces udon noodles",
            "2 tablespoons soy sauce",
            "2 tablespoons miso paste",
            "2 cups vegetable or chicken broth",
            "1 tablespoon sesame oil",
            "1 cup sliced mushrooms",
            "1 cup chopped bok choy",
            "1 green onion, sliced"
        ],
        instructions: [
            "Cook udon noodles according to package instructions. Drain and set aside.",
            "In a pot, heat sesame oil and sauté mushrooms until soft.",
            "Add broth, soy sauce, and miso paste. Stir until miso is dissolved.",
            "Add bok choy and cook until wilted.",
            "Add cooked noodles to the pot and heat through.",
            "Serve in bowls garnished with green onions."
        ],
        image: "images/udon_noodle.jpg"
    },
    {
        title: "Vegetable Stir-Fry",
        description: "A quick and healthy stir-fry with mixed vegetables and a savory sauce.",
        ingredients: [
            "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
            "2 tablespoons soy sauce",
            "1 tablespoon hoisin sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "1 tablespoon cornstarch mixed with 2 tablespoons water",
            "Cooked rice for serving"
        ],
        instructions: [
            "Heat sesame oil in a pan and sauté garlic until fragrant.",
            "Add mixed vegetables and stir-fry until tender-crisp.",
            "Stir in soy sauce and hoisin sauce. Add cornstarch mixture to thicken sauce.",
            "Cook for another 2 minutes. Serve over cooked rice."
        ],
        image: "images/veg_stir_fry.jpg"
    },
    {
        title: "Waffles",
        description: "Crispy on the outside and fluffy on the inside, perfect for breakfast.",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/2 cup melted butter",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "Preheat waffle iron according to manufacturer’s instructions.",
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk eggs, milk, melted butter, and vanilla extract.",
            "Pour wet ingredients into dry ingredients and stir until just combined.",
            "Pour batter onto preheated waffle iron and cook until golden brown.",
            "Serve with syrup, fruit, or whipped cream."
        ],
        image: "images/waffles.jpg"
    },
    {
        title: "Xiaolongbao",
        description: "Chinese soup dumplings filled with pork and a flavorful broth.",
        ingredients: [
            "Dumpling wrappers",
            "1 pound ground pork",
            "1/4 cup soy sauce",
            "1 tablespoon sugar",
            "1 tablespoon rice wine",
            "1 tablespoon minced ginger",
            "1 tablespoon minced garlic",
            "1 cup chicken broth (cooled)",
            "1 tablespoon cornstarch"
        ],
        instructions: [
            "In a bowl, mix ground pork with soy sauce, sugar, rice wine, ginger, and garlic.",
            "In a separate bowl, mix chicken broth with cornstarch until smooth.",
            "Stir broth mixture into pork mixture. Chill for 30 minutes.",
            "Place a spoonful of filling in the center of each dumpling wrapper and pleat to seal.",
            "Steam dumplings in a bamboo steamer over boiling water for 10-12 minutes.",
            "Serve hot with soy sauce or vinegar."
        ],
        image: "images/xia_long_bao.jpg"
    },
    {
        title: "Yogurt Parfait",
        description: "A healthy and delicious layered dessert with yogurt, fruit, and granola.",
        ingredients: [
            "2 cups plain yogurt",
            "1 cup granola",
            "1 cup fresh berries (strawberries, blueberries)",
            "1 tablespoon honey"
        ],
        instructions: [
            "In serving glasses, layer yogurt, granola, and berries.",
            "Drizzle with honey.",
            "Repeat layers and serve immediately or chill before serving."
        ],
        image: "images/yogurt_parfait.jpg"
    },
    {
        title: "Zucchini Bread",
        description: "A moist and flavorful bread made with fresh zucchini.",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "1 teaspoon baking powder",
            "1/2 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 teaspoon ground cinnamon",
            "1/2 teaspoon ground nutmeg",
            "1/2 cup vegetable oil",
            "1 cup granulated sugar",
            "2 large eggs",
            "1 cup grated zucchini",
            "1/2 cup chopped walnuts (optional)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a loaf pan.",
            "In a bowl, mix flour, baking powder, baking soda, salt, cinnamon, and nutmeg.",
            "In another bowl, whisk together oil and sugar. Beat in eggs one at a time.",
            "Stir in zucchini and mix in dry ingredients. Fold in walnuts if using.",
            "Pour batter into prepared loaf pan and bake for 60-70 minutes or until a toothpick comes out clean.",
            "Cool before slicing."
        ],
        image: "images/zucchini_bread.jpg"
    }
    


    





];

// Function to sort recipes alphabetically by title
function sortRecipesAlphabetically(recipes) {
    return recipes.slice().sort((a, b) => a.title.localeCompare(b.title));
}

const recipeList = document.getElementById("recipe-list");
const searchBar = document.getElementById("search-bar");
const recipeModal = document.getElementById("recipe-modal");
const recipeTitle = document.getElementById("recipe-title");
const recipeImage = document.getElementById("recipe-image");
const recipeDescription = document.getElementById("recipe-description");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeInstructions = document.getElementById("recipe-instructions");
const closeModal = document.getElementsByClassName("close")[0];

function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        
        const recipeImg = document.createElement("img");
        recipeImg.src = recipe.image;
        recipeImg.alt = recipe.title;
        recipeCard.appendChild(recipeImg);
        
        const recipeTitle = document.createElement("p");
        recipeTitle.innerText = recipe.title;
        recipeCard.appendChild(recipeTitle);

        recipeCard.addEventListener("click", () => openModal(recipe));
        recipeList.appendChild(recipeCard);
    });
}

function openModal(recipe) {
    recipeTitle.innerText = recipe.title;
    recipeImage.src = recipe.image;
    recipeDescription.innerText = recipe.description;
    recipeIngredients.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
    recipeInstructions.innerHTML = recipe.instructions.map(step => `<li>${step}</li>`).join("");
    recipeModal.style.display = "block";
}

closeModal.onclick = function() {
    recipeModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == recipeModal) {
        recipeModal.style.display = "none";
    }
}

searchBar.addEventListener("input", function() {
    const searchText = searchBar.value.toLowerCase();
    const filteredRecipes = sortRecipesAlphabetically(recipes).filter(recipe => recipe.title.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
});
// Initial display of sorted recipes
displayRecipes(sortRecipesAlphabetically(recipes));
