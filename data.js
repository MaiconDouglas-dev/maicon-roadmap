// Tópicos e links curados por Ganeko (https://ganeko-roadmap.vercel.app).
// Formato: tópico = [nome, [ids de recursos]]

const RESOURCES = {
  "core-dumped-os": ["Core Dumped — Operating Systems", "video", "https://www.youtube.com/playlist?list=PL9vTTBa7QaQPdvEuMTqS9McY-ieaweU8M"],
  "core-dumped-program-vs-process": ["Core Dumped — A PROGRAM is not a PROCESS.", "video", "https://www.youtube.com/watch?v=7ge7u5VUSbE"],
  "core-dumped-processes": ["Core Dumped — The Most Successful Idea in Computer Science", "video", "https://www.youtube.com/watch?v=LDhoD4IVElk"],
  "core-dumped-kernel-mode": ["Core Dumped — How a Single Bit Inside Your Processor Shields Your Operating System's Integrity", "video", "https://www.youtube.com/watch?v=H4SDPLiUnv4"],
  "core-dumped-ipc": ["Core Dumped — IPC: To Share Memory Or To Send Messages", "video", "https://www.youtube.com/watch?v=Y2mDwW2pMv4"],
  "core-dumped-threads-single-core": ["Core Dumped — Why Are Threads Needed On Single Core Processors", "video", "https://www.youtube.com/watch?v=M9HHWFp84f0"],
  "core-dumped-threads-multicore": ["Core Dumped — Threads On Multicore Systems", "video", "https://www.youtube.com/watch?v=5sw9XJokAqw"],
  "core-dumped-os-specific": ["Core Dumped — Why Applications Are Operating-System Specific", "video", "https://www.youtube.com/watch?v=eP_P4KOjwhs"],
  "core-dumped-context-switch": ["Core Dumped — How Hardware Assist Software When Multitasking", "video", "https://www.youtube.com/watch?v=1HHeyUVz43k"],
  "core-dumped-scheduling": ["Core Dumped — The Fancy Algorithms That Make Your Computer Feel Smoother", "video", "https://www.youtube.com/watch?v=O2tV9q6784k"],
  "core-dumped-race-conditions": ["Core Dumped — The Weirdest Bug in Programming - Race Conditions", "video", "https://www.youtube.com/watch?v=bhpzTWtee2A"],
  "core-dumped-memory-protection": ["Core Dumped — Why Can't Programs Access Each Other's Memory?", "video", "https://www.youtube.com/watch?v=Zmtxl7LZwjQ"],
  "cs50-week-1": ["CS50 — Week 1: C", "curso", "https://cs50.harvard.edu/x/weeks/1/"],
  "cs50-week-2": ["CS50 — Week 2: Arrays", "curso", "https://cs50.harvard.edu/x/weeks/2/"],
  "cs50-week-3": ["CS50 — Week 3: Algorithms", "curso", "https://cs50.harvard.edu/x/weeks/3/"],
  "cs50-week-4": ["CS50 — Week 4: Memory", "curso", "https://cs50.harvard.edu/x/weeks/4/"],
  "cs50-week-5": ["CS50 — Week 5: Data Structures", "curso", "https://cs50.harvard.edu/x/weeks/5/"],
  "cs50-sql": ["CS50 SQL", "curso", "https://cs50.harvard.edu/sql/"],
  "neetcode-dsa": ["NeetCode — Data Structures & Algorithms for Beginners", "curso", "https://neetcode.io/courses/dsa-for-beginners/0"],
  "neetcode-roadmap": ["NeetCode Roadmap", "interativo", "https://neetcode.io/roadmap"],
  "neetcode-150": ["NeetCode 150", "prática", "https://neetcode.io/practice/practice/neetcode150"],
  "curso-dev": ["curso.dev /web", "curso", "https://curso.dev/web/aulas"],
  "bytebytego": ["ByteByteGo", "curso", "https://bytebytego.com/courses/system-design-interview"],
  "planetscale": ["PlanetScale Learn — MySQL for Developers", "curso", "https://planetscale.com/learn/courses/mysql-for-developers"],
  "inside-java-bytecode": ["Inside Java — Java Bytecode Crash Course", "video", "https://inside.java/2019/09/17/video-bytecodecourse/"],
  "inside-java-startup": ["Inside Java — JVM Start-up", "video", "https://inside.java/2025/01/28/jvm-start-up/"],
  "inside-java-memory": ["Inside Java — Memory Management in Java", "video", "https://inside.java/2026/09/04/memory-management-principles-java/"],
  "inside-java-concurrency": ["Inside Java — Java Concurrency Under the Hood", "video", "https://inside.java/2019/09/20/video-javaconccurency/"],
  "inside-java-virtual-threads": ["Inside Java — Virtual Threads", "video", "https://inside.java/2024/11/21/newscast-80/"],
  "spring-josh-long": ["Josh Long — Spring Boot End-to-End", "video", "https://www.youtube.com/watch?v=GAgelbsTb9M"],
  "spring-docs": ["Spring Framework Documentation", "docs", "https://docs.spring.io/spring-framework/reference/"],
  "amigoscode-spring": ["Amigoscode — Spring Framework", "curso", "https://amigoscode.com/courses/spring-boot/spring-framework"],
  "confluent-kafka": ["Confluent Developer — Apache Kafka", "curso", "https://developer.confluent.io/courses/apache-kafka/"],
  "confluent-architecture": ["Confluent Developer — Kafka Architecture", "curso", "https://developer.confluent.io/courses/architecture/get-started/"],
  "aced-system-design": ["Exponent / Aced — System Design Interviews", "curso", "https://www.tryexponent.com/courses/system-design-interviews"]
};

