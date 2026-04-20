$ErrorActionPreference = 'SilentlyContinue'
$base = "C:\Users\Carlos\Documents\New folder\Luxus-O.S\gemma4-skills-os"
$global:totalCount = 0

function New-Uuid { [guid]::NewGuid().ToString("N") }

function Write-SkillFile {
    param([string]$Dir, [string]$Title, [string]$Content, [string[]]$Tags, [string]$Category)
    $uuid = New-Uuid
    $slug = ($Title -replace '[^\w\s-]','' -replace '\s+','-' -replace '--+','-').ToLower().Substring(0, [Math]::Min(60, ($Title -replace '[^\w\s-]','' -replace '\s+','-').Length))
    if (!(Test-Path $Dir)) { New-Item -ItemType Directory -Force -Path $Dir | Out-Null }
    $file = Join-Path $Dir "$uuid`__$slug.md"
    [System.IO.File]::WriteAllText($file, $Content, [System.Text.Encoding]::UTF8)
    $metaDir = Join-Path (Split-Path $Dir) ".metadata"
    if (!(Test-Path $metaDir)) { New-Item -ItemType Directory -Force -Path $metaDir | Out-Null }
    $meta = '{"uuid":"' + $uuid + '","name":"' + ($Title -replace '"','\"') + '","category":"' + $Category + '","file":"' + ($file -replace '\\','/') + '","tags":["' + ($Tags -join '","') + '"],"version":"1.0.0","license":"MIT","created_at":"' + (Get-Date -Format 'o') + '"}'
    [System.IO.File]::WriteAllText((Join-Path $metaDir "$uuid.json"), $meta, [System.Text.Encoding]::UTF8)
    $global:totalCount += 2
}

function Write-TsFile {
    param([string]$FilePath, [string]$Content)
    $dir = Split-Path $FilePath
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    [System.IO.File]::WriteAllText($FilePath, $Content, [System.Text.Encoding]::UTF8)
    $global:totalCount++
}

function Write-TrainingPrompt {
    param([string]$Dir, [string]$Name, [string]$Content)
    if (!(Test-Path $Dir)) { New-Item -ItemType Directory -Force -Path $Dir | Out-Null }
    $slug = ($Name -replace '[^\w\s-]','' -replace '\s+','-').ToLower()
    $file = Join-Path $Dir "$slug.txt"
    [System.IO.File]::WriteAllText($file, $Content, [System.Text.Encoding]::UTF8)
    $global:totalCount++
}

function Get-SkillContent {
    param([string]$Title, [string]$OverviewText, [string]$Category)
    $tpl = @'
# SKILL_TITLE

## Overview
SKILL_OVERVIEW

## Key Concepts

### Core Principles
- Understanding the fundamental mechanics of SKILL_TITLE_REF
- Integration patterns with existing SKILL_CAT pipelines
- Performance considerations and trade-offs for production systems
- Scalability implications and resource planning

### Technical Details
SKILL_TITLE_REF is a critical component in modern AI systems. It addresses key challenges that Gemma 4 faces when compared to frontier models like GPT-4o, Claude Sonnet 4, and DeepSeek V3.2.

**Primary Benefits:**
1. Improved accuracy and reliability in target domain
2. Reduced error rates through systematic approaches
3. Enhanced user experience with consistent outputs
4. Better resource utilization and cost efficiency
5. Competitive parity with proprietary model capabilities

### Architecture Pattern
```
Input Processing
    |
[Stage 1] -> Analysis -> Feature Extraction
    |
[Stage 2] -> SKILL_TITLE_REF Pipeline
    |
[Stage 3] -> Validation -> Quality Check
    |
[Stage 4] -> Output Assembly -> Response
```

## Implementation Guide

### Step 1: Setup and Configuration
Configure the base infrastructure:
```python
class SkillPipeline:
    def __init__(self, config: dict):
        self.config = config
        self.components = self._initialize()
    
    def _initialize(self):
        return {
            'processor': self._setup_processor(),
            'validator': self._setup_validator(),
            'output': self._setup_output_handler()
        }
    
    def execute(self, input_data):
        processed = self.components['processor'].run(input_data)
        validated = self.components['validator'].check(processed)
        return self.components['output'].format(validated)
```

### Step 2: Core Logic
Implement the main processing pipeline with error handling and fallback mechanisms.

### Step 3: Integration
Connect with the broader Gemma 4 skill system for seamless operation.

## Best Practices
1. Always validate inputs before processing
2. Implement comprehensive error handling with fallbacks
3. Use logging and monitoring for production deployments
4. Cache frequently accessed results for performance
5. Test with edge cases and adversarial inputs
6. Document all configuration options clearly
7. Version your implementations for reproducibility

## Common Pitfalls
- Relying on default configurations without domain-specific tuning
- Insufficient error handling for edge cases
- Not monitoring performance metrics in production
- Ignoring scalability requirements until too late
- Over-engineering simple solutions

## Tools & Libraries
- Python: Primary implementation language
- TypeScript: Agent and MCP integration
- FAISS/ChromaDB: Vector operations
- Transformers: Model inference
- FastAPI: Service endpoints

## Further Reading
- Research papers on SKILL_TITLE_REF methodologies
- Official documentation for related frameworks
- Community best practices and implementation guides
- Benchmark comparisons and evaluation strategies
'@
    return $tpl -replace 'SKILL_TITLE_REF', $Title -replace 'SKILL_TITLE', $Title -replace 'SKILL_OVERVIEW', $OverviewText -replace 'SKILL_CAT', $Category
}

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  GEMMA 4 SKILLS GAP MEGA-GENERATOR" -ForegroundColor Cyan  
Write-Host "  Target: 18,000+ new files" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ================================================================
# CATEGORY 1: RAG / VECTOR DB (Target: ~1,800 files)
# ================================================================
Write-Host "[1/8] GENERATING RAG/VECTOR DB SKILLS..." -ForegroundColor Yellow

