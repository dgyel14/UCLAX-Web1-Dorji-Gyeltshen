import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay question={`Q1: Sample Question...`}>
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
            <SingleEssay question={`Q2: Sample Question...`}>
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
            <SingleEssay question={`Q3: Sample Question...`}>
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
            <SingleEssay question={`Q4: Sample Question...`}>
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
