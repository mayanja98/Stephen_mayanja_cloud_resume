import React from 'react';

function Experience() {
  return (
    <div>
      <div className="section-heading">EXPERIENCE</div>
      
      {/* Mymeds */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Mymeds <span style={{fontWeight: 'normal'}}>| Minneapolis, MN</span></span>
          <span className="experience-dates">Aug 2021 – present</span>
        </div>
        <div className="job-title">Software Engineer</div>
        <ul className="experience-bullets">
          <li>Designed and developed a custom notification API to automate and streamline medication refill notifications for customers using Java and Spring Boot.</li>
          <li>Collaborated with frontend, DevOps, and QA teams to ensure smooth deployments.</li>
          <li>Configured CI/CD pipelines with Jenkins for automated testing and deployment to AWS environments.</li>
          <li>Maintain API documentation using Swagger.</li>
          <li>Wrote clean, testable code with JUnit and Mockito, improving code quality and reducing production defects</li>
          <li>Migrated the frontend from JSP to React.js, improving responsiveness and enhancing user experience.</li>
          <li>Implemented a Kafka-based messaging system for real-time data streaming and processing.</li>
        </ul>
      </div>

      {/* Revature */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Revature <span style={{fontWeight: 'normal'}}>| Reston Virginia</span></span>
          <span className="experience-dates">April 2019 – Aug 2021</span>
        </div>
        <div className="job-title">Software Engineer</div>
        <ul className="experience-bullets">
          <li>Demonstrated excellent knowledge of Relational Databases, SQL, PL/SQL, and ORM technologies, optimizing data retrieval and storage processes.</li>
          <li>Participated in API design reviews and architecture discussions.</li>
          <li>Deployed to AWS using ElasticBeanStalk, EC2, S3, EBS, Elastic Load Balancer, auto scaling groups, Data pipeline, Security groups, Cloud Formation, IAM and Route53.</li>
          <li>Integrated applications with RDBMS using ORM frameworks such as Hibernate/JPA.</li>
          <li>Leveraged JVM performance tuning (memory management, garbage collection, threading) to optimize application throughput and latency.</li>
          <li>Developed responsive and interactive user interfaces using React Js and Spring MVC, enhancing the overall user experience.</li>
          <li>Integrated NoSQL solutions into microservices architectures for improved scalability and resilience</li>
          <li>Built and deployed containerized applications using Docker, improving development environment consistency and setup time.</li>
        </ul>
      </div>

      {/* DRC */}
      <div className="experience-item">
        <div className="experience-header">
          <span className="company-name">Data Recognition Center (DRC) <span style={{fontWeight: 'normal'}}>| Maple Grove ,MN</span></span>
          <span className="experience-dates">July 2016 – April 2019</span>
        </div>
        <div className="job-title">Software Engineer</div>
        <ul className="experience-bullets">
          <li>Conducted code reviews and provided constructive feedback to team members, contributing to code quality and best practices.</li>
          <li>Worked with API gateway to expose the APIs for internal consumption with two factor authentication.</li>
          <li>Validated the built API in the browser using Postman and Swagger API.</li>
          <li>Developed and optimized database queries using SQL to improve application performance.</li>
          <li>Developed and maintained CI/CD pipelines using Jenkins, enabling automated builds, testing, and deployment processes, resulting in a significant reduction in release cycles.</li>
          <li>Leveraged Amazon Web Services (AWS) to deploy and manage cloud-based applications, ensuring high availability and scalability.</li>
          <li>Utilized DynamoDB as a NoSQL database for data storage, optimizing data retrieval and reducing latency in real-time applications.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
