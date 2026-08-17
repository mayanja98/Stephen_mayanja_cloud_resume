# Cloud Resume Challenge — AWS DevOps & DevSecOps Project

A production-oriented cloud resume application built to demonstrate practical **DevOps, DevSecOps, cloud engineering, Infrastructure as Code, CI/CD, containerization, security, monitoring, and application operations** using AWS.

The application presents my professional resume through a React frontend and uses a Java/Spring Boot REST API to maintain a persistent visitor counter in Amazon DynamoDB.

While the application itself is intentionally simple, the primary focus of this project is the engineering process used to **provision, test, secure, deploy, monitor, and maintain a cloud application**.

This project is based on the [AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) and extends the challenge with a containerized Spring Boot backend, Terraform-managed infrastructure, automated CI/CD, SonarQube Cloud security analysis, AWS monitoring, and IAM-based security.

---

## 🎯 Project Objectives

The primary goal of this project is to demonstrate the complete lifecycle of a cloud application:

```text
Develop
   ↓
Commit
   ↓
Test
   ↓
Security Scan
   ↓
Build
   ↓
Containerize
   ↓
Provision Infrastructure
   ↓
Deploy
   ↓
Monitor
   ↓
Improve
```

The project demonstrates:

- Cloud infrastructure design
- Infrastructure as Code
- CI/CD automation
- DevSecOps practices
- Static Application Security Testing (SAST)
- Containerization
- AWS deployment
- REST API development
- Cloud database integration
- IAM and security
- Application monitoring
- Logging
- Cost-conscious architecture
- Automated testing
- Linux/server administration

---

# 🏗️ Architecture

```text
                              INTERNET
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   CloudFront    │
                         │   HTTPS / CDN   │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │       S3        │
                         │  React Frontend │
                         └────────┬────────┘
                                  │
                              REST API
                                  │
                                  ▼
                         ┌─────────────────┐
                         │      EC2        │
                         │                 │
                         │     Docker      │
                         │        │        │
                         │        ▼        │
                         │  Spring Boot    │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │    DynamoDB     │
                         │ Visitor Counter │
                         └─────────────────┘


             ┌─────────────────────────────────────────┐
             │           DevOps / DevSecOps            │
             │                                         │
             │ GitHub                                   │
             │    │                                     │
             │    ▼                                     │
             │ GitHub Actions                           │
             │    │                                     │
             │    ├── Build                             │
             │    ├── Test                              │
             │    ├── SonarQube Cloud                   │
             │    ├── Quality Gate                      │
             │    ├── Terraform Validate               │
             │    ├── Terraform Plan                   │
             │    ├── Docker Build                      │
             │    └── Deploy                            │
             │              │                           │
             └──────────────┼───────────────────────────┘
                            │
                            ▼
                           AWS

                       CloudWatch
                            │
                            ▼
                       Logs / Metrics
```

---

# 🛠️ Technology Stack

## Frontend

- React
- JavaScript
- Vite
- HTML5
- CSS3

## Backend

- Java
- Spring Boot
- Spring Web
- REST APIs
- Maven
- JUnit
- Mockito

## Cloud

- Amazon EC2
- Amazon S3
- Amazon CloudFront
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch

## DevOps

- Terraform
- Docker
- GitHub Actions
- Git
- GitHub
- Linux
- Bash
- AWS CLI

## DevSecOps

- SonarQube Cloud
- Static Application Security Testing (SAST)
- Security vulnerability analysis
- Security hotspots
- Secrets detection
- Code quality analysis
- Quality gates

---

# 🔄 CI/CD Pipeline

The application uses GitHub Actions to automate the software delivery process.

A typical pull request and deployment workflow follows:

```text
Developer
    │
    ▼
Git Push / Pull Request
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Frontend Build
    │
    ├── Backend Build
    │
    ├── Unit Tests
    │
    ├── SonarQube Cloud Analysis
    │      ├── Security Analysis
    │      ├── Vulnerability Detection
    │      ├── Code Quality
    │      └── Secrets Detection
    │
    ├── Quality Gate
    │
    ├── Terraform Format
    │
    ├── Terraform Validate
    │
    ├── Terraform Plan
    │
    ├── Docker Build
    │
    └── Deployment
             │
             ▼
            AWS
```

