# todo-list
TOP Intermediate Javascript (utilising NPM Webpack #2)

Functional To-Do List

Languages: Javascript (vanilla), HTML, CSS
Storage: localStorage

- Default "all tasks" project
  - Can have tasks added directly
  - Displays all tasks from other projects
- Custom "named" projects
  - Only displays tasks specific to that project
  - Deleting project will also delete associated tasks
  - Rename function
- Sort and Filter
  - Standard sort is by date-due
  - 3-day and 7-day filters (select one at a time)
  - High priority only (can run alongside "day" filters)
- Task display
  - Colour coded by priority
  - Edit and delete functions
  - "Complete" marker
    - Reduces opacity for cards that have been checked (Chrome)
      using CSS "card:has(.active)" rule
    - Also provides strikethrough of text for non-supported
      browsers (Firefox, etc)
