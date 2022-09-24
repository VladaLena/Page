$("#mouse").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(document).offset().top - $("#hero").height(),
    },
    1000
  );
});

// $("#mouse").on("click", function () {
//   $("html, body").animate(
//     { scrollTop: $(document).height() - $("#hero").height() },
//     1000
//   );
//   // return false;
// });

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>;

// /**
//  * Mouse wheel handler.
//  * @param {Object} event
//  */
// function wheel(event) {
//   if (!initDone) {
//     init();
//   }

//   var target = event.target;
//   var overflowing = overflowingAncestor(target);

//   // use default if there's no overflowing
//   // element or default action is prevented
//   // or it's a zooming event with CTRL
//   if (!overflowing || event.defaultPrevented || event.ctrlKey) {
//     return true;
//   }

//   // leave embedded content alone (flash & pdf)
//   if (
//     isNodeName(activeElement, "embed") ||
//     (isNodeName(target, "embed") && /\.pdf/i.test(target.src)) ||
//     isNodeName(activeElement, "object")
//   ) {
//     return true;
//   }

//   var deltaX = -event.wheelDeltaX || event.deltaX || 0;
//   var deltaY = -event.wheelDeltaY || event.deltaY || 0;

//   if (isMac) {
//     if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
//       deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
//     }
//     if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
//       deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
//     }
//   }

//   // use wheelDelta if deltaX/Y is not available
//   if (!deltaX && !deltaY) {
//     deltaY = -event.wheelDelta || 0;
//   }

//   // line based scrolling (Firefox mostly)
//   if (event.deltaMode === 1) {
//     deltaX *= 40;
//     deltaY *= 40;
//   }

//   // check if it's a touchpad scroll that should be ignored
//   if (!options.touchpadSupport && isTouchpad(deltaY)) {
//     return true;
//   }

//   // scale by step size
//   // delta is 120 most of the time
//   // synaptics seems to send 1 sometimes
//   if (Math.abs(deltaX) > 1.2) {
//     deltaX *= options.stepSize / 120;
//   }
//   if (Math.abs(deltaY) > 1.2) {
//     deltaY *= options.stepSize / 120;
//   }

//   scrollArray(overflowing, deltaX, deltaY);
//   event.preventDefault();
//   scheduleClearCache();
// }

//Повесить прослушку на мышку
//при нажатии прокрутить страницу вниз на about

// document.addEventListener("click", mouseTopPage);
// function mouseTopPage(e) {
//   const mouse = document.querySelector(".mouse");
// }
