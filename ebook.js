$(function(){
  $('article').each(function() {
    $(this).html(
      $(this).html()
        .replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/[\|｜](.+?)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/[\|｜](.+?)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/([一-龠]+)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/([一-龠]+)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/([一-龠]+)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/[\|｜]《(.+?)》/g, '《$1》')
        .replace(/[\|｜]（(.+?)）/g, '（$1）')
        .replace(/[\|｜]\((.+?)\)/g, '($1)')
    );
  });
});