The goal is to eliminate unnecessary manual deployment steps and create a repeatable, version-controlled deployment process.

The pipeline is designed so that failures in testing, security analysis, infrastructure validation, or quality checks can prevent a deployment from proceeding.

---

# 🔐 DevSecOps & SonarQube Cloud

Security is integrated directly into the CI/CD pipeline rather than being treated as a separate manual process.

**SonarQube Cloud** is used to perform automated static analysis of the application.

The pipeline analyzes source code for:

- Security vulnerabilities
- Bugs
- Code smells
- Security hotspots
- Potential secrets
- Maintainability issues
- Code quality problems

The SonarQube quality gate is evaluated before deployment.

```text
Code Change
    │
    ▼
Build
    │
    ▼
Automated Tests
    │
    ▼
SonarQube Cloud
    │
    ├── Security Analysis
    ├── Code Quality
    ├── Vulnerability Detection
    └── Secrets Detection
    │
    ▼
Quality Gate
    │
    ├──────── PASS ────────► Continue Deployment
    │
    └──────── FAIL ────────► Stop Pipeline
```

This implements a basic **shift-left security model**, allowing security and quality issues to be identified before code reaches the production environment.

SonarQube is one part of the project's security strategy and is complemented by IAM, secure credential management, restricted network access, dependency management, and secure infrastructure practices.

---

# 🏗️ Infrastructure as Code

AWS infrastructure is provisioned and managed using **Terraform**.

Terraform manages resources including:

- EC2
- S3
- CloudFront
- DynamoDB
- IAM
- CloudWatch
- Networking and security configuration

Infrastructure changes are reviewed through Terraform plans before being applied.

This allows the environment to be recreated consistently rather than relying on manually configured AWS resources.

Example workflow:

```text
Terraform Code
      │
      ▼
terraform fmt
      │
      ▼
terraform validate
      │
      ▼
terraform plan
      │
      ▼
Review
      │
      ▼
terraform apply
      │
      ▼
AWS Infrastructure
```

Terraform allows infrastructure to be treated as code and managed through version control.

---

# 🐳 Containerization

The Spring Boot application is packaged as a Docker container.

```text
Spring Boot
     │
     ▼
   Maven
     │
     ▼
    JAR
     │
     ▼
Docker Image
     │
     ▼
    EC2
```

Containerization provides a consistent runtime environment between development and deployment.

The Docker image can be built as part of the CI/CD pipeline and deployed to the EC2 environment.

---

# 👁️ Visitor Counter

The project implements the visitor counter requirement from the Cloud Resume Challenge.

When a visitor loads the resume:

```text
React
  │
  │ GET /api/visitors
  ▼
Spring Boot
  │
  │ Atomic Update
  ▼
DynamoDB
  │
  │ Updated Count
  ▼
Spring Boot
  │
  ▼
React
```

The visitor count is persisted in DynamoDB and is not dependent on browser storage or Spring Boot application memory.

The counter uses an atomic database update to prevent concurrent requests from overwriting one another.

This demonstrates integration between a frontend application, REST API, backend service, and managed cloud database.

---

# 🔐 AWS Security

Security is incorporated into the infrastructure and deployment process.

The project uses:

- IAM roles
- Least-privilege permissions
- Environment-based configuration
- No AWS credentials committed to Git
- Restricted security groups
- HTTPS through CloudFront
- AWS credential provider mechanisms
- Separation of application secrets from source code

GitHub Actions can use AWS OIDC authentication rather than relying on long-lived AWS access keys.

This reduces the risk associated with static credentials in CI/CD environments.

Security is treated as part of the application lifecycle rather than as a final deployment step.

---

# 📊 Monitoring & Observability

AWS CloudWatch is used for basic application and infrastructure observability.

The project provides:

- Application logs
- EC2 metrics
- Application health information
- Deployment visibility
- Error logging
- Infrastructure monitoring

The objective is to make application failures and infrastructure problems easier to identify and troubleshoot.

The monitoring strategy follows the application path:

```text
Frontend
   ↓
API
   ↓
Backend
   ↓
Database
   ↓
Infrastructure
```

This makes it easier to identify where failures or performance problems originate.

---

# 💰 Cost Optimization & Architectural Decisions

This project is intentionally designed for a **low-traffic personal portfolio application**.

The architecture prioritizes demonstrating relevant engineering practices without introducing infrastructure that the workload does not require.

The target is to operate the application at approximately **$5/month or less**, depending on AWS pricing, traffic, and applicable free-tier benefits.

The architecture therefore avoids unnecessary infrastructure such as:

- RDS
- NAT Gateway
- Application Load Balancer
- ECS
- EKS
- ElastiCache
- Multiple EC2 instances
- Multi-node clusters

The architecture is based on the principle:

> **Use the simplest technology that solves the problem effectively.**

The goal is not to build the largest possible cloud architecture.

The goal is to demonstrate the ability to make infrastructure decisions based on:

- Workload
- Cost
- Security
- Reliability
- Maintainability
- Operational complexity
- Future scalability

---

# 🚫 Why Kubernetes, Helm, and Other Tools Are Not Included

Kubernetes, Helm, and other enterprise-scale technologies were intentionally left out of the initial architecture.

This is a deliberate architectural decision rather than a limitation of the project.

The application currently consists of:

- One React frontend
- One Spring Boot backend
- One small DynamoDB table
- Very low traffic
- No requirement for horizontal scaling
- No requirement for service discovery
- No requirement for multi-service orchestration
- No requirement for a multi-node container cluster

The current backend requirement is essentially:

```text
Spring Boot
     │
     ▼
Docker
     │
     ▼
EC2
```

Introducing Kubernetes would add significant operational complexity without solving a real problem for this application.

A Kubernetes architecture could introduce:

```text
Kubernetes Cluster
       │
       ├── Nodes
       ├── Deployments
       ├── Services
       ├── Ingress
       ├── ConfigMaps
       ├── Secrets
       ├── RBAC
       └── Networking
              │
              ▼
        Spring Boot
```

That additional infrastructure would increase:

- Cost
- Operational overhead
- Deployment complexity
- Security surface area
- Troubleshooting requirements
- Infrastructure maintenance

without providing meaningful benefits for the current workload.

## Why Helm Is Also Not Included

Helm is extremely useful for managing complex Kubernetes applications.

However, Helm exists primarily to simplify deploying and managing applications within Kubernetes.

Since Kubernetes is not required for this application, adding Helm would introduce another layer of abstraction without solving a real problem.

The project therefore focuses on technologies that directly address the current workload:

```text
Terraform
   ↓
AWS Infrastructure

Docker
   ↓
Spring Boot

GitHub Actions
   ↓
CI/CD

SonarQube Cloud
   ↓
Security / Quality

CloudWatch
   ↓
Monitoring
```

The goal is to demonstrate that technology choices are based on engineering requirements rather than simply adding tools to increase the technology list.

---

# 🧠 Architectural Principle

The project intentionally follows this principle:

> **Use the simplest technology that solves the problem effectively.**

Good DevOps engineering is not about using every available tool.

It is about understanding the workload, identifying the requirements, evaluating trade-offs, and selecting the appropriate technologies.

This project demonstrates the ability to:

1. Understand the workload.
2. Identify infrastructure requirements.
3. Select appropriate cloud services.
4. Automate infrastructure with Terraform.
5. Secure the application and infrastructure.
6. Automate testing and deployment.
7. Integrate security into CI/CD.
8. Monitor the application and infrastructure.
9. Control infrastructure costs.
10. Evaluate future scalability requirements.

---

# 📈 Scalability Considerations

Although the initial architecture is intentionally small, the application can evolve as requirements increase.

A potential future architecture could look like:

```text
                  CloudFront
                      │
                      ▼
                 API Gateway
                      │
                      ▼
                Load Balancer
                      │
             ┌────────┴────────┐
             ▼                 ▼
          Backend 1         Backend 2
             │                 │
             └────────┬────────┘
                      ▼
                  DynamoDB
```

If the application grows further, services such as ECS, Kubernetes, or additional AWS managed services could be evaluated based on actual requirements.

