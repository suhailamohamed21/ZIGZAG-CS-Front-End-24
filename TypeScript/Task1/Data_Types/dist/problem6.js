"use strict";
let post;
post = [100, 200, "Title"];
post = ["Title", 100, true];
post = [100, "Title", true];
post.push("Elzero");
const [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
//# sourceMappingURL=problem6.js.map