$ragRetrievalTopics = @(
"Vector Similarity Search Cosine","Euclidean Distance Vector Search","Dense Retrieval Transformer Models",
"Sparse Retrieval BM25 Algorithm","Hybrid Search Implementation","Cross-Encoder Reranking Pipeline",
"Prompt Engineering for RAG","Context Window Optimization RAG","Chunk Size Optimization Strategies",
"Chunk Overlap Best Practices","Document Preprocessing RAG","PDF Parsing RAG Pipelines",
"HTML Content Extraction RAG","Markdown Document Chunking","Code File Chunking Strategies",
"Table Data Chunking Methods","Recursive Text Splitting","Semantic Chunking Embeddings",
"Token-Aware Chunking Strategy","Parent-Child Document Relationships","Document Hierarchy RAG",
"Metadata Enrichment for Chunks","Source Attribution in RAG","Citation Generation from RAG",
"Query Decomposition RAG","Multi-Query RAG Strategies","Step-Back Prompting RAG",
"HyDE Hypothetical Document Embeddings","Query Expansion Techniques","Query Rewriting Better Retrieval",
"Contextual Compression RAG","Lost in the Middle Problem","Context Reordering Strategies",
"RAG Evaluation Faithfulness","RAG Evaluation Answer Relevancy","RAG Evaluation Context Precision",
"RAG Evaluation Context Recall","RAGAS Evaluation Framework","DeepEval RAG Testing",
"TruLens RAG Observability","RAG Triad Evaluation Method","Retrieval Precision Optimization",
"Retrieval Recall Optimization","End-to-End RAG Pipeline Design","RAG with Structured Data",
"RAG with SQL Databases","RAG with Knowledge Graphs","GraphRAG Implementation Guide",
"Multi-Hop RAG Retrieval","Iterative RAG Retrieval","Self-RAG Architecture Pattern",
"Corrective RAG CRAG Method","Adaptive RAG Strategies","RAG Fusion Technique",
"RAG with Tool Use Integration","Agentic RAG Design Patterns","RAG for Code Generation",
"RAG for Documentation QA","RAG for Customer Support","RAG for Legal Documents",
"RAG for Medical Literature","RAG for Financial Reports","RAG for Scientific Papers",
"RAG Latency Optimization","RAG Caching Strategies","Embedding Cache Design Patterns",
"Result Cache for RAG Systems","Streaming RAG Responses","RAG Conversation History",
"Multi-Turn RAG Conversations","RAG Token Budget Allocation","RAG Error Handling Patterns",
"RAG Fallback Strategies","RAG Quality Monitoring","RAG AB Testing Framework",
"RAG Production Deployment","RAG Scaling Strategies","RAG Multiple Data Sources",
"Cross-Collection RAG Search","Federated RAG Architecture","RAG Data Ingestion Pipeline",
"RAG Index Maintenance","RAG Index Versioning","RAG Index Backup Strategies",
"RAG Security Considerations","RAG Access Control Methods","RAG Data Privacy GDPR",
"RAG Audit Logging","RAG Cost Optimization Guide","RAG Infrastructure Planning",
"Serverless RAG Architecture","RAG on Kubernetes Deploy","RAG with LangChain Framework",
"RAG with LlamaIndex Guide","RAG with Haystack Pipeline","RAG with Semantic Kernel",
"RAG with Vercel AI SDK","RAG with Spring AI Framework","Fine-Tuning Embeddings RAG",
"Domain-Specific Embedding Training","Matryoshka Embeddings RAG","Binary Embeddings Efficiency",
"Embedding Quantization Techniques","Embedding Dimension Selection","Multi-Vector Retrieval ColBERT",
"Late Interaction Models RAG","Passage vs Document Retrieval","Sentence Window Retrieval",
"Auto-Merging Retrieval Strategy","Small-to-Big Retrieval Pattern","Forward-Looking Active RAG FLARE",
"Interleaved RAG Generation","RAG with Reranking Pipeline","Two-Stage Retrieval Architecture",
"Three-Stage Retrieval Pipeline","Ensemble Retrieval Methods","RAG Debugging Techniques",
"RAG Prompt Templates Library","System Prompts for RAG","Few-Shot Examples RAG Prompts",
"RAG Output Formatting Guide","RAG JSON Output Parsing","RAG with Citations Format",
"RAG Confidence Scoring","RAG Hallucination Detection","RAG Contradiction Detection",
"RAG Source Verification","RAG Answer Grounding Method","RAG Knowledge Conflict Resolution",
"RAG Temporal Awareness","RAG Real-Time Data Integration","RAG Web Search Augmentation",
"RAG Index Compression","RAG Memory Optimization","RAG GPU Acceleration",
"RAG Batch Processing Patterns","RAG Async Processing","RAG Queue Architecture",
"RAG Webhook Integration","RAG API Design Patterns","RAG REST API Best Practices",
"RAG GraphQL Integration","RAG gRPC Service Design","RAG WebSocket Streaming",
"Approximate Nearest Neighbors HNSW","Locality Sensitive Hashing","Inverted File Index IVF",
"Product Quantization Vectors","Scalar Quantization Methods","Flat Index Exact Search",
"Multi-Probe LSH Technique","Random Projection Trees","Ball Tree Vector Search",
"KD-Tree Nearest Neighbors","VP-Tree Vector Search","Cover Tree Algorithm",
"Navigable Small World Graph","Skip Graph Vector Search","Dynamic Indexing Strategies"
)

$ragOverview = "This skill addresses a critical gap in Gemma 4 capabilities - the lack of native Retrieval-Augmented Generation. While GPT-4o and Claude have integrated RAG through their platforms, Gemma 4 requires external pipeline construction for knowledge-grounded generation."

foreach ($topic in $ragRetrievalTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\rag-retrieval\generated" -Title $topic -Content (Get-SkillContent $topic $ragOverview "RAG") -Tags @("rag","retrieval") -Category "memory/rag"
}
Write-Host "  RAG Retrieval: $($ragRetrievalTopics.Count * 2) files" -ForegroundColor Green

# Embedding Models
$embeddingTopics = @(
"OpenAI text-embedding-3-small Guide","OpenAI text-embedding-3-large Guide","Cohere Embed v3 English",
"Cohere Embed v3 Multilingual","Sentence-BERT All-MiniLM-L6-v2","Sentence-BERT All-mpnet-base-v2",
"BGE-Small-en-v1.5 Guide","BGE-Base-en-v1.5 Guide","BGE-Large-en-v1.5 Guide",
"BGE-M3 Multilingual Embedding","Jina Embeddings v2 Guide","Jina Embeddings v3 Guide",
"E5-Small-v2 Embedding Model","E5-Base-v2 Embedding Model","E5-Large-v2 Embedding Model",
"E5-Mistral-7B-Instruct Guide","GTE-Small Embedding Guide","GTE-Base Embedding Guide",
"GTE-Large Embedding Guide","GTE-Qwen2-7B Instruct Guide","Nomic Embed Text v1.5",
"Nomic Embed Text v2 Guide","Voyage AI voyage-2 Guide","Voyage AI voyage-large-2",
"Instructor Embeddings Guide","UAE-Large-V1 Guide","mxbai-embed-large Guide",
"Snowflake Arctic Embed Guide","Google Gecko Embedding Guide","Mistral Embed Guide",
"ColBERT v2 Late Interaction","SPLADE v2 Sparse Dense","SPLADE++ Ensemble Model",
"Word2Vec Embedding Legacy","GloVe Embedding Analysis","FastText Embedding Guide",
"Universal Sentence Encoder","Doc2Vec Paragraph Vectors","Matryoshka Representation Learning",
"Binary Quantized Embeddings","Product Quantization Embeddings","Scalar Quantization Guide",
"PCA Dimension Reduction Embeddings","UMAP Embedding Visualization","t-SNE Embedding Analysis",
"Triplet Loss Fine-Tuning","Contrastive Loss Training","Hard Negative Mining Embeddings",
"In-Batch Negatives Strategy","Knowledge Distillation Embeddings","Multi-Task Embedding Training",
"Instruction-Tuned Embeddings","Asymmetric Embedding Models","Code Embedding Specialization",
"Image-Text Joint Embeddings","MTEB Benchmark Analysis","Embedding Evaluation Strategies",
"Embedding Similarity Metrics","Embedding Caching Patterns","Embedding Batch Processing",
"Embedding API Rate Limiting","Embedding Cost Optimization","Embedding Model Selection",
"Embedding Versioning Strategy","Embedding Migration Guide","Multi-Embedding Ensemble",
"Embedding Normalization Methods","Embedding Space Alignment","Cross-Lingual Alignment",
"Zero-Shot Embedding Transfer","Embedding Fine-Tuning Pipeline","Embedding Serving Infrastructure",
"Embedding Compression Techniques","Embedding Quality Monitoring","Embedding Drift Detection"
)

foreach ($topic in $embeddingTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\embedding-models\generated" -Title $topic -Content (Get-SkillContent $topic "Guide to embedding models for RAG pipelines, addressing Gemma 4 lack of native embedding support." "embeddings") -Tags @("rag","embeddings") -Category "memory/rag"
}
Write-Host "  Embedding Models: $($embeddingTopics.Count * 2) files" -ForegroundColor Green

# Vector Databases
$vectorDbTopics = @(
"Pinecone Serverless Architecture","Pinecone Pod-Based Deployment","Pinecone Namespace Management",
"Pinecone Metadata Filtering","Pinecone Hybrid Search Setup","Pinecone Cost Optimization",
"Pinecone Python Client","Pinecone Node.js Client","Pinecone Batch Upsert",
"Weaviate Schema Design","Weaviate GraphQL Queries","Weaviate Vectorizer Modules",
"Weaviate Hybrid Search Guide","Weaviate Multi-Tenancy","Weaviate Docker Deploy",
"Weaviate Kubernetes Deploy","Weaviate Backup Restore","Weaviate Generative Search",
"ChromaDB Local Setup","ChromaDB Persistent Storage","ChromaDB Collection Management",
"ChromaDB Metadata Filtering","ChromaDB Embedding Functions","ChromaDB Docker Deploy",
"ChromaDB Python Integration","ChromaDB JavaScript Client","ChromaDB Performance Tuning",
"Qdrant Collection Configuration","Qdrant Payload Filtering","Qdrant Quantization Setup",
"Qdrant Distributed Deployment","Qdrant Snapshot Management","Qdrant REST API Guide",
"Qdrant gRPC Client Guide","Qdrant Sparse Vectors","Qdrant Multi-Vector Search",
"Milvus Architecture Deep Dive","Milvus Collection Schema","Milvus Partition Management",
"Milvus Index Types IVF HNSW","Milvus Consistency Levels","Milvus PyMilvus Client",
"Milvus Attu GUI Management","Milvus Kubernetes Operator","Milvus Performance Tuning",
"Elasticsearch Vector Search","Elasticsearch kNN Search","Elasticsearch Dense Vector",
"Elasticsearch Hybrid Search","Redis Vector Search","Redis Stack Vector Setup",
"pgvector PostgreSQL Extension","pgvector Index Types","pgvector Performance Optimization",
"Supabase pgvector Integration","LanceDB Embedded Vector DB","MongoDB Atlas Vector Search",
"OpenSearch Vector Search","Vespa Vector Search","Turbopuffer Serverless Vectors",
"Vector DB Comparison Matrix","Vector DB Selection Guide","Vector DB Migration Strategies",
"Vector DB Monitoring Practices","Vector DB Scaling Patterns","Vector DB Security Hardening",
"HNSW Index Algorithm","IVF Index Algorithm","Flat vs Approximate Index",
"Multi-Index Search Strategies","Filtered Vector Search","Geo-Spatial Vector Search"
)

