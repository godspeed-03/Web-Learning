<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

function generateTableOfContents($html) {
    $dom = new DOMDocument;
    @$dom->loadHTML($html);

    $toc = '<div class="table-of-contents"><h2>Table of Contents</h2><ul>';
    
    $xpath = new DOMXPath($dom);
    $headers = $xpath->query('//div[contains(@class, "section-full")]//*[self::h2 or self::h3]');
    
    $previousLevel = 1;

    foreach ($headers as $header) {
        $tagName = $header->nodeName;
        $headerText = $header->textContent;
        $headerId = $header->getAttribute('id');
        
        if (empty($headerId)) {
            // Skip headings without IDs
            continue;
        }

        $currentLevel = intval(substr($tagName, 1));

        while ($previousLevel > $currentLevel) {
            $toc .= str_repeat('</ul></li>', $previousLevel - $currentLevel);
            $previousLevel--;
        }

        if ($currentLevel > $previousLevel) {
            $toc .= str_repeat('<ul>', $currentLevel - $previousLevel);
        }

        $toc .= '<li><a href="#' . htmlspecialchars($headerId) . '">' . htmlspecialchars($headerText) . '</a>';
        $previousLevel = $currentLevel;
    }

    $toc .= str_repeat('</ul></li>', $previousLevel);
    $toc .= '</ul></div>';

    return $toc;
}

function processBlogFiles($directory) {
    $tocDir = $directory . '/toc';
    if (!is_dir($tocDir)) {
        if (!mkdir($tocDir, 0777, true)) {
            die("Failed to create TOC directory.\n");
        }
    }

    // Search for .php files instead of .html files
    $files = glob($directory . '/*.php');
    if (empty($files)) {
        echo "No PHP files found in the directory.\n";
        return;
    }

    foreach ($files as $file) {
        $htmlContent = @file_get_contents($file);
        if ($htmlContent === false) {
            echo "Failed to read file: $file\n";
            continue;
        }
        
        $toc = generateTableOfContents($htmlContent);
        
        // Create TOC file with the same name but .toc.html extension
        $fileName = basename($file, '.php') . '.toc.html';
        $result = @file_put_contents($tocDir . '/' . $fileName, $toc);
        if ($result === false) {
            echo "Failed to write TOC file: $fileName\n";
        } else {
            echo "TOC file created: $fileName\n";
        }
    }
}

// Path to your blog directory
$blogDirectory = __DIR__; // Assumes this script is in the 'blog' folder
processBlogFiles($blogDirectory);

echo "TOC files have been generated.";
?>
