import { Component } from "react";
import "tachyons";
import { Heading, Subhead } from "rebass";
import {
    Hero,
    Flex,
    CallToAction,
    Section
    // ScrollDownIndicator
  } from "react-landing-page"

class Body extends Component{
    render(){
        return(
            <>
            <Section>
                <Hero
                color="white"
                backgroundImage="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg"
                bg="black"
                bgOpacity={0.1}
                width={1}
                >
                <Heading fontSize={50}>Hospital Scheduling Application</Heading>
                <Subhead fontSize={18}>A solution to scedule your employees for work </Subhead>
                <Flex mt={3}>
                    <CallToAction bg="grey" mr={3}>
                    Start Scheduling
                    </CallToAction>
                    <CallToAction>Start Adding Employees</CallToAction>
                </Flex>
                {/* <ScrollDownIndicator /> */}
                </Hero>
            </Section>
            </>
        )
    }
}

export default Body;