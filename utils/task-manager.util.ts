export default class TaskManagerUtil<T extends string = string> {
  private taskList: Map<string, Promise<any>> = new Map<string, Promise<any>>()

  public set (taskName: T, task: Promise<any>) {
    const promise = task.finally(() => {
      this.delete(taskName)
    })
    this.taskList.set(taskName, promise)
    return promise
  }

  public has (taskName: T) {
    return this.taskList.has(taskName)
  }

  public get<R> (taskName: T): Promise<R> {
    return this.taskList.get(taskName) as Promise<R>
  }

  public delete (taskName: T) {
    this.taskList.delete(taskName)
  }
}
