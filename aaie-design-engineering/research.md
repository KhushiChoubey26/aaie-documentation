# AAIE (Artificial Assessment Intelligence for Educator) Platform  
## System Design  

---

## Overview  

The context diagram for the AAIE (Artificial Assessment Intelligence for Educator) system outlines the high-level structure of the application by defining the interactions between the system and its external actors. It serves as a top-level view of the system’s boundaries, inputs, and outputs, showing how various stakeholders interact with the platform. The context diagram ensures all development teams (Product Engineering, Model Development, and Data Curation) have a shared understanding of the system’s role in the broader academic environment.  

**Important Notes:**  
Phase 1 of AAIE focuses on enabling educators to submit student work for automated AI classification, rubric-based scoring, and formative feedback. The system allows educators to review results, add their own comments, and download a combined feedback report.  

- **In Scope (Phase 1):**  
  - Educator login/register  
  - Upload student work  
  - LLM Engine analysis: AI usage classification (Human/AI/Hybrid), rubric scoring, short feedback generation  
  - Educator review of AI output and addition of teacher feedback  
  - Download of final structured feedback report  

- **Deferred to Phase 2:**  
  - RBAC enforcement  
  - Rubric upload and rubric alignment logic  
  - Prompt history viewing/audit logs  
  - Plagiarism detection and prompt similarity analysis  
  - Student-facing submission workflows  

---

## Diagram Description – Context Diagram  

- **Diagram Name:** AAIE Prompt Feedback & Detection System – Context Diagram  
- **Version:** v1.2  
- **Stakeholders:** Educators, Students (phase 2), System Admins, PO, LLM & Model Team  
- **Purpose:** Illustrates how the core AAIE platform interacts with external actors and subsystems.  

### 1. System Boundary (AAIE Platform)  
Core system providing functionalities for prompt evaluation, feedback generation, AI usage detection, and academic integrity checking.  

### 2. External Actors  
- **Educator (Primary User):** Uploads student work, reviews AI feedback, downloads reports.  
- **System Admin / Developer:** Oversees operations, deploys LLM APIs, monitors logs.  
- **Model Developers:** Provide backend LLM models, API endpoints, evaluate outputs.  
- **Data Curation Team:** Supplies curated/synthetic datasets for training/testing.  
- **Students:** Indirectly represented in Phase 1, direct users in Phase 2.  
- **Optional:** University stakeholders, external services (APIs, hosting, GitHub).  

### 3. Key Functional Modules (Inside AAIE)  
1. Prompt Submission  
2. Feedback Generation  
3. AI Usage Detection  
4. Rubric Evaluation (Phase 2)  
5. Report Generator (Phase 2)  
6. Model Interaction / Monitoring  

### 4. Major Data Flows  
- Prompt/Response Data → Feedback Engine  
- Generated Feedback → UI (Phase 2)  
- Rubric Scoring + Detection → Report  
- API Results → Monitoring  
- Synthetic Data → System  

### 5. Scope Notes (Phase 1 from PO)  
- Real student data not required  
- Prioritize zero-shot/few-shot LLM testing  
- Prompt outlining, authenticity scoring in later phases  
- Require output tracking and report summaries  

---

## System Components (Inside AAIE Platform)  

1. **Prompt Submission & Feedback Interface** – Educator uploads prompts, responses, metadata.  
2. **RBAC** *(Phase 2)* – Role-based access control.  
3. **Feedback Generation Module** – Calls LLM API, formats educator-facing feedback.  
4. **Rubric Alignment Engine** *(Phase 2)* – Aligns feedback to rubric.  
5. **AI Usage Detection (Integrity Module)** – Classifies text as Human, AI, or Hybrid.  
6. **Feedback Report Generator** *(Phase 2)* – Aggregates results into reports (PDF/JSON).  
7. **Synthetic Data Generator (GenAI)** – Generates test student responses.  
8. **LLM Output Evaluator** – Tests clarity, bias, hallucination in outputs.  
9. **Prompt-to-Output Chain Tracker** – Ensures auditability from input to feedback.  
10. **Model Deployment & API Infrastructure** – Manages GPT/API integration.  
11. **Bias and Hallucination Monitor** – Flags inaccurate/unfair responses.  
12. **Admin Tools & Analytics Dashboard** – Tracks metrics, flagged submissions, usage.  

---

## Data Flow Description  

### 1. Input Stage: Prompt Submission  
- Educator logs in, submits prompt/response.  
- Metadata stored in Prompt DB.  

### 2. Preprocessing & Role Enforcement *(Phase 2)*  
- Validates permissions, routes requests.  

### 3. Feedback Generation *(Rubric alignment Phase 2)*  
- Calls LLM API, generates feedback, highlights rubric alignment.  

### 4. AI Usage Detection  
- Scans linguistic style, classifies submission (Human, AI, Hybrid).  

### 5. Report Generation *(Phase 2)*  
- Aggregates results into reports for educators (PDF/dashboard).  

### 6. Backend Monitoring & Logging  
- Tracks API latency, anomalies, logs to GitHub.  

### 7. GenAI Simulation  
- Admins generate synthetic data for testing.  

### 8. Output Archival *(Phase 2/3)*  
- Stores reports, logs, compliance with privacy standards.  

---

This system design document clarifies actor interactions, internal workflows, and data movement across AAIE, preparing for detailed API documentation, component testing, and future expansions.  
