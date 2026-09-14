import React from 'react';

function Experience() {
  return (
    <div>
      <div className="section-heading">CLOUD ARCHITECTURE PROJECTS</div>
      
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">AWS DevSecOps Cloud Application <span style={{fontWeight: 'normal'}}>| Cloud Resume Challenge</span></span>
          <span className="experience-dates">2023 - Present</span>
        </div>
        <ul className="experience-bullets">
          <li>Architected and deployed a highly available cloud infrastructure using <strong>Terraform</strong> to provision AWS ECS Fargate, Application Load Balancers, ECR, CloudFront, and DynamoDB.</li>
          <li>Engineered a secure CI/CD pipeline using <strong>GitHub Actions</strong>, integrating <strong>AWS OIDC</strong> for keyless authentication and automated zero-downtime container deployments.</li>
          <li>Implemented "Shift-Left" DevSecOps practices by integrating <strong>SonarQube Cloud</strong> into the pipeline for automated Static Application Security Testing (SAST) and quality gates.</li>
          <li>Containerized a Spring Boot REST API using <strong>Docker</strong> multi-stage builds and streamlined local development using <strong>Docker Compose</strong>.</li>
        </ul>
      </div>

      <div className="section-heading" style={{ marginTop: '20px' }}>EXPERIENCE</div>
      
      {/* Mymeds */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Mymeds <span style={{fontWeight: 'normal'}}>| Minneapolis, MN</span></span>
          <span className="experience-dates">Aug 2021 – present</span>
        </div>
        <div className="job-title">Site Reliability Engineer / DevOps Engineer</div>
        <ul className="experience-bullets">
          <li>Configured CI/CD pipelines with Jenkins for automated testing, artifact building, and zero-downtime deployments to AWS environments.</li>
          <li>Implemented a Kafka-based messaging system to handle real-time data streaming and asynchronous event processing at scale.</li>
          <li>Designed and deployed a highly scalable custom notification API using Java and Spring Boot to automate medication refill alerts.</li>
          <li>Collaborated closely with cross-functional teams to streamline deployment strategies and improve infrastructure reliability.</li>
          <li>Wrote clean, testable infrastructure and application code using JUnit and Mockito, strictly enforcing quality gates.</li>
        </ul>
      </div>

      {/* Revature */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Revature <span style={{fontWeight: 'normal'}}>| Reston Virginia</span></span>
          <span className="experience-dates">April 2019 – Aug 2021</span>
        </div>
        <div className="job-title">Cloud Infrastructure Engineer</div>
        <ul className="experience-bullets">
          <li>Provisioned, deployed, and managed scalable AWS infrastructure utilizing CloudFormation, Elastic Beanstalk, EC2, S3, ELB, Auto Scaling Groups, and Route53.</li>
          <li>Built and deployed containerized applications using Docker, improving development environment consistency and drastically reducing deployment times.</li>
          <li>Engineered and secured cloud networks utilizing IAM roles, least-privilege security groups, and AWS Data Pipelines.</li>
          <li>Optimized application and database performance through JVM tuning, connection pooling, and advanced SQL/ORM data management strategies.</li>
          <li>Integrated NoSQL solutions into distributed microservices architectures to ensure high resilience and horizontal scalability.</li>
        </ul>
      </div>

      {/* DRC */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Data Recognition Center (DRC) <span style={{fontWeight: 'normal'}}>| Maple Grove ,MN</span></span>
          <span className="experience-dates">July 2016 – April 2019</span>
        </div>
        <div className="job-title">DevOps / Software Engineer</div>
        <ul className="experience-bullets">
          <li>Developed and maintained automated CI/CD pipelines using Jenkins, enabling automated builds, testing, and deployments, resulting in a significant reduction in release cycles.</li>
          <li>Leveraged Amazon Web Services (AWS) to architect and manage cloud-based environments ensuring high availability and fault tolerance.</li>
          <li>Utilized DynamoDB as a highly scalable NoSQL database backend, significantly reducing latency for real-time application workloads.</li>
          <li>Configured and secured API Gateways to expose internal APIs, integrating two-factor authentication and strict access controls.</li>
          <li>Conducted rigorous code reviews and enforced engineering best practices to maintain a high standard of deployment quality.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
