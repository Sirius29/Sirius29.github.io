### 性能分析
- Trace 跟踪系统调用
- PMC Performance Monitoring Counters
  - Count - 观察特定指标
  - Sample - 查找热点
    - 调用栈
    - 火焰图
- 编译器优化报告
  - PGO
- 分析方法
  - Roofline Model
    - 程序性能受到硬件两个主要限制：peak compute performance，FLOPS 和 peak memory bandwidth，GB/s
    - 计算强度 Arithmetic Intensity 为两者比值，计算访存比
    计算强度低，提升访存速度；计算强度高，向量化、多线程
  - Top-Down Microarchitecture Analysis Methodology（TMA）
- Linux Perf
  - perf stat --topdown -a testset -c 0 ./bin
  被内存限制，查看cache的缓存数量有没有下降
  受限于一个内存层次的带宽，计算实际带宽是不是达到了峰值带宽

### Top-Down Microarchitecture Analysis Method（TMA）
#### CPU Back-End Optimization
- Memory Bound
  - Cache Friendly Data
    - 访存顺序 - 行主序、列主序
    - 选择合适的容器 - 小对象直接存储，大对象可以存储指针，指针属于间接访存需要跳转
    - 数据打包 - 位域，提升带宽利用率
    - 数据对齐 - 避免一份数据在两个 cache line 中，但可能降低内存利用率
    - 使用更高效的 malloc - 如 jemalloc、tcmalloc
    - 调整访存以匹配内存结构 - 如矩阵乘中的分块
  - Memory Prefetch
    - 软件预取 - 手动进行内存预取，适用于特定平台，不可移植，增加前端压力，可能会降低性能
    - 硬件预取 - 硬件根据内存访问规律，自动将可能访问的内存搬运至 cache
  - Reduce DTLB Miss
    - 使用更大的页面
- Core Bound
  - 函数内联 - 避免函数调用开销
  - 循环优化
    - 提取公共部分至循环外侧
    - 循环展开 - 降低循环次数，增加循环内计算强度，循环内流水线更饱满
    - 避免循环内分支判断
    - 调整循环 index / 分块 - 使循环内访存 cache friendly
    - 循环的拆分和融合
  - 向量化 SIMD
  - Intrinsics - 依赖编译器优化代码，多会产生次优代码，如访存使默认非对齐访问

#### CPU Front-End Optomization
- 优化机器码布局 频繁执行的代码（hot code）放一起，不常执行的代码（cold code）放一起
  - cold code 避免内联
  - Function splitting - hot code 和 cold code 分割
  - Function group - cold code 封装成函数，保留调用
- Reduce ITLB Misses 使用大页面

#### Bad Speculation
- 将分支判断转换为查表
- 用三元运算符替换分支判断 - 实际情况具体分析

#### Other
- 输入输出优化 - 文件读取，用 mmap 替代 fstream
- 元编译 - 编译时间换 runtime 时间
- Cache Warm
- 特殊浮点运算 - 部分特殊浮点运算非常耗时
