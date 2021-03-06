import React, { Fragment } from 'react';

//libs

//helper
import stringHelper from './../../../helpers/stringHelper.js';

//styles
import { 
    BreadcrumbItem,
    Breadcrumb,
    Container,
    Row,
    Box,
    BoxTitle,
    Col,
    ChartPie,
    IconCard,
    ChartBar,
    Avatar,
    } from './../../styles';

const BlogPage = () => {
    //recent articles
    const recentArticles = [
        {
            cover: '/images/slider1.jpg',
            title: 'Excepteur sint occaecat cupidatat non proident',
            slug : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            postedDate : '10:30',
            comments : 20,
            views: 103
        },
        {
            cover: '/images/slider2.jpg',
            title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            slug : 'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            postedDate : 'Yesterday',
            comments : 9,
            views: 77
        },
        {
            cover: '/images/slider3.jpg',
            title: 'Unde omnis iste natus error sit voluptatem',
            slug : 'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            postedDate : 'Yesterday',
            comments : 294,
            views: 1002
        }
    ];

    //recent comments
    const recentComments = [
        {
            avatar: '/images/avatar.png',
            name: 'John Doe',
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            postedDate : '10:30',
            replies : 20,
            likes: 103
        },
        {
            avatar: '/images/slider1.jpg',
            name: 'Sarah Johnson',
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
            postedDate : 'Yesterday',
            replies : 5,
            likes: 75
        }
    ];

    //trending category
    const trendingCategory = [
        {
            label: 'Gadget',
            data: 1040,
            color: "#7757F7"
        },
        {
            label: 'Fashion',
            data: 674,
            color: "#6E55CE"
        },
        {
            label: 'Photography',
            data: 802,
            color: "#9282D1"
        },
        {
            label: 'Programming',
            data: 233,
            color: "#5742A7"
        }
    ];

    //line items
    const thirdPartyClicks = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data : [
            {
                label: 'Facebook',
                color:'#4267B2',
                data : [70, 90, 88, 67, 280, 150]
            },
            {
                label: 'Youtube',
                color:'#DB4437',
                data : [109, 66, 350, 350, 300, 200]
            },
            {
                label: 'Twitter',
                color:'#1DA1F2',
                data : [203, 175, 377, 245, 289, 100]
            },
            {
                label: 'Instagram',
                color:'#C13584',
                data : [64, 33, 85, 124, 203, 201]
            }
        ]
    };

    return(
        <Fragment>
            {/* page title */}
            <div className="title">
                Blog Analytics Dashboard
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">Dashboard</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Blog Analytics
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>

            {/* content */}
            <Container>
                <Row>
                    {/* left side - recent objects */}
                    <Col sm={12} md={6} lg={5}>
                        <Row>
                            {/* recent articles */}
                            <Box sm={12} md={12}>
                                <BoxTitle label="Recent Articles"/>
                                { recentArticles.map((recentArticle, index) => (
                                    <Row key={index} className="article">
                                        <Col xs={12} sm={4}>
                                            <img alt={recentArticle.title} src={recentArticle.cover} className="img-fluid"/>
                                        </Col>
                                        <Col className="article-body" xs={12} sm={8}>
                                            <div className="article-title">
                                                { stringHelper.cutString(recentArticle.title, 30) }
                                            </div>
                                            <div className="article-slug">
                                                { stringHelper.cutString(recentArticle.slug, 50) }
                                            </div>
                                            <div className="article-date">
                                                { recentArticle.postedDate }
                                            </div>
                                            <ul className="info">
                                                <li>
                                                    <span>
                                                        <i className="icon fa fa-comments-o"></i>
                                                            <span className="value">{ recentArticle.comments }</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="icon fa fa-eye"></i>
                                                        <span className="value">{ recentArticle.views }</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )) }
                            </Box>

                            {/* recent comments */}
                            <Box sm={12} md={12}>
                                <BoxTitle label="Recent Comments"/>
                                { recentComments.map((comment, index) => (
                                    <Row key={index} className="comment">
                                        <Col xs={4} sm={2}>
                                            <Avatar alt={comment.name} size="medium" src={comment.avatar}/>
                                        </Col>
                                        <Col className="comment-body" xs={8} sm={10}>
                                            <div className="article-name">
                                                { stringHelper.cutString(comment.name, 30) }
                                            </div>
                                            <div className="comment-text">
                                                { stringHelper.cutString(comment.text, 50) }
                                            </div>
                                            <div className="comment-date">
                                                { comment.postedDate }
                                            </div>
                                            <ul className="info">
                                                <li>
                                                    <span>
                                                        <i className="icon fa fa-reply"></i>
                                                            <span className="value">{ comment.replies }</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="icon fa fa-thumbs-o-up"></i>
                                                        <span className="value">{ comment.likes }</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )) }
                            </Box>
                        </Row>
                    </Col>

                    {/* right side chart and statistics */}
                    <Col sm={12} md={6} lg={7}>
                        <Row>
                            {/* trending category pie chart */}
                            <Box sm={12} md={12} lg={6}>
                                <BoxTitle label="Trending Category"/>
                                <ChartPie legend="bottom" items={trendingCategory}/>
                            </Box>

                            {/* total views & ads click */}
                            <Col sm={12} md={12} lg={6}>
                                <IconCard 
                                    statisticValue={-3}
                                    statisticPostfix="% (from last month)"
                                    label="Total Views" 
                                    number={10523} 
                                    icon="fa fa-desktop"/> 
                                <IconCard 
                                    style={{ marginTop : '40px' }}
                                    label="Ads Click" 
                                    number={7546} 
                                    icon="fa fa-line-chart"/> 
                            </Col>
                        </Row>
                        <Row>
                            {/* bar chart third party click */}
                            <Box sm={12}>
                                <ChartBar legend="top" title="Third Party Click" items={thirdPartyClicks}/>
                            </Box>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BlogPage;