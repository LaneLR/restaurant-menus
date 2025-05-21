const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    const restaurant = await Restaurant.create({
      name: "SushiStore",
      location: "DFW",
      cuisine: "Sushi",
    });
    expect(restaurant.location).toEqual("DFW");
  });

  test("can create a Menu", async () => {
    const menu = await Menu.create({
      title: "SushiStore Menu",
    });
    expect(menu.title).toEqual("SushiStore Menu");
  });

  test("can find Restaurants", async () => {
    const restaurant2 = await Restaurant.create({
      name: "FoodyLand",
      location: "Dallas",
      cuisine: "Fried",
    });
    const find = await Restaurant.findAll()
    expect(find[1].id).toEqual(2);
    expect(find[1].location).toEqual("Dallas");
  });

  test("can find Menus", async () => {
    const menu2 = await Menu.create({
      title: "Wines Menu",
    });
    const find = await Menu.findAll()
    expect(find[1].id).toEqual(2);
    expect(find[1].title).toEqual("Wines Menu");
  });

  test("can delete Restaurants and Menus", async () => {
    const menu3 = await Menu.create({
      title: "Breakfast",
    });
    const restaurant3 = await Restaurant.create({
      name: "Donuts",
      location: "LAX",
      cuisine: "Donut",
    });
    await menu3.destroy()
    const destroyedMenu = await Menu.findByPk(3)
    await restaurant3.destroy()
    const destroyedRestaurant = await Restaurant.findByPk(3)
    expect(destroyedMenu).toBeNull();
    expect(destroyedRestaurant).toBeNull();
  });
});