foreach ($topic in $vectorDbTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\vector-databases\generated" -Title $topic -Content (Get-SkillContent $topic "Vector database guide for building RAG infrastructure that Gemma 4 needs but lacks natively." "vector-db") -Tags @("rag","vector-db") -Category "memory/rag"
}
Write-Host "  Vector DBs: $($vectorDbTopics.Count * 2) files" -ForegroundColor Green

# RAG Frameworks
$frameworkTopics = @(
"LangChain RAG Complete Guide","LangChain Document Loaders","LangChain Text Splitters",
"LangChain Retrievers Custom","LangChain ConversationalRetrieval","LangChain LCEL RAG Pipeline",
"LangChain Output Parsers RAG","LangChain Memory with RAG","LangChain Callbacks Tracing",
"LlamaIndex Complete RAG","LlamaIndex Data Connectors","LlamaIndex Node Parsers",
"LlamaIndex Index Types Guide","LlamaIndex Query Engine","LlamaIndex Chat Engine",
"LlamaIndex Agents with RAG","LlamaIndex Evaluation Module","LlamaIndex Observability",
"Haystack RAG Pipeline Guide","Haystack Components Deep Dive","Haystack Document Stores",
"Haystack Retrievers Guide","Haystack Generators Guide","Haystack Pipeline Builder",
"Semantic Kernel RAG Setup","Semantic Kernel Memory Store","Semantic Kernel Plugins RAG",
"Vercel AI SDK RAG Guide","Spring AI RAG Integration","DSPy RAG Optimization",
"RAGAS Evaluation Framework","DeepEval RAG Metrics","TruLens Observability Guide",
"Phoenix Arize Observability","LangSmith Tracing RAG","Instructor Structured Output",
"Guardrails AI for RAG","NeMo Guardrails RAG","AutoRAG Framework Guide",
"Embedchain RAG Framework","Canopy by Pinecone","txtai RAG Pipeline",
"FlashRAG Framework Guide","FastRAG by Intel","PrivateGPT Local RAG",
"Ollama RAG Integration","vLLM RAG Serving Guide","RAG with Gradio UI",
"RAG with Streamlit UI","RAG with Chainlit UI","RAG with Next.js Frontend",
"RAG with FastAPI Backend","RAG with Express Backend","RAG Microservices Architecture"
)

foreach ($topic in $frameworkTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\rag-frameworks\generated" -Title $topic -Content (Get-SkillContent $topic "Framework guide for implementing RAG capabilities that Gemma 4 lacks natively." "frameworks") -Tags @("rag","frameworks") -Category "memory/rag"
}

# Prompt Templates + Hallucination Control
$promptTemplateTopics = @(
"Basic QA RAG Template","Conversational RAG Template","Multi-Document RAG Template",
"Summarization RAG Template","Fact-Checking RAG Template","Comparative Analysis RAG",
"Step-by-Step RAG Template","Code Explanation RAG Template","Legal Document RAG Template",
"Medical QA RAG Template","Financial Analysis RAG Template","Scientific Paper RAG Template",
"Customer Support RAG Template","Product Documentation RAG","Technical Troubleshooting RAG",
"Citation-Rich RAG Template","Confidence-Scored RAG Template","Structured Output RAG Template",
"JSON Response RAG Template","Table Extraction RAG Template","Timeline Generation RAG",
"Action Items Extraction RAG","Contract Review RAG Template","Compliance Check RAG Template",
"Data Analysis RAG Template","Report Generation RAG Template","Multi-Turn RAG Template",
"Executive Summary RAG Template","Pro-Con Analysis RAG Template","Research Synthesis RAG"
)

foreach ($topic in $promptTemplateTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\prompt-templates\generated" -Title $topic -Content (Get-SkillContent $topic "RAG prompt template for knowledge-grounded generation." "prompts") -Tags @("rag","prompts") -Category "memory/rag"
}

$hallucinationTopics = @(
"Fact Verification Techniques RAG","Contradiction Detection Methods","Source Attribution Citation",
"Uncertainty Quantification LLM","Grounding Strategies Factual","Confidence Calibration Methods",
"Claim Decomposition Verification","Multi-Source Fact Checking","Temporal Fact Verification",
"Numerical Data Verification","Entity Consistency Checking","Logical Consistency Validation",
"Hallucination Detection Classifiers","Post-Generation Fact Checking","Real-Time Hallucination Monitor",
"TruthfulQA Evaluation Guide","FActScore Implementation","SelfCheckGPT Method Guide",
"Chain-of-Verification CoVe","Knowledge-Grounded Generation","LLM-as-Judge Hallucination",
"Automated Fact Extraction","Knowledge Graph Grounding","Wikipedia-Based Verification",
"Cross-Reference Verification","Consensus-Based Verification","Provenance Tracking RAG",
"Audit Trail Generated Content","Statistical Claim Verify","Scientific Claim Verification"
)

foreach ($topic in $hallucinationTopics) {
    Write-SkillFile -Dir "$base\skills\memory\rag\hallucination-control\generated" -Title $topic -Content (Get-SkillContent $topic "Hallucination control technique addressing Gemma 4 tendency to generate unfounded claims in long context." "hallucination") -Tags @("rag","hallucination") -Category "memory/rag"
}

Write-Host "  Frameworks + Templates + Hallucination: done" -ForegroundColor Green

# ================================================================
# CATEGORY 2: MULTI-STEP REASONING (Target: ~800 files)
# ================================================================
Write-Host "[2/8] GENERATING REASONING SKILLS..." -ForegroundColor Yellow

$cotTopics = @(
"Chain-of-Thought Methodology","CoT for Mathematical Problems","CoT for Logic Puzzles",
"CoT for Planning Tasks","Tree-of-Thought Reasoning","Graph-of-Thought Framework",
"Reasoning Traces Analysis","Step-by-Step Problem Solving","Problem Decomposition Techniques",
"Subproblem Identification","Backward Reasoning Strategy","Forward Chaining Logic",
"Analogical Reasoning Patterns","Abductive Reasoning Guide","Inductive Reasoning Framework",
"Deductive Reasoning Mastery","Causal Reasoning Analysis","Counterfactual Reasoning",
"Probabilistic Reasoning Guide","Bayesian Reasoning Framework","Decision Tree Reasoning",
"Game Theory Reasoning","Strategic Planning Reasoning","Resource Allocation Reasoning",
"Scheduling Optimization Logic","Critical Path Analysis","Dependency Graph Reasoning",
"Constraint Satisfaction Problems","Boolean Satisfiability SAT","Integer Programming Logic",
"Dynamic Programming Reasoning","Greedy Algorithm Reasoning","Divide and Conquer Logic",
"Backtracking Problem Solving","Branch and Bound Method","Heuristic Search Strategies",
"A-Star Search Algorithm","Beam Search Reasoning","Monte Carlo Tree Search",
"Minimax Algorithm Reasoning","Alpha-Beta Pruning Strategy","Reinforcement Learning Reasoning",
"Multi-Objective Optimization","Pareto Optimal Solutions","Trade-off Analysis Framework",
"Risk Assessment Reasoning","Uncertainty Handling Logic","Fuzzy Logic Reasoning",
"Modal Logic Applications","Temporal Logic Reasoning","Deontic Logic Ethics",
"Self-Consistency Decoding","Least-to-Most Prompting","Complexity-Based Prompting",
"Plan-and-Solve Prompting","Program-of-Thought Method","Faithful Chain-of-Thought",
"Multi-Chain Reasoning Aggregation","Reasoning Chain Verification","Step Validity Checking",
"Logical Fallacy Detection","Argument Structure Analysis","Syllogism Evaluation",
"Proof by Contradiction","Mathematical Induction Logic","Proof by Construction",
"Direct Proof Strategies","Reductio Ad Absurdum","Constructive Dilemma"
)

