(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.gatherItemsToBeBought()

  toBuyList.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBeBought = [
    { name: "Ears of Corn", quantity: 4},
    { name: "Cereal", quantity: 3},
    { name: "Bread", quantity: 2},
    { name: "Dr. Pepper", quantity: 24},
    { name: "Diet Dr. Pepper", quantity: 12}
  ];

  var boughtItems = [];

  service.buyItem = function (index) {
    var item = itemsToBeBought[index];
    boughtItems.push(item);
    itemsToBeBought.splice(index, 1);
  };

  service.gatherItemsToBeBought = function () {
    return itemsToBeBought;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();
