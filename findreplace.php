<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, nofollow"/>
  <title>Search and replace files</title>
</head>
<body style="margin: 0; padding: 0;">
<?php
$err_arr = array(0 => '', 1 => '');
if (isset($_POST['submit'])) {
  if ($_POST['text'] == '' || $_POST['dir'] == '') {
    $err = ' style="border: 1px solid red"';
    if ($_POST['text'] == '')
      $err_arr[0] = $err;
    if ($_POST['dir'] == '')
      $err_arr[1] = $err;
  } else {
 
    set_time_limit(0);
    error_reporting(E_ALL);
 
    $dir = trim($_POST['dir']);
    $text = stripslashes($_POST['text']);
    $retext = stripslashes($_POST['retext']);
    $replace = isset($_POST['replace']) ? $_POST['replace'] : 0;
    $ext = explode(',', $_POST['ext']);
    $cnt = 0;
 
    function scan_dir($dirname)
    {
      global $text, $retext, $replace, $ext, $cnt;
 
      $dir = opendir($dirname);
 
      while (($file = readdir($dir)) !== false) {
        if ($file != "." && $file != "..") {
          $file_name = $dirname . "/" . $file;
          if (is_file($file_name)) {
            $ext_name = substr(strrchr($file_name, '.'), 1);
            if (in_array($ext_name, $ext) || $file_name == $dirname . '/search_replace.php')
              continue;
            echo $file_name . '> ';
            $content = file_get_contents($file_name);
            if (strpos($content, $text) !== false) {
              $cnt++;
              if ($replace) {
                $content = str_replace($text, $retext, $content);
                file_put_contents($file_name, $content);
              }
 
              echo '<b>' . $cnt . '</b>: ' . $file_name . '<br>';
            }
          }
 
          if (is_dir($file_name)) {
            scan_dir($file_name);
          }
        }
 
      }
 
      closedir($dir);
    }
 
    $start_time = microtime(true);
 
    echo '<div style="padding: 10px; width: 98%; background: #FFEAEA; border: 2px solid #FFB0B0; margin-bottom: 20px">';
 
    if ($replace)
      echo '<h2>Text replace:</h2>';
    else
      echo '<h2>Text search:</h2> ';
 
    scan_dir($dir);
 
    if (!$cnt)
      echo 'Not found';
 
    $exec_time = microtime(true) - $start_time;
 
    printf("<br /><b>Time: %f seg.</b></div>", $exec_time);
  }
}
?>
<div style="padding: 10px; width: 100%; background: #E7F0F5; border: 2px solid #C5E7F6; text-align: left;">
  <form method="post">
    <table cellpadding="5" cellspacing="0" border="0" align="left">
      <tr>
        <td align="right">
          <p align="left">
            <strong>Text Search*:
            </strong>
          </p>
          <p>
            <textarea <?php echo $err_arr[0]; ?> name="text" cols="55" rows="8"><?php echo isset($text) ? $text : ''; ?></textarea>
          </p>
        </td>
      </tr>
      <tr>
        <td align="right">
          <p align="left">
            <strong>Text Replace:
            </strong>
          </p>
          <p>
            <textarea name="retext" cols="55" rows="8"><?php echo isset($retext) ? $retext : ''; ?></textarea>
          </p>
        </td>
      </tr>
      <tr>
        <td align="right">
          <div align="left">
            <strong>Replace:
            </strong>
            <input type="checkbox" <?php echo isset($replace) && $replace == 1 ? ' checked' : ''; ?> name="replace" value="1"/>
          </div>
        </td>
      </tr>
      <tr>
        <td align="right">
          <div align="left">
            <strong>Not search this type files:
            </strong>
            <input type="text" size="33" name="ext"
                   value="<?php echo isset($_POST['ext']) ? $_POST['ext'] :
                       'gif,jpg,jpeg,png,zip,rar,pdf,css,flv,mp3,JPG,js,html,htm,xml,swf,doc,mpg,sxw,cdr,ini,txt,sql,xls,shtml,tmp'; ?>"/>
          </div>
        </td>
      </tr>
      <tr>
        <td align="right">
          <div align="left">
            <strong>Folder:
            </strong>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            <input
                <?php echo $err_arr[1]; ?> type="text" size="33" name="dir"
                                           value="<?php echo isset($dir) ? $dir : '.'; ?>"
                                           title='Enter ".", '/>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2" align="center">
          <br/>
          <input type="submit" name="submit" value="Search \ Replace"/>
        </td>
      </tr>
    </table>
  </form>
</div>
</body>
</html>