$reasoningOverview = "Addresses Gemma 4 weakness in deep multi-step reasoning compared to DeepSeek V3.2 and Claude Sonnet 4, which excel at complex chain-of-thought and formal logic tasks."

foreach ($topic in $cotTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\multi-step\chain-of-thought\generated" -Title $topic -Content (Get-SkillContent $topic $reasoningOverview "reasoning") -Tags @("reasoning","chain-of-thought") -Category "reasoning"
}

$formalTopics = @(
"Propositional Logic Fundamentals","First-Order Predicate Logic","Second-Order Logic Guide",
"Modal Logic Systems Guide","Temporal Logic CTL LTL","Deontic Logic Ethics",
"Epistemic Logic Knowledge","Paraconsistent Logic Guide","Intuitionistic Logic",
"Many-Valued Logic Systems","Fuzzy Logic Implementation","Description Logic Ontology",
"Constraint Satisfaction Solving","SAT Solver Integration","SMT Solver Applications",
"Theorem Proving Automated","Interactive Theorem Proving","Proof Assistant Tools",
"Formal Verification Methods","Model Checking Techniques","Abstract Interpretation",
"Type Theory Foundations","Lambda Calculus Logic","Category Theory Applications",
"Set Theory for Reasoning","Graph Theory Logic","Automata Theory Applications",
"Complexity Theory Reasoning","Computability Theory Guide","Information Theory Logic",
"Kolmogorov Complexity Guide","Natural Deduction Systems","Sequent Calculus Method",
"Resolution Principle Logic","Unification Algorithm Guide","Horn Clause Logic"
)

foreach ($topic in $formalTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\multi-step\formal-reasoning\generated" -Title $topic -Content (Get-SkillContent $topic $reasoningOverview "reasoning") -Tags @("reasoning","formal-logic") -Category "reasoning"
}

$mathTopics = @(
"Symbolic Math Processing","Equation Solving Strategies","Linear Equation Systems",
"Quadratic Equation Methods","Polynomial Root Finding","Differential Equations Solving",
"Integral Calculus Problems","Multivariable Calculus Guide","Series Convergence Analysis",
"Linear Algebra Operations","Matrix Decomposition Methods","Eigenvalue Eigenvector Problems",
"Vector Space Theory","Inner Product Spaces","Tensor Operations Guide",
"Probability Theory Deep","Conditional Probability Bayes","Statistical Hypothesis Testing",
"Regression Analysis Methods","Time Series Analysis","Combinatorics Problem Solving",
"Permutations Combinations","Graph Coloring Problems","Number Theory Fundamentals",
"Modular Arithmetic Guide","Prime Number Theory","Diophantine Equations",
"Group Theory Applications","Ring Theory Basics","Field Theory Guide",
"Topology Basic Concepts","Metric Spaces Guide","Real Analysis Foundations",
"Complex Analysis Guide","Numerical Methods Overview","Optimization Calculus",
"Linear Programming Guide","Convex Optimization Methods","Stochastic Processes",
"Markov Chain Applications","Random Variable Analysis","Distribution Theory Guide",
"Geometric Reasoning Skills","Trigonometric Problem Solving","Coordinate Geometry Methods",
"Discrete Math Foundations","Boolean Algebra Operations","Recurrence Relations Solving"
)

foreach ($topic in $mathTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\multi-step\mathematical-reasoning\generated" -Title $topic -Content (Get-SkillContent $topic "Addresses Gemma 4 weakness in mathematical reasoning compared to frontier models on AIME and competition math benchmarks." "math") -Tags @("reasoning","math") -Category "reasoning"
}

$planningTopics = @(
"Goal Decomposition Methods","Task Sequencing Optimization","Dependency Analysis Framework",
"Constraint Handling Planning","Contingency Planning AI","Schedule Optimization AI",
"Resource Allocation Planning","Project Planning AI Agent","Multi-Goal Coordination",
"Hierarchical Task Planning","Partial-Order Planning","Temporal Planning Methods",
"Probabilistic Planning Guide","Reactive Planning Systems","Case-Based Planning",
"Plan Recognition Methods","Plan Repair Strategies","Plan Monitoring Execution",
"Collaborative Planning AI","Distributed Planning Systems","Adversarial Planning Defense",
"Planning Under Uncertainty","PDDL Planning Language","HTN Planning Methods",
"Classical Planning Algorithms","Modern Planning Approaches","Real-World Planning Applications",
"Planning with Resources","Planning with Deadlines","Multi-Agent Planning Guide"
)

foreach ($topic in $planningTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\multi-step\planning-reasoning\generated" -Title $topic -Content (Get-SkillContent $topic $reasoningOverview "planning") -Tags @("reasoning","planning") -Category "reasoning"
}
Write-Host "  Reasoning complete: CoT + Formal + Math + Planning" -ForegroundColor Green

# ================================================================
# CATEGORY 3: VISION / OCR (Target: ~600 files)
# ================================================================
Write-Host "[3/8] GENERATING VISION/OCR SKILLS..." -ForegroundColor Yellow

$visionTopics = @(
"Image Description Techniques","Object Detection Guide","Scene Understanding Methods",
"Text in Images OCR","Chart Analysis Interpretation","Diagram Interpretation Guide",
"Medical Imaging Analysis","Document Layout Analysis","Spatial Reasoning Images",
"Image Classification Methods","Semantic Segmentation Guide","Instance Segmentation Methods",
"Panoptic Segmentation Guide","Image Captioning Techniques","Visual Question Answering",
"Image-Text Matching","Visual Grounding Techniques","Visual Reasoning Tasks",
"Image Similarity Search","Face Detection Analysis","Emotion Recognition Images",
"Action Recognition Video","Video Understanding Guide","Screenshot Analysis Guide",
"UI Element Detection","Web Page Screenshot Analysis","Mobile App Screenshot Parse",
"Wireframe Detection Analysis","Logo Detection Recognition","Barcode QR Code Reading",
"License Plate Recognition","Document Classification Vision","Receipt Parsing OCR",
"Invoice Processing Vision","Business Card OCR","ID Document Verification",
"Signature Detection Analysis","Stamp Detection Documents","Table Detection Extraction",
"Form Field Extraction","Handwriting Recognition Guide","Math Expression OCR",
"Chemical Formula OCR","Music Sheet Recognition","Architectural Drawing Analysis",
"Map Image Analysis","Satellite Image Processing","Aerial Photography Analysis",
"Microscopy Image Analysis","X-Ray Image Analysis Guide","CT Scan Analysis Guide",
"MRI Image Interpretation","Ultrasound Image Guide","Pathology Slide Analysis",
"Dermatology Image Analysis","Retinal Scan Analysis","Dental X-Ray Analysis",
"Product Image Analysis","Food Image Recognition","Fashion Item Recognition",
"Vehicle Detection Guide","Traffic Sign Recognition","Road Scene Understanding",
"Indoor Scene Analysis","Outdoor Scene Classification","Weather Image Analysis",
"Art Style Recognition","Image Quality Assessment","Image Forgery Detection",
"Deepfake Detection Methods","NSFW Content Detection","Image Accessibility Alt Text",
"Color Analysis Extraction","Texture Analysis Methods","Pattern Recognition Images",
"3D Object Detection Guide","Depth Estimation Images","Point Cloud Processing",
"Multi-Object Tracking","Visual SLAM Overview","Optical Flow Analysis"
)

