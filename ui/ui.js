const siteURL = '0ekekddddd.github.io';
const mailAddress = '0ekekddddd@protonmail.com';

function quickBio(){
  document.write('<div><p>they/them. <a href="https://lgbtqia.wiki/wiki/Biromantic" target="_blank">birom</a>-<a href="https://lgbtqia.wiki/wiki/Monogamous" target="_blank">monoam</a>. illustrator &amp; okay coder.<br><normal style="color:#00000050;"><a href="https://youtu.be/ckMvj1piK58?si=Hw6t5mdkyaD7gMaK&t=24" target="_blank">donk</a>ey-caiman-badger mix.</normal></p></div><div><p>irl<b>tkr</b> &mdash; Computer hobbyist. Web developer &amp; designer. Looking for work.</p></div><div><p><center><img src="ui/images/pixel_heart.gif" alt="" style="margin:-6px 1px -6px 1px;"> 2023.09.11 <img src="ui/images/pixel_heart.gif" alt="" style="margin:-6px 1px -6px 1px;"></center></p></div>');
}

function logMap(){
  const blogPosts = ['<a href="https://' + siteURL + '/log/">All Blogposts</a>','<a href="https://' + siteURL + '/log/bookmarks">Bookmarks</a>', '<a href="https://' + siteURL + '/log/prospectoridvguide">Golden Guide To Playing Prospector (Identity V)</a>', '<a href="https://' + siteURL + '/log/foolsgoldguide">Fool&apos;s Guide To Playing Fool&apos;s Gold (Identity V)</a>', '<a href="https://' + siteURL + '/log/handinavibuildlog">Handinavi Build Log</a>', '<a href="https://' + siteURL + '/log/htmlmosaics">HTML Mosaics</a>', '<a href="https://' + siteURL + '/log/make-a-website">The SNS Model Is Failing: Why You Should Make A Website</a>', '<a href="https://' + siteURL + '/log/openmptguide">OpenMPT Guide</a>', '<a href="https://' + siteURL + '/log/splatoonbiology">Cephaling Biology</a> (Outdated)', '<a href="https://' + siteURL + '/log/miscsplatoontheories">Miscellaneous Splatoon Theories</a>'];
  const fashionPosts = ['<a href="https://' + siteURL + '/jfashion/">All Fashion Blogposts</a>', '<a href="https://' + siteURL + '/jfashion/about-gyaruo-aristo.html">What Is Gyaruo &amp; Aristocrat?</a>', '<a href="https://' + siteURL + '/jfashion/100questions.html">100 Questions For An Ouji</a>', '<a href="https://' + siteURL + '/jfashion/links.html">Resources &amp; Links</a>', '<a href="https://' + siteURL + '/jfashion/itabag.html">痛バ ItaBag Diary</a>', '<a href="https://' + siteURL + '/jfashion/closet.html">Closet Archive</a>', '<a href="https://' + siteURL + '/jfashion/coordinategallery.html">Coordinate Gallery</a>', '<a href="https://' + siteURL + '/jfashion/photoalbum.html">Photo Album</a>'];
  const luchinoShrinePosts = ['<a href="https://' + siteURL + '/luchino_shrine/">Glaciale Undertone</a>', '<a href="https://' + siteURL + '/luchino_shrine/whoisluchino.html">Introduction</a>', '<a href="https://' + siteURL + '/luchino_shrine/nortluchi.html">Norton x Luchino</a>', '<a href="https://' + siteURL + '/luchino_shrine/roleplayprofile.html">Roleplay Profile (+ Headcanons)</a>', '<a href="https://' + siteURL + '/luchino_shrine/music.html">Music Playlist</a>', '<a href="https://' + siteURL + '/luchino_shrine/photogallery.html">Photo Gallery</a>' ];
  const blogList = '<h4>'+ blogPosts[0] +'</h4><ul><li>'+ blogPosts[1] +'</li><li>'+ blogPosts[2] +'</li><li>'+ blogPosts[3] +'</li><li>'+ blogPosts[4] +'</li><li>'+ blogPosts[5] +'</li><li>'+ blogPosts[6] +'</li><li>'+ blogPosts[7] +'</li><li>'+ blogPosts[8] +'</li></ul>';
  const fashionList = '<h4>'+ fashionPosts[0] +'</h4><ul><li>'+ fashionPosts[1] +'</li><li>'+ fashionPosts[2] +'</li><li>'+ fashionPosts[3] +'</li><li>'+ fashionPosts[4] +'</li><li>'+ fashionPosts[5] +'</li><li>'+ fashionPosts[6] +'</li><li>'+ fashionPosts[7] + '</li></ul>';
  const luchinoShrineList = '<h4>'+ luchinoShrinePosts[0] +'</h4><ul><li>'+ luchinoShrinePosts[1] +'</li><li>'+ luchinoShrinePosts[2] +'</li><li>'+ luchinoShrinePosts[3] +'</li><li>'+ luchinoShrinePosts[4] +'</li><li>'+ luchinoShrinePosts[5] +'</ul>';
  document.write('<div><h4><a href="https://' + siteURL + '/">Landing</a></h4><h4><a href="https://' + siteURL + '/log/update/">Update Log</a> / <a href="https://' + siteURL + '/rss/rss.xml" target="_blank" download>RSS Feed</a></h4>'+ blogList + fashionList  + luchinoShrineList + '<h4><a href="https://' + siteURL + '/music/">私の音 My Music</a></h4><h4><a href="https://' + siteURL + '/about">About The Site</a></h4></div>');
}

function rssList(){
  document.write('<hr><center><a href="https://' + siteURL + '/log/update/">update log</a> | <a href="https://' + siteURL + '/log/">personal log</a> | <a href="https://' + siteURL + '/about">about me</a> | <a href="https://' + siteURL + '/rss/rss.xml">subscribe to the rss</a></center>');
}

function loadAsset(){
  var assetPiece;
  switch(siteArea){
	case 1:
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://gristlepod.github.io" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="body">');
	  document.write('<section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section><div class="inContent"><section class="lContainer">');
	break;
	;
	case 2:
	  document.write('</section><section class="rContainer">');
	break;
	case 3:
	  assetPiece = "bottom"
	  document.write('</section></div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	break;
  }
}