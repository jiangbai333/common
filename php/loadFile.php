<?php
/**
 *		载入给定目录下的文件
 * @param String $path 将要被遍历目录的路径
 * @return Array 被载入文件的文件名[若 index.php、test.php 文件被载入 则返回 array("index", "test")]
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-03-01 08:46:29
 */

function L($path) {
    $files = array();

    /** 获得操作目录的指针 */
    $fp = opendir($path);

    /** 遍历目录文件 */
    while ( ( $file = readdir($fp) ) !== FALSE ) {
        /** 屏蔽目录内 '.' '..' 文件和子目录*/
        if ( $file != '.' && $file != '..' && is_file($path . '/' . $file) ) {
            $temp = explode('.', $file);
            $files[] = $temp[0];
            require_once $path . '/' . $file;
        }
    } 

    /** 释放指针 */
    closedir($fp);
	
    return $files;
}