$visionOverview = "Addresses Gemma 4 limited vision capabilities compared to GPT-4o and Claude which have native image understanding, OCR, and visual analysis built into their platforms."

foreach ($topic in $visionTopics) {
    Write-SkillFile -Dir "$base\skills\web-search\vision\image-understanding\generated" -Title $topic -Content (Get-SkillContent $topic $visionOverview "vision") -Tags @("vision","image-understanding") -Category "web-search/vision"
}

$ocrTopics = @(
"OCR Accuracy Improvement","Language Detection OCR","Multilingual OCR Processing",
"Noise Handling OCR","Skew Correction Documents","Binarization Techniques OCR",
"Character Segmentation OCR","Word Segmentation Methods","Line Detection OCR",
"Paragraph Detection Layout","Column Detection Documents","OCR Post-Processing NLP",
"Spell Correction OCR Output","OCR Confidence Scoring","Tesseract OCR Guide",
"EasyOCR Implementation","PaddleOCR Guide","Google Cloud Vision OCR",
"AWS Textract Guide","Azure Form Recognizer","Apple Vision Framework OCR",
"DocTR Document Recognition","Surya OCR Model Guide","TrOCR Transformer OCR",
"MMOCR Framework Guide","OCR Benchmark Datasets","OCR Evaluation Metrics",
"Real-Time OCR Processing","Mobile OCR Optimization","Edge Device OCR Deploy",
"OCR API Design Patterns","OCR Pipeline Architecture","OCR Data Augmentation",
"OCR Training Custom Data","OCR for Low Resource Languages","OCR Historical Documents",
"OCR Degraded Documents","OCR Curved Text Reading","OCR Scene Text Detection",
"OCR Dense Text Handling","OCR Small Text Recognition"
)

foreach ($topic in $ocrTopics) {
    Write-SkillFile -Dir "$base\skills\web-search\vision\ocr-techniques\generated" -Title $topic -Content (Get-SkillContent $topic $visionOverview "ocr") -Tags @("vision","ocr") -Category "web-search/vision"
}
Write-Host "  Vision/OCR complete" -ForegroundColor Green

# ================================================================
# CATEGORY 4: DOMAIN SPECIALISTS (Target: ~1,200 files)
# ================================================================
Write-Host "[4/8] GENERATING DOMAIN SPECIALIST SKILLS..." -ForegroundColor Yellow

# Medical
$medicalTopics = @(
"Clinical Guidelines Integration","Diagnosis Support Systems","Treatment Protocol Guide",
"Drug Interaction Checking","Medical Terminology Guide","Patient Communication Skills",
"Medical Coding ICD System","HL7 FHIR Standards Guide","Telemedicine Best Practices",
"Medical Privacy HIPAA Guide","Cardiology Domain Guide","Oncology Domain Guide",
"Psychiatry Domain Guide","Pediatrics Domain Guide","Emergency Medicine Guide",
"Orthopedics Domain Guide","Neurology Domain Guide","Dermatology Domain Guide",
"Ophthalmology Domain Guide","Radiology Domain Guide","Pathology Domain Guide",
"Surgery Domain Guide","Internal Medicine Guide","Family Medicine Guide",
"Obstetrics Gynecology Guide","Anesthesiology Domain Guide","Immunology Allergy Guide",
"Infectious Disease Guide","Endocrinology Domain Guide","Gastroenterology Guide",
"Nephrology Domain Guide","Pulmonology Domain Guide","Rheumatology Domain Guide",
"Urology Domain Guide","Genetics Genomics Guide","Rehabilitation Medicine",
"Palliative Care Guide","Sports Medicine Guide","Pain Management Guide",
"Clinical Trial Analysis","Medical Literature Review","Evidence-Based Medicine",
"Medical Ethics Principles","Informed Consent Guide","Medical Record Documentation",
"Lab Result Interpretation","Vital Signs Analysis","Symptom Assessment Guide",
"Differential Diagnosis Method","Prognosis Estimation Guide","Public Health Guidelines"
)

foreach ($topic in $medicalTopics) {
    Write-SkillFile -Dir "$base\skills\general\domain-specialists\medical\generated" -Title $topic -Content (Get-SkillContent $topic "Domain-specific medical knowledge that generic Gemma 4 lacks compared to specialized medical AI systems." "medical") -Tags @("domain","medical") -Category "general/domain"
}

# Legal
$legalTopics = @(
"Contract Analysis Methods","Legal Writing Standards","Case Law Research Guide",
"Regulatory Compliance Check","Intellectual Property Guide","Employment Law Guide",
"Corporate Law Fundamentals","Litigation Strategy Guide","Legal Terminology Guide",
"US Federal Law Guide","UK Common Law Guide","EU Regulatory Framework",
"International Law Basics","Constitutional Law Guide","Criminal Law Fundamentals",
"Civil Procedure Guide","Evidence Law Guide","Tort Law Fundamentals",
"Property Law Guide","Family Law Basics","Immigration Law Guide",
"Tax Law Fundamentals","Bankruptcy Law Guide","Environmental Law Guide",
"Privacy Law GDPR CCPA","Cybersecurity Law Guide","Antitrust Competition Law",
"Securities Regulation Guide","Insurance Law Guide","Healthcare Law Guide",
"Real Estate Law Guide","Maritime Law Basics","Aviation Law Guide",
"Sports Law Fundamentals","Entertainment Law Guide","Media Law First Amendment",
"Education Law Guide","Election Law Basics","Military Law Guide",
"Contract Drafting Guide","Legal Brief Writing","Memorandum of Law Guide",
"Legal Citation Format","Statutory Interpretation","Judicial Review Analysis",
"Alternative Dispute Resolution","Mediation Process Guide","Arbitration Procedure Guide",
"Legal Risk Assessment","Compliance Program Design","Legal Document Automation"
)

foreach ($topic in $legalTopics) {
    Write-SkillFile -Dir "$base\skills\general\domain-specialists\legal\generated" -Title $topic -Content (Get-SkillContent $topic "Domain-specific legal knowledge for professional legal analysis and document review." "legal") -Tags @("domain","legal") -Category "general/domain"
}

# Financial
$financialTopics = @(
"Accounting Principles Guide","Financial Statement Analysis","Investment Strategy Guide",
"Portfolio Management Methods","Risk Assessment Framework","Tax Optimization Strategies",
"Financial Reporting Standards","Valuation Methods Guide","Derivatives Trading Guide",
"Cryptocurrency Finance Guide","Equity Analysis Methods","Fixed Income Analysis",
"Options Pricing Models","Futures Trading Guide","Forex Trading Analysis",
"Commodity Markets Guide","Real Estate Investment","Private Equity Guide",
"Venture Capital Analysis","Hedge Fund Strategies","Mutual Fund Analysis",
"ETF Investment Guide","Bond Market Analysis","Credit Analysis Methods",
"Financial Modeling Excel","DCF Valuation Method","Comparable Analysis Guide",
"Precedent Transaction Analysis","LBO Modeling Guide","Merger Integration Analysis",
"IPO Process Guide","Financial Due Diligence","Audit Procedures Guide",
"Internal Controls Framework","SOX Compliance Guide","Basel III Requirements",
"Insurance Underwriting Guide","Actuarial Analysis Basics","Behavioral Finance Guide",
"Quantitative Finance Guide","Algorithmic Trading Basics","High-Frequency Trading Guide",
"Market Microstructure","Technical Analysis Guide","Fundamental Analysis Method",
"ESG Investment Analysis","Impact Investing Guide","Financial Planning Personal",
"Retirement Planning Guide","Estate Planning Finance","Wealth Management Guide"
)

foreach ($topic in $financialTopics) {
    Write-SkillFile -Dir "$base\skills\general\domain-specialists\financial\generated" -Title $topic -Content (Get-SkillContent $topic "Domain-specific financial knowledge for professional financial analysis and advisory." "financial") -Tags @("domain","financial") -Category "general/domain"
}

