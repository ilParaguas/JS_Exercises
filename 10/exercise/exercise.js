const order = {
  city: "",
};

let entries = Object.entries(order);

for (let entry of entries) {
  let [key, val] = entry;
  if (key == "city") {
    if (!val) {
      console.log("City is required");
    }
  }
}