The important principle is to **scale the architecture when the workload requires it**, rather than prematurely introducing complexity.

---

# 🧪 Testing

The backend includes automated tests using:

- JUnit
- Mockito
- Spring Boot testing utilities

Testing focuses on important application behavior such as:

- REST API responses
- Visitor counter functionality
- Service-layer logic
- Error handling
- Database interactions

The CI/CD pipeline executes tests before deployment.

A failed test or failed build prevents the application from progressing through the deployment pipeline.

---

# 📁 Repository Structure

```text
cloud-resume/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── styles.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   └── pom.xml
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── providers.tf
│   └── modules/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# 🚀 Deployment Workflow

The intended deployment workflow is:

```text
Developer
    │
    ▼
Feature Branch
    │
    ▼
Pull Request
    │
    ▼
GitHub Actions
    │
    ├── Frontend Build
    ├── Backend Build
    ├── Unit Tests
    ├── SonarQube Security Analysis
    ├── Quality Gate
    ├── Terraform Format
    ├── Terraform Validate
    └── Terraform Plan
            │
            ▼
       Code Review
            │
            ▼
       Merge to Main
            │
            ▼
      GitHub Actions
            │
            ├── Build
            ├── Test
            ├── SonarQube Analysis
            ├── Docker Build
            ├── Terraform Apply
            └── Deploy
                    │
                    ▼
                   AWS
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Frontend            Backend
          │                   │
          ▼                   ▼
         S3                  EC2
                              │
                              ▼
                           Docker
                              │
                              ▼
                        Spring Boot
                              │
                              ▼
                          DynamoDB
```

---

# 🎓 Skills Demonstrated

## DevOps

- CI/CD
- Infrastructure as Code
- Automated deployments
- Containerization
- Release automation
- Environment configuration
- Deployment troubleshooting
- Linux administration
- Bash scripting

## DevSecOps

- Static Application Security Testing
- SonarQube Cloud
- Security quality gates
- Vulnerability detection
- Secrets detection
- Secure CI/CD
- Shift-left security
- Secure infrastructure practices

## AWS

- Amazon EC2
- Amazon S3
- Amazon CloudFront
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch
- AWS networking
- AWS security

## Infrastructure

- Terraform
- AWS CLI
- Linux
- Bash
- Docker

## CI/CD

- GitHub Actions
- Automated builds
- Automated testing
- Terraform validation
- Terraform planning
- Docker image builds
- Automated deployments
- Quality gates

## Development

- Java
- Spring Boot
- React
- JavaScript
- REST APIs
- Maven
- JUnit
- Mockito

## Engineering Practices

- Version control
- Automated testing
- Least-privilege security
- Observability
- Cost optimization
- Infrastructure reproducibility
- Architectural trade-off analysis
- Secure software delivery
- Cloud architecture

---

# 🔮 Future Improvements

Potential future improvements include:

- Terraform remote state management
- Development/staging/production environments
- Automated rollback
- Terraform drift detection
- Container vulnerability scanning
- Dependency vulnerability scanning
- CloudWatch dashboards
- Automated backups
- Infrastructure cost monitoring
- Blue/green deployment strategies
- Automated infrastructure testing
- Enhanced application monitoring
- Authentication and user accounts
- User-managed resumes
- Custom resume URLs

Kubernetes and Helm may be evaluated if the application evolves into a multi-service platform where container orchestration provides measurable value.

---

# 📚 Cloud Resume Challenge

This project is based on the AWS Cloud Resume Challenge.

The challenge provides a practical framework for building and deploying a cloud-based resume while demonstrating real-world cloud engineering skills.

Challenge documentation:

https://cloudresumechallenge.dev/docs/the-challenge/aws/

---

# 👨💻 Author

**Stephen Mayanja**

Software Engineer focused on:

- DevOps Engineering
- Cloud Infrastructure
- AWS
- CI/CD
- Terraform
- Docker
- DevSecOps
- Java
- Spring Boot
- React

This project represents a practical demonstration of designing, automating, securing, deploying, monitoring, and operating a cloud application using modern DevOps practices.