# Scientific
$scientificTopics = @(
"Research Methodology Guide","Statistical Analysis Methods","Experimental Design Guide",
"Peer Review Process","Scientific Writing Guide","Chemistry Lab Protocols",
"Physics Concepts Advanced","Biology Frameworks Guide","Data Interpretation Science",
"Hypothesis Testing Methods","Sample Size Calculation","Meta-Analysis Methods",
"Systematic Review Guide","Qualitative Research Methods","Mixed Methods Research",
"Research Ethics Guide","IRB Protocol Design","Scientific Reproducibility",
"Lab Safety Protocols","Chemical Safety MSDS","Bioinformatics Analysis",
"Genomics Data Analysis","Proteomics Methods Guide","Metabolomics Analysis",
"Environmental Science Methods","Climate Data Analysis","Ecology Research Methods",
"Marine Biology Research","Neuroscience Methods","Cognitive Science Research",
"Materials Science Guide","Nanotechnology Research","Quantum Computing Basics",
"Machine Learning Research","Computer Vision Research","NLP Research Methods",
"Robotics Research Guide","Aerospace Engineering Basics","Biomedical Engineering"
)

foreach ($topic in $scientificTopics) {
    Write-SkillFile -Dir "$base\skills\general\domain-specialists\scientific\generated" -Title $topic -Content (Get-SkillContent $topic "Domain-specific scientific knowledge for research assistance and analysis." "scientific") -Tags @("domain","scientific") -Category "general/domain"
}

# Technical Writing
$techWritingTopics = @(
"API Documentation Guide","User Guide Writing","Technical Specifications Doc",
"Code Comments Best Practice","Release Notes Writing","Troubleshooting Guide Writing",
"Architecture Documentation","Compliance Documentation","README File Best Practices",
"Changelog Writing Guide","Contributing Guide Writing","Code of Conduct Documents",
"Security Policy Documentation","Privacy Policy Writing","Terms of Service Drafting",
"Style Guide Creation","Documentation Site Design","API Reference Generation",
"SDK Documentation Guide","Tutorial Writing Methods","How-To Guide Writing",
"Concept Documentation","Reference Documentation","Knowledge Base Design",
"FAQ Writing Best Practices","Error Message Writing","UI Copy Writing Guide",
"Microcopy Writing Guide","Onboarding Flow Writing","Email Template Documentation",
"Internal Wiki Management","Runbook Documentation","Incident Report Writing",
"Post-Mortem Documentation","Design Document Writing","RFC Document Writing",
"Proposal Writing Technical","White Paper Writing Guide","Case Study Documentation"
)

foreach ($topic in $techWritingTopics) {
    Write-SkillFile -Dir "$base\skills\general\domain-specialists\technical-writing\generated" -Title $topic -Content (Get-SkillContent $topic "Technical writing skills for comprehensive documentation generation." "technical-writing") -Tags @("domain","technical-writing") -Category "general/domain"
}
Write-Host "  Domain Specialists complete: Medical + Legal + Financial + Scientific + TechWriting" -ForegroundColor Green

# ================================================================
# CATEGORY 5: CONTEXT MANAGEMENT (Target: ~400 files)
# ================================================================
Write-Host "[5/8] GENERATING CONTEXT MANAGEMENT SKILLS..." -ForegroundColor Yellow

$chunkingTopics = @(
"Token-Aware Chunking Strategy","Semantic Chunking Methods","Sliding Window Chunks",
"Hierarchical Chunking Design","Metadata-Aware Chunking","Fixed-Size Token Chunking",
"Sentence-Based Chunking","Paragraph-Based Chunking","Section-Based Chunking",
"Character-Based Chunking","Overlapping Chunk Strategy","Non-Overlapping Chunks",
"Adaptive Chunk Sizing","Content-Aware Chunk Boundaries","Code-Aware Chunking",
"Markdown-Aware Chunking","HTML-Aware Chunking","LaTeX-Aware Chunking",
"JSON Document Chunking","XML Document Chunking","CSV Data Chunking",
"Multi-Modal Content Chunking","Image-Text Interleaved Chunks","Table-Aware Chunking",
"Recursive Character Splitting","Language-Aware Chunking","Topic-Based Chunking"
)

foreach ($topic in $chunkingTopics) {
    Write-SkillFile -Dir "$base\skills\memory\context-management\chunking-strategies\generated" -Title $topic -Content (Get-SkillContent $topic "Context chunking strategy to overcome Gemma 4 lost-in-the-middle problem with 256K token context." "context") -Tags @("context","chunking") -Category "memory/context"
}

$prioritizationTopics = @(
"Relevance Scoring Methods","Importance Weighting Context","Recency Bias Management",
"Frequency Analysis Context","User Focus Tracking","Attention-Based Prioritization",
"TF-IDF Context Ranking","BM25 Context Scoring","Semantic Relevance Ranking",
"Query-Focused Prioritization","Topic Modeling Context","Entity-Based Priority",
"Keyword Density Scoring","Context Window Packing","Greedy Context Selection",
"Optimal Context Allocation","Budget-Aware Context Fill","Dynamic Priority Updates",
"Multi-Objective Context Select","Diversity-Aware Selection","Redundancy Elimination Context",
"Context Deduplication Methods","Information Density Scoring","Compression-Based Ranking",
"Perplexity-Based Scoring","Novelty Detection Context","Context Quality Estimation"
)

foreach ($topic in $prioritizationTopics) {
    Write-SkillFile -Dir "$base\skills\memory\context-management\context-prioritization\generated" -Title $topic -Content (Get-SkillContent $topic "Context prioritization to maximize Gemma 4 effective use of its 256K token window." "context") -Tags @("context","prioritization") -Category "memory/context"
}

$summarizationTopics = @(
"Extractive Summarization Guide","Abstractive Summarization Methods","Hierarchical Summarization",
"Query-Focused Summarization","Multi-Level Abstraction","Incremental Summarization",
"Conversation Summarization","Document Summarization Pipeline","Meeting Notes Summarizer",
"Code Summarization Methods","Progressive Summarization","Map-Reduce Summarization",
"Refine Chain Summarization","Stuff Method Summarization","Iterative Summarization",
"Bullet Point Extraction","Key Phrase Extraction","Topic Sentence Extraction",
"Timeline Summarization","Comparative Summarization","Opinion Summarization",
"Multi-Document Summarization","Cross-Lingual Summarization","Abstractive Compression",
"Sentence Fusion Methods","Information Ordering Summary","Redundancy Removal Summary"
)

foreach ($topic in $summarizationTopics) {
    Write-SkillFile -Dir "$base\skills\memory\context-management\summarization-strategies\generated" -Title $topic -Content (Get-SkillContent $topic "Summarization strategy for efficient context management within Gemma 4 token limits." "summarization") -Tags @("context","summarization") -Category "memory/context"
}

$memoryTopics = @(
"Working Memory AI Design","Short-Term Memory Systems","Long-Term Memory Architecture",
"Episodic Memory Implementation","Semantic Memory Store","Procedural Memory Guide",
"Memory Consolidation Methods","Memory Retrieval Strategies","Memory Indexing Patterns",
"Forgetting Curve Management","Spaced Repetition Memory","Memory Compression Methods",
"Hierarchical Memory Design","Distributed Memory Store","Persistent Memory Database",
"In-Context Memory Patterns","Cross-Session Memory","User Profile Memory",
"Conversation History Memory","Task-Specific Memory","Knowledge Base Memory",
"Memory Garbage Collection","Memory Capacity Planning","Memory Access Patterns",
"Memory Consistency Models","Cache-Aware Memory","Memory Sharing Multi-Agent"
)

foreach ($topic in $memoryTopics) {
    Write-SkillFile -Dir "$base\skills\memory\context-management\memory-types\generated" -Title $topic -Content (Get-SkillContent $topic "Memory management architecture for extending Gemma 4 effective context beyond token limits." "memory") -Tags @("context","memory") -Category "memory/context"
}
Write-Host "  Context Management complete" -ForegroundColor Green

# ================================================================
# CATEGORY 6: SPANISH / MULTILINGUAL (Target: ~500 files)
# ================================================================
Write-Host "[6/8] GENERATING SPANISH/MULTILINGUAL SKILLS..." -ForegroundColor Yellow

