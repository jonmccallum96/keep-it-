import React from 'react';

const dateObj = new Date();
const year = dateObj.getYear()+1900;

const Footer = () => <footer><p>Copyright WebDevJam {year}</p></footer>;

export default Footer;