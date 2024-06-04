import React from 'react';
import styles from './InnerBlogPage.module.css';
import parse from 'html-react-parser';
const cheerio = require('cheerio');

function removeSpanTags(htmlString) {
  const $ = cheerio.load(htmlString);
  $('span').each(function() {
    const children = $(this).contents(); // Get children
    $(this).replaceWith(children); // Replace span with its children
  });
  return $.html(); // Get the modified HTML string
}


const HtmlContent = ({ html }) => {
  const cleanContent = removeSpanTags(html);
  console.log('--->',cleanContent)
  return <div className={styles.content}>{parse(cleanContent)}</div>;
};

export default HtmlContent;