$spanishTopics = @(
"Spanish Advanced Grammar Guide","Spanish Idioms Expressions","Spanish Regional Slang",
"Spanish Business Language","Spanish Technical Terminology","Pronoun Usage Spanish",
"Verb Conjugation Advanced","Subjunctive Mood Mastery","Spanish Abbreviations Guide",
"Formal vs Informal Spanish","Academic Spanish Writing","Legal Spanish Terminology",
"Medical Spanish Guide","Financial Spanish Terms","Technology Spanish Vocab",
"Spanish Punctuation Rules","Spanish Accent Marks Guide","Spanish Sentence Structure",
"Spanish Passive Voice","Spanish Conditional Tense","Spanish Perfect Tenses",
"Spanish Gerund Usage","Spanish Prepositions Guide","Spanish Conjunctions Advanced",
"Spanish Relative Clauses","Spanish Indirect Speech","Spanish Diminutives Augmentatives",
"Spanish False Friends English","Spanish Collocations Guide","Spanish Academic Vocabulary",
"Spanish Essay Writing","Spanish Report Writing","Spanish Email Etiquette",
"Spanish Presentation Skills","Spanish Negotiation Language","Spanish Customer Service",
"Spanish Social Media Language","Spanish Marketing Copy","Spanish SEO Writing",
"Spanish UX Writing Guide","Spanish Localization Best Practices","Spanish Gender-Inclusive Language"
)

foreach ($topic in $spanishTopics) {
    Write-SkillFile -Dir "$base\skills\general\spanish-multilingual\spanish-proficiency\generated" -Title $topic -Content (Get-SkillContent $topic "Deep Spanish language proficiency to match Qwen 3.5 multilingual depth that Gemma 4 lacks." "spanish") -Tags @("spanish","proficiency") -Category "general/spanish"
}

$codeSwitchTopics = @(
"Spanish-English Code Switching","Spanglish Handling Guide","Bilingual Context Detection",
"Language Preference Tracking","Mixed Language Sentiment","Code-Switch Detection NLP",
"Bilingual Conversation Flow","Language Mixing Patterns","Register Switching Guide",
"Bilingual Writing Support","Translation Memory Systems","Domain-Specific Code Switch",
"Formal-Informal Language Switch","Technical-Casual Mixed","Social Media Code Switch",
"Bilingual Customer Support","Bilingual Documentation","Code Switch Response Generation",
"Language Dominance Detection","Bilingual Search Queries","Multi-Script Handling"
)

foreach ($topic in $codeSwitchTopics) {
    Write-SkillFile -Dir "$base\skills\general\spanish-multilingual\code-switching\generated" -Title $topic -Content (Get-SkillContent $topic "Code-switching and bilingual handling that Gemma 4 needs for natural Spanish-English interactions." "code-switching") -Tags @("spanish","code-switching") -Category "general/spanish"
}

$regionalTopics = @(
"Spain Peninsular Spanish","Mexico Spanish Guide","Argentina Rioplatense Spanish",
"Colombia Spanish Guide","Caribbean Spanish Dialects","Central American Spanish",
"Chile Spanish Guide","Peru Spanish Guide","Venezuela Spanish Guide",
"Ecuador Spanish Guide","Bolivia Spanish Guide","Uruguay Spanish Guide",
"Paraguay Spanish Guide","Cuba Spanish Guide","Dominican Republic Spanish",
"Puerto Rico Spanish","Guatemala Spanish","Honduras Spanish Guide",
"El Salvador Spanish","Nicaragua Spanish Guide","Costa Rica Spanish",
"Panama Spanish Guide","Equatorial Guinea Spanish","Philippines Spanish Heritage",
"US Hispanic Spanish Varieties","Andalusian Spanish Guide","Canary Islands Spanish",
"Basque Country Spanish","Catalonia Spanish Context","Galicia Spanish Guide"
)

foreach ($topic in $regionalTopics) {
    Write-SkillFile -Dir "$base\skills\general\spanish-multilingual\regional-variations\generated" -Title $topic -Content (Get-SkillContent $topic "Regional Spanish variation coverage for authentic multilingual support." "regional") -Tags @("spanish","regional") -Category "general/spanish"
}

$multilingualTopics = @(
"English-Spanish Quality Parity","Translation Consistency Guide","Cultural Adaptation Methods",
"Language Detection Accuracy","Preference Learning System","Multilingual Prompt Engineering",
"Cross-Language Transfer Learning","Multilingual Embedding Alignment","Polyglot Model Optimization",
"Right-to-Left Language Support","CJK Language Processing","Arabic NLP Guide",
"Hindi Devanagari Processing","Korean Language Support","Japanese Multi-Script Guide",
"Vietnamese Tone Handling","Thai Word Segmentation","Russian Cyrillic Processing",
"Portuguese Variant Handling","French Language Nuances","German Compound Words",
"Italian Language Guide","Dutch Language Processing","Polish Language Guide",
"Turkish Agglutinative Guide","Swahili Language Support","Bengali Language Guide",
"Tamil Language Processing","Mandarin Chinese NLP","Cantonese Processing Guide"
)

foreach ($topic in $multilingualTopics) {
    Write-SkillFile -Dir "$base\skills\general\spanish-multilingual\multilingual-coordination\generated" -Title $topic -Content (Get-SkillContent $topic "Multilingual coordination to match Qwen 3.5 coverage of 200+ languages." "multilingual") -Tags @("spanish","multilingual") -Category "general/spanish"
}
Write-Host "  Spanish/Multilingual complete" -ForegroundColor Green

# ================================================================
# CATEGORY 7: SAFETY / ALIGNMENT (Target: ~600 files)
# ================================================================
Write-Host "[7/8] GENERATING SAFETY/ALIGNMENT SKILLS..." -ForegroundColor Yellow

$refusalTopics = @(
"Nuanced Refusal Calibration","Harmful vs Helpful Distinction","Context-Aware Safety Decisions",
"Over-Refusal Prevention Guide","User Intent Understanding","Benefit Risk Assessment",
"Responsible Disclosure Methods","Educational Content Boundaries","Research Context Permissions",
"Professional Context Handling","Age-Appropriate Responses","Sensitive Topic Navigation",
"Mental Health Response Guide","Self-Harm Prevention Response","Substance Abuse Discussion",
"Violence Discussion Boundaries","Political Content Handling","Religious Content Sensitivity",
"Controversial Topic Framework","Satire Humor Boundaries","Creative Fiction Boundaries",
"Medical Advice Boundaries","Legal Advice Disclaimer","Financial Advice Boundaries",
"Safety Escalation Protocols","User Welfare Priority Guide","Context Window Safety",
"Multi-Turn Safety Tracking","Safety Memory Persistence","Dynamic Safety Thresholds"
)

foreach ($topic in $refusalTopics) {
    Write-SkillFile -Dir "$base\skills\general\safety-alignment\refusal-calibration\generated" -Title $topic -Content (Get-SkillContent $topic "Refusal calibration to fix Gemma 4 over-censoring problem while maintaining appropriate safety." "safety") -Tags @("safety","refusal") -Category "general/safety"
}

$biasTopics = @(
"Gender Bias Detection Methods","Racial Bias Mitigation Guide","Cultural Bias Awareness",
"Occupational Bias Prevention","Age Bias Handling Guide","Socioeconomic Bias Detection",
"Disability Bias Awareness","LGBTQ Sensitivity Guide","Religious Bias Prevention",
"Political Bias Detection","Geographic Bias Awareness","Language Bias Detection",
"Name-Based Bias Prevention","Appearance Bias Handling","Education Level Bias",
"Nationality Bias Prevention","Accent Bias Awareness","Body Type Bias Prevention",
"Marital Status Bias","Parental Status Bias","Military Service Bias",
"Criminal History Bias","Immigration Status Bias","Housing Bias Detection",
"Healthcare Access Bias","Technology Access Bias","Intersectional Bias Analysis",
"Implicit Bias Detection","Confirmation Bias Prevention","Anchoring Bias Awareness"
)

foreach ($topic in $biasTopics) {
    Write-SkillFile -Dir "$base\skills\general\safety-alignment\bias-detection-mitigation\generated" -Title $topic -Content (Get-SkillContent $topic "Bias detection and mitigation for fair and equitable Gemma 4 outputs." "safety") -Tags @("safety","bias") -Category "general/safety"
}

