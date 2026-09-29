# SkillPrint AI • SAP Hackfest 2026 (Inclusive Workforce)

> **"Prove what you can do — not where you come from."**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-0070F2?style=for-the-badge&logo=github)](https://25091a3237-netizen.github.io/skillprint-ai/)
[![Local Preview](https://img.shields.io/badge/Local%20Preview-http%3A%2F%2Flocalhost%3A3000-0F9D8A?style=for-the-badge)](http://localhost:3000)

**🌐 Live Deployment URL**: **[https://25091a3237-netizen.github.io/skillprint-ai/](https://25091a3237-netizen.github.io/skillprint-ai/)**

**Team Innovexa1**: B. Ajitesh, M. Abhilash, K. Diwakar Reddy, Shaik Faizan Basha, B. Harshavardhan  
**Track**: Inclusive Workforce  
**Theme**: Explainable skills identity built from verified evidence of capability instead of résumé keywords or institution prestige.

---

## 🌟 The Core Concept

Traditional campus hiring relies on coarse proxies: tier-1 college pedigrees, keyword-stuffed résumés, and personal networks. This creates **The Invisible Skills Problem**, excluding millions of high-capability candidates like **Ananya** (a 21-year-old engineering student from a tier-3 city who writes production-grade SQL, Python, and ML pipelines, but gets screened out by automated ATS filters).

**SkillPrint AI** creates an explainable, verifiable skills passport:
1. Ingests tangible proof of capability across 5 sources: **Projects, Certifications, Assessments, Hackathons, and Portfolio work**.
2. Requires **candidate cryptographic authorization consent**—only authorized items are computed into scores.
3. Calculates a dynamic **Skill Evidence Score (SES)** based on **Diversity (25%)**, **Demonstrated Performance (35%)**, **Recency (20%)**, and **Relevance (20%)**.
4. Delivers **Blind Screening** to recruiters to mask institutional pedigree and demographics.
5. Upholds the core ethical mandate: **"AI recommends → bias check → HR reviews → HUMAN decides."**

---

## 🚀 Application Structure & Pages

1. **Landing Page (`Overview`)**:
   - Hero: *"Ananya is skilled. But is she visible?"* with tagline and direct CTAs for Candidate and Recruiter personas.
   - **The Invisible Skills Problem** 4-stage flow: *Real Capability → Résumé Signals → Screening → Opportunity*.
   - The 3 Hiding Factors + visible research placeholder: *"Insert the team's real survey/interview finding here."*
   - Two-User Needs breakdown (Candidate needs vs Recruiter needs).
   - How It Works chain: *Skill → Evidence → Proficiency → Confidence → Role Relevance*.
   - Closing banner: *"From invisible talent to visible potential."*

2. **Candidate Dashboard (Ananya)**:
   - 5 Evidence Sources cards: Projects, Certifications, Assessments, Hackathons, Portfolio with individual **Consent/Authorization Toggles**.
   - Interactive **Add Evidence Artifact** modal with instant score recalculation.
   - Dynamic **Skill Evidence Score (SES)** radial gauge with real-time breakdown bars for Diversity, Performance, Recency, and Relevance.
   - Interactive **"How SES is Calculated" Modal** with adjustable weight sliders that recompute scores live.
   - **Verified Skills Table**: Skill name, authorized proof count, proficiency badge (Beginner/Intermediate/Advanced), model confidence %, and role relevance.
   - **Skill Gap & Growth Roadmap**: Identifies missing capabilities for target roles (e.g. SAP Analytics Cloud Storyboarding) with direct learning links.
   - **"Why I Match / Don't Match"** plain-language explanation panel.

3. **Recruiter Dashboard**:
   - Enterprise job requisition selector (Data Analyst, Junior ML Engineer, SAP Junior Developer, Business Analyst, Cloud Integration Associate).
   - **Blind Screening Mode Toggle**: Masks college name, city, and demographic proxies by default.
   - Evidence-first candidate cards showing verified code commits, proctored test percentiles, and hackathon citations.
   - **Fairness & Algorithmic Parity Panel**: Real-time demographic parity variance checks and proxy exclusion verification.
   - **Explainable Recommendation Drawer**: Plain-language AI rationale and fairness scorecard.
   - **Mandatory Human Decision Controls**: *Approve*, *Request More Evidence*, or *Reject* with mandatory evaluator notes.
   - Core banner: *"AI recommends → bias check → HR reviews → HUMAN decides."*

4. **Agentic Workflow Page**:
   - Interactive animated pipeline of 6 collaborating micro-agents:
     1. Evidence Discovery Agent
     2. Skill Inference Agent
     3. Skill Verification Agent
     4. Opportunity Matching Agent
     5. Skill Gap & Growth Agent
     6. Fairness & Explainability Agent
   - Step-through interactive simulation runner: *"Simulate Pipeline for Ananya"*.
   - Detailed Inspector Panel with Input/Output schemas and Ananya's sample mock result.

5. **SAP Architecture Page**:
   - Enterprise architecture diagram mapping:
     - Verified Evidence Ingestion → SAP Business Technology Platform (AI Core, Integration Suite, Analytics Cloud, Build Process Automation) → SAP HANA Cloud Vector Engine & SAP Build/Fiori → SAP SuccessFactors HCM Core (Recruiting, Opportunity Marketplace, Analytics).
   - Clear transparency labels: **LIVE IN PROTOTYPE**, **MOCKED BTP API**, and **PLANNED ENTERPRISE**.

6. **Impact & Scale Page**:
   - Distinct value propositions for **Candidate**, **Employer**, and **Institution**.
   - 4-Stage Scalability Path:
     1. Tier-2/3 Engineering Students
     2. First-Generation Job Seekers
     3. Career Returners & Reskilling Workers
     4. Enterprise Internal Talent Mobility.

---

## 🧮 Dynamic SES Formula

$$SES = (w_{div} \times Diversity) + (w_{perf} \times Performance) + (w_{rec} \times Recency) + (w_{rel} \times Relevance)$$

- **Evidence Diversity (25%)**: Breadth across Projects, Certifications, Assessments, Hackathons, and Portfolio work.
- **Demonstrated Performance (35%)**: Average percentile score across verified proctored tests, tests passed, and competitive rankings.
- **Recency Factor (20%)**: Exponential decay function ($\lambda = 0.06/\text{month}$) favoring recently exercised skills.
- **Role Relevance (20%)**: Semantic alignment with the target job's competency requirements.
- **Candidate Consent**: If an evidence item is not authorized, it is excluded from all score calculations.

---

## 💻 How to Run

### Method 1: Direct Browser Launch (Zero Dependencies)
Double-click `index.html` or open it directly in Google Chrome or Microsoft Edge. All React components, Tailwind styling, and dynamic SES calculations run client-side.

### Method 2: Local Web Server
If Node.js or Python is available:
```bash
# Using python:
python -m http.server 3000

# Or using npx:
npx serve .
```
Then navigate to `http://localhost:3000`.

---

## 🎨 Design System

- **SAP Fiori Horizon Enterprise Look & Feel**
- **Palette**: Primary Blue `#0070F2`, Dark Navy `#0B1F33`, Teal `#0F9D8A`, Purple `#6B4FA3`, Orange `#F58B1F`, Green `#2BA05A`, Red `#D13B47`, Background `#F0F4F9`
- **Typography**: Inter (72 Fallback) + JetBrains Mono for code telemetry
- **Full Light and Dark Mode Support** (toggle in the ShellBar)
- **Footer on Every Page**: *"SkillPrint AI • SAP Hackfest 2026"*
