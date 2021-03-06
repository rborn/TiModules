// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var package_manager = require('com.looprecur.packagemanager');

Ti.API.info("module is => " + package_manager);

label.text = "GETTING LAUNCH INTENT";
package_manager.launch('com.looprecur.unzip');

label.text = "STARTING";

Ti.API.info("------================");

intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

var activity = Ti.Android.currentActivity;

label.text = "Launching";

activity.startActivity(intent);

label.text = "Launched";