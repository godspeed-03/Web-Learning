function reading_time() {
$content = get_post_field( 'post_content', $post->ID );
$word_count = str_word_count( strip_tags( $content ) );
$readingtime = ceil($word_count / 260);
if ($readingtime == 1) {
$timer = " min read";
} else {
$timer = " min read";
}
$totalreadingtime = $readingtime . $timer;
return $totalreadingtime;
}
add_shortcode('wpbread', 'reading_time');

function monthyear_shortcode () {
$monthyear = date_i18n ('F Y');
return $monthyear;
}
add_shortcode ('monthyear', 'monthyear_shortcode');