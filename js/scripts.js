var $menuCars = $(document).find('#menu-cars');
var $menuTrees = $(document).find('#menu-trees');
var $menuCarbon = $(document).find('#menu-carbon');
var activeTab = $menuCars;

var $carWindow = $(document).find('#off-the-road');
var $treeWindow = $(document).find('#tree-lifeline');
var $neighborhoodWindow = $(document).find('#neighborhood-score');
var activeWindow = $carWindow;

$(document).ready(function() {


$("#menu-cars").click(function() {
	activeTab.removeClass('active');
	$menuCars.addClass('active');
	activeTab = $menuCars;
	if(activeWindow != $carWindow) {
		activeWindow.toggle();
		$carWindow.toggle();
		activeWindow = $carWindow;
	}
});

$("#menu-trees").click(function() {
	activeTab.removeClass('active');
	$menuTrees.addClass('active');
	activeTab = $menuTrees;
	if(activeWindow != $treeWindow) {
		activeWindow.toggle();
		$treeWindow.toggle();
		activeWindow = $treeWindow;
	}
});

$("#menu-carbon").click(function() {
	activeTab.removeClass('active');
	$menuCarbon.addClass('active');
	activeTab = $menuCarbon;
	if(activeWindow != $neighborhoodWindow) {
		activeWindow.toggle();
		$neighborhoodWindow.toggle();
		activeWindow = $neighborhoodWindow;
	}
});

});