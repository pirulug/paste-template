function BBCodeParser(boxTextCon){
  boxTextCon = boxTextCon.replace(/\n/g, "<br />");
  boxTextCon = boxTextCon.replace(/\[b\]/g, "<b>");
  boxTextCon = boxTextCon.replace(/\[\/b\]/g, "</b>");
  boxTextCon = boxTextCon.replace(/\[i\]/g, "<i>");
  boxTextCon = boxTextCon.replace(/\[\/i\]/g, "</i>");
  boxTextCon = boxTextCon.replace(/\[u\]/g, "<u>");
  boxTextCon = boxTextCon.replace(/\[\/u\]/g, "</u>");
  boxTextCon = boxTextCon.replace(/\[s\]/g, "<s>");
  boxTextCon = boxTextCon.replace(/\[\/s\]/g, "</s>");
  boxTextCon = boxTextCon.replace(/\[url=(.*?)\]/g, "<a href='$1'>");
  boxTextCon = boxTextCon.replace(/\[\/url\]/g, "</a>");
  boxTextCon = boxTextCon.replace(/\[img\]/g, "<img class='img-fluid' src='");
  boxTextCon = boxTextCon.replace(/\[\/img\]/g, "'>");
  boxTextCon = boxTextCon.replace(/\[size=(.*?)\]/g, "<span style='font-size:$1'>");
  boxTextCon = boxTextCon.replace(/\[\/size\]/g, "</span>");
  boxTextCon = boxTextCon.replace(/\[color=(.*?)\]/g, "<span style='color:$1'>");
  boxTextCon = boxTextCon.replace(/\[\/color\]/g, "</span>");
  boxTextCon = boxTextCon.replace(/\[quote\]/g, "<blockquote>");
  boxTextCon = boxTextCon.replace(/\[\/quote\]/g, "</blockquote>");
  boxTextCon = boxTextCon.replace(/\[code\](.*?)\[\/code\]/g, "<code>$1</code>");
  boxTextCon = boxTextCon.replace(/\[code=(.*?)\](.*?)\[\/code\]/g, "<pre class='language-$1'><code class='language-$1'>$2</code></pre>");
  boxTextCon = boxTextCon.replace(/\[vip\]/g, "<div class='vip'><img draggable='false' src='https://s.w.org/images/core/emoji/2/svg/1f512.svg' width=50 height=50> <strong>Contenido oulto:</strong> Para ver este contenido <a href='#'>Inicia Sesión</a> en tu cuenta VIP.");
  boxTextCon = boxTextCon.replace(/\[\/vip\]/g, "</div>");
  boxTextCon = boxTextCon.replace(/\[jd\]/g, "<button class='btn btn-success' disabled> Clic para a&ntilde;adir a JDownloader");
  boxTextCon = boxTextCon.replace(/\[\/jd\]/g, "</button>");
  boxTextCon = boxTextCon.replace(/\[youtube\](?:.+?)?(?:\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/)([a-zA-Z0-9_-]{11})+\[\/youtube\]/g, "<div class='ratio ratio-16x9'><iframe src='https://www.youtube.com/embed/$1' allowfullscreen></iframe></div>");

  return boxTextCon;
}