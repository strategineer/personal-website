---
title: Greetings
has_header: true
is_readable: true
---
# All the random greetings that can appear under my logo
<% data.greetings.each do | g | %>
  <%=  "- \"#{g}\"" %>
  <br>
<% end %>