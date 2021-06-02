const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  const invokeInventoryAction = function(action, itemName) {
     return((`Invoking action on ${itemName}`));
  };
  console.log(invokeInventoryAction(inventory.add, 'Medkit'));
  inventory.add('Medkit');
  // Invoking action on Medkit
  // Adding Medkit to inventory
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  console.log(invokeInventoryAction(inventory.remove, 'Gas mask'));
  inventory.remove('Gas mask');
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  console.log(inventory.items); // ['Knife', 'Medkit']
  
 

