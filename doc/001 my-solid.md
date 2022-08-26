# my-solid

> 名字没想好，因为大量借鉴了solid框架，且最终应该会和solid最像，所以先叫`my-solid`

## 我要写个什么样的框架

### 宏观的讲

对现阶段主流框架进行去其糟粕取其精华

### 客观的讲

- MVVM: 还有什么理由不用它呢？
- 适当简洁的api: 拒绝像vue框架这么多api，记都记不住，还有`ref`的`.value`有些傻逼，还不如之前半路嗝屁的ref语法糖。也拒绝像react这般只给了最基础的api，像className只能是字符串，每次都得用`classnames`这个库。
- 单向数据流: 像vue这样的双向数据流代码和逻辑难以追踪，我一直都不太喜欢这种。
- 基于jsx: 我更倾向于jsx, 将视图作为代码的一部分，完全的函数编程；而不是vue般不灵活的代码模板。
- hooks编程: 完全抛弃`option-api`，如vue2的`option`和react的`class-component`。
- 拒绝大量rerender: 如同react这样的rerender实在太耗性能，写新的框架肯定不能重蹈覆辙，然后再用其它方式去填这个坑。
- 拒绝虚拟DOM: 虽说在旧浏览器上频繁操作DOM很耗性能，但身为一款未来的框架，这种事情当然不需要考虑了，而且也可以做降级优化嘛。
- ssr: 1. seo非常重要，这点毋庸置疑。2. react团队正在研发服务器端组件，这将是大势所趋，ssr必须有。