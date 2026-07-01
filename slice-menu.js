// Sokolata menu data — mirrors the live Slice menu at sokolatawv.com.
// Exposed as window.INFO + window.MENU + window.FAVORITES.
// Each item links straight to its page on Slice, where real ordering happens.
// NOTE: prices/items are a snapshot of the Slice menu. Slice stays the source of
// truth — clicking any item opens its live Slice page with the current price.

// Slice deep-link helper: category id + item id -> live ordering URL.
var SLICE_HOME = "https://sokolatawv.com/";
function S(cat, item) {
  return "https://sokolatawv.com/?category-id=" + cat + "&item-id=" + item;
}

window.INFO = {
  name: "Sokolata",
  address: "4600 MacCorkle Ave SW, South Charleston WV 25309",
  phone: "(681) 265-5093",
  delivery: "35–50 min",
  pickup: "15–25 min",
  rating: 4.8,
  reviews: 256,
  hours: "Mon–Sun · 11:00 AM – 10:00 PM",
  promo: "10% OFF ONLINE ORDERS",
  orderUrl: SLICE_HOME,
};

// Each category: { id, name, blurb, items:[{ name, desc, price, tag?, url }] }
window.MENU = [
  {
    id: "signature-pizza",
    name: "Signature Pizza",
    blurb: "Chef-built pies — hand-tossed, loaded, baked golden. 12″ $18.95 · 14″ $20.95.",
    items: [
      { name: "Meat Lovers Pizza", desc: "Ham, sausage, pepperoni, bacon, salami & banana peppers.", price: 18.95, tag: "Popular", img: "meat-lovers-pizza.jpg", url: S(1000043635, 1000299779) },
      { name: "Six Cheese Pizza", desc: "Provolone, gouda, mozzarella, parmesan, feta, and asiago cheese.", price: 18.95, url: S(1000043635, 1000299786) },
      { name: "Skinny Pizza", desc: "Fresh spinach, onion, artichoke, & feta.", price: 18.95, img: "skinny-pizza.jpg", url: S(1000043635, 1000299792) },
      { name: "Margherita Pizza", desc: "Tomato, fresh sliced mozzarella & basil.", price: 18.95, img: "margherita-pizza.jpg", url: S(1000043635, 1000299800) },
      { name: "Carbonara Pizza", desc: "Mixed cheese, bacon, ham, mushrooms with alfredo sauce.", price: 18.95, url: S(1000043635, 1000299806) },
      { name: "Chicken Ranch Pizza", desc: "Chicken, tomatoes, onions, mushrooms, bacon, with ranch dressing.", price: 18.95, tag: "House", img: "chicken-ranch-pizza.jpg", url: S(1000043635, 1000299811) },
      { name: "Greek Village Pizza", desc: "Olives, onions, green & red peppers, tomatoes, and cheese.", price: 18.95, url: S(1000043635, 1000299823) },
      { name: "Steak Philly Pizza", desc: "Cheese steak, onions, green peppers, mushrooms and ranch sauce.", price: 18.95, url: S(1000043635, 1000299828) },
      { name: "Gyros Pizza", desc: "Cheese, gyros, lettuce, tomatoes, onions and tzatziki sauce.", price: 18.95, url: S(1000043635, 1000299832) },
      { name: "BBQ Pizza", desc: "Special BBQ sauce, cheese, chicken, onions, bacon.", price: 18.95, url: S(1000043635, 1000299838) },
    ],
  },
  {
    id: "pizza",
    name: "Build Your Own Pizza",
    blurb: "Classic cheese, built your way — 12″ $12.95 / 14″ $13.95, +$1.50 per topping.",
    items: [
      { name: "Build Your Own Pizza", desc: "Classic cheese or create your own pizza.", price: 13.95, tag: "Popular", url: S(1000043632, 1000299768) },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    blurb: "The good stuff to start — made to share (or not).",
    items: [
      { name: "Gouda Cheese & Mac Bites", desc: "Crispy bites of creamy gouda mac & cheese.", price: 8.00, url: S(1000043662, 1000299907) },
      { name: "Jalapeño Poppers", desc: "Breaded and filled with cheese, fried to golden perfection.", price: 8.00, url: S(1000043662, 1000299913) },
      { name: "Hummus with Pita Bread", desc: "Creamy house hummus with warm pita.", price: 5.50, url: S(1000043662, 1000299959) },
      { name: "Mozzarella Cheese Sticks", desc: "Crispy outside, gooey inside, with a side of marinara.", price: 8.00, tag: "Popular", url: S(1000043662, 1000299967) },
      { name: "Pita Bread", desc: "Warm, soft pita.", price: 3.50, url: S(1000043662, 1000299973) },
      { name: "Garlic Bread", desc: "Bread topped with garlic & herb seasoning, baked to perfection.", price: 3.50, url: S(1000043662, 1000299977) },
      { name: "Garlic Bread with Cheese", desc: "A cross between garlic bread and pizza.", price: 4.50, url: S(1000043662, 1000299979) },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    blurb: "Simmered daily.",
    items: [
      { name: "Chicken Lemon Rice Soup", desc: "Bright, lemony, classic Greek comfort.", price: 4.95, tag: "House", img: "chicken-lemon-rice-soup.jpg", url: S(1000043671, 1000299991) },
      { name: "Soup of the Day", desc: "Ask for today's selection.", price: 5.95, url: S(1000043671, 1000299995) },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    blurb: "Crisp, generous, dressed to order. Homemade Greek, ranch or blue cheese dressing.",
    items: [
      { name: "Side Greek Salad", desc: "Romaine, tomatoes, cucumbers, peppers, onions, olives, pepperoncini, feta.", price: 5.95, img: "side-greek-salad.png", url: S(1000043675, 1000300030) },
      { name: "Full Greek Salad", desc: "Romaine, tomatoes, cucumbers, peppers, onions, kalamata olives, pepperoncini, feta.", price: 10.50, tag: "House", url: S(1000043675, 1000300032) },
      { name: "Greek Salad with Chicken", desc: "Full Greek salad topped with grilled chicken.", price: 11.95, img: "greek-salad-chicken.jpg", url: S(1000043675, 1000300037) },
      { name: "Cajun Chicken Salad", desc: "Grilled cajun chicken over crisp greens with cheddar.", price: 11.95, url: S(1000043675, 1000300041) },
      { name: "Greek Salad with Gyro Meat", desc: "Full Greek salad topped with gyro meat.", price: 11.95, img: "greek-salad-gyro.jpg", url: S(1000043675, 1000300042) },
      { name: "Avocado Salad", desc: "Cucumbers, walnuts, raisins, red onion, tomatoes, avocado, parmesan.", price: 11.95, url: S(1000043675, 1000300047) },
      { name: "Grilled Chicken Salad", desc: "Grilled chicken, veg, kalamata olives, pepperoncini, cheddar.", price: 11.95, url: S(1000043675, 1000300050) },
      { name: "Chef Salad", desc: "Hard-boiled egg, ham, turkey, cheese, tomatoes, cucumbers & red onion.", price: 11.95, url: S(1000043675, 1000300056) },
    ],
  },
  {
    id: "wings",
    name: "Wings",
    blurb: "With sauce or plain.",
    items: [
      { name: "Wings (6 pcs)", desc: "Jumbo wings, tossed in sauce or served plain.", price: 9.95, tag: "Popular", url: S(1000043684, 1000300065) },
      { name: "Wings (12 pcs)", desc: "A dozen jumbo wings, tossed in sauce or served plain.", price: 14.95, url: S(1000043684, 1000300065) },
    ],
  },
  {
    id: "calzones",
    name: "Calzones",
    blurb: "Folded, stuffed, baked golden.",
    items: [
      { name: "Build Your Own Calzone", desc: "Pick your fillings — $7.95 + $1.50 per topping.", price: 7.95, url: S(1000043687, 1000300072) },
      { name: "Steak Philly Calzone", desc: "Cheese steak, onions, green peppers, mushrooms and ranch sauce.", price: 11.95, url: S(1000043687, 1000300079) },
    ],
  },
  {
    id: "specialty-calzones",
    name: "Specialty Calzones",
    blurb: "Our over-the-top folds. Bring an appetite.",
    items: [
      { name: "Carbonara Calzone", desc: "Mixed cheese, bacon, ham, mushrooms with alfredo sauce.", price: 11.95, img: "carbonara-calzone.jpg", url: S(1000043691, 1000300106) },
      { name: "Chicken Ranch Calzone", desc: "Chicken, tomatoes, onions, mushrooms, bacon with ranch dressing.", price: 11.95, url: S(1000043691, 1000300115) },
      { name: "Skinny Calzone", desc: "Fresh spinach, onion, artichoke & feta.", price: 11.95, url: S(1000043691, 1000300123) },
      { name: "Greek Village Calzone", desc: "Olives, onions, green & red peppers, tomatoes, and cheese.", price: 11.95, img: "greek-village-calzone.jpg", url: S(1000043691, 1000300119) },
      { name: "Ham Calzone", desc: "Ham, green peppers, mushrooms.", price: 11.95, url: S(1000043691, 1000300129) },
      { name: "Pepperoni Calzone", desc: "Pepperoni & cheese.", price: 11.95, url: S(1000043691, 1000300133) },
    ],
  },
  {
    id: "subs",
    name: "Sub Sandwiches",
    blurb: "Fresh-sliced Boar's Head meats, served with fresh-made potato chips.",
    items: [
      { name: "Ham Italian Hoagie", desc: "Ham, salami, pepperoni, provolone, lettuce, tomato & mayo.", price: 10.95, tag: "Popular", url: S(1000043697, 1000300149) },
      { name: "Steak Philly Sub", desc: "Grilled steak, sautéed onions, peppers, mushrooms, provolone.", price: 10.95, img: "steak-philly-sub.jpg", url: S(1000043697, 1000300155) },
      { name: "Chicken Philly Sub", desc: "Grilled chicken, sautéed onions, peppers, mushrooms, provolone.", price: 10.95, url: S(1000043697, 1000300158) },
      { name: "Club Sandwich", desc: "Ham, provolone & American cheese, turkey, mayo, lettuce, tomato & banana peppers.", price: 10.95, url: S(1000043697, 1000300163) },
      { name: "House London Broil Sub", desc: "Roast beef, swiss, lettuce, cranberry spread, creamy horseradish.", price: 10.95, tag: "House", img: "house-london-broil-sub.jpg", url: S(1000043697, 1000300170) },
      { name: "Mediterranean Chicken Sub", desc: "Chicken, kalamata olives, hummus, baby spinach, tomatoes.", price: 10.95, url: S(1000043697, 1000300173) },
      { name: "Oven Gold Country Club", desc: "Turkey, cheddar, bacon, lettuce, tomato & mayo.", price: 10.95, url: S(1000043697, 1000300182) },
      { name: "Meatballs Sub", desc: "House meatballs, marinara, melted cheese.", price: 10.95, url: S(1000043697, 1000300197) },
    ],
  },
  {
    id: "gyros",
    name: "Gyros & Pitas",
    blurb: "Flame-roasted, wrapped fresh, tzatziki on top.",
    items: [
      { name: "Famous Gyro", desc: "Flame-roasted beef & lamb, tomato, red onion, lettuce & tzatziki.", price: 9.95, tag: "House", img: "famous-gyro.jpg", url: S(1000043703, 1000300228) },
      { name: "Chicken Pita", desc: "All-white chicken, Greek seasoning, lettuce, tomato, red onion & tzatziki.", price: 9.95, img: "chicken-pita.jpg", url: S(1000043703, 1000300241) },
      { name: "Veggie Pita", desc: "Onions, mushrooms, black olives, peppers, feta, lettuce & tomato.", price: 8.95, url: S(1000043703, 1000300254) },
      { name: "Falafel on Pita", desc: "Crispy falafel wrapped in warm pita.", price: 9.95, url: S(1000043703, 1000300258) },
      { name: "Double Side Pita with Chicken", desc: "Two pitas loaded with seasoned chicken & fresh veg.", price: 10.95, url: S(1000043703, 1000300228) },
      { name: "Double Side Pita with Gyros", desc: "Two pitas loaded with gyro meat, tzatziki & fresh veg.", price: 10.95, url: S(1000043703, 1000300228) },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    blurb: "House sauces, baked or traditional.",
    items: [
      { name: "Chicken Alfredo", desc: "Sautéed chicken, mushrooms, onions in creamy homemade alfredo.", price: 14.95, tag: "Popular", img: "chicken-alfredo.jpg", url: S(1000043709, 1000300284) },
      { name: "Mykonos Spaghetti", desc: "Shrimp, onion, mushrooms, feta & mozzarella in marinara.", price: 14.95, url: S(1000043709, 1000300291) },
      { name: "Pasta Carbonara", desc: "Ham, bacon, mushrooms in creamy homemade alfredo.", price: 14.95, url: S(1000043709, 1000300296) },
      { name: "Spaghetti with Meat Sauce", desc: "Baked or traditional.", price: 13.95, img: "spaghetti-meat-sauce.jpg", url: S(1000043709, 1000300316) },
      { name: "Spaghetti with Meatballs", desc: "Baked or traditional.", price: 13.95, img: "spaghetti-meatballs.jpg", url: S(1000043709, 1000300319) },
      { name: "Pasta Marinara", desc: "Baked or traditional.", price: 11.95, url: S(1000043709, 1000300323) },
      { name: "Lasagna", desc: "Layers of pasta packed with meat and cheese in red sauce.", price: 13.95, url: S(1000043709, 1000300331) },
      { name: "Rigatoni 4 Cheese", desc: "Parmesan, mozzarella, feta & provolone in creamy alfredo.", price: 13.95, url: S(1000043709, 1000300336) },
      { name: "Cheese Chicken Tortellini", desc: "Chicken, mushrooms, onions, spinach in creamy alfredo.", price: 14.95, url: S(1000043709, 1000300353) },
      { name: "Cajun Chicken", desc: "Cajun chicken, onions, peppers, mushrooms in cajun sauce.", price: 14.95, img: "cajun-chicken.jpg", url: S(1000043709, 1000300359) },
      { name: "Chicken Parmesan", desc: "Breaded chicken, marinara & mozzarella over pasta.", price: 14.95, url: S(1000043839, 1000301050) },
      { name: "Shrimp Alfredo", desc: "Shrimp, sautéed onions, mushrooms, homemade alfredo.", price: 14.95, img: "shrimp-alfredo.jpg", url: S(1000043709, 1000300365) },
    ],
  },
  {
    id: "burgers",
    name: "Burgers & More",
    blurb: "Home-style seasoned, served with chips or fresh-cut fries.",
    items: [
      { name: "Burger", desc: "6oz patty, lettuce, tomatoes, onions, mayo, pickles on a toasted bun.", price: 11.95, img: "burger.jpg", url: S(1000043818, 1000300959) },
      { name: "Cheese Burger", desc: "6oz patty, lettuce, tomatoes, onions, cheese on a toasted bun.", price: 12.95, tag: "Popular", img: "cheese-burger.jpg", url: S(1000043818, 1000300956) },
      { name: "Blue Cheese Burger", desc: "8oz patty with pineapple and blue cheese.", price: 12.95, url: S(1000043818, 1000300945) },
      { name: "Avocado Bacon Burger", desc: "6oz patty, bacon, avocado, home-style seasoned.", price: 13.95, img: "avocado-bacon-burger.jpg", url: S(1000043818, 1000300952) },
      { name: "Patty Melt", desc: "6oz patty between melted cheese on an inside bun.", price: 11.95, img: "patty-melt.jpg", url: S(1000043818, 1000300948) },
      { name: "Fish Sub", desc: "5oz Atlantic cod, breaded & fried, tartar sauce, pickles on a hoagie.", price: 11.95, url: S(1000043818, 1000300942) },
    ],
  },
  {
    id: "combo",
    name: "Combo Offer",
    blurb: "Pair up and save.",
    items: [
      { name: "Soup & Salad Combo", desc: "A bowl of soup with a fresh side salad.", price: 10.95, url: S(1000043726, 1000300425) },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    blurb: "12 & under.",
    items: [
      { name: "Kid's Spaghetti", desc: "Butter, alfredo, marinara, meat sauce, or meatballs.", price: 6.95, url: S(1000043784, 1000300714) },
      { name: "Kid's 6\" Pizza", desc: "Classic cheese or create your own. +$1.50 each topping.", price: 6.95, url: S(1000043784, 1000300748) },
      { name: "Kid's Ham & Cheese Sandwich", desc: "A simple favorite.", price: 6.95, url: S(1000043784, 1000300723) },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    blurb: "Save room — these are house-made.",
    items: [
      // EACH
      { name: "Napoleon", desc: "Crisp pastry layered with cream.", price: 7.50, url: S(1000043791, 1000300772) },
      { name: "Tiramisu", desc: "Ladyfingers, espresso, mascarpone, cocoa.", price: 6.50, url: S(1000043791, 1000300768) },
      { name: "Tart", desc: "Buttery shell, custard, fresh fruit.", price: 7.50, img: "tart.jpg", url: S(1000043791, 1000300782) },
      { name: "Baklava", desc: "Layers of filo, chopped nuts, honey.", price: 3.50, tag: "House", img: "baklava.jpg", url: S(1000043791, 1000300788) },
      { name: "Éclair", desc: "Classic cream-filled pastry.", price: 6.50, img: "eclair.jpg", url: S(1000043791, 1000300793) },
      { name: "Mousse", desc: "Rich, indulgent chocolate dessert.", price: 7.50, url: S(1000043791, 1000300801) },
      { name: "Lava Cake", desc: "Warm chocolate cake with a molten center.", price: 6.50, img: "lava-cake.jpg", url: S(1000043791, 1000300808) },
      { name: "Cheesecake", desc: "Rich, dense, smooth and creamy.", price: 6.50, img: "cheesecake.jpg", url: S(1000043791, 1000300835) },
      // CUP cakes
      { name: "Strawberry Pie", desc: "Flaky crust, sweet strawberry filling, whipped cream.", price: 7.50, img: "strawberry-pie.jpg", url: SLICE_HOME },
      { name: "Vanilla Chocolate Cake", desc: "Vanilla sponge layered with rich chocolate cream.", price: 7.50, url: SLICE_HOME },
      { name: "Vanilla Almond Cake", desc: "Vanilla sponge with toasted almond cream.", price: 7.50, url: SLICE_HOME },
      { name: "Black Forest Cake", desc: "Chocolate sponge, cherries & whipped cream.", price: 7.50, url: SLICE_HOME },
      { name: "Strawberry Cake", desc: "Light sponge layered with fresh strawberry cream.", price: 7.50, img: "strawberry-cake.jpg", url: SLICE_HOME },
      { name: "Sokolatira", desc: "Our namesake — silky Greek chocolate layer cake.", price: 7.50, tag: "House", img: "sokolatira.jpg", url: SLICE_HOME },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    blurb: "To round it out.",
    items: [
      { name: "Soda", desc: "Ice-cold fountain soda.", price: 3.00, url: S(1000043837, 1000301019) },
      { name: "Sweet Tea", desc: "Southern-style sweet tea.", price: 3.00, url: S(1000043837, 1000301021) },
      { name: "Unsweet Tea", desc: "Fresh-brewed, unsweetened.", price: 3.00, url: S(1000043837, 1000301026) },
      { name: "Starry", desc: "Crisp lemon-lime soda.", price: 3.00, url: S(1000043837, 1000301158) },
    ],
  },
];

// House Favorites — featured row. Links straight to the live Slice item pages.
window.FAVORITES = [
  { name: "Chicken Ranch Pizza", cat: "Signature Pizza", price: 18.95, desc: "Chicken, tomatoes, onions, mushrooms, bacon, ranch.", img: "chicken-ranch-pizza.jpg", url: S(1000043635, 1000299811) },
  { name: "Famous Gyro", cat: "Gyros & Pitas", price: 9.95, desc: "Flame-roasted beef & lamb, tzatziki, fresh veg.", img: "famous-gyro.jpg", url: S(1000043703, 1000300228) },
  { name: "House London Broil Sub", cat: "Sub Sandwiches", price: 10.95, desc: "Roast beef, swiss, cranberry spread, horseradish.", img: "house-london-broil-sub.jpg", url: S(1000043697, 1000300170) },
  { name: "Meatballs Sub", cat: "Sub Sandwiches", price: 10.95, desc: "House meatballs, marinara, melted cheese.", url: S(1000043697, 1000300197) },
  { name: "Meat Lovers Pizza", cat: "Signature Pizza", price: 18.95, desc: "Ham, sausage, pepperoni, bacon, salami, banana peppers.", img: "meat-lovers-pizza.jpg", url: S(1000043635, 1000299779) },
];

// ── Section order on the site ───────────────────────────────────────────────
// Edit this list to reorder the menu sections (top to bottom). Each entry is a
// category id from window.MENU above. Lead with Pasta and Salads, then pizza,
// calzones, subs, and the rest.
window.MENU_ORDER = [
  "pasta", "salads",
  "signature-pizza", "pizza", "calzones", "specialty-calzones",
  "subs", "gyros", "appetizers", "wings", "soups",
  "burgers", "combo", "kids", "desserts", "beverages",
];
window.MENU.sort(function (a, b) {
  var ia = window.MENU_ORDER.indexOf(a.id);
  var ib = window.MENU_ORDER.indexOf(b.id);
  return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
});
