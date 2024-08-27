import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                HTML is an abbreviation for HyperText Markup Language and it is
                a code that is used to structure a web page and its contents.
                CSS stands for Cascading Style Sheets Language and it is used to
                describe the format/layout and the look of a document. CSS is
                responsible for the presentation of the documents written in its
                markup language. JavaScript is a scripting language used to
                create and control a dynamic website content. It is a
                programming language that is used to make interactive web pages.
                HTML defines the structure and content of the webpage using a
                markup language. CSS controls the presentation, formatting, and
                layout of HTML elements. JavaScripts adds interactivity and
                dynamic behavior to the webpage, allowing for manipulation of
                HTML and CSS, and responding to user actions.
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                Git (Global Information Tracker) is a software that is installed
                on the system, rather than it being on the cloud like GitHub. It
                is used for tracking changes in source code during software
                development. Multiple developers can work on the same project
                simultaneously and manage their changes independently. GitHub is
                a platform built around Git that provides additional features,
                such as collaboration tools and a community platform. GitHub is
                a service hosted on the web and it is a space to share copies of
                the Git repositories. It provides a graphical interface for Git
                repositories and provides free and paid plans.
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                jQuery is used to simplify web development by manipulating HTML
                elements, handling events, and making AJAX calls. jQuery is good
                for adding interactive features to traditional websites. It
                directly modifies the web page based on what you tell it to do.
                React is for building dynamic user interfaces. It creates
                reusable components that manage their own state and efficiently
                update the UI when data changes. React uses a virtual DOM to
                make updates faster and more efficient. React is more complex to
                learn but powerful for building modern, interactive web
                applications with efficient data handling and component
                reusability.
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                The front-end developer is responsible for everything that users
                interact with directly in their web browsers. They convert
                design mockups into functional, interactive web pages using
                HTML, CSS, and JavaScript. UX is involved to make sure that the
                website is visually appealing and easy to navigate. They ensure
                that the website works correctly across different browsers and
                devices. It deals with the look and feel of the website and user
                interactions. The back-end developer handles the server side of
                web development. This involves everything that happens behind
                the scenes, such as server logic, databases, and application
                performance. They build and maintain the server, application
                logic, and database management. Develop and manage database
                schemas, and write queries to fetch and store data. Create and
                manage APIs that allow the front-end and back-end to
                communicate. Implement security measures to protect data and
                user privacy. Languages commonly used are Python, Java, Ruby,
                PHP, Node.js.
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                There are many ways to link resources in React. For
                root-relative paths, that start at the root of the domain, begin
                with a / and tell us that the path is relative to the root
                directory of the domain Document relative paths do not start
                with a / and are based on the position of the file and the
                location of the current document. It’s Useful when dealing with
                relative URLs within a specific context or folder structure.
                They change depending on the file’s location.
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                JPEG uses lossy compression, which means some image data is lost
                during compression to reduce file size. This can lead to a
                decrease in quality. Photographs and images with gradient
                colors. It’s not ideal for images with sharp edges or text, as
                the compression can cause artifacts. GIF is popular for small
                animations and graphics with solid colors. GIF uses lossless
                compression, which means no data is lost during compression.
                (Graphics Interchange Format). PNG uses lossless compression,
                preserving image quality without loss of data. Images that
                require transparency, such as logos or graphics with text. Also
                good for images that need to retain sharp details and quality.
                SVG is a vector format and makes SVG images scalable without
                losing quality. SVGs are great for web use.
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                Product manager: Their role is to create, distribute, sell, and
                obtain feedback for a product or service. They develop the
                product vision and roadmap by analyzing their customers. Scrum
                master: Keeps the team on track and organized and clears the
                team from obstacles. It is a bridge between project management
                and development. Responsible for managing the exchange of
                information between team members UX Designer: Conducts user
                research and surveys to make interacting with products, apps,
                and websites a smooth process. Testing and iteration and
                coordination with UI designers and developers
                Developer/Engineer: Creates software products by designing,
                programming, building, deploying, and maintaining software.
                Works with UX designers QA/SDET: Quality assurance and Software
                Development Engineer in Test. Develop test plans and test cases,
                Execute test cases manually to verify that the software, bug
                reporting and tracking. SDETs focus heavily on developing and
                maintaining automated test frameworks and scripts. They apply
                this expertise to design, develop, and maintain test frameworks
                and tools. SDETs may also be involved in performance testing,
                using tools and techniques to ensure the software performs well
                DevOps: A DevOps role focuses on integrating and automating
                processes between development and operations teams to streamline
                the software delivery. DevOps professionals also address
                security and compliance issues, and optimize system performance.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
