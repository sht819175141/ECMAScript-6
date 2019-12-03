console.log(`hello ${world}`)
console.log("a".padStart(10,"123"));
console.log("a".padEnd(2,"456"));
$(".list").html(`
    <ul>
         <li></li>
         <li></li>
         <li></li>
    </ul>
`)
    `User ${name} is not authorized to do ${action}`;

var template = `
    <ul>
      <% for(var i=0; i < data.supplies.length; i++) { %>
        <li><%= data.supplies[i] %></li>
      <% } %>
    </ul>`;