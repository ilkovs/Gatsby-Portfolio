/* eslint-disable */
import React, { Component } from "react"
import Layout from '../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const frontendTitles = ['Boston ProShop', '4 Sharp Corners', 'Columbus Blue Jackets', 'GoBahamasPlus', 'Omdb React App', 'Ilkov Photopgraphy', 'Simply Tees', 'Giftastic']
const backendTitles = ['GoBahamasPlus', 'BC-API-Thumbs', 'Train Scheduler', 'Bamazon', 'Liri Node App']


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
        };
    }

    handleSelect(index) {
        this.setState({ selectedIndex: index }, () => {
            console.log('selected tab ' + this.state.selectedIndex);
        })
    }

    render() {

        return (
            <Layout>
                <div>
                    <h2 className="projects-heading">Recent Projects</h2>
                    <Tabs >
                        <TabList>
                            <Tab onClick={() => this.handleSelect(0)}>Front End</Tab>
                            <Tab onClick={() => this.handleSelect(1)}>Back End</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="projects-frontend">
                                <div className="project-one">
                                    <a href="#"></a>
                                    <h2>{frontendTitles[0]}</h2>
                                    <p>Official store of Boston Bruins and Boston Celtics.<br />[To be released..]
                                    <br /><span>Big Commerce</span></p>
                                </div>
                                <div className="project-two">
                                    <a href="http://4sharpcorners.com/" target="__blank"></a>
                                    <h2>{frontendTitles[1]}</h2>
                                    <p>Sports cards store.
                                    <br /><span>Big Commerce</span></p>
                                </div>
                                <div className="project-three">
                                    <a href="https://thebluelineonline.com/" target="__blank"></a>
                                    <h2>{frontendTitles[2]}</h2>
                                    <p>Official store of Columbus Blue Jackets.
                                    <br /><span>Big Commerce</span></p>
                                </div>
                                <div className="project-four">
                                    <a href="#"></a>
                                    <h2>{frontendTitles[3]}</h2>
                                    <p>Step by step booking functionality based on user input.<br />[To be released..]
                                    <br /><span>Big Commerce</span></p>
                                </div>
                                <div className="project-five">
                                    <a href="https://ilkovs.github.io/omdb-react-app/" target="__blank"></a>
                                    <h2>{frontendTitles[4]}</h2>
                                    <p>Get basic information for your favorite movies.
                                    <br /><span>React</span></p>
                                </div>
                                <div className="project-six">
                                    <a href="http://www.ilkovphotography.com/" target="__blank"></a>
                                    <h2>{frontendTitles[5]}</h2>
                                    <p>Static photopgraphy website.
                                    <br /><span>HTML, SASS, JavaScript</span></p>
                                </div>
                                <div className="project-seven">
                                    <a href="#"></a>
                                    <h2>{frontendTitles[6]}</h2>
                                    <p>Shirts store.<br />[To be released..]
                                    <br /><span>Big Commerce</span></p>
                                </div>
                                <div className="project-eight">
                                    <a href="https://ilkovs.github.io/GifTastic/" target="__blank"></a>
                                    <h2>{frontendTitles[7]}</h2>
                                    <p>Dynamic web page populating your favorite movie star gifs.
                                    <br /><span>HTML, CSS, JavaScript</span></p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="projects-backend">
                                <div className="project-one">
                                    <a href="https://github.com/ilkovs/BC-API-orders" target="__blank"></a>
                                    <h2>{backendTitles[0]}</h2>
                                    <p>Big Commerce Orders application. Changes order statuses to meet client's business needs.
                                    <br /><span>Big Commerce API</span></p>
                                </div>
                                <div className="project-two">
                                    <a href="https://github.com/ilkovs/BigCommerceAPI-herokuApp" target="__blank"></a>
                                    <h2>{backendTitles[1]}</h2>
                                    <p>Big Commerce application targeting product's thumbnails. Displaying them globally.
                                    <br /><span>Big Commerce API</span></p>
                                </div>
                                <div className="project-three">
                                    <a href="https://ilkovs.github.io/Train-Scheduler/" target="__blank"></a>
                                    <h2>{backendTitles[2]}</h2>
                                    <p>Firebase backed train schedule application.
                                    <br /><span>Firebase</span></p>
                                </div>
                                <div className="project-four">
                                    <a href="https://github.com/ilkovs/Customer-View-Bamazon" target="__blank"></a>
                                    <h2>{backendTitles[3]}</h2>
                                    <p>MySQL backed simple command line application. It presents customer interface.
                                    <br /><span>MySQL, Node</span></p>
                                </div>
                                <div className="project-five">
                                    <a href="https://github.com/ilkovs/liri-node-app" target="__blank"></a>
                                    <h2>{backendTitles[4]}</h2>
                                    <p>Language interpretation and recognition Interface.
                                    <br /><span>Node</span></p>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </Layout>
        )
    }
}


export default Projects