const SECTIONS = {
  "Fundamentos": "Hardware, memória e sistema operacional: o chão onde tudo roda.",
  "LeetCode": "Estruturas de dados, algoritmos e os padrões que mais caem em entrevista.",
  "Backend": "Redes, bancos de dados, segurança e operação de APIs em produção.",
  "Java Backend": "JVM, concorrência e o que o Spring e o JPA fazem por trás dos panos.",
  "Sistemas Distribuídos": "Mensageria, falhas e consistência quando há mais de uma máquina.",
  "System Design": "Desenhar sistemas que escalam e defender as escolhas numa entrevista."
};

const B = "bytebytego", A = "aced-system-design", NR = "neetcode-roadmap", N150 = "neetcode-150",
  ND = "neetcode-dsa", IJC = "inside-java-concurrency", IJM = "inside-java-memory", SD = "spring-docs",
  CD = "curso-dev", CK = "confluent-kafka";

const WEEKS = [
  [1, "Fundamentos", "Como computadores executam programas", [
    ["CPU", ["core-dumped-context-switch", "cs50-week-1"]], ["RAM", ["cs50-week-4"]],
    ["Código fonte e código de máquina", ["cs50-week-1", "core-dumped-program-vs-process"]],
    ["Compilação", ["cs50-week-1", "cs50-week-2"]],
    ["Preprocessing, compiling, assembling e linking", ["cs50-week-2"]],
    ["Endereços de memória", ["cs50-week-4"]], ["Stack", ["cs50-week-4"]], ["Heap", ["cs50-week-4"]],
    ["Call Stack", ["cs50-week-4"]]]],
  [2, "Fundamentos", "Sistema operacional, processos e memória", [
    ["Sistema operacional", ["core-dumped-kernel-mode", "core-dumped-os-specific"]],
    ["Processo", ["core-dumped-program-vs-process", "core-dumped-processes", "core-dumped-scheduling"]],
    ["Thread", ["core-dumped-threads-single-core", "core-dumped-threads-multicore"]],
    ["Process vs Thread", ["core-dumped-threads-multicore", "core-dumped-ipc"]],
    ["Context Switch", ["core-dumped-context-switch", "core-dumped-scheduling"]],
    ["Virtual Memory", ["core-dumped-memory-protection"]],
    ["Address Space", ["core-dumped-processes", "core-dumped-memory-protection"]],
    ["Paging", ["core-dumped-os"]], ["I/O", ["core-dumped-kernel-mode"]]]],
  [3, "LeetCode", "Big O e estruturas de dados fundamentais", [
    ["Time Complexity", ["cs50-week-3", ND]], ["Space Complexity", ["cs50-week-3", ND]],
    ["Big O", ["cs50-week-3", ND]], ["Array", [ND]], ["Dynamic Array", [ND]],
    ["Linked List", ["cs50-week-5", ND]], ["Stack", ["cs50-week-5", ND]], ["Queue", ["cs50-week-5", ND]],
    ["Deque", [ND]]]],
  [4, "LeetCode", "Hash Tables, Trees, Heaps e Graphs", [
    ["Hash Table", ["cs50-week-5", ND]], ["HashMap", [ND]], ["HashSet", [ND]], ["Tree", [ND]],
    ["Binary Tree", [ND]], ["Binary Search Tree", ["cs50-week-5", ND]], ["Heap", [ND]],
    ["Priority Queue", [ND]], ["Graph", [ND]]]],
  [5, "LeetCode", "Algoritmos fundamentais", [
    ["Linear Search", ["cs50-week-3"]], ["Binary Search", ["cs50-week-3", NR]], ["Sorting", ["cs50-week-3"]],
    ["Merge Sort", ["cs50-week-3"]], ["Recursion", ["cs50-week-3"]], ["Divide and Conquer", ["cs50-week-3", NR]]]],
  [6, "LeetCode", "Arrays e Strings", [
    ["Arrays", [NR, N150]], ["Strings", [NR, N150]], ["Hashing", [NR, N150]], ["Two Pointers", [NR, N150]],
    ["Sliding Window", [NR, N150]], ["Prefix Sum", [NR, N150]]]],
  [7, "LeetCode", "Estruturas e padrões de entrevista", [
    ["Linked List", [NR, N150]], ["Stack", [NR, N150]], ["Queue", [NR, N150]], ["Binary Search", [NR, N150]],
    ["Heap / Priority Queue", [NR, N150]], ["Intervals", [NR, N150]]]],
  [8, "LeetCode", "Trees, Graphs e problemas recursivos", [
    ["Trees", [NR, N150]], ["DFS", [NR, N150]], ["BFS", [NR, N150]], ["Graphs", [NR, N150]],
    ["Backtracking", [NR, N150]], ["Greedy", [NR, N150]], ["Dynamic Programming básico", [NR, N150]]]],
  [9, "Backend", "Redes e HTTP", [
    ["IP", [B]], ["Portas", [B]], ["DNS", [CD, B]], ["TCP", [B]], ["UDP", [B]], ["Sockets", [B]], ["TLS", [B]],
    ["HTTP", [CD, B]], ["HTTPS", [B]], ["REST", [B]], ["Keep-Alive", [B]]]],
  [10, "Backend", "Banco de Dados I — SQL, índices e performance", [
    ["Modelo relacional", ["cs50-sql", "planetscale"]], ["SQL", ["cs50-sql"]], ["Joins", ["cs50-sql", "planetscale"]],
    ["Primary Key", ["cs50-sql"]], ["Foreign Key", ["cs50-sql"]], ["Indexes", ["planetscale", "cs50-sql"]],
    ["B+ Tree", ["planetscale"]], ["Query Execution", ["planetscale"]], ["Query Planner", ["planetscale"]],
    ["EXPLAIN", ["planetscale", "cs50-sql"]], ["Connection Pool", [CD]]]],
  [11, "Backend", "Banco de Dados II — Transações e concorrência", [
    ["Transactions", ["cs50-sql", B]], ["ACID", ["cs50-sql", B]], ["Isolation Levels", [B]], ["Dirty Read", [B]],
    ["Non-repeatable Read", [B]], ["Phantom Read", [B]], ["Locks", ["cs50-sql", B]], ["Deadlocks", [B]],
    ["Optimistic Locking", [B]], ["Pessimistic Locking", [B]], ["MVCC", [B]], ["Replication", [B]]]],
  [12, "Backend", "APIs, autenticação e segurança", [
    ["REST", [B]], ["Stateless", [B]], ["Authentication", [CD]], ["Authorization", [CD]], ["Sessions", [CD]],
    ["Cookies", [CD]], ["JWT", [B]], ["Password Hashing", [CD]], ["Salt", [CD]], ["CORS", [SD]],
    ["Idempotência", [B]], ["SQL Injection", [CD]]]],
  [13, "Backend", "Backend em produção", [
    ["Logs", [CD, B]], ["Metrics", [B]], ["Tracing", [B]], ["Observability", [B]], ["Health Checks", [CD]],
    ["SLI / SLO", [B]], ["CI/CD", [CD]], ["Rolling Deployment", [B]], ["Blue/Green Deployment", [B]],
    ["Canary Deployment", [B]], ["Rollback", [B, CD]]]],
  [14, "Java Backend", "JVM", [
    ["JDK vs JRE vs JVM", ["inside-java-startup"]], ["Bytecode", ["inside-java-bytecode"]],
    ["Class Loading", ["inside-java-startup"]], ["JIT Compilation", ["inside-java-startup", IJM]],
    ["JVM Stack", [IJM]], ["Heap", [IJM]], ["Metaspace", [IJM]], ["Garbage Collection", [IJM]], ["GC Roots", [IJM]],
    ["Generational GC", [IJM]], ["Stop-the-World", [IJM]], ["Memory Leaks", [IJM]], ["OutOfMemoryError", [IJM]],
    ["StackOverflowError", [IJM]]]],
  [15, "Java Backend", "Fundamentos de concorrência", [
    ["Process vs Thread", ["core-dumped-ipc", IJC]],
    ["Concurrency vs Parallelism", ["core-dumped-threads-single-core", "core-dumped-threads-multicore", IJC]],
    ["Race Condition", ["core-dumped-race-conditions", IJC]], ["Critical Section", [IJC]], ["Thread Safety", [IJC]],
    ["Mutex", [IJC]], ["Lock", [IJC]], ["Semaphore", [IJC]], ["Atomicity", [IJC]], ["Visibility", [IJC]],
    ["Deadlock", [IJC]]]],
  [16, "Java Backend", "Concorrência em Java", [
    ["Java Memory Model", [IJC]], ["synchronized", [IJC]], ["volatile", [IJC]], ["Atomic Types", [IJC]],
    ["ReentrantLock", [IJC]], ["Concurrent Collections", [IJC]], ["Thread Pools", [IJC]], ["ExecutorService", [IJC]],
    ["Future", [IJC]], ["CompletableFuture", [IJC]], ["Virtual Threads", ["inside-java-virtual-threads"]]]],
  [17, "Java Backend", "Spring e JPA por baixo", [
    ["IoC", ["spring-josh-long", "amigoscode-spring", SD]],
    ["Dependency Injection", ["spring-josh-long", "amigoscode-spring", SD]],
    ["Beans", ["spring-josh-long", "amigoscode-spring", SD]], ["ApplicationContext", ["amigoscode-spring", SD]],
    ["Bean Lifecycle", ["amigoscode-spring", SD]], ["Bean Scopes", [SD]], ["Request Lifecycle", ["spring-josh-long", SD]],
    ["Spring MVC", ["spring-josh-long", SD]], ["Spring Data", ["spring-josh-long", SD]], ["JPA", ["spring-josh-long", SD]],
    ["Hibernate", [SD]], ["Persistence Context", [SD]], ["Entity Lifecycle", [SD]], ["Lazy vs Eager", [SD]],
    ["N+1", [SD]], ["@Transactional", ["spring-josh-long", SD]]]],
  [18, "Sistemas Distribuídos", "Mensageria e Event-Driven Architecture", [
    ["Synchronous vs Asynchronous", [B, "confluent-architecture"]], ["Message Queue", [B, CK]], ["Pub/Sub", [CK]],
    ["Event-Driven Architecture", [CK, B]], ["Kafka", [CK, "confluent-architecture"]], ["Topics", [CK]],
    ["Partitions", [CK, "confluent-architecture"]], ["Offsets", [CK]], ["Consumer Groups", [CK]], ["Ordering", [CK]],
    ["At-most-once", [CK]], ["At-least-once", [CK]], ["Exactly-once", [CK]]]],
  [19, "Sistemas Distribuídos", "Falhas e confiabilidade", [
    ["Partial Failures", [B, A]], ["Timeout", [B]], ["Retry", [B]], ["Exponential Backoff", [B]], ["Jitter", [B]],
    ["Idempotência", [B]], ["Circuit Breaker", [B]], ["Rate Limiting", [B, A]], ["Fault Tolerance", [B, A]]]],
  [20, "Sistemas Distribuídos", "Consistência e transações distribuídas", [
    ["Replication", [B, A]], ["Strong Consistency", [B, A]], ["Eventual Consistency", [B, A]], ["Quorums", [B]],
    ["Consensus básico", [B]], ["Distributed Transactions", [B]], ["Two-Phase Commit", [B]],
    ["Transactional Outbox", [B]], ["Saga", [B]], ["Choreography vs Orchestration", [B]]]],
  [21, "System Design", "Fundamentos de System Design", [
    ["Como conduzir uma entrevista de System Design", [A]], ["Functional Requirements", [A]],
    ["Non-Functional Requirements", [A]], ["Capacity Estimation", [A]], ["API Design", [A]], ["Data Model", [A]],
    ["High-Level Architecture", [A]], ["Horizontal Scaling", [A, B]], ["Load Balancer", [A, B]], ["Cache", [A, B]],
    ["CDN", [A, B]]]],
  [22, "System Design", "Escala, dados e trade-offs", [
    ["Replication", [A, B]], ["Partitioning", [A, B]], ["Sharding", [A, B]], ["Caching", [A, B]], ["Queues", [A, B]],
    ["Consistency", [A, B]], ["Availability", [A, B]], ["CAP Theorem", [A, B]], ["Hotspots", [A, B]],
    ["Single Point of Failure", [A, B]], ["Fault Tolerance", [A, B]]]],
  [23, "System Design", "Prática de System Design I", [
    ["URL Shortener", [A, B]], ["Rate Limiter", [A, B]], ["Distributed Message Queue", [A, B]],
    ["Notification / Webhook System", [A, B]]]],
  [24, "System Design", "Prática de System Design II", [
    ["Feed / Social Network", [A, B]], ["Chat / Realtime System", [A, B]], ["Distributed Storage", [A, B]],
    ["Payment System", [A, B]], ["Mock Interviews", [A]], ["Explicar trade-offs", [A]], ["Identificar gargalos", [A]],
    ["Evoluir arquitetura conforme a escala", [A, B]]]]
];
