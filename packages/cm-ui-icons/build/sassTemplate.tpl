/* stylelint-disable selector-pseudo-element-colon-notation */
@font-face {
  font-weight: normal;
  font-family: '<%= fontName %>';
  font-style: normal;
  font-display: auto;
  src: url('./<%= cssClass %>.woff2') format('woff2'),
    url('./<%= cssClass %>.woff') format('woff'),
    url('./<%= cssClass %>.ttf') format('truetype');
}

.cm-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "<%= fontName %>";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;

  &::before {
    display: inline-block;
  }
}

<% _.each(glyphs, function(glyph) { %>.cm-icon-<%= glyph.fileName %>:before {
  content: "\<%= glyph.codePoint %>";
}

<% }); %>
