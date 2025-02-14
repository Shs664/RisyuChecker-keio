import React from "react"


function About(){
    return (
        <ul id="text-list" class="text-body-wrapper">
            <li>
                <h1 class="text-header">このサイトについて</h1>
                <p class="text-body">
                慶應経済の成績表のPDFから単位取得合計を抽出できるサイトです。
                </p>
            </li>
            <li>
                <h1 class="text-header">方法</h1>
                <p class="text-body">
                PDFからテキストを抽出して、データを分野別のテーブルに表示します。
                </p>
            </li>
            <li>
            <h1 class="text-header">注意</h1>
            <p class="text-body">
                現在、慶應経済の成績表しか対応しておりませんのでご注意ください。
            </p>
            </li>
            
            
            
        </ul>
    )
}

export default About;