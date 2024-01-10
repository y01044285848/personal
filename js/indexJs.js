$(".dropmenu ul li").hover(function() {
    $(this)
      .find("ul")
      .stop()
      .fadeToggle(300);
  });
  //아톰에서 js파일 따로 만들었을 때 안 되면 html 안에 넣으면 됩니다.
  