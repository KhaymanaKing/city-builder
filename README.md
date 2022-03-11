## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

<!-- 1) **Make a drawing of your app. Simple "wireframes"**  -->
<!-- 1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**  -->
- slogan state
- town name state
<!-- 1) **Once you have a drawing, name the HTML elements you'll need to realize your vision** -->
Dropdowns 1-3
Imgs 1-3
2 Input for the slogan/ town name
2 Button to input slogan /town name
Div for slogans (pretty sure that is generated in JS though)
div for counts of each dropdown
<!-- 1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)** -->
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
We got 2 clicks event listeners one for each button
2 submit event listener 
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
<!-- May be slightly in over my head lol -->
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
![wireframe for city builder app](/assets/citybuildwireframes.jpg "wirefreams for citybuilder")

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------| ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo |    2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Select from at least three dropdowns (i.e. waterfront, skyline, castle) with at least three options each                |           2 |
| Three images displayed on the page. On choosing an option from the dropdown and see the change reflected in the UI with a new images (https://pixabay.com/ is a good source for free images) |     2 |
| When submitting a slogan, add it to an array of slogans, clear the current DOM's list of slogans, and list all slogans a `p` tags in the DOM         |           4 |
| See displayed how many times each dropdown has been changed in the current session. Should report on all 3 dropdowns in the same div   |           4 |

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `displayCountStats() : attaches a string to the DOM describing how many times each dropdown has been changed` | 3 |
| IMPURE: `displaySlogans() : clears DOM, loops through slogans, displays slogans on the page` | 3 |