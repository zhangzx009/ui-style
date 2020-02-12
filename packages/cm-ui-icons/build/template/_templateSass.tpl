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

@font-face {
	font-family: '<%= fontName %>';
    font-style: normal;
    font-weight: normal;
    font-display: auto;
	src: url('./<%= cssClass %>.woff2') format('woff2'),
         url('./<%= cssClass %>.woff') format('woff'),
         url('./<%= cssClass %>.ttf') format('truetype');
}


@mixin <%= cssClass%>-styles {
	font-family: "<%= fontName %>";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	// speak: none; // only necessary if not using the private unicode range (firstGlyph option)
	text-decoration: none;
	text-transform: none;
}

%<%= cssClass%> {
	@include <%= cssClass%>-styles;
}

@function <%= cssClass%>-char($filename) {
	$char: "";
<% _.each(glyphs, function(glyph) { %>
	@if $filename == <%= glyph.fileName %> {
		$char: "\<%= glyph.codePoint %>";
	}<% }); %>

	@return $char;
}

@mixin <%= cssClass%>($filename, $insert: before, $extend: true) {
	&:#{$insert} {
		@if $extend {
			@extend %<%= cssClass%>;
		} @else {
			@include <%= cssClass%>-styles;
		}
		content: <%= cssClass%>-char($filename);
	}
}

<% _.each(glyphs, function(glyph) { %>.<%= cssClass%>-<%= glyph.fileName %> {
	@include <%= cssClass%>(<%= glyph.originalFileName ? glyph.originalFileName : glyph.fileName %>);
}
<% }); %>