$jailbreakTopics = @(
"Prompt Injection Detection","Adversarial Prompt Resistance","Role-Play Boundary Enforcement",
"Constraint Enforcement Methods","Instruction Hierarchy Safety","System Message Protection",
"Output Validation Pipeline","Token Smuggling Prevention","Encoding Attack Detection",
"Multi-Language Jailbreak Defense","Indirect Prompt Injection","Data Exfiltration Prevention",
"Goal Hijacking Detection","Context Manipulation Defense","Delimiter Injection Defense",
"Few-Shot Attack Prevention","Chain-of-Thought Manipulation","Tool Misuse Prevention",
"Recursive Prompt Attack","Social Engineering Detection","Persona Manipulation Defense",
"Emotional Manipulation Defense","Authority Impersonation Guard","Urgency Exploitation Defense",
"Hypothetical Scenario Guard","Translation Attack Defense","ASCII Art Attack Defense"
)

foreach ($topic in $jailbreakTopics) {
    Write-SkillFile -Dir "$base\skills\general\safety-alignment\jailbreak-prevention\generated" -Title $topic -Content (Get-SkillContent $topic "Jailbreak prevention techniques for robust Gemma 4 safety comparable to Claude safety systems." "safety") -Tags @("safety","jailbreak") -Category "general/safety"
}

$halRedTopics = @(
"Fact Grounding Techniques","Confidence Calibration Output","Source Attribution Methods",
"Uncertainty Expression Guide","Contradiction Detection Output","Knowledge Cutoff Awareness",
"Temporal Fact Awareness","Geographic Fact Checking","Numerical Accuracy Checking",
"Statistical Claim Validation","Quote Accuracy Verification","Historical Fact Checking",
"Scientific Claim Grounding","Legal Precedent Validation","Medical Fact Safety",
"Technology Fact Currency","Person Fact Verification","Organization Fact Check",
"Event Timeline Accuracy","Publication Date Awareness","URL Validity Checking",
"API Version Accuracy","Code Syntax Verification","Library Version Accuracy"
)

foreach ($topic in $halRedTopics) {
    Write-SkillFile -Dir "$base\skills\general\safety-alignment\hallucination-reduction\generated" -Title $topic -Content (Get-SkillContent $topic "Hallucination reduction to address Gemma 4 tendency to generate unfounded claims in long-form content." "safety") -Tags @("safety","hallucination") -Category "general/safety"
}

$ethicsTopics = @(
"Ethical Frameworks Overview","Consequentialist Analysis Guide","Deontological Approach Ethics",
"Virtue Ethics Application","Stakeholder Analysis Method","Moral Consistency Checking",
"Utilitarian Calculation Guide","Rights-Based Analysis","Care Ethics Framework",
"Justice and Fairness Ethics","Autonomy Respect Guide","Beneficence Non-Maleficence",
"Privacy Ethics Framework","Data Ethics Guidelines","AI Ethics Principles",
"Algorithmic Fairness Guide","Transparency Ethics","Accountability Framework",
"Informed Consent Ethics","Power Dynamics Awareness","Environmental Ethics AI",
"Digital Rights Framework","Intellectual Property Ethics","Open Source Ethics Guide"
)

foreach ($topic in $ethicsTopics) {
    Write-SkillFile -Dir "$base\skills\general\safety-alignment\ethical-reasoning\generated" -Title $topic -Content (Get-SkillContent $topic "Ethical reasoning skills for nuanced moral decision-making in Gemma 4 responses." "safety") -Tags @("safety","ethics") -Category "general/safety"
}
Write-Host "  Safety/Alignment complete" -ForegroundColor Green

# ================================================================
# CATEGORY 8: FACT-CHECKING (Target: ~500 files)
# ================================================================
Write-Host "[8/8] GENERATING FACT-CHECKING SKILLS..." -ForegroundColor Yellow

$claimTopics = @(
"Claim Extraction Methods","Source Evaluation Techniques","Fact-Checking Methodologies",
"Misinformation Detection Guide","Urban Legend Identification","Satire Detection Methods",
"Fake News Identification","Deep Fake Awareness Guide","Propaganda Detection Methods",
"Cherry Picking Detection","False Equivalence Detection","Straw Man Argument Detection",
"Ad Hominem Detection","Appeal to Authority Check","Circular Reasoning Detection",
"Red Herring Detection","Bandwagon Fallacy Check","Slippery Slope Detection",
"False Dilemma Detection","Hasty Generalization Check","Post Hoc Fallacy Detection",
"Anecdotal Evidence Check","Burden of Proof Analysis","No True Scotsman Detection",
"Texas Sharpshooter Fallacy","Genetic Fallacy Detection","Tu Quoque Detection",
"Appeal to Emotion Check","Appeal to Nature Fallacy","Equivocation Detection"
)

foreach ($topic in $claimTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\fact-checking\claim-verification\generated" -Title $topic -Content (Get-SkillContent $topic "Fact-checking capability to reduce Gemma 4 hallucination rate in knowledge-intensive tasks." "fact-checking") -Tags @("fact-checking","claims") -Category "reasoning/fact-checking"
}

$evidenceTopics = @(
"Source Credibility Assessment","Evidence Quality Ranking","Contradiction Identification",
"Consensus Checking Methods","Expert Opinion Weighting","Peer Review Understanding",
"Primary Source Analysis","Secondary Source Evaluation","Tertiary Source Assessment",
"Academic Source Verification","News Source Credibility","Government Source Reliability",
"Corporate Source Bias Check","NGO Source Assessment","Social Media Source Check",
"Blog Source Evaluation","Wiki Source Reliability","Forum Source Assessment",
"Expert Witness Evaluation","Anonymous Source Handling","Whistleblower Info Assessment",
"Statistical Source Check","Survey Methodology Evaluation","Poll Reliability Assessment",
"Dataset Quality Assessment","Research Reproduction Check","Retraction Watch Awareness"
)

foreach ($topic in $evidenceTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\fact-checking\evidence-evaluation\generated" -Title $topic -Content (Get-SkillContent $topic "Evidence evaluation for grounded fact-checking in Gemma 4 responses." "fact-checking") -Tags @("fact-checking","evidence") -Category "reasoning/fact-checking"
}

$confidenceTopics = @(
"Uncertainty Quantification Methods","Confidence Calibration Techniques","Doubt Expression Patterns",
"Knowledge Cutoff Communication","Ambiguity Handling Strategies","Epistemic Humility Guide",
"Confidence Score Generation","Probability Expression Language","Hedging Language Guide",
"Certainty Level Classification","Known Unknown Classification","Meta-Cognitive Awareness",
"Calibration Training Methods","Overconfidence Detection","Underconfidence Detection",
"Confidence Interval Expression","Bayesian Confidence Update","Frequentist vs Bayesian Confidence",
"Domain-Specific Confidence","Task Difficulty Estimation","Answer Reliability Scoring"
)

foreach ($topic in $confidenceTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\fact-checking\confidence-scoring\generated" -Title $topic -Content (Get-SkillContent $topic "Confidence scoring for transparent uncertainty communication in Gemma 4 outputs." "fact-checking") -Tags @("fact-checking","confidence") -Category "reasoning/fact-checking"
}

$correctionTopics = @(
"Auto-Correction Strategies","User Feedback Integration","Iterative Refinement Methods",
"Correction Learning Systems","Self-Correction Prompting","Critic Agent Correction",
"Multi-Agent Verification","Debate-Based Correction","Constitutional AI Correction",
"RLHF Correction Patterns","DPO Correction Training","Reward Model Correction",
"Online Learning Correction","Active Learning Correction","Human-in-Loop Correction",
"Automated QA Correction","Regression Testing Output","A/B Testing Corrections",
"Correction Audit Trail","Correction Impact Analysis","Correction Priority Ranking"
)

foreach ($topic in $correctionTopics) {
    Write-SkillFile -Dir "$base\skills\reasoning\fact-checking\correction-mechanisms\generated" -Title $topic -Content (Get-SkillContent $topic "Correction mechanisms for iterative improvement of Gemma 4 output accuracy." "fact-checking") -Tags @("fact-checking","correction") -Category "reasoning/fact-checking"
}
Write-Host "  Fact-Checking complete" -ForegroundColor Green

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  SKILLS GENERATION COMPLETE" -ForegroundColor Cyan
Write-Host "  Total new files: $global:totalCount" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
