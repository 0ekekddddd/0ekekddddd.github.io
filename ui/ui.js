const siteURL = 'https://0ekekddddd.github.io';

const blogPosts = ['<a href="https://0ekekddddd.github.io/log/">All Blogposts</a>','<a href="https://0ekekddddd.github.io/log/entry/bookmarks">Bookmarks</a>', '<a href="https://0ekekddddd.github.io/log/entry/prospectoridvguide">Golden Guide To Playing Prospector (Identity V)</a>', '<a href="https://0ekekddddd.github.io/log/entry/foolsgoldguide">Fool&apos;s Guide To Playing Fool&apos;s Gold (Identity V)</a>', '<a href="https://0ekekddddd.github.io/log/entry/handinavibuildlog">Handinavi Build Log</a>', '<a href="https://0ekekddddd.github.io/log/entry/htmlmosaics">HTML Mosaics</a>', '<a href="https://0ekekddddd.github.io/log/entry/make-a-website">The SNS Model Is Failing: Why You Should Make A Website</a>', '<a href="https://0ekekddddd.github.io/log/entry/openmptguide">OpenMPT Guide</a>', '<a href="https://0ekekddddd.github.io/log/entry/splatoonbiology">Cephaling Biology</a> (Outdated)', '<a href="https://0ekekddddd.github.io/log/entry/miscsplatoontheories">Miscellaneous Splatoon Theories</a>'];

const fashionPosts = ['<a href="https://0ekekddddd.github.io/jfashion/">All Fashion Blogposts</a>', '<a href="https://0ekekddddd.github.io/jfashion/about-gyaruo-aristo.html">What Is Gyaruo &amp; Aristocrat?</a>', '<a href="https://0ekekddddd.github.io/jfashion/100questions.html">100 Questions For An Ouji</a>', '<a href="https://0ekekddddd.github.io/jfashion/links.html">Resources &amp; Links</a>', '<a href="https://0ekekddddd.github.io/jfashion/itabag.html">痛バ ItaBag Diary</a>', '<a href="https://0ekekddddd.github.io/jfashion/closet.html">Closet Archive</a>', '<a href="https://0ekekddddd.github.io/jfashion/coordinategallery.html">Coordinate Gallery</a>', '<a href="https://0ekekddddd.github.io/jfashion/photoalbum.html">Photo Album</a>'];

const luchinoShrinePosts = ['<a href="https://0ekekddddd.github.io/luchino_shrine/">Glaciale Undertone</a>', '<a href="https://0ekekddddd.github.io/luchino_shrine/whoisluchino.html">Introduction</a>', '<a href="https://0ekekddddd.github.io/luchino_shrine/nortluchi.html">Norton x Luchino</a>', '<a href="https://0ekekddddd.github.io/luchino_shrine/roleplayprofile.html">Roleplay Profile</a>', '<a href="https://0ekekddddd.github.io/luchino_shrine/music.html">Music Playlist</a>', '<a href="https://0ekekddddd.github.io/luchino_shrine/photogallery.html">Photo Gallery</a>' ];

var blogList = '<h4>'+ blogPosts[0] +'</h4><ul><li>'+ blogPosts[1] +'</li><li>'+ blogPosts[2] +'</li><li>'+ blogPosts[3] +'</li><li>'+ blogPosts[4] +'</li><li>'+ blogPosts[5] +'</li><li>'+ blogPosts[6] +'</li><li>'+ blogPosts[7] +'</li><li>'+ blogPosts[8] +'</li></ul>';

var fashionList = '<h4>'+ fashionPosts[0] +'</h4><ul><li>'+ fashionPosts[1] +'</li><li>'+ fashionPosts[2] +'</li><li>'+ fashionPosts[3] +'</li><li>'+ fashionPosts[4] +'</li><li>'+ fashionPosts[5] +'</li><li>'+ fashionPosts[6] +'</li><li>'+ fashionPosts[7] + '</li></ul>';

var luchinoShrineList = '<h4>'+ luchinoShrinePosts[0] +'</h4><ul><li>'+ luchinoShrinePosts[1] +'</li><li>'+ luchinoShrinePosts[2] +'</li><li>'+ luchinoShrinePosts[3] +'</li><li>'+ luchinoShrinePosts[4] +'</li><li>'+ luchinoShrinePosts[5] +'</ul>';

function map(){
  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto: 0ekekddddd@protonmail.com" target="_parent"><area alt="[Home]" title="[Home]" href="'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://0ekekddddd.github.io/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://gristlepod.github.io" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://0ekekddddd.github.io/music/" coords="196,58,227,86" shape="rect" target="_parent"></map>');
}
function logMap(){
  document.write('<div><h4><a href="https://0ekekddddd.github.io/">Landing</a></h4><h4><a href="https://0ekekddddd.github.io/log/update/">Update Log</a> / <a href="https://0ekekddddd.github.io/rss/rss.xml" target="_blank" download>RSS Feed</a></h4>'+ blogList + fashionList  + luchinoShrineList + '<h4><a href="https://0ekekddddd.github.io/music/">私の音 My Music</a></h4><h4><a href="https://0ekekddddd.github.io/stream/">Live Stream</a></h4></div>');
}

function rssList(){
  document.write('<hr><center><a href="https://0ekekddddd.github.io/log/update/">update log</a> | <a href="https://0ekekddddd.github.io/log/">personal log</a> | <a href="https://0ekekddddd.github.io/rss/rss.xml">subscribe to the rss</a></center>');
}
