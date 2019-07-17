workflow "TODO" {
  resolves = ["todo-actions"]
  on = "push"
}

action "todo-actions" {
  uses = "dtinth/todo-actions@v0.1.0-1"
  secrets = ["GITHUB_TOKEN", "TODO_ACTIONS_MONGO_URL"]
}
