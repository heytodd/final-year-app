// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
                          
// Navigation Bar Variables

var addButton = new steroids.buttons.NavigationBarButton();
    addButton.imagePath = "/icons/add@2x.png";

var editButton = new steroids.buttons.NavigationBarButton();
    editButton.title = "Edit";

// preload view vars
var friendView = new steroids.views.WebView("views/friend/index.html");
    friendView.preload();

var addView = new steroids.views.WebView("views/add/index.html");
    addView.preload();

var GroupView = new steroids.views.WebView("views/group/index.html");
    GroupView.preload();


function onDeviceReady () {
  navigationBar();
  segmentedList();
  buttonClasses();
  disableScrolling();
//  initVisibilityChange();
} 

// function initVisibilityChange() {
    
//    document.addEventListener("visibilitychange", onVisibilityChange, false);
// }

// function onVisibilityChange() {
    
//     if(!document.hidden) {
//         // if document is visible... do this:
        
//         steroids.view.navigationBar.show();
//     }
// }

function navigationBar() {
  steroids.view.navigationBar.show();
  steroids.view.navigationBar.update({
    title: "Contacts",
    overrideBackButton: true,
    buttons: {
      left: [addButton],
      right: [editButton]
    }
  });
}

function disableScrolling() {
  $('body').bind("touchmove", {}, function(event){
      event.preventDefault();
  });
}

function buttonClasses() {
  $('.conversation-button').on('singletap', showFriend);
  $('.group_btn').on('singletap', showGroup);
}

// addButton.onTap = function() {
//   steroids.layers.push( {
//     view: addView,
//     navigationBar: false,
//     tabBar: false
//   });
// }

editButton.onTap = function() {
  steroids.layers.push( {
    navigationBar: false,
    tabBar: false
  });
}

function showFriend() {
  steroids.layers.push( {
    view: friendView,
    navigationBar: true,
    tabBar: false
  });
} 

/*function showGroup() {
  steroids.layers.push( {
    view: GroupView,
    navigationBar: true,
    tabBar: false
  });
} */