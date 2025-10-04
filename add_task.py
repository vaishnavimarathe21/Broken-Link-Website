tasks = []
def add_task():
    task = input("Task: ")
    tasks.append(task)
def remove_task():
    task = input("Task to remove: ")
    if task in tasks:
        tasks.remove(task)
def show_tasks():
    for i, t in enumerate(tasks, 1):
        print(i, t)
while True:
    print("1.Add 2.Remove 3.Show 4.Exit")
    ch = input("Choice: ")
    if ch == "1":
        add_task()
    elif ch == "2":
        remove_task()
    elif ch == "3":
        show_tasks()
    elif ch == "4":
        break
