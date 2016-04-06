AbstractWorker
-
>AbstractWorker 接口为所有的worker类提供了虚方法及虚属性使其成为 Worker 或者 SharedWorker.

`Worker`类继承`AbstractWorker`接口，提供一个有后台动态加载的工具函数库，你可以在需要的时候加载对应的操作方法所包含在的js文件