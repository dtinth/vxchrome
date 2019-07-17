workflow "TODO" {
  resolves = ["todo-actions"]
  on = "push"
}

action "todo-actions" {
  uses = "dtinth/todo-actions@v0.1.0-1